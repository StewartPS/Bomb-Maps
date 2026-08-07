#!/usr/bin/env node
/* ============================================================
   GEOCODE — place names → coordinates + settlement extent
   ------------------------------------------------------------
   Second half of the national-layer pipeline. Reads the records
   produced by tools/ingest-bombing-britain.js, resolves each
   unique place name against OpenStreetMap's gazetteer, and
   writes back a coordinate AND a radius covering the settlement.

   USAGE
     node tools/ingest-bombing-britain.js     # first
     node tools/geocode-places.js             # then this

   HOW LONG
     One request every 1.1s, per Nominatim's usage policy. The
     dataset has thousands of unique places, so expect an hour
     or more. It is fully resumable: every answer is cached to
     data/source/place-cache.json, so re-running skips what it
     already knows and you can stop it with Ctrl-C at any point.

   WHY A RADIUS, NOT A PIN
     HO 203 recorded which TOWN was attacked, not where in the
     town the bomb fell. A pin would claim a precision the source
     does not have. So each place gets a circle derived from the
     gazetteer's own bounding box for that settlement — the map
     then says "somewhere in this town", which is exactly what
     the record says.

   WHAT IT REFUSES TO DO
     It will not accept a match of the wrong kind. Asking a
     gazetteer for "Coventry" can return a pub, a street or a
     town in another country. Results are rejected unless they
     are a settlement-like feature in the United Kingdom, and
     anything doubtful is written to an unresolved list for you
     to decide on rather than being quietly accepted.
   ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const RECORDS = path.join(ROOT, "data/national-raids.json");
const CACHE = path.join(ROOT, "data/source/place-cache.json");
const UNRESOLVED = path.join(ROOT, "data/source/unresolved-places.json");

const RATE_LIMIT_MS = 1100; // Nominatim asks for no more than 1 req/sec
const USER_AGENT = "BombMaps/1.0 (https://bombmaps.co.uk; historical mapping project)";

/* Feature classes we accept. A settlement, an administrative boundary, or a
   London borough — nothing else. `place` covers city/town/village/suburb;
   `boundary` covers the administrative areas London is recorded by. */
const ACCEPTABLE_CLASSES = new Set(["place", "boundary"]);
const ACCEPTABLE_TYPES = new Set([
  "city", "town", "village", "hamlet", "suburb", "borough", "quarter",
  "administrative", "municipality", "island", "locality"
]);

// Radius bounds. Below 400m a settlement circle is too small to read as an
// area; above 8km it starts swallowing neighbouring towns and implies a raid
// was far wider than it was.
const MIN_RADIUS_M = 400;
const MAX_RADIUS_M = 8000;

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch (e) { return fallback; }
}

function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/* Nominatim returns boundingbox as [south, north, west, east]. Half the
   diagonal of that box approximates the settlement's radius — generous
   rather than flattering, which is the right direction to err. */
function radiusFromBoundingBox(bbox) {
  if (!Array.isArray(bbox) || bbox.length !== 4) return null;
  const [south, north, west, east] = bbox.map(Number);
  if (![south, north, west, east].every(Number.isFinite)) return null;
  const diagonal = haversineMeters(south, west, north, east);
  return Math.round(Math.min(MAX_RADIUS_M, Math.max(MIN_RADIUS_M, diagonal / 2)));
}

