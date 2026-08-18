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

   The coastline is Natural Earth 1:10m via the world-atlas npm
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
    world = require("world-atlas/countries-10m.json");
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

/* Projects into an explicit BOX rather than the whole canvas. The first
   version fitted the map to the full frame, which pushed the south coast
   under the stat pills and ran Britain straight through the subtitle. The
   layout is text-left / map-right, so the map should be told that. */
function makeProjector(box) {
  const x0 = mercX(FRAME.minLng), x1 = mercX(FRAME.maxLng);
  const y0 = mercY(FRAME.minLat), y1 = mercY(FRAME.maxLat);
  const s = Math.min(box.w / (x1 - x0), box.h / (y1 - y0));
  const ox = box.x + (box.w - (x1 - x0) * s) / 2;
  const oy = box.y + (box.h - (y1 - y0) * s) / 2;
  const project = (lng, lat) => [
    ox + (mercX(lng) - x0) * s,
    oy + (y1 - mercY(lat)) * s
  ];
  // Metres-per-pixel at 55N, so a real-world radius can be drawn to scale.
  project.pxPerKm = (s * Math.PI) / 180 / 111.32 * Math.cos((55 * Math.PI) / 180) ** 0;
  project.scale = s;
  return project;
}

/* ---------- SVG ---------- */
const COLOURS = { found: "#ff5252", historic: "#00f2fe", reported: "#ff9f43" };

function buildSvg({ w, h, headline, sub, stats, pad, mapBox, coast, records, potential }) {
  const project = makeProjector(mapBox);
  // Rough advance width for the URL pill — no font metrics available here,
  // so it is measured off the font size rather than guessed at a fixed px.
  const urlWidth = Math.round("bombmaps.co.uk".length * 13.4 + 52);
  const inFrame = ([x, y]) => x > -50 && x < w + 50 && y > -50 && y < h + 50;

  const land = coast
    .map((ring) => {
      const pts = ring.map(([lng, lat]) => project(lng, lat));
      if (!pts.some(inFrame)) return "";
      return `<path d="M${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("L")}Z"/>`;
    })
    .join("");

  /* The census layer is 3,043 points inside one town. At national scale
     that is about four pixels across, so plotting them literally renders
     an invisible smudge — technically honest, visually nothing. They get a
     halo sized to their ACTUAL bounding box instead, so the thing a reader
     sees is the real extent of the Plymouth bomb census rather than a
     decorative blob. The individual points are still drawn inside it. */
  let hotspot = "";
  if (potential.length) {
    const lats = potential.map((p) => p.lat);
    const lngs = potential.map((p) => p.lng);
    const c = project((Math.min(...lngs) + Math.max(...lngs)) / 2, (Math.min(...lats) + Math.max(...lats)) / 2);
    const edge = project(Math.max(...lngs), (Math.min(...lats) + Math.max(...lats)) / 2);
    const r = Math.max(14, Math.abs(edge[0] - c[0]));
    hotspot = `
    <circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="${(r * 2.6).toFixed(1)}" fill="url(#hot)"/>
    <circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="${r.toFixed(1)}" fill="none"
            stroke="#ff9f43" stroke-opacity="0.55" stroke-width="1.4"/>`;
  }

  const potentialDots = potential
    .map((p) => project(p.lng, p.lat))
    .filter(inFrame)
    .map((p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="0.9"/>`)
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
      const x = pad.left + i * 190;
      return `
        <g transform="translate(${x}, ${h - 96})">
          <rect width="176" height="60" rx="10" fill="rgba(22,30,46,0.86)" stroke="rgba(255,255,255,0.10)"/>
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
    <radialGradient id="hot">
      <stop offset="0%" stop-color="#ff9f43" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="#ff9f43" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#ff9f43" stop-opacity="0"/>
    </radialGradient>
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

  <!-- Plymouth bomb-census layer: to-scale halo, then the points themselves -->
  ${hotspot}
  <g fill="#ff9f43" fill-opacity="0.85">${potentialDots}</g>

  <!-- Researched records -->
  <g>${dots}</g>

  <!-- Left scrim so the type stays legible over the map -->
  <rect width="${Math.round(mapBox.x + 90)}" height="${h}" fill="url(#scrim)"/>

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

  ${sub
    .map(
      (line, i) =>
        `<text x="${pad.left}" y="${168 + headline.length * 62 + 6 + i * 30}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="20" fill="#9ca3af">${line}</text>`
    )
    .join("\n  ")}

  ${pills}

  <g transform="translate(${pad.left}, ${168 + headline.length * 62 + 6 + sub.length * 30 + 34})">
    <rect width="${urlWidth}" height="52" rx="26" fill="rgba(0,242,254,0.10)" stroke="rgba(0,242,254,0.45)"/>
    <text x="26" y="34" font-family="Inter, Helvetica, Arial, sans-serif" font-size="25"
          font-weight="700" fill="#00f2fe">bombmaps.co.uk</text>
  </g>
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

  /* mapBox keeps the map out of the type. Landscape puts it in the right
     column; the square format has room to give it the whole lower half. */
  const variants = [
    {
      file: "og-image.png",
      w: 1200, h: 630,
      pad: { top: 40, right: 40, bottom: 40, left: 56 },
      mapBox: { x: 664, y: 26, w: 518, h: 578 },
      headline: ["Where the bombs fell.", "Street by street."],
      sub: ["Researched WWII bombing and unexploded-ordnance", "records, with sources for every one."],
      stats
    },
    {
      file: "share-square.png",
      w: 1080, h: 1080,
      pad: { top: 40, right: 48, bottom: 40, left: 56 },
      mapBox: { x: 288, y: 318, w: 504, h: 650 },
      headline: ["Where the", "bombs fell."],
      sub: ["Every pin researched, dated and sourced."],
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
    // SVG is the intermediate, kept for inspection but out of the deployed
    // tree — only the PNGs are site assets.
    const svgDir = path.join(ROOT, "build");
    fs.mkdirSync(svgDir, { recursive: true });
    const svgPath = path.join(svgDir, v.file.replace(/\.png$/, ".svg"));
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
