#!/usr/bin/env node
/* ============================================================
   FETCH COUNTY BOUNDARIES
   ------------------------------------------------------------
   Writes data/county-boundaries.js, which the map uses to draw
   the red dashed boundary when a county is selected.

   USAGE
       npm install @turf/turf          # one-off, build-time only
       node tools/fetch-county-boundaries.js

   WHY NOT JUST ASK NOMINATIM FOR "Devon"?
   Because that returns the ADMINISTRATIVE county — the area
   Devon County Council governs — and that deliberately excludes
   Plymouth and Torbay, which are unitary authorities. Drawing it
   as "Devon" cuts holes around Plymouth, Torquay, Paignton and
   Brixham, all of which this site has records for, so records sat
   visibly outside the boundary of the county they belong to.
   The same applies to Cornwall, which excludes the Isles of Scilly.

   What a reader means by "Devon" is the CEREMONIAL county, so
   that is what this builds: the union of the local-authority
   districts that make it up. The district list is below; add a
   county by adding its districts.

   SOURCE
   ONS Local Authority Districts (December 2013) via the
   martinjc/UK-GeoJSON mirror. Open Government Licence v3;
   contains Ordnance Survey data (c) Crown copyright.

   Boundaries are modern. They are NOT identical to wartime
   administrative boundaries — see the comment above
   buildCounties() in js/app.js.

   SIMPLIFICATION
   Raw district polygons run to tens of thousands of points, more
   than the map needs and enough to bloat the file. Thinned with
   Douglas-Peucker. The tolerance is a trade: too coarse and the
   outline visibly leaves the coastline once you zoom past the
   county view, which reads as a bug rather than as simplification.
   ~55m holds up to street zoom at a file size the site can carry.
   ============================================================ */

const fs = require("fs");
const path = require("path");

let turf;
try {
  turf = require("@turf/turf");
} catch (e) {
  console.error("\n  Missing build dependency. Run:\n\n      npm install @turf/turf\n");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "data/county-boundaries.js");

const SOURCE_URL =
  "https://raw.githubusercontent.com/martinjc/UK-GeoJSON/master/json/administrative/eng/lad.json";

const SIMPLIFY_TOLERANCE = 0.0005; // degrees, ~55m

/* Ceremonial counties, as the districts they are made of. The names must
   match LAD13NM in the source exactly. Plymouth and Torbay are listed under
   Devon, and Isles of Scilly under Cornwall, precisely because the
   administrative boundaries leave them out. */
const CEREMONIAL = {
  Devon: [
    "East Devon", "Exeter", "Mid Devon", "North Devon", "South Hams",
    "Teignbridge", "Torridge", "West Devon", "Plymouth", "Torbay"
  ],
  Cornwall: ["Cornwall", "Isles of Scilly"]
};

function countPoints(geometry) {
  const rings = geometry.type === "Polygon" ? geometry.coordinates : geometry.coordinates.flat();
  return rings.reduce((sum, ring) => sum + ring.length, 0);
}

// 5dp is ~1m at these latitudes. 4dp was enough for a line seen only at
// county zoom, but the outline is legible at street zoom too.
function roundGeometry(geometry) {
  const doRing = (ring) => ring.map(([x, y]) => [Number(x.toFixed(5)), Number(y.toFixed(5))]);
  if (geometry.type === "Polygon") {
    return { type: "Polygon", coordinates: geometry.coordinates.map(doRing) };
  }
  return { type: "MultiPolygon", coordinates: geometry.coordinates.map((p) => p.map(doRing)) };
}

async function main() {
  console.log(`\n  Fetching districts from ONS mirror…`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`source responded ${res.status}`);
  const source = await res.json();

  const byName = new Map(source.features.map((f) => [f.properties.LAD13NM, f]));
  console.log(`  ${source.features.length} districts available\n`);

  const output = {};
  for (const [county, districts] of Object.entries(CEREMONIAL)) {
    const missing = districts.filter((d) => !byName.has(d));
    if (missing.length) {
      console.log(`  !   ${county}: no district named ${missing.join(", ")} — skipped`);
      continue;
    }

    // Merge the districts into one outline so internal council borders don't
    // get drawn as if they were county boundaries.
    let merged = turf.feature(byName.get(districts[0]).geometry);
    for (let i = 1; i < districts.length; i++) {
      merged = turf.union(turf.featureCollection([merged, turf.feature(byName.get(districts[i]).geometry)]));
    }

    const before = countPoints(merged.geometry);
    const simplified = turf.simplify(merged, { tolerance: SIMPLIFY_TOLERANCE, highQuality: false, mutate: false });
    const geometry = roundGeometry(simplified.geometry);

    output[county] = geometry;
    console.log(`  ok  ${county}  ${districts.length} districts, ${before} -> ${countPoints(geometry)} points`);
  }

  const header = `/* ============================================================
   COUNTY BOUNDARIES — GENERATED FILE, DO NOT EDIT BY HAND
   ------------------------------------------------------------
   Rebuild with: node tools/fetch-county-boundaries.js
   Generated:    ${new Date().toISOString()}

   CEREMONIAL counties, built by merging the local-authority
   districts that make each one up. This matters: the "Devon"
   administrative boundary is the county council area, which
   EXCLUDES Plymouth and Torbay because they are unitary
   authorities. Drawing that as "Devon" punches holes around
   Plymouth, Torquay, Paignton and Brixham — all of which this
   site has records for. Cornwall likewise excludes the Isles
   of Scilly. The ceremonial county is what a reader means by
   "Devon", so that is what is drawn.

   Source: ONS Local Authority Districts via martinjc/UK-GeoJSON.
   Open Government Licence v3; contains OS data (c) Crown copyright.

   Simplified to a ~${Math.round(SIMPLIFY_TOLERANCE * 111000)}m tolerance — fine enough that the
   outline still tracks the coast when zoomed past county level.

   NOT identical to wartime administrative boundaries — see the
   comment above buildCounties() in js/app.js.
   ============================================================ */
const COUNTY_BOUNDARIES = `;

  fs.writeFileSync(OUT, `${header}${JSON.stringify(output)};\n`);
  const bytes = fs.statSync(OUT).size;
  console.log(`\n  ${Object.keys(output).length}/${Object.keys(CEREMONIAL).length} written to data/county-boundaries.js (${(bytes / 1024).toFixed(1)} kB)\n`);
}

main().catch((e) => {
  console.error(`\n  Failed: ${e.message}\n`);
  process.exit(1);
});
