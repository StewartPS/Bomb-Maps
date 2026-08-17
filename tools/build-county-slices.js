#!/usr/bin/env node
/* ============================================================
   BUILD COUNTY SLICES
   ------------------------------------------------------------
   Splits the single generated data/county-boundaries.js into:

     data/county-index.js      tiny, loaded on every page
     data/counties/<slug>.js   one per county, loaded on demand

   USAGE
       node tools/fetch-county-boundaries.js   # rebuild the master file
       node tools/build-county-slices.js       # then slice it

   WHY
   county-boundaries.js is 426 kB for 15 counties and grows linearly
   with coverage. It sat in a plain <script> tag, so every visitor
   downloaded and parsed every county's outline before the map could
   draw — to render, at most, one of them. At UK scale (48 ceremonial
   counties) that is heading for well over a megabyte of geometry
   nobody asked for.

   Only two things ever needed the whole set:

     1. drawCountyOutline() / showCountyMask(), which need exactly the
        ONE county currently selected. That is now a lazy fetch.

     2. recordCounty(), which tested every record against every polygon
        to work out which county a record is really in — the Saltash
        problem: filed under Plymouth for editorial reasons, physically
        in Cornwall, so taking the county from the region dropped it out
        of scope whenever Cornwall was selected.

   (2) is the interesting one. The answer cannot change between page
   loads: the coordinates are fixed and the boundaries are a generated
   file. So it is computed HERE, once, at build time — and because the
   region's county is already right for the overwhelming majority of
   records, only the DISAGREEMENTS need shipping. That is a handful of
   entries instead of 426 kB of polygons.

   county-index.js also carries each county's bounding box, so
   countyViewBounds() can frame a county immediately on selection
   rather than waiting for its geometry to arrive over the network.

   RUN THIS WHENEVER
   - county boundaries are rebuilt, or
   - records are added, moved, or re-filed between regions.
   tools/build-seo-pages.js does not depend on it, but shipping without
   it means new records silently fall back to their region's county.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "js/app.js");
const MASTER = path.join(ROOT, "data/county-boundaries.js");
const SLICE_DIR = path.join(ROOT, "data/counties");
const INDEX_OUT = path.join(ROOT, "data/county-index.js");

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ---------- Pull the record data out of js/app.js ----------
   Same trick tools/build-seo-pages.js uses: the records are plain object
   literals in a script that also touches the DOM and Leaflet, so the file
   can't just be require()d. Slice the literals out by bracket matching and
   evaluate only those in a bare sandbox. */
function matchBracket(src, start) {
  const open = src[start];
  const close = open === "[" ? "]" : "}";
  let depth = 0;
  let inStr = null;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (inStr) {
      if (ch === "\\") i++;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = ch; continue; }
    if (ch === open) depth++;
    else if (ch === close) { depth--; if (!depth) return i; }
  }
  throw new Error("unbalanced brackets");
}

function readLiteral(src, declaration) {
  const at = src.indexOf(declaration);
  if (at === -1) throw new Error(`could not find "${declaration}" in js/app.js`);
  const open = src.indexOf(declaration.trimEnd().endsWith("[") ? "[" : "{", at + declaration.length - 1);
  const start = src.indexOf(declaration.endsWith("[") ? "[" : "{", at);
  const end = matchBracket(src, start);
  return src.slice(start, end + 1);
}

