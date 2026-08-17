#!/usr/bin/env node
/* ============================================================
   REGRESSION TEST — THEME SWITCH MUST NOT MOVE THE BASEMAP
   ------------------------------------------------------------
   USAGE
       npm install playwright        # one-off, test-only
       npx playwright install chromium
       node tools/test-theme-switch.js

   THE BUG THIS EXISTS FOR
   Switching between light and dark used to send the basemap to
   Western Australia. The markers stayed correctly over the UK
   while the map underneath them showed Broome and Alice Springs.

   The chain:
     - The map sets zoomSnap: 0, so a county can be framed at a
       fractional zoom. map.getZoom() is e.g. 5.785468231155147.
     - Changing basemap used to call tileLayer.setUrl(url).
     - setUrl calls GridLayer.redraw(), which does
           this._tileZoom = this._clampZoom(this._map.getZoom());
       _clampZoom clamps but does NOT round. Every other path into
       GridLayer goes via _setView, which uses Math.round(zoom).
     - So the layer asked for .../dark_all/5.785468.../26/16.png.
       CARTO reads that z as 5 and serves zoom-5 tiles, but x and y
       were computed on the zoom-5.785 grid — a different continent.

   Fixed by replacing the tile layer instead of calling setUrl;
   addTo() runs onAdd -> _resetView -> _setView, which rounds. See
   setBasemapTheme() in js/app.js.

   WHY THIS TEST IS SHAPED THE WAY IT IS
   It asserts at a FRACTIONAL zoom, and it checks the tile URLs
   actually requested, decoded back to lat/lng. A test that runs at
   a whole-number zoom, or that only checks map.getCenter(), passes
   against the broken code — the map's centre never moved, only the
   tiles it fetched. Verified by reintroducing setUrl: 6 assertions
   fail. If you change this test, re-verify that it still fails
   against the bug it is named after.
   ============================================================ */

const http = require("http");
const fs = require("fs");
const path = require("path");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (e) {
  console.error("\n  Missing test dependency. Run:\n\n      npm install playwright && npx playwright install chromium\n");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const PORT = 8936;
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain"
};

// Served over http rather than opened as file://, so the run matches production.
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(ROOT, url === "/" ? "/index.html" : url);
  if (url.endsWith("/")) file = path.join(file, "index.html");
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end("not found"); return;
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

// 1x1 transparent PNG — the tiles never need to be real, only counted.
const PIXEL = Buffer.from(
  "89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c489" +
  "0000000d4944415478da63fcffff3f0300050001a5f645ee0000000049454e44ae426082",
  "hex"
);

const failures = [];
function check(name, ok, detail) {
  console.log(`  ${ok ? "ok  " : "FAIL"}  ${name}${detail ? `  — ${detail}` : ""}`);
  if (!ok) failures.push(name);
}

function tileToLatLng(z, x, y) {
  const n = 2 ** z;
  return {
    lat: (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n))) * 180) / Math.PI,
    lon: (x / n) * 360 - 180
  };
}

