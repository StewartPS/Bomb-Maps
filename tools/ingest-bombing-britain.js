#!/usr/bin/env node
/* ============================================================
   INGEST — Bombing Britain (HO 203) → national raid layer
   ------------------------------------------------------------
   Turns the downloaded Bombing Britain dataset into
   data/national-raids.json in this site's own record schema.

   USAGE
     1. Download the full dataset from History Commons
        (the Bombing Britain project moved there from
        warstateandsociety.com). Save it as CSV.
     2. Put it at:  data/source/bombing-britain.csv
     3. node tools/ingest-bombing-britain.js
     4. Then geocode the unique place names — see
        tools/geocode-places.js. This script deliberately does
        NOT invent coordinates.

   WHAT THIS SCRIPT WILL NOT DO
     It will not guess a location, a date, or a casualty figure.
     Rows it cannot parse are written to a rejects file for you
     to look at, never silently dropped and never filled in with
     a plausible-looking value. On a site about civilian deaths
     and live unexploded ordnance, a confident wrong number is
     worse than a visible gap.

   RESOLUTION — READ THIS
     HO 203 recorded locations at MUNICIPAL level: the town,
     village or city attacked, rarely a street address. London
     is recorded BY BOROUGH. So every record this script emits
     carries resolution:"settlement" (or "borough"), and the map
     must draw it as an area covering that place — never as a
     pin on a street. See the project methodology notes.
   ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE = path.join(ROOT, "data/source/bombing-britain.csv");
const OUT = path.join(ROOT, "data/national-raids.json");
const REJECTS = path.join(ROOT, "data/source/bombing-britain.rejects.json");

/* ---------- Minimal RFC-4180 CSV reader ----------
   Written out rather than pulled from npm so this repo keeps its
   zero-dependency build. Handles quoted fields, embedded commas,
   embedded newlines and doubled quotes — which this dataset has,
   because casualty descriptions are quoted verbatim from the
   intelligence reports. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += ch;
      continue;
    }

    if (ch === '"') { inQuotes = true; continue; }
    if (ch === ",") { row.push(field); field = ""; continue; }
    if (ch === "\r") continue;
    if (ch === "\n") { row.push(field); rows.push(row); row = []; field = ""; continue; }
    field += ch;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

/* ---------- Column matching ----------
   Matched on patterns rather than exact headers: the published
   file's column names may not be what we expect, and a rename
   upstream should produce a clear error here rather than a
   silently empty field. */
const COLUMN_PATTERNS = {
  date: /^(date|date of attack|attack date)$/i,
  location: /^(location|place|town|target)$/i,
  region: /^(civil defence region|region|cd region)$/i,
  county: /^(county|area|district)$/i,
  timeOfDay: /^(day\/?night|time of day|daytime\/?night ?time|period)$/i,
  killed: /^(killed|deaths|fatalities|no\.? killed)$/i,
  injured: /^(injured|wounded|no\.? injured)$/i,
  casualties: /^(total casualties|casualties|total)$/i,
  notes: /^(additional notes|notes|comments|remarks)$/i,
  fileRef: /^(file|file series|ho ?203|reference|volume)$/i,
  reportNo: /^(report|report number|report no\.?|summary)$/i
};

function mapColumns(header) {
  const found = {};
  header.forEach((raw, index) => {
    const name = raw.trim();
    for (const [key, pattern] of Object.entries(COLUMN_PATTERNS)) {
      if (found[key] === undefined && pattern.test(name)) found[key] = index;
    }
  });
  return found;
}

// "Unspecified", "Unknown", "-" and blanks all mean "not recorded" and must
// stay null. Vague wordings the transcribers quoted verbatim ("several
// casualties") are kept as text, not coerced to a number.
function parseCount(raw) {
  const value = (raw || "").trim();
  if (!value || /^(unspecified|unknown|n\/?a|-|—)$/i.test(value)) {
    return { number: null, text: null };
  }
  const asNumber = Number(value.replace(/[, ]/g, ""));
  if (Number.isFinite(asNumber)) return { number: asNumber, text: null };
  return { number: null, text: value };
}

