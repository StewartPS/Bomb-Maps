/* ============================================================
   SMOKE TEST — node tools/smoke-test.js
   ------------------------------------------------------------
   Loads index.html into jsdom with a stubbed Leaflet, runs the real
   app.js against the real markup, and fails loudly on any uncaught
   error or missing DOM node.

   It is not a substitute for opening the site, but it catches the
   whole class of bug where a rename or refactor leaves app.js
   reaching for an element id that no longer exists — silent in the
   browser console, invisible until a visitor clicks the thing.

   Requires jsdom:  npm install jsdom
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const ROOT = path.resolve(__dirname, "..");
const failures = [];
const notes = [];

/* ---------- Leaflet stub ----------
   Records what the app asks for rather than drawing anything, so the
   assertions below can inspect map calls and layer counts. */
function makeLeafletStub(state) {
  const layer = (kind) => {
    const obj = {
      kind,
      on() { return obj; },
      off() { return obj; },
      addTo(map) { state.layers.push(kind); obj._added = true; return obj; },
      remove() { obj._added = false; return obj; },
      addLayer() { return obj; },
      clearLayers() { return obj; },
      setLatLng() { return obj; },
      setRadius() { return obj; },
      setStyle() { return obj; },
      getLatLng() { return { lat: 0, lng: 0 }; },
      bindPopup() { return obj; },
      redraw() { return obj; },
      setUrl() { return obj; },
      setOpacity() { return obj; },
      bringToBack() { return obj; },
      bringToFront() { return obj; }
    };
    return obj;
  };

  const bounds = (points) => ({
    _points: points,
    pad() { return bounds(points); },
    getCenter() {
      const lat = points.reduce((s, p) => s + p[0], 0) / points.length;
      const lng = points.reduce((s, p) => s + p[1], 0) / points.length;
      return { lat, lng };
    },
    isValid() { return points.length > 0; }
  });

  const map = {
    fitBounds(b) { state.calls.push(["fitBounds", b]); return map; },
    flyToBounds(b) { state.calls.push(["flyToBounds", b]); return map; },
    flyTo(c, z) { state.calls.push(["flyTo", c, z]); return map; },
    setView(c, z) { state.calls.push(["setView", c, z]); return map; },
    getZoom() { return 13; },
    invalidateSize() { return map; },
    on() { return map; },
    removeLayer() { return map; },
    addLayer() { return map; }
  };

  return {
    map: () => map,
    _map: map,
    tileLayer: () => layer("tile"),
    marker: () => layer("marker"),
    circle: () => layer("circle"),
    circleMarker: () => layer("circleMarker"),
    layerGroup: () => layer("layerGroup"),
    divIcon: (o) => o,
    canvas: () => ({}),
    latLngBounds: bounds,
    control: { zoom: () => layer("zoomControl") }
  };
}

const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", (e) => failures.push(`Uncaught: ${e.message}`));
virtualConsole.on("error", (msg) => failures.push(`console.error: ${msg}`));

const dom = new JSDOM(html, {
  runScripts: "outside-only",
  pretendToBeVisual: true,
  virtualConsole,
  url: "https://bombmaps.co.uk/"
});
const { window } = dom;

// Things jsdom does not implement that the page touches.
window.matchMedia = window.matchMedia || ((q) => ({
  matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}
}));
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
window.fetch = () => Promise.reject(new Error("network disabled in smoke test"));
window.scrollTo = () => {};

const state = { calls: [], layers: [] };
window.L = makeLeafletStub(state);

// Load the data + app scripts in the same order as index.html.
//
// The export line is appended to app.js's own source rather than run as a
// second eval: a top-level `const` inside eval is scoped to that eval call,
// so from outside it may as well not exist. Sharing one eval is the only way
// to see them. (Function declarations do land on `window`, which is why the
// search helpers need no such treatment.)
const EXPORT_GLOBALS =
  "\n;window.__t = { ALL_RECORDS, ALL_BOUNDS, TOWN_KEYS, HAS_POTENTIAL_DATA, regionData," +
  " ALL_REGIONS_KEY, COUNTIES, COUNTY_ALL, POTENTIAL_MIN_ZOOM };\n";

