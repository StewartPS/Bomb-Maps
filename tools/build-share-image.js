#!/usr/bin/env node
/* ============================================================
   BUILD SHARE IMAGE
   ------------------------------------------------------------
   Renders promo/share graphics from the REAL record data.

   USAGE
       npm install playwright world-atlas topojson-client
       npx playwright install chromium
       node tools/build-share-image.js

   OUTPUT
       og-image.png          1200x630  — the Open Graph card, replaces
                                         the existing one. Used by
                                         Facebook, LinkedIn, WhatsApp,
                                         Slack, iMessage.
       share-square.png      1080x1080 — Instagram / a Facebook post
                                         that wants a square crop.

   WHY GENERATE IT RATHER THAN DRAW IT
   Every dot on these images is an actual plotted record at its
   actual coordinates. Nothing is scattered for looks. A promo
   image for a site whose entire value is "these positions are
   researched" should not itself contain invented positions, and
   it means the picture updates itself as coverage grows — run it
   again after adding records and the map fills in.

   The coastline is Natural Earth 1:50m via the world-atlas npm
   package (public domain). If that package isn't installed the
   script still runs and draws the points alone, which at this
   density already reads as Britain — it just says so on stderr.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "js/app.js");

/* ---------- Pull the records out of js/app.js ----------
   Same bracket-matching slice the other tools use: app.js touches the DOM
   and Leaflet, so it can't be require()d. */
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

