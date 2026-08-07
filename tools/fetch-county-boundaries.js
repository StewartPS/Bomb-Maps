#!/usr/bin/env node
/* ============================================================
   FETCH COUNTY BOUNDARIES
   ------------------------------------------------------------
   Pulls an outline for every county the site covers and writes
   data/county-boundaries.js, which the map uses to draw the red
   dashed boundary when a county is selected.

   USAGE
       node tools/fetch-county-boundaries.js

   Counties are read straight out of js/app.js, so this stays in
   step with the site: add a town with a new `county` and re-run.

   WHY BOTHER, when the app can fetch outlines at runtime?
   Because the runtime path asks OpenStreetMap's servers for a
   polygon every time a new visitor picks a county — slow for
   them, discourteous to a free service, and broken if it's down.
   Generating the file once removes all three problems.

   SIMPLIFICATION
   Raw county polygons run to tens of thousands of points, which
   is far more than a dashed outline needs and enough to make the
   page janky. Points are thinned with Ramer–Douglas–Peucker at a
   tolerance chosen to stay visually faithful at county zoom.
   ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "js/app.js");
const OUT = path.join(ROOT, "data/county-boundaries.js");

const RATE_LIMIT_MS = 1100; // Nominatim: no more than one request per second
const USER_AGENT = "BombMaps/1.0 (https://bombmaps.co.uk; historical mapping project)";
const SIMPLIFY_TOLERANCE = 0.002; // degrees, ~200m — invisible at county zoom

/* ---------- Ramer–Douglas–Peucker ----------
   Keeps the points that define the shape and drops the ones that sit close
   to the line between their neighbours. Operating on raw lat/lng degrees is
   slightly anisotropic at UK latitudes, which is fine here: the tolerance is
   well below the width of the dashed stroke either way. */
function perpendicularDistance(p, a, b) {
  const [x, y] = p, [x1, y1] = a, [x2, y2] = b;
  const dx = x2 - x1, dy = y2 - y1;
  if (dx === 0 && dy === 0) return Math.hypot(x - x1, y - y1);
  const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  const clamped = Math.max(0, Math.min(1, t));
  return Math.hypot(x - (x1 + clamped * dx), y - (y1 + clamped * dy));
}

function simplify(points, tolerance) {
  if (points.length < 3) return points;
  let maxDistance = 0;
  let index = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpendicularDistance(points[i], points[0], points[points.length - 1]);
    if (d > maxDistance) { maxDistance = d; index = i; }
  }
  if (maxDistance <= tolerance) return [points[0], points[points.length - 1]];
  return [
    ...simplify(points.slice(0, index + 1), tolerance).slice(0, -1),
    ...simplify(points.slice(index), tolerance)
  ];
}

function simplifyGeometry(geometry) {
  const round = (ring) => ring.map(([lng, lat]) => [Number(lng.toFixed(4)), Number(lat.toFixed(4))]);

  // A simplified ring must still be a ring: at least four points, first equal
  // to last. Anything that collapses below that is dropped rather than drawn
  // as a stray line.
  const doRing = (ring) => {
    const out = round(simplify(ring, SIMPLIFY_TOLERANCE));
    if (out.length < 4) return null;
    const [fx, fy] = out[0];
    const [lx, ly] = out[out.length - 1];
    if (fx !== lx || fy !== ly) out.push([fx, fy]);
    return out;
  };

  if (geometry.type === "Polygon") {
    const rings = geometry.coordinates.map(doRing).filter(Boolean);
    return rings.length ? { type: "Polygon", coordinates: rings } : null;
  }
  if (geometry.type === "MultiPolygon") {
    const polys = geometry.coordinates
      .map((poly) => poly.map(doRing).filter(Boolean))
      .filter((poly) => poly.length);
    return polys.length ? { type: "MultiPolygon", coordinates: polys } : null;
  }
  return null;
}

function countPoints(geometry) {
  const rings = geometry.type === "Polygon" ? geometry.coordinates : geometry.coordinates.flat();
  return rings.reduce((sum, ring) => sum + ring.length, 0);
}

// Read the county names out of the site's own data rather than keeping a
// second list here that could drift out of step.
function countiesFromApp() {
  const src = fs.readFileSync(APP, "utf8");
  const names = new Set();
  for (const m of src.matchAll(/county:\s*"([^"]+)"/g)) names.add(m[1]);
  return [...names].sort();
}

async function fetchBoundary(name) {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&polygon_geojson=1" +
    `&countrycodes=gb&q=${encodeURIComponent(`${name}, United Kingdom`)}`;
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT, "Accept-Language": "en-GB" } });
  if (!res.ok) throw new Error(`Nominatim responded ${res.status}`);
  const data = await res.json();
  const hit = data && data[0];
  if (!hit || !hit.geojson) throw new Error("no result");
  if (!/Polygon$/.test(hit.geojson.type)) throw new Error(`got ${hit.geojson.type}, not a polygon`);
  return { geometry: hit.geojson, matchedName: hit.display_name };
}

async function main() {
  const counties = countiesFromApp();
  if (!counties.length) {
    console.error("\nNo counties found in js/app.js. Nothing to do.\n");
    process.exit(1);
  }

  console.log(`\n  ${counties.length} counties: ${counties.join(", ")}\n`);

  const output = {};
  for (const name of counties) {
    try {
      const { geometry, matchedName } = await fetchBoundary(name);
      const before = countPoints(geometry);
      const simplified = simplifyGeometry(geometry);
      if (!simplified) { console.log(`  ! ${name}: collapsed under simplification, skipped`); continue; }
      const after = countPoints(simplified);
      output[name] = simplified;
      console.log(`  ok  ${name}  ${before} -> ${after} points`);
      console.log(`      matched: ${matchedName}`);
    } catch (e) {
      console.log(`  !   ${name}: ${e.message} — will fall back to a runtime lookup`);
    }
    await new Promise((r) => setTimeout(r, RATE_LIMIT_MS));
  }

  const header = `/* ============================================================
   COUNTY BOUNDARIES — GENERATED FILE, DO NOT EDIT BY HAND
   ------------------------------------------------------------
   Rebuild with: node tools/fetch-county-boundaries.js
   Generated:    ${new Date().toISOString()}

   Outlines simplified to a ~${SIMPLIFY_TOLERANCE * 111}km tolerance, which is
   well inside the width of the dashed stroke at county zoom.

   Modern ceremonial counties, from OpenStreetMap contributors
   (ODbL). NOT identical to wartime administrative boundaries —
   see the comment above buildCounties() in js/app.js.

   A county missing from here is not a failure: the app falls
   back to fetching that outline from OSM at runtime.
   ============================================================ */
const COUNTY_BOUNDARIES = `;

  fs.writeFileSync(OUT, `${header}${JSON.stringify(output)};\n`);

  const bytes = fs.statSync(OUT).size;
  console.log(`\n  ${Object.keys(output).length}/${counties.length} written to data/county-boundaries.js (${(bytes / 1024).toFixed(1)} kB)\n`);
}

main();
