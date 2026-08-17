#!/usr/bin/env node
/* ============================================================
   BUILD SEO PAGES
   ------------------------------------------------------------
   Generates a static, crawlable page for every record and every
   county, plus sitemap.xml and robots.txt.

   USAGE
       node tools/build-seo-pages.js

   WHY THIS EXISTS
   Every one of the site's records lives inside a JavaScript
   array. The map renders them beautifully and search engines see
   almost none of it: one URL, one title, and no text for any
   individual incident. The site's whole distinguishing asset —
   hand-researched, individually sourced records — was invisible.

   These pages fix that. Each is a real HTML document with its own
   URL, title, description, heading, prose and sources, so a search
   for "Portland Square shelter Plymouth" can actually reach it.
   They are not doorway pages: each carries the full content of the
   record, including the caveats, and links into the live map.

   HOW THE DATA IS READ
   The record arrays and regionData are plain data literals, so
   rather than duplicating them (which would rot immediately) this
   slices those declarations out of js/app.js and evaluates just
   those slices in a sandbox. No browser, no dependencies, and no
   second copy of the data to keep in step.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "js/app.js");
const SITE = "https://bombmaps.co.uk";

/* ---------- Pull the data out of app.js ---------- */

// Walks forward from an opening bracket to its match, skipping over anything
// inside strings, template literals, comments or regex-looking slashes. A
// naive brace count breaks on the first apostrophe in a summary.
function matchBracket(src, start) {
  const open = src[start];
  const close = open === "[" ? "]" : "}";
  let depth = 0;
  let i = start;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      i++;
      while (i < src.length) {
        if (src[i] === "\\") { i += 2; continue; }
        if (src[i] === quote) break;
        i++;
      }
    } else if (ch === "/" && src[i + 1] === "/") {
      while (i < src.length && src[i] !== "\n") i++;
    } else if (ch === "/" && src[i + 1] === "*") {
      i = src.indexOf("*/", i + 2) + 1;
    } else if (ch === open) {
      depth++;
    } else if (ch === close) {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  throw new Error("unbalanced brackets while slicing app.js");
}