async function queryNominatim(query) {
  const url =
    "https://nominatim.openstreetmap.org/search" +
    "?format=jsonv2&limit=5&countrycodes=gb&addressdetails=1" +
    `&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, "Accept-Language": "en-GB" }
  });
  if (res.status === 429) throw Object.assign(new Error("rate limited"), { retry: true });
  if (!res.ok) throw new Error(`Nominatim responded ${res.status}`);
  return res.json();
}

// Score candidates so the best settlement wins rather than the first result.
function pickBest(results, place) {
  const candidates = (results || []).filter(
    (r) => ACCEPTABLE_CLASSES.has(r.category || r.class) && ACCEPTABLE_TYPES.has(r.type)
  );
  if (!candidates.length) return null;

  const county = (place.county || "").toLowerCase();
  candidates.forEach((c) => {
    let score = 0;
    // A match in the county the record names is far more likely to be right.
    if (county && (c.display_name || "").toLowerCase().includes(county)) score += 100;
    // Prefer larger settlements: a raid recorded on "Newport" more plausibly
    // means the town than a hamlet of the same name.
    score += { city: 40, town: 30, borough: 30, village: 15, suburb: 10 }[c.type] || 0;
    score += Number(c.importance || 0) * 20;
    c.__score = score;
  });

  candidates.sort((a, b) => b.__score - a.__score);
  return candidates[0];
}

async function main() {
  const data = readJson(RECORDS, null);
  if (!data || !Array.isArray(data.records)) {
    console.error(`\nNo records at ${RECORDS}. Run tools/ingest-bombing-britain.js first.\n`);
    process.exit(1);
  }

  // One lookup per unique place, not per raid — thousands of raids share a
  // few thousand place names, and re-asking would be both slow and rude.
  const places = new Map();
  data.records.forEach((r) => {
    if (!places.has(r.placeKey)) {
      places.set(r.placeKey, { placeKey: r.placeKey, name: r.placeName, county: r.county, region: r.cdRegion });
    }
  });

  const cache = readJson(CACHE, {});
  const todo = [...places.values()].filter((p) => !cache[p.placeKey]);

  console.log(`\n  ${places.size.toLocaleString("en-GB")} unique places`);
  console.log(`  ${(places.size - todo.length).toLocaleString("en-GB")} already cached`);
  console.log(`  ${todo.length.toLocaleString("en-GB")} to look up  (~${Math.ceil((todo.length * RATE_LIMIT_MS) / 60000)} minutes)\n`);

  let done = 0;
  for (const place of todo) {
    const query = [place.name, place.county, "United Kingdom"].filter(Boolean).join(", ");
    let result = null;
    try {
      const results = await queryNominatim(query);
      const best = pickBest(results, place);
      if (best) {
        result = {
          lat: Number(Number(best.lat).toFixed(5)),
          lng: Number(Number(best.lon).toFixed(5)),
          radiusM: radiusFromBoundingBox(best.boundingbox) || MIN_RADIUS_M,
          // Kept so every coordinate on the map can be traced back to what
          // the gazetteer actually said, and spot-checked later.
          matchedName: best.display_name,
          matchedType: `${best.category || best.class}/${best.type}`,
          query
        };
      }
    } catch (e) {
      if (e.retry) {
        console.log("  rate limited — pausing 60s");
        await new Promise((r) => setTimeout(r, 60000));
        continue; // retry this place on the next pass
      }
      console.log(`  ! ${place.name}: ${e.message}`);
    }

    cache[place.placeKey] = result || { unresolved: true, query };
    done++;

    if (done % 25 === 0) {
      fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
      console.log(`  ${done}/${todo.length}  (${place.name})`);
    }
    await new Promise((r) => setTimeout(r, RATE_LIMIT_MS));
  }

  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));

  // Apply the cache to every record.
  let located = 0;
  data.records.forEach((r) => {
    const hit = cache[r.placeKey];
    if (!hit || hit.unresolved) return;
    r.lat = hit.lat;
    r.lng = hit.lng;
    // London boroughs are already small; other settlements use the gazetteer
    // extent. Either way the map draws an area, never a doorstep.
    r.radiusM = hit.radiusM;
    r.geocode = { matchedName: hit.matchedName, matchedType: hit.matchedType };
    located++;
  });

  const unresolved = [...places.values()]
    .filter((p) => !cache[p.placeKey] || cache[p.placeKey].unresolved)
    .map((p) => ({ placeKey: p.placeKey, name: p.name, county: p.county, region: p.region }));

  data.locatedRecords = located;
  data.geocodedAt = new Date().toISOString();
  fs.writeFileSync(RECORDS, JSON.stringify(data, null, 1));
  fs.writeFileSync(UNRESOLVED, JSON.stringify({ count: unresolved.length, places: unresolved }, null, 1));

  console.log(`\n  ${located.toLocaleString("en-GB")} of ${data.records.length.toLocaleString("en-GB")} records located`);
  console.log(`  ${unresolved.length.toLocaleString("en-GB")} places unresolved -> data/source/unresolved-places.json`);
  console.log("\n  Unresolved places stay off the map. Fix them by adding an entry");
  console.log("  to the cache by hand, then re-run — nothing is ever guessed.\n");
}

main();