async function run() {
  await new Promise((r) => server.listen(PORT, r));
  const browser = await chromium.launch();

  for (const startScheme of ["light", "dark"]) {
    console.log(`\n  Starting in ${startScheme} mode`);
    const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, colorScheme: startScheme });
    const page = await ctx.newPage();

    let tiles = [];
    page.on("request", (r) => { if (r.url().includes("cartocdn")) tiles.push(r.url()); });
    await page.route("**://*.basemaps.cartocdn.com/**", (r) =>
      r.fulfill({ status: 200, contentType: "image/png", body: PIXEL }));
    await page.route("**://www.googletagmanager.com/**", (r) => r.abort());

    /* Leaflet normally comes from unpkg. On a machine without outbound
       access to it, set LEAFLET_DIR to a local node_modules and the same
       pinned builds are served from disk instead:

           npm install leaflet@1.9.4 leaflet.heat@0.2.0
           LEAFLET_DIR=./node_modules node tools/test-theme-switch.js
    */
    if (process.env.LEAFLET_DIR) {
      const dir = path.resolve(process.env.LEAFLET_DIR);
      await page.route("**://unpkg.com/**", (r) => {
        const u = r.request().url();
        const file = u.includes("leaflet-heat")
          ? path.join(dir, "leaflet.heat/dist/leaflet-heat.js")
          : u.endsWith(".css")
            ? path.join(dir, "leaflet/dist/leaflet.css")
            : path.join(dir, "leaflet/dist/leaflet.js");
        r.fulfill({ status: 200, contentType: u.endsWith(".css") ? "text/css" : "text/javascript", body: fs.readFileSync(file, "utf8") });
      });
    }

    await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);

    // Fail loudly and usefully rather than with "map is not defined" ten
    // lines later, which reads as a broken site instead of a broken run.
    // NOT window.map: js/app.js declares `const map` at the top level of a
    // classic script, which creates a lexical global rather than a property
    // of window. `typeof map` resolves it; `typeof window.map` never will.
    const booted = await page.evaluate(() => typeof map !== "undefined" && typeof tileLayer !== "undefined");
    if (!booted) {
      throw new Error(
        "the map never initialised — Leaflet probably failed to load from unpkg. " +
        "Check network access, or see LEAFLET_DIR above to serve it from disk."
      );
    }

    const startZoom = await page.evaluate(() => map.getZoom());
    check(`${startScheme}: opens at a fractional zoom (precondition — the bug needs it)`,
      startZoom % 1 !== 0, `zoom=${startZoom}`);

    const before = await page.evaluate(() => ({ c: map.getCenter(), z: map.getZoom() }));
    const other = startScheme === "light" ? "dark" : "light";

    // Round-trip, then switch once more: a visitor toggling back and forth.
    for (const target of [other, startScheme, other]) {
      tiles = [];
      await page.evaluate((t) => setThemePref(t), target);
      await page.waitForTimeout(1100);

      const state = await page.evaluate(() => ({
        tileZoom: tileLayer._tileZoom,
        url: tileLayer._url,
        basemaps: document.querySelectorAll(".leaflet-tile-pane .leaflet-layer").length,
        c: map.getCenter(),
        z: map.getZoom(),
        b: (() => { const b = map.getBounds(); return { s: b.getSouth(), n: b.getNorth(), w: b.getWest(), e: b.getEast() }; })()
      }));

      const tag = `${startScheme}->${target}`;

      check(`${tag}: tile zoom is a whole number`, Number.isInteger(state.tileZoom), `_tileZoom=${state.tileZoom}`);
      check(`${tag}: serving the ${target} basemap`, state.url.includes(`${target}_all`), state.url);

      const malformed = tiles.filter((u) => !/\/\d+\/\d+\/\d+(@2x)?\.png/.test(u));
      check(`${tag}: every tile URL has an integer z`, malformed.length === 0,
        malformed[0] || `${tiles.length} tiles`);

      // Decode the tiles actually fetched and confirm they cover the view.
      // Compared against the map's own bounds rather than a hardcoded box:
      // a fixed box either flags the legitimate Atlantic tiles at the grid
      // edge, or gets widened until it would miss a real fault. The bug put
      // tiles ~120 degrees out, which clears this by a mile.
      const coords = tiles
        .map((u) => u.match(/\/(\d+)\/(\d+)\/(\d+)(@2x)?\.png/))
        .filter(Boolean)
        .map((m) => tileToLatLng(+m[1], +m[2], +m[3]));
      const PAD = 12; // degrees, covering Leaflet's off-screen tile buffer
      const off = coords.filter(
        (c) => c.lat < state.b.s - PAD || c.lat > state.b.n + PAD ||
               c.lon < state.b.w - PAD || c.lon > state.b.e + PAD
      );
      check(`${tag}: tiles fetched match the view`, coords.length > 0 && off.length === 0,
        off.length
          ? `${off.length}/${coords.length} off, first at ${off[0].lat.toFixed(1)},${off[0].lon.toFixed(1)}`
          : `${coords.length} tiles`);

      check(`${tag}: exactly one basemap layer left on the map`, state.basemaps === 1, `count=${state.basemaps}`);

      check(`${tag}: the view itself did not move`,
        Math.abs(state.c.lat - before.c.lat) < 1e-6 &&
        Math.abs(state.c.lng - before.c.lng) < 1e-6 &&
        state.z === before.z,
        `${state.c.lat.toFixed(4)}, ${state.c.lng.toFixed(4)} @ z${state.z}`);
    }

    await ctx.close();
  }

  await browser.close();
  server.close();

  console.log(failures.length ? `\n  ${failures.length} FAILING\n` : "\n  all green\n");
  process.exit(failures.length ? 1 : 0);
}

run().catch((e) => {
  console.error(`\n  Test harness failed: ${e.message}\n`);
  server.close();
  process.exit(1);
});