function extractData() {
  const src = fs.readFileSync(APP, "utf8");
  const declaration = /^const ((?:[a-zA-Z]+Records)|records|regionData) = ([[{])/gm;
  const slices = [];
  let m;
  while ((m = declaration.exec(src))) {
    const openIndex = m.index + m[0].length - 1;
    const end = matchBracket(src, openIndex);
    slices.push(`const ${m[1]} = ${src.slice(openIndex, end + 1)};`);
    declaration.lastIndex = end;
  }
  if (!slices.length) throw new Error("found no record declarations in js/app.js");

  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${slices.join("\n")}\nthis.__data = { regionData };`, sandbox);
  return sandbox.__data.regionData;
}

/* ---------- Small helpers ---------- */

const escapeHtml = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const slug = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Search engines truncate around 155-160 characters, so trim on a word rather
// than mid-sentence and let the ellipsis show it continues.
function metaDescription(text, limit = 155) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/* Assets and internal links are root-relative so the pages work on a local
   preview, a staging domain and production alike. canonical, og:url and the
   JSON-LD must stay absolute — relative values there are invalid and would
   quietly undo the point of having them. */
function page({ title, description, canonical, jsonLd, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Bomb Maps">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${SITE}/og-image.png">
    <meta property="og:locale" content="en_GB">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%230b0f17'/%3E%3Ccircle cx='16' cy='16' r='10' fill='none' stroke='%2300f2fe' stroke-width='2' opacity='.5'/%3E%3Ccircle cx='16' cy='16' r='5.5' fill='none' stroke='%2300f2fe' stroke-width='2'/%3E%3Ccircle cx='16' cy='16' r='2' fill='%23ff5252'/%3E%3C/svg%3E">
    <link rel="stylesheet" href="/css/style.css">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  </head>
  <body class="record-page">
    <!-- Same persistent use-of-data warning as the map pages. Static here
         (see .record-page .use-warning in css/style.css) because there is no
         sticky header under it to stay clear of. -->
    <div class="use-warning" role="note" aria-label="Data use warning">
      <div class="use-warning-inner">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
             stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <path d="M12 9v4M12 17h.01"/>
        </svg>
        <p class="use-warning-text">
          <strong>For archival and historical use only.</strong>
          Do not use for land development or construction risk assessment.
        </p>
      </div>
    </div>
    <header class="record-page-header">
      <a class="record-page-brand" href="/">Bomb<span>Maps</span></a>
      <nav aria-label="Primary">
        <a href="/">Map</a>
        <a href="/#timeline">Timeline</a>
        <a href="/news.html">News</a>
        <a href="/#sources">Sources</a>
      </nav>
    </header>
    <main class="record-page-main">
${body}
    </main>
    <footer class="record-page-footer">
      <p>
        Bomb Maps plots Second World War bombing and unexploded-ordnance records
        across England. Positions are indicative, drawn from archive and
        published sources — not survey-grade, and not for assessing risk at a
        specific address.
      </p>
    </footer>
  </body>
</html>
`;
}

/* ---------- Record pages ---------- */

/* Photographs. Mirrors detailPhotosHtml() in js/app.js, including the rule
   that a photo without BOTH a credit and a licence is not published at all —
   if that rule only lived in the app, every one of these static pages would
   be the hole it leaked through. Where there is no image we may republish but
   there is an archive that holds one, link to the archive instead. */
function photosSection(record) {
  const photos = (record.photos || []).filter((p) => p && p.src && p.credit && p.licence);

  if (photos.length) {
    const figures = photos
      .map((p) => {
        const rights = p.licenceUrl
          ? `<a href="${escapeHtml(p.licenceUrl)}" target="_blank" rel="noopener">${escapeHtml(p.licence)}</a>`
          : escapeHtml(p.licence);
        return `      <figure class="detail-photo">
        <img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt || p.caption || record.title)}" loading="lazy" decoding="async">
        <figcaption>
${p.caption ? `          <span class="detail-photo-caption">${escapeHtml(p.caption)}</span>\n` : ""}          <span class="detail-photo-credit">${escapeHtml(p.credit)} &middot; ${rights}</span>
        </figcaption>
      </figure>`;
      })
      .join("\n");
    return `      <h2>Photographs</h2>\n${figures}\n`;
  }

  if (record.photoLink && record.photoLink.url) {
    return `      <h2>Photographs</h2>
      <p><a class="detail-photo-link" href="${escapeHtml(record.photoLink.url)}" target="_blank" rel="noopener nofollow">${escapeHtml(record.photoLink.label || "Photographs of this incident")}</a></p>
      <p class="detail-photo-note">${escapeHtml(record.photoLink.note || "Held by the archive that took or collected them, and not ours to republish — the link goes to where they are.")}</p>\n`;
  }

  return "";
}

function recordBody(record, region, countySlug) {
  const facts = [];
  if (record.date) facts.push(["Date", record.date]);
  if (record.statusLabel) facts.push(["Record type", record.statusLabel]);
  if (typeof record.weightKg === "number") facts.push(["Bomb weight", `${record.weightKg.toLocaleString("en-GB")}kg`]);
  else if (record.bombType && record.bombType !== "unspecified") facts.push(["Bomb type", record.bombType]);
  if (record.cordonRadiusM) facts.push(["Cordon radius", `${record.cordonRadiusM}m`]);
  if (typeof record.casualties === "number") {
    facts.push(["Casualties", record.casualties === 0 ? "None reported" : String(record.casualties)]);
  }
  if (record.evacuationPeople) facts.push(["People evacuated", `~${record.evacuationPeople.toLocaleString("en-GB")}`]);
  facts.push(["Location", `${region.short}, ${region.county}`]);
  if (record.confidence) facts.push(["Position accuracy", record.confidence]);

  const section = (label, text) =>
    text ? `      <h2>${escapeHtml(label)}</h2>\n      <p>${escapeHtml(text)}</p>\n` : "";

  const sources = (record.sources || [])
    .map((s) => `        <li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener nofollow">${escapeHtml(s.label)}</a></li>`)
    .join("\n");

  return `      <nav class="record-page-crumbs" aria-label="Breadcrumb">
        <a href="/">Map</a> ›
        <a href="/counties/${countySlug}/">${escapeHtml(region.county)}</a> ›
        <span>${escapeHtml(record.title)}</span>
      </nav>
      <h1>${escapeHtml(record.title)}</h1>
      <p class="record-page-lede">${escapeHtml(record.date || "")} · ${escapeHtml(region.short)}, ${escapeHtml(region.county)}</p>
      <a class="record-page-cta" href="/?record=${encodeURIComponent(record.id)}">View this record on the map →</a>
      <dl class="record-page-facts">
${facts.map(([k, v]) => `        <div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd></div>`).join("\n")}
      </dl>
${section("What happened", record.summary)}${section("How it was made safe", record.disposal)}${section("Evacuation", record.evacuationNote)}${section("Casualty note", record.casualtiesNote)}${section("Also worth knowing", record.note)}${photosSection(record)}
${sources ? `      <h2>Sources</h2>\n      <ul class="record-page-sources">\n${sources}\n      </ul>\n` : ""}`;
}

function recordJsonLd(record, region, url, countySlug) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: record.title,
    description: metaDescription(record.summary || record.title, 300),
    url,
    isAccessibleForFree: true,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: "Bomb Maps", url: `${SITE}/` },
    spatialCoverage: {
      "@type": "Place",
      name: `${record.title}, ${region.short}, ${region.county}`,
      geo: { "@type": "GeoCoordinates", latitude: record.lat, longitude: record.lng },
      address: { "@type": "PostalAddress", addressLocality: region.short, addressRegion: region.county, addressCountry: "GB" }
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Map", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: region.county, item: `${SITE}/counties/${countySlug}/` },
        { "@type": "ListItem", position: 3, name: record.title, item: url }
      ]
    }
  };
  if (record.sources && record.sources.length) {
    ld.citation = record.sources.map((s) => s.label);
  }
  return ld;
}