function slugify(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`\nNo source file at:\n  ${SOURCE}\n`);
    console.error("Download the Bombing Britain full dataset, save it as CSV,");
    console.error("and put it at that path. See the header of this file.\n");
    process.exit(1);
  }

  const rows = parseCsv(fs.readFileSync(SOURCE, "utf8"));
  if (rows.length < 2) { console.error("Source file has no data rows."); process.exit(1); }

  const header = rows[0];
  const cols = mapColumns(header);

  console.log("\nColumns detected in the source file:");
  header.forEach((h, i) => {
    const mapped = Object.entries(cols).find(([, index]) => index === i);
    console.log(`  [${String(i).padStart(2)}] ${h.trim() || "(blank)"}${mapped ? `  ->  ${mapped[0]}` : "  ->  (unused)"}`);
  });

  // Location and date are the two fields without which a record is
  // meaningless on a map. Everything else may legitimately be absent.
  const required = ["date", "location"];
  const missing = required.filter((key) => cols[key] === undefined);
  if (missing.length) {
    console.error(`\nCould not find a column for: ${missing.join(", ")}`);
    console.error("Add a pattern to COLUMN_PATTERNS in this script to match the real header.\n");
    process.exit(1);
  }

  const records = [];
  const rejects = [];
  const placeCounts = new Map();

  rows.slice(1).forEach((row, i) => {
    const get = (key) => (cols[key] === undefined ? "" : (row[cols[key]] || "").trim());

    const location = get("location");
    const date = get("date");
    if (!location || !date) {
      rejects.push({ line: i + 2, reason: !location ? "no location" : "no date", row });
      return;
    }

    const region = get("region");
    const county = get("county");
    const killed = parseCount(get("killed"));
    const injured = parseCount(get("injured"));
    const total = parseCount(get("casualties"));

    // London was recorded borough-by-borough; everywhere else is a whole
    // settlement. The map renders these at different sizes, so the
    // distinction has to survive ingestion.
    const isLondonBorough = /london/i.test(region) || /london/i.test(county);
    const placeKey = slugify([location, county || region].filter(Boolean).join(", "));
    placeCounts.set(placeKey, (placeCounts.get(placeKey) || 0) + 1);

    records.push({
      id: `bb-${slugify(location)}-${slugify(date)}-${i}`,
      title: location,
      placeKey,
      placeName: location,
      county: county || null,
      cdRegion: region || null,
      date,
      timeOfDay: get("timeOfDay") || null,
      status: "historic",
      statusLabel: "Recorded air raid",

      // Filled in by tools/geocode-places.js. Null here, deliberately:
      // a record with no coordinates is skipped by the map, which is the
      // correct behaviour. A guessed coordinate would not be.
      lat: null,
      lng: null,
      resolution: isLondonBorough ? "borough" : "settlement",
      radiusM: null,

      killed: killed.number,
      injured: injured.number,
      casualties: total.number,
      casualtiesNote: [killed.text, injured.text, total.text].filter(Boolean).join("; ") || null,
      note: get("notes") || null,

      source: {
        dataset: "Bombing Britain: an air raid map",
        author: "Dr Laura Blomvall, University of York",
        publisher: "Routledge, Taylor & Francis, with The National Archives",
        archiveRef: [get("fileRef"), get("reportNo")].filter(Boolean).join(" ") || "HO 203",
        note: "Transcribed from Ministry of Home Security Daily Intelligence Reports (TNA HO 203). Locations recorded at municipal level; London by borough."
      }
    });
  });

  const places = [...placeCounts.entries()]
    .map(([key, count]) => ({ placeKey: key, raids: count }))
    .sort((a, b) => b.raids - a.raids);

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({
    generated: new Date().toISOString(),
    recordCount: records.length,
    uniquePlaces: places.length,
    licence: "Underlying records Crown Copyright, The National Archives (HO 203). Check the dataset's own terms before republishing.",
    records
  }, null, 1));

  fs.writeFileSync(REJECTS, JSON.stringify({ count: rejects.length, rejects }, null, 1));

  console.log(`\n  ${records.length.toLocaleString("en-GB")} records written to data/national-raids.json`);
  console.log(`  ${places.length.toLocaleString("en-GB")} unique places to geocode`);
  console.log(`  ${rejects.length.toLocaleString("en-GB")} rows rejected -> data/source/bombing-britain.rejects.json`);
  console.log("\n  Every record has lat/lng null. Run tools/geocode-places.js next.\n");
}

main();