for (const rel of ["data/potential-bomb-sites.js", "data/county-boundaries.js", "js/app.js"]) {
  let code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  if (rel === "js/app.js") code += EXPORT_GLOBALS;
  try {
    window.eval(code);
  } catch (e) {
    failures.push(`${rel} threw: ${e.message}\n${(e.stack || "").split("\n").slice(1, 4).join("\n")}`);
  }
}

const t = window.__t || {};
window.ALL_RECORDS = t.ALL_RECORDS;

/* ---------- Assertions ---------- */
function check(label, condition, detail) {
  if (condition) notes.push(`  ok   ${label}`);
  else failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
}

const doc = window.document;

// Every id app.js looks up must exist in the markup.
const appSrc = fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8");
const ids = [...appSrc.matchAll(/getElementById\("([^"]+)"\)/g)].map((m) => m[1]);
const missing = [...new Set(ids)].filter((id) => !doc.getElementById(id));
check(`all ${new Set(ids).size} getElementById targets exist`, missing.length === 0, `missing: ${missing.join(", ")}`);

// Duplicate ids break getElementById in ways that are painful to trace.
const allIds = [...doc.querySelectorAll("[id]")].map((el) => el.id);
const dupes = allIds.filter((id, i) => allIds.indexOf(id) !== i);
check("no duplicate element ids", dupes.length === 0, `duplicated: ${[...new Set(dupes)].join(", ")}`);

// The combined layer: every region's records should be plotted, not just one.
const totalRecords = window.ALL_RECORDS ? window.ALL_RECORDS.length : 0;
check("ALL_RECORDS is populated", totalRecords > 0);
check("records span more than one region",
  totalRecords > 0 && new Set(window.ALL_RECORDS.map((r) => r.regionKey)).size > 1);
check("every record carries a region stamp",
  totalRecords > 0 && window.ALL_RECORDS.every((r) => r.regionKey && r.regionShort));
check("every record has finite coordinates",
  totalRecords > 0 && window.ALL_RECORDS.every((r) => Number.isFinite(r.lat) && Number.isFinite(r.lng)));
check("no duplicate record ids across regions",
  totalRecords > 0 && new Set(window.ALL_RECORDS.map((r) => r.id)).size === totalRecords);

// Markers: one per visible record, and an uncertainty circle to match.
const markerCount = state.layers.filter((k) => k === "marker").length;
check(`one marker per record (${markerCount} markers / ${totalRecords} records)`, markerCount === totalRecords);
const circleCount = state.layers.filter((k) => k === "circle").length;
check(`one uncertainty circle per record (${circleCount})`, circleCount === totalRecords);

// Opening view is the full extent, not a single city.
check("map opens on fitBounds, not a city setView",
  state.calls.length > 0 && state.calls[0][0] === "fitBounds", `first call was ${state.calls[0] && state.calls[0][0]}`);

// Accuracy radii are sane and derived from the confidence wording.
if (window.accuracyRadiusM && totalRecords) {
  const radii = window.ALL_RECORDS.map(window.accuracyRadiusM);
  check("every accuracy radius is a positive number",
    radii.every((r) => Number.isFinite(r) && r > 0));
  check("accuracy radii vary with stated confidence", new Set(radii).size > 1);
}

// Search: the local index must find a known town and a known record.
if (window.buildSuggestions) {
  const towns = window.buildSuggestions("salcombe");
  check("search finds Salcombe", towns.some((s) => s.kind === "town" && /salcombe/i.test(s.label)));
  const recs = window.buildSuggestions("fore street");
  check("search finds a record by street name", recs.some((s) => s.kind === "record"));
  check("search ignores one-character queries", window.buildSuggestions("s").length === 0);
} else {
  failures.push("buildSuggestions is not defined — search did not initialise");
}

// The selector is county-based, and every county derives from the towns.
if (t.COUNTIES) {
  const counties = [...t.COUNTIES.keys()];
  check(`counties derived from towns (${counties.join(", ")})`, counties.length > 0);
  check("every county has at least one town and one record",
    counties.every((c) => t.COUNTIES.get(c).townKeys.length > 0 && t.COUNTIES.get(c).records.length > 0));
  check("every county has valid bounds",
    counties.every((c) => t.COUNTIES.get(c).bounds && t.COUNTIES.get(c).bounds.isValid()));
  check("county record counts sum to the whole dataset",
    counties.reduce((sum, c) => sum + t.COUNTIES.get(c).records.length, 0) === totalRecords,
    "a town without a county would be unreachable from the selector");

  // The dropdown must offer counties, not towns — one option per county plus
  // the "all" entry, and no town names among them.
  const options = [...doc.querySelectorAll("#locationMenu .location-option")];
  check(`dropdown lists ${counties.length} counties + "All"`, options.length === counties.length + 1,
    `found ${options.length} options`);
  check("every dropdown option carries a county, not a town",
    options.every((o) => o.dataset.county === t.COUNTY_ALL || t.COUNTIES.has(o.dataset.county)));

  if (typeof window.switchCounty === "function" && counties.length) {
    window.switchCounty(counties[0], { fly: false });
    check("selecting a county updates the trigger label",
      doc.getElementById("locationTriggerLabel").textContent === counties[0]);
    check("selecting a county does not remove any markers", state.layers.filter((k) => k === "marker").length === totalRecords,
      "county selection must move the viewport, not filter the data");
    window.switchCounty(t.COUNTY_ALL, { fly: false });
  } else {
    failures.push("switchCounty is not defined");
  }
} else {
  failures.push("COUNTIES was not built");
}

/* Analytics consent. The banner is injected by an inline script in the head,
   which jsdom's "outside-only" mode doesn't execute, so these check the
   source text rather than the live DOM — enough to catch the two ways this
   silently breaks: a placeholder ID shipped to production, and a consent
   default with no way for anyone to change it. */
["index.html", "news.html"].forEach((file) => {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  check(`${file}: GA measurement ID is real, not a placeholder`,
    /window\.GA_ID = "G-(?!X)[A-Z0-9]+"/.test(src));
  check(`${file}: consent defaults to denied`,
    /analytics_storage: "denied"/.test(src));
  check(`${file}: a consent banner exists to grant it`,
    /consent-banner/.test(src) && /data-consent="granted"/.test(src) && /data-consent="denied"/.test(src),
    "denied-by-default with no banner means GA reports stay empty forever");
});
check("consent banner is styled",
  /\.consent-banner\s*\{/.test(fs.readFileSync(path.join(ROOT, "css/style.css"), "utf8")));

// Branding actually changed everywhere it should have.
check("title uses the new name", /Bomb Maps/.test(doc.title));
check("canonical points at the live domain",
  (doc.querySelector('link[rel="canonical"]') || {}).href === "https://bombmaps.co.uk/");
check("no stale github.io references", !/stewartps\.github\.io/.test(html));
check("no stale 'Plymouth Bomb Map' brand", !/Plymouth Bomb Map/.test(html));
check("CNAME file present", fs.existsSync(path.join(ROOT, "CNAME")));

/* ---------- Report ---------- */
if (process.env.VERBOSE) notes.forEach((n) => console.log(n));
if (failures.length) {
  console.error(`\n✗ ${failures.length} failure(s):\n`);
  failures.forEach((f) => console.error("  - " + f));
  process.exit(1);
}
console.log(`✓ all ${notes.length} checks passed (${totalRecords} records, ${markerCount} markers plotted)`);
// The page installs timers and listeners that would otherwise keep the
// event loop alive indefinitely — nothing left to wait for, so stop here.
dom.window.close();
process.exit(0);