/* ---------- Build ---------- */

function build() {
  const regionData = extractData();
  const urls = [];
  const byCounty = new Map();
  let recordCount = 0;

  Object.values(regionData).forEach((region) => {
    if (!region.county || !Array.isArray(region.records)) return;
    if (!byCounty.has(region.county)) byCounty.set(region.county, []);

    region.records.forEach((record) => {
      const countySlug = slug(region.county);
      const url = `${SITE}/records/${record.id}/`;
      const title = `${record.title}, ${region.short} — WWII bomb record | Bomb Maps`;
      const description = metaDescription(
        record.summary || `${record.title} — a Second World War record in ${region.short}, ${region.county}.`
      );

      const dir = path.join(ROOT, "records", record.id);
      fs.mkdirSync(dir, { recursive: true });
      // Held so the sitemap can hash it — see the lastmod block below.
      const html = page({
        title,
        description,
        canonical: url,
        jsonLd: recordJsonLd(record, region, url, countySlug),
        body: recordBody(record, region, countySlug)
      });
      fs.writeFileSync(path.join(dir, "index.html"), html);

      urls.push({ loc: url, priority: "0.7", html });
      byCounty.get(region.county).push({ record, region });
      recordCount++;
    });
  });

  // County index pages — the natural landing page for "WW2 bombs in Kent".
  byCounty.forEach((entries, county) => {
    const countySlug = slug(county);
    const url = `${SITE}/counties/${countySlug}/`;
    const towns = [...new Set(entries.map((e) => e.region.short))];

    const list = entries
      .map(
        ({ record, region }) =>
          `        <li><a href="/records/${record.id}/">${escapeHtml(record.title)}</a> <span>${escapeHtml(record.date || "")} · ${escapeHtml(region.short)}</span></li>`
      )
      .join("\n");

    const body = `      <nav class="record-page-crumbs" aria-label="Breadcrumb">
        <a href="/">Map</a> › <span>${escapeHtml(county)}</span>
      </nav>
      <h1>WWII bombing and UXO records in ${escapeHtml(county)}</h1>
      <p class="record-page-lede">${entries.length} record${entries.length === 1 ? "" : "s"} across ${towns.length} location${towns.length === 1 ? "" : "s"}: ${escapeHtml(towns.join(", "))}.</p>
      <a class="record-page-cta" href="/?county=${encodeURIComponent(county)}">Open ${escapeHtml(county)} on the map →</a>
      <ul class="record-page-list">
${list}
      </ul>`;

    const dir = path.join(ROOT, "counties", countySlug);
    fs.mkdirSync(dir, { recursive: true });
    const countyHtml = page({
        title: `WWII bombs in ${county} — map and records | Bomb Maps`,
        description: metaDescription(
          `${entries.length} researched Second World War bombing and unexploded-ordnance records across ${county}, including ${towns.slice(0, 4).join(", ")}. Dates, casualties and sources for each.`
        ),
        canonical: url,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `WWII bombing and UXO records in ${county}`,
          url,
          inLanguage: "en-GB",
          isPartOf: { "@type": "WebSite", name: "Bomb Maps", url: `${SITE}/` },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: entries.length,
            itemListElement: entries.map(({ record }, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: record.title,
              url: `${SITE}/records/${record.id}/`
            }))
          }
        },
        body
    });
    fs.writeFileSync(path.join(dir, "index.html"), countyHtml);
    urls.push({ loc: url, priority: "0.8", html: countyHtml });
  });

  /* ---------- Sitemap ----------
     WHY THE lastmod DANCE

     This used to stamp every URL with today's date on every build, which
     is worse than useless. Google's own guidance is that it ignores
     lastmod when a site's values are demonstrably unreliable — and a
     sitemap claiming all 258 pages changed the moment you fixed a typo on
     one of them is the textbook example. lastmod is one of the few
     sitemap signals Google says it does still use, for crawl scheduling,
     so throwing it away by lying about it is a real cost.

     So each page's rendered HTML is hashed, and the hash is stored
     alongside the date that page's content last genuinely changed, in
     .sitemap-lastmod.json. Rebuild with nothing changed and no date
     moves. Change one record and only that record's page, its county
     page and the homepage move.

     COMMIT .sitemap-lastmod.json. Delete it and every page silently
     resets to today, which is the exact problem this exists to fix.

     Deliberately NOT adding <changefreq>: Google has said outright that
     it ignores it. <priority> is ignored too, but it is valid and costs
     nothing, so it stays.
  ------------------------------------------------------------------ */
  const today = new Date().toISOString().slice(0, 10);
  const LASTMOD_FILE = path.join(ROOT, ".sitemap-lastmod.json");

  let previous = {};
  try {
    previous = JSON.parse(fs.readFileSync(LASTMOD_FILE, "utf8"));
  } catch (e) {
    console.log("  note: no .sitemap-lastmod.json found — every page will be dated today");
  }

  const hashOf = (text) => crypto.createHash("sha1").update(text, "utf8").digest("hex").slice(0, 16);

  const entries = [
    { loc: `${SITE}/`, priority: "1.0", html: fs.readFileSync(path.join(ROOT, "index.html"), "utf8") },
    { loc: `${SITE}/news.html`, priority: "0.6", html: fs.readFileSync(path.join(ROOT, "news.html"), "utf8") },
    ...urls
  ];

  const lastmodIndex = {};
  let changed = 0;
  entries.forEach((e) => {
    const hash = hashOf(e.html || e.loc);
    const before = previous[e.loc];
    const unchanged = before && before.hash === hash;
    e.lastmod = unchanged ? before.lastmod : today;
    if (!unchanged) changed++;
    lastmodIndex[e.loc] = { hash, lastmod: e.lastmod };
    delete e.html; // don't hold 258 pages of HTML past this point
  });

  fs.writeFileSync(LASTMOD_FILE, `${JSON.stringify(lastmodIndex, null, 0)}\n`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${e.priority}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

  fs.writeFileSync(
    path.join(ROOT, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`
  );

  console.log(`\n  ${recordCount} record pages`);
  console.log(`  ${byCounty.size} county pages`);
  console.log(`  sitemap.xml: ${entries.length} URLs, ${changed} with a new lastmod`);
  console.log(`  robots.txt written\n`);
}

build();