function loadAppData() {
  const src = fs.readFileSync(APP, "utf8");
  const sandbox = { L: { latLngBounds: () => ({ pad: () => null }) } };
  vm.createContext(sandbox);

  // Every `const <name>Records = [` array, plus the regionData map that says
  // which county each of those arrays belongs to.
  const arrayNames = [...src.matchAll(/^const (\w*[Rr]ecords) = \[/gm)].map((m) => m[1]);
  for (const name of arrayNames) {
    const literal = readLiteral(src, `const ${name} = [`);
    vm.runInContext(`var ${name} = ${literal};`, sandbox);
  }
  const regionLiteral = readLiteral(src, "const regionData = {");
  vm.runInContext(`var regionData = ${regionLiteral};`, sandbox);
  return sandbox.regionData;
}

/* ---------- Point in polygon ----------
   Identical ray-casting to js/app.js, deliberately duplicated rather than
   shared: app.js cannot be imported here (see above), and a subtle drift
   between the two would show up as records silently changing county. If you
   change one, change the other. */
function pointInRing(lat, lng, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const straddles = yi > lat !== yj > lat;
    if (straddles && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function pointInGeometry(lat, lng, geometry) {
  if (!geometry) return false;
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  for (const rings of polygons) {
    if (!pointInRing(lat, lng, rings[0])) continue;
    let inHole = false;
    for (let i = 1; i < rings.length; i++) {
      if (pointInRing(lat, lng, rings[i])) { inHole = true; break; }
    }
    if (!inHole) return true;
  }
  return false;
}

function geometryBounds(geometry) {
  let minLat = Infinity, minLng = Infinity, maxLat = -Infinity, maxLng = -Infinity;
  const visit = (ring) => {
    for (const [lng, lat] of ring) {
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    }
  };
  if (geometry.type === "Polygon") geometry.coordinates.forEach(visit);
  else geometry.coordinates.forEach((poly) => poly.forEach(visit));
  const r = (n) => Number(n.toFixed(5));
  return [r(minLat), r(minLng), r(maxLat), r(maxLng)];
}

function main() {
  if (!fs.existsSync(MASTER)) {
    console.error(`\n  Missing ${path.relative(ROOT, MASTER)} — run tools/fetch-county-boundaries.js first.\n`);
    process.exit(1);
  }

  const masterSrc = fs.readFileSync(MASTER, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  // `const` at the top level of a vm script is a lexical binding, not a
  // property of the sandbox — so hand it out explicitly.
  vm.runInContext(`${masterSrc}\nglobalThis.__boundaries = COUNTY_BOUNDARIES;`, sandbox);
  const boundaries = sandbox.__boundaries || {};
  const names = Object.keys(boundaries);
  if (!names.length) throw new Error("county-boundaries.js defined no counties");

  /* Best-effort clean, not a hard one. Slices are overwritten in place, so a
     failed delete only leaves an orphan file for a county that no longer
     exists — harmless, since nothing links to it. Some mounted filesystems
     refuse unlink outright, and a build that dies there rather than writing
     its output would be the worse failure. */
  fs.mkdirSync(SLICE_DIR, { recursive: true });
  try {
    for (const f of fs.readdirSync(SLICE_DIR)) fs.unlinkSync(path.join(SLICE_DIR, f));
  } catch (e) {
    console.log(`  note: could not clear ${path.relative(ROOT, SLICE_DIR)} (${e.code}); slices will be overwritten in place`);
  }

  const bounds = {};
  let sliceBytes = 0;
  for (const name of names) {
    const geometry = boundaries[name];
    bounds[name] = geometryBounds(geometry);
    const file = path.join(SLICE_DIR, `${slug(name)}.js`);
    // Self-registering rather than assigning a global the loader has to guess
    // the name of. Loaded by <script> injection, not fetch(), so a local
    // file:// preview of the site keeps working.
    fs.writeFileSync(
      file,
      `/* GENERATED — node tools/build-county-slices.js. Do not edit. */\n` +
        `registerCountyBoundary(${JSON.stringify(name)},${JSON.stringify(geometry)});\n`
    );
    sliceBytes += fs.statSync(file).size;
    console.log(`  ok  ${name}  ->  data/counties/${slug(name)}.js  (${(fs.statSync(file).size / 1024).toFixed(0)} kB)`);
  }

  /* ---------- Which county is each record REALLY in? ---------- */
  const regionData = loadAppData();
  const overrides = {};
  let checked = 0;
  let unclaimed = 0;

  for (const [, cfg] of Object.entries(regionData)) {
    if (!cfg || !Array.isArray(cfg.records)) continue;
    for (const record of cfg.records) {
      checked++;
      let found = "";
      for (const name of names) {
        if (pointInGeometry(record.lat, record.lng, boundaries[name])) { found = name; break; }
      }
      // No polygon claims it — just offshore, or a county not yet built.
      // The region's county is the best answer available, so say nothing.
      if (!found) { unclaimed++; continue; }
      if (found !== (cfg.county || "")) overrides[record.id] = found;
    }
  }

  const header = `/* ============================================================
   COUNTY INDEX — GENERATED FILE, DO NOT EDIT BY HAND
   ------------------------------------------------------------
   Rebuild with: node tools/build-county-slices.js
   Generated:    ${new Date().toISOString()}

   Small enough to load on every page. Two things:

   COUNTY_BOUNDS   [minLat, minLng, maxLat, maxLng] per county, so a
                   county can be framed the instant it is selected,
                   before its outline geometry has been fetched.

   RECORD_COUNTY   Records whose real, geographic county is NOT the
                   county of the region they are filed under. Only the
                   disagreements are listed; everything absent takes its
                   region's county. Computed by testing each record's
                   coordinates against the same polygons the map draws.

                   Saltash is the reason this exists: filed under
                   Plymouth because that is the raid it belongs to, but
                   physically the Cornish side of the Tamar, so taking
                   the county from the region hid it whenever Cornwall
                   was selected.

   ${checked} records tested, ${Object.keys(overrides).length} disagreed with their region,
   ${unclaimed} claimed by no polygon (offshore, or a county not built yet).
   ============================================================ */
`;

  fs.writeFileSync(
    INDEX_OUT,
    `${header}const COUNTY_BOUNDS = ${JSON.stringify(bounds)};\nconst RECORD_COUNTY = ${JSON.stringify(overrides)};\n`
  );

  const indexKb = fs.statSync(INDEX_OUT).size / 1024;
  const masterKb = fs.statSync(MASTER).size / 1024;
  console.log(
    `\n  ${names.length} slices, ${(sliceBytes / 1024).toFixed(0)} kB total (loaded one at a time)` +
      `\n  data/county-index.js ${indexKb.toFixed(1)} kB, always loaded` +
      `\n  critical path: ${masterKb.toFixed(0)} kB -> ${indexKb.toFixed(1)} kB` +
      `\n  ${Object.keys(overrides).length} record county overrides: ${Object.keys(overrides).join(", ") || "none"}\n`
  );
}

try {
  main();
} catch (e) {
  console.error(`\n  Failed: ${e.message}\n`);
  process.exit(1);
}