function loadData() {
  const src = fs.readFileSync(APP, "utf8");
  const sandbox = { L: { latLngBounds: () => ({ pad: () => null }) } };
  vm.createContext(sandbox);
  for (const m of src.matchAll(/^const (\w*[Rr]ecords) = \[/gm)) {
    const start = src.indexOf("[", src.indexOf(m[0]));
    vm.runInContext(`var ${m[1]} = ${src.slice(start, matchBracket(src, start) + 1)};`, sandbox);
  }
  const rs = src.indexOf("{", src.indexOf("const regionData = {"));
  vm.runInContext(`var regionData = ${src.slice(rs, matchBracket(src, rs) + 1)};`, sandbox);

  const records = [];
  const counties = new Set();
  for (const cfg of Object.values(sandbox.regionData)) {
    if (!cfg || !Array.isArray(cfg.records)) continue;
    counties.add(cfg.county);
    cfg.records.forEach((r) => records.push({ lat: r.lat, lng: r.lng, status: r.status }));
  }
  counties.delete(undefined);
  counties.delete(null);
  return { records, countyCount: counties.size };
}

function loadPotential() {
  const file = path.join(ROOT, "data/potential-bomb-sites.js");
  if (!fs.existsSync(file)) return [];
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${fs.readFileSync(file, "utf8")}\nglobalThis.__p = POTENTIAL_BOMB_SITES;`, sandbox);
  return sandbox.__p || [];
}

/* ---------- Coastline, optional ---------- */
function loadCoastline() {
  let topojson, world;
  try {
    topojson = require("topojson-client");
    world = require("world-atlas/countries-50m.json");
  } catch (e) {
    console.error("  note: world-atlas/topojson-client not installed — drawing points only");
    return [];
  }
  const fc = topojson.feature(world, world.objects.countries);
  // 826 = United Kingdom, 372 = Ireland (ISO 3166-1 numeric, as Natural Earth uses).
  const wanted = new Set(["826", "372"]);
  const polys = [];
  fc.features
    .filter((f) => wanted.has(String(f.id)))
    .forEach((f) => {
      const g = f.geometry;
      const list = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
      list.forEach((rings) => polys.push(rings[0]));
    });
  return polys;
}

/* ---------- Projection ----------
   Web Mercator, then fit to the canvas. Same projection the map itself
   uses, so the shape a visitor recognises from the site is the shape here. */
const FRAME = { minLat: 49.6, maxLat: 59.2, minLng: -11.2, maxLng: 2.2 };

/* Both axes must be in the SAME projected unit. Mercator's y is the
   Gudermannian log, which is effectively radians; longitude therefore has
   to be converted to radians too. Leaving x in raw degrees makes the x
   range about 13.4 and the y range about 0.25, so the shared scale
   collapses everything onto a horizontal line — which is exactly what the
   first render did. */
function mercX(lng) {
  return (lng * Math.PI) / 180;
}

function mercY(lat) {
  const r = (lat * Math.PI) / 180;
  return Math.log(Math.tan(r) + 1 / Math.cos(r));
}

function makeProjector(w, h, pad) {
  const x0 = mercX(FRAME.minLng), x1 = mercX(FRAME.maxLng);
  const y0 = mercY(FRAME.minLat), y1 = mercY(FRAME.maxLat);
  const sx = (w - pad.left - pad.right) / (x1 - x0);
  const sy = (h - pad.top - pad.bottom) / (y1 - y0);
  const s = Math.min(sx, sy);
  const ox = pad.left + ((w - pad.left - pad.right) - (x1 - x0) * s) / 2;
  const oy = pad.top + ((h - pad.top - pad.bottom) - (y1 - y0) * s) / 2;
  return (lng, lat) => [
    ox + (mercX(lng) - x0) * s,
    oy + (y1 - mercY(lat)) * s
  ];
}

/* ---------- SVG ---------- */
const COLOURS = { found: "#ff5252", historic: "#00f2fe", reported: "#ff9f43" };

function buildSvg({ w, h, headline, sub, stats, pad, coast, records, potential }) {
  const project = makeProjector(w, h, pad);
  const inFrame = ([x, y]) => x > -50 && x < w + 50 && y > -50 && y < h + 50;

  const land = coast
    .map((ring) => {
      const pts = ring.map(([lng, lat]) => project(lng, lat));
      if (!pts.some(inFrame)) return "";
      return `<path d="M${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("L")}Z"/>`;
    })
    .join("");

  // Potential sites first, small and faint: they read as a glow over Plymouth.
  const potentialDots = potential
    .map((p) => project(p.lng, p.lat))
    .filter(inFrame)
    .map((p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="1.1"/>`)
    .join("");

  const dots = records
    .map((r) => ({ p: project(r.lng, r.lat), c: COLOURS[r.status] || COLOURS.historic }))
    .filter((d) => inFrame(d.p))
    .map(
      (d) =>
        `<circle cx="${d.p[0].toFixed(1)}" cy="${d.p[1].toFixed(1)}" r="4.2" fill="${d.c}" fill-opacity="0.9" filter="url(#glow)"/>` +
        `<circle cx="${d.p[0].toFixed(1)}" cy="${d.p[1].toFixed(1)}" r="1.6" fill="#0b0f17"/>`
    )
    .join("");

  const pills = stats
    .map((s, i) => {
      const x = pad.left + i * 232;
      return `
        <g transform="translate(${x}, ${h - 96})">
          <rect width="214" height="60" rx="10" fill="rgba(22,30,46,0.82)" stroke="rgba(255,255,255,0.10)"/>
          <text x="16" y="24" font-family="Inter, Helvetica, Arial, sans-serif" font-size="11.5"
                letter-spacing="1.6" fill="#9ca3af">${s.label.toUpperCase()}</text>
          <text x="16" y="47" font-family="Inter, Helvetica, Arial, sans-serif" font-size="21"
                font-weight="700" fill="${s.colour}">${s.value}</text>
        </g>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <filter id="glow" x="-260%" y="-260%" width="620%" height="620%">
      <feGaussianBlur stdDeviation="3.4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softglow" x="-260%" y="-260%" width="620%" height="620%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
    <radialGradient id="vign" cx="62%" cy="42%" r="78%">
      <stop offset="0%" stop-color="#131b28"/>
      <stop offset="100%" stop-color="#0b0f17"/>
    </radialGradient>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0b0f17" stop-opacity="0.97"/>
      <stop offset="55%" stop-color="#0b0f17" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#0b0f17" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#vign)"/>

  <!-- Land: filled slate, then a thin cyan coastline over the top -->
  <g fill="#1a2434">${land}</g>
  <g fill="none" stroke="rgba(0,242,254,0.16)" stroke-width="1">${land}</g>

  <!-- Plymouth bomb-census points, faint -->
  <g fill="#ff9f43" fill-opacity="0.5" filter="url(#softglow)">${potentialDots}</g>

  <!-- Researched records -->
  <g>${dots}</g>

  <!-- Left scrim so the type stays legible over the map -->
  <rect width="${Math.round(w * 0.62)}" height="${h}" fill="url(#scrim)"/>

  <!-- Brand mark -->
  <g transform="translate(${pad.left}, 46)">
    <circle cx="21" cy="21" r="20" fill="#0b0f17"/>
    <circle cx="21" cy="21" r="13.5" fill="none" stroke="#00f2fe" stroke-width="2.6" opacity="0.5"/>
    <circle cx="21" cy="21" r="7.4" fill="none" stroke="#00f2fe" stroke-width="2.6"/>
    <circle cx="21" cy="21" r="2.7" fill="#ff5252"/>
    <text x="54" y="29" font-family="Inter, Helvetica, Arial, sans-serif" font-size="25" font-weight="700" fill="#f3f4f6">
      Bomb<tspan fill="#00f2fe">Maps</tspan>
    </text>
  </g>

  ${headline
    .map(
      (line, i) =>
        `<text x="${pad.left}" y="${168 + i * 62}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="54" font-weight="800" fill="#f3f4f6" letter-spacing="-1">${line}</text>`
    )
    .join("\n  ")}

  <text x="${pad.left}" y="${168 + headline.length * 62 + 18}" font-family="Inter, Helvetica, Arial, sans-serif"
        font-size="21" fill="#9ca3af">${sub}</text>

  ${pills}

  <text x="${w - pad.right}" y="${h - 34}" text-anchor="end" font-family="Inter, Helvetica, Arial, sans-serif"
        font-size="23" font-weight="700" fill="#00f2fe">bombmaps.co.uk</text>
</svg>`;
}

async function main() {
  const { records, countyCount } = loadData();
  const potential = loadPotential();
  const coast = loadCoastline();

  console.log(`\n  ${records.length} records, ${countyCount} counties, ${potential.length} census points`);

  const stats = [
    { label: "Records plotted", value: String(records.length), colour: "#00f2fe" },
    { label: "Counties", value: String(countyCount), colour: "#ff9f43" },
    { label: "Census points", value: potential.length.toLocaleString("en-GB"), colour: "#f3f4f6" }
  ];

  const variants = [
    {
      file: "og-image.png",
      w: 1200, h: 630,
      pad: { top: 40, right: 40, bottom: 40, left: 56 },
      headline: ["Where the bombs fell.", "Street by street."],
      sub: "Researched WWII bombing and unexploded-ordnance records, with sources.",
      stats
    },
    {
      file: "share-square.png",
      w: 1080, h: 1080,
      pad: { top: 40, right: 48, bottom: 40, left: 56 },
      headline: ["Where the", "bombs fell."],
      sub: "Every pin researched, dated and sourced.",
      stats
    }
  ];

  /* SVG is always written. PNG needs a rasteriser, and the two available
     are not equal: Chromium renders the type exactly as designed, while
     ImageMagick's SVG delegate is unreliable with text and web fonts. So
     Playwright is tried first and ImageMagick is only the fallback — and
     it says which one it used, because if the lettering looks wrong in the
     output that is the first thing you want to know. */
  let browser = null;
  try {
    ({ chromium: browser } = { chromium: await require("playwright").chromium.launch() });
  } catch (e) {
    console.error("  note: Playwright unavailable — writing SVG only, rasterise separately");
  }

  for (const v of variants) {
    const svg = buildSvg({ ...v, coast, records, potential });
    const svgPath = path.join(ROOT, v.file.replace(/\.png$/, ".svg"));
    fs.writeFileSync(svgPath, svg);
    console.log(`  ${path.basename(svgPath)}  ${v.w}x${v.h}`);

    if (!browser) continue;
    const page = await browser.newPage({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 1 });
    await page.setContent(
      `<html><body style="margin:0;background:#0b0f17">${svg}</body></html>`,
      { waitUntil: "load" }
    );
    await page.screenshot({ path: path.join(ROOT, v.file) });
    await page.close();
    const kb = (fs.statSync(path.join(ROOT, v.file)).size / 1024).toFixed(0);
    console.log(`  ${v.file}  ${v.w}x${v.h}  ${kb} kB  (Chromium)`);
  }

  if (browser) await browser.close();
  console.log("");
}

main().catch((e) => {
  console.error(`\n  Failed: ${e.message}\n`);
  process.exit(1);
});
