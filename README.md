# Plymouth Bomb Map — v1.7

A full-page interactive site about WW2 bombing and UXO (unexploded ordnance) history in Plymouth and the wider South West: hero section, headline stats, an interactive map with filters/timeline/record details, "small facts" section, and a sources list. Includes a test-phase live incident cordon toggle.

## v1.7 highlights

### Devon & Cornwall coverage

The location control is now a **compact dropdown** rather than a row of pills —
eleven town pills was more chrome than map. A single trigger shows the current
town; opening it reveals the full list grouped by county, each with its record
count. The option list is generated from `regionData` at runtime, so adding a
town to the data automatically adds it to the menu. Full keyboard support:
arrow keys, Home/End, Escape, and focus opens on the current town rather than
the top of the list.

Thirteen new town datasets were added — 34 hand-researched,
individually sourced records covering both wartime raids and modern UXO finds.
The map now holds **57 confirmed records across 15 towns** (10 in Devon,
5 in Cornwall):

| Town | Records | Notable entries |
| --- | --- | --- |
| Torquay | 5 | Palace Hotel RAF Hospital (25 Oct 1942); St Marychurch Sunday school (30 May 1943, 45 killed); Barton Gas Works; Corbyn Head battery |
| Paignton | 3 | First raid 11 Apr 1941; Langs Road, 4 Sept 1942 (13 killed); Labour Exchange, Nov 1943 |
| Brixham | 3 | 60 Fore Street delayed-action bomb, 19 May 1941; Outer Harbour, 6 May 1942 |
| Salcombe & Kingsbridge | 4 | Church Street, 8 Sept 1942 (9 killed); Fore Street, 12 Mar 1943; Fort Charles, 30 Mar 1943; RAF Bolt Head |
| Teignmouth | 2 | Town centre, 10 raids / 79 killed; SC1200 found by divers off the pier, 2018 |
| Exmouth | 3 | St Andrew's / Victoria Road, Feb 1941; Exmouth Marina 250kg dredged up, Jan 2026 |
| Dartmouth | 3 | Noss shipyard, 18 Sept 1942 (~20 killed); town centre, 13 Feb 1943; Royal Naval College |
| Newton Abbot | 1 | GWR station and yards, 20 Aug 1940 |
| Falmouth | 2 | Docks raid 10 July 1940 (British Chancellor); SS Registan, 27 May 1941 |
| Truro | 1 | Royal Cornwall Infirmary direct hit, 6 Aug 1942 |
| Penzance | 2 | Alma Terrace / St James Street, 8 June 1941; borough Home Office bombing totals |
| St Ives | 1 | Porthminster Beach strafing raid, Aug 1942 |
| Bodmin | 1 | Gas works and Mill Street food depot, 7 Aug 1942 (9 killed) |

Plymouth also gained the Newquay AFS crew lost at Swilly on 23 April 1941 —
filed under Plymouth because that is where it happened, though the loss belongs
to Newquay.

**Conflicting figures are recorded, not silently resolved.** Where sources
disagree the lower archive-derived figure is used and the conflict is stated in
the record: the Palace Hotel toll (21 in RAF medical-service histories, 64 in
local hotel histories), the Noss shipyard toll (~20 cited, 15 named), and the
Newton Abbot station toll (14 commonly cited, higher locally).

**Two records are deliberately flagged as weaker than the rest.** Barton Gas
Works is placed at area level from a memorial inscription with no wartime map
check. Corbyn Head (Aug 1944) was a gun bursting during practice, not enemy
action — included as an ordnance death, labelled so it cannot be misread as a
bombing record.

**Coordinate caveat:** unlike the audited Plymouth and Exeter sets, these points
are landmark- or street-derived from published accounts rather than
reverse-geocoded against a gazetteer. They are accurate to roughly the right
building or block. They should be run through the same audit as the v1.6
Plymouth pass before this is treated as a formal archive.

Towns with no published raid-night count carry `raidNights: null` and render an
em dash in the stats pill rather than an invented figure. Sourced counts:
Plymouth 59, Exeter 19, Exmouth 14, Teignmouth 10.

### Sidebar space savings

The four explanatory paragraphs in the control panel (heatmap, timeline,
potential sites, bomb weight) were replaced with hover/focus "i" tooltips
carrying the identical wording — roughly 130px of vertical space reclaimed. The
tooltip bubble is rendered once on `<body>` and positioned with `fixed`, because
the control panel scrolls and clipped any tooltip drawn inside it.

## v1.6 highlights

### Coordinate audit — every confirmed record was in the wrong place

Prompted by the St Michael Avenue (Keyham, 2024) pin landing on the wrong street,
**all 23 confirmed records were re-geocoded against OpenStreetMap.** Every single
one was wrong. The coordinates had been entered as recalled estimates, never
checked against a gazetteer.

Errors ranged from 74m to 2.67km:

| Record | Was | Error | Now |
| --- | --- | --- | --- |
| Flamborough Road, Southway | Old Warleigh Lane, Bickleigh | **2,671m** | Flamborough Road, PL6 6QR |
| Swilly Road (1940, first raid) | Burleigh Lane, Peverell | **2,004m** | North Prospect Road, PL2 2HA |
| Glenthorne Road, Exeter | — | **1,023m** | Glenthorne Road, Exwick, EX4 4QU |
| Devonport Park | Berkshire Drive, Morice Town | **1,006m** | Devonport Park, PL1 4BS |
| Glebe Terrace & Belle Vue Road, Saltash | — | **988m** | Belle Vue Rd / Glebe Ave, Saltash |
| **St Michael Avenue, Keyham** | 364 Wolseley Road, Weston Mill | **932m** | St Michael Avenue, PL2 1LG |
| Hayes Road, Oreston | — | **867m** | Hayes Road, PL9 7PZ |
| Fore Street, Saltash | — | **743m** | Fore Street, PL12 6JR |
| Saltash station goods yard | — | **692m** | Albert Road, Saltash |
| Turnchapel Oil Depot | — | **473m** | Boringdon Road, Turnchapel, PL9 9TN |
| Marine Biological Association | — | **391m** | Madeira Road, Citadel Hill |
| Devonport Dockyard (target area) | — | 377m | recentred |
| Portland Square | Winston Avenue, Pennycomequick | **324m** | Portland Sq / Sherwell Lane, PL4 8ER |
| St Andrew's Church | New George Street | **280m** | St Andrew Street, PL1 2AH |
| Guildhall | — | **243m** | Catherine Street, PL1 2AD |
| Charles Church | — | **169m** | Exeter Street, PL4 9AZ |
| Bedford Circus, Exeter | — | 139m | Bedford Street, Exeter |
| Bath Street / Millbay | Millbay Road | 109m | Bath Street, PL1 3NH |
| City Centre (rough area) | — | 96m | recentred |
| Exeter Cathedral | — | 85m | Cathedral Close |
| Notte Street | Palace Street, Barbican | 74m | Notte Street, PL1 2AX |

Corrected positions were verified by reverse-geocoding each new coordinate and
confirming it returns the street named in the record. `data/bomb-locations.csv`
and the `records` array in `js/app.js` are both updated.

**The two hardest records, now resolved:**

- **King Street, Devonport (22 April 1941)** — the UXB that killed six Saltash
  Auxiliary Fire Service men, the largest single-incident loss the UK Fire
  Service suffered in the war. There are **two different King Streets**, which
  is what made this look unresolvable: Plymouth's (Stonehouse/Millbay, still on
  the map) and Devonport's own, which is the right one. Brian Moseley's *Old
  Devonport* records that Devonport's King Street "ran from Fore Street
  northwards to Morice Square… still partly in existence, although erroneously
  named Queen Street on some maps", and that the Royal Naval and Military Free
  Schools on it are now the frontage of Marlborough Primary School. Triangulating
  Morice Square (50.37395, −4.18023), today's Queen Street (50.37273, −4.18110)
  and Marlborough Primary (50.37328, −4.18084) puts the street at roughly
  **50.37330, −4.18075** — **1,341m** from where the pin was.
- **HMNB Devonport main office (28–29 April 1941)** — the old point sat at
  50.3931, −4.1805, up in the northern accommodation/armament area, not the
  dockyard's administrative core. Moved 2,020m south to the South Yard admin
  area. The record still doesn't name the building, so its confidence label now
  says so explicitly rather than implying street-level precision.

### Fixed: the `hidden` attribute silently didn't work

`[hidden] { display: none }` is a low-specificity UA rule, so **any** author rule
setting `display` beats it. Several components here set `display: flex` or
`inline-flex`, which quietly broke the attribute on them — the map disclaimer's
close button did nothing, and the same latent bug affected `.cordon-result` and
the hidden coffee button. Fixed globally with `[hidden] { display: none !important }`
rather than a per-class override each time.

### Two records added outside the city boundary

Plymouth's bomb book stops at the city line and the census map barely crosses it,
so incidents around the Sound go unrecorded by both main sources.

- **HMS Raleigh, Torpoint — 28 April 1941.** A bomb hit an air-raid shelter inside
  the naval training establishment, killing **44 sailors and 21 Royal Engineers**.
  Verified directly against the Royal Navy's own account; the dead are buried at
  Horson Cemetery, Torpoint. Point placed at the establishment, not the shelter —
  its position within the site isn't published.
- **Mount Edgcumbe House, Cremyll — 22 April 1941.** Incendiaries meant for the
  Dockyard fell across the Tamar and gutted the house, leaving only the outer
  walls. Roughly 2km off the intended aiming point, which is the useful thing
  about it — it shows how far stray loads travelled.

**Why only two.** The inclusion bar is a named, dated incident from a primary or
near-primary source. Cawsand, Kingsand, Millbrook, Wembury and Yelverton were all
searched: plenty of general accounts of bombing around the Sound exist, but the
specific incidents are largely undated, unlocatable, or both. Adding them as
approximate guesses is exactly what produced the coordinate errors this release
fixed, so they're left out until a source turns up. The most likely places to
find one: Torpoint Town Council's local history material, the Cornwall Family
History Society bombings map, and parish records for Maker-with-Rame and Wembury.

### Potential-sites layer: independently recounted, and deduplicated

The site owner supplied the source scan (*City of Plymouth — Where the Bombs
Fell*, Geographia Ltd), so the dot count was re-derived from scratch rather than
taken on trust.

**Recount.** Connected-component detection undercounted badly (~1,600, visibly
missing dots that touch road lines). Redone with a distance-transform approach —
threshold, fill holes, then find local maxima of the distance field at radius
≥2.25px, since printed dots are ~7px across while road lines and letter strokes
are 1–2px and never reach that radius. That yields **2,186 dots**, stable across
radius thresholds from 2.25 to 2.75, and a visual overlay confirms near-complete
recall. The existing layer's 2,397 census points are therefore **within ~10% of
an independent redetection** — that figure is defensible.

**So the census layer was never the problem — the stacking was.** The map was
showing 3,351 points for a source map carrying ~2,200–2,400 dots. The excess was
the second source layered on top. Overlay points within 40m of a census point
have now been **dropped from the dataset: 954 → 646, total 3,351 → 3,043.**

The dedup is applied in the data itself, so the layer now plots 3,043 points
rather than 3,351. Provenance moved out of the long sidebar paragraph into a
collapsed "How this layer was built" note, and a standing disclaimer now sits at
the bottom of the map.

### Weight filter: fixed, and honestly bounded

Selecting any weight band used to require `p.cat === "HE"` on the potential-sites
layer. Because 2,397 of the points are `undifferentiated` — the census map prints
its dots with no type at all — picking a band wiped **566 points on screen out of
3,043**, which read as the filter being broken.

It was worse than broken: dropping those points asserted they *weren't* high
explosive, which the source never says.

Now a band excludes only what the source genuinely rules out — incendiaries
(3,043 → 2,995) — and an inline caveat appears explaining that the remaining
points are shown because their type is unrecorded, not because it matches the
band. Confirmed records still filter exactly, since they carry a real `weightKg`.

**Deliberately not done:** modelling per-point weights the way years were
modelled. Raid-intensity weighting for years is defensible because the raid
calendar is documented; there is no equivalent evidence base for the weight of an
individual unlabelled dot, so any band-level filtering of this layer would be
invented precision.

Remaining honest caveats: dots printed over the solid city-centre ink mass still
can't be individually resolved at this scan resolution; and 40m is a judgement
call for "same bomb", tuned to the ~35–45m ground distance one printed dot
covers.

### Why the potential-sites layer shows more dots than The Box's published map

Three compounding reasons, none of which are bugs so much as inherited
limitations that were never netted out:

1. **Two sources are stacked, and they overlap.** The layer is 2,397 points from
   the 1940s bomb census scan *plus* 954 from the Google Maps overlay
   screenshot. Measuring the distance from each `gmaps-overlay` point to its
   nearest `1940s-map` point: **17% fall within 25m of one, 39% within 50m, 43%
   within 100m.** A large share of that second source is very likely the *same
   bombs plotted twice*, so the honest total is nearer 2,400–2,900 than 3,351.
2. **Blob-splitting inflates dense areas.** Where printed dots touch or overlap,
   the detector splits the blob into `area ÷ typical dot area` points. That is a
   statistical estimate, and it systematically over-produces wherever ink is
   heavy — worst over the solid city-centre clump, where the count is a pure
   scaled estimate rather than a count of anything.
3. **The two maps may not be the same map.** The published image and the scan
   digitised here need to be confirmed as the same sheet with the same extent
   before their dot counts can be compared at all.

## v1.5 highlights
- **Rebuilt the "1940s bomb census map" layer again**, this time from a sharper scan supplied by the site owner and anchored to a third independently-checkable reference point (Home Park Stadium), fixing an exact three-point affine transform instead of the previous two-point similarity transform. Every one of the 2,397 points was regenerated and visually cross-checked against the source scan street-by-street. See "Potential sites layer" below.
- Moved the Plymouth/Exeter location filter into its own floating box docked to the top of the map, rather than sitting inside the left control panel.
- Added confirmed bombing records for Plympton, Plymstock, and Yelverton.

## v1.4 highlights
- **Rebuilt the "1940s bomb census map" potential-sites layer from an actual scan of the source**, supplied directly by the site owner, replacing the previous memory-based digitisation. See "Potential sites layer" below for the full methodology — in short: real dot-detection on the real image, georeferenced against two independently-checkable reference points (a Wikipedia-sourced landmark coordinate and an OS grid reference converted mathematically) instead of recalled landmark positions. This also extends coverage to Torpoint, Crownhill, Egg Buckland, and Plymstock, which the old cropped digitisation never reached.
- Fixed the nav header rendering flat/grey on first paint in some browsers (a known `backdrop-filter` + `position: sticky` timing quirk) by forcing its own compositor layer up front.
- Documented that the Devonport Dockyard basins are essentially blank of bomb-site dots on the original census map — almost certainly a wartime security omission on the historical document itself, not a gap in this site's data entry.

## v1.3 highlights
- **Heatmap view**: a new toggle in the control panel blends the confirmed records and the potential-sites layer (via [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat)) into a single density surface, so the heaviest-hit neighbourhoods are visible at a glance instead of reading it off a scatter of individual dots. Confirmed incidents are weighted higher than potential-sites points; it respects the same status/weight/timeline/potential-toggle filters as the marker view.
- **Timeline now drives the potential-sites layer.** Those ~3,492 points had no individual date, so the timeline previously had no effect on them. Each point is now given a *modelled* year (1940–44), sampled from a documented year-weighting of the Plymouth Blitz (see `assignEstimatedYears()` in `js/app.js` for the exact weights and sourcing) using a seeded PRNG, so the same point always lands on the same year across reloads. This is a display aid for exploring the layer by period — **not a claim about any individual point's real date**. A small "estimated bombs by year" bar chart in the control panel shows the modelled 1940–44 split.
- Reworked the nav header: removed the dotted/diagonal texture from the background, replacing it with the same flat glassmorphic panel style used by the map's other floating cards.

## v1.2 highlights
- Right-hand record detail panel: clicking a marker now flies/zooms the map in, draws that record's evacuation cordon at its real radius (when known), and opens a panel with bomb weight, cordon radius, disposal method, evacuation figures, and casualties — replacing the old Leaflet popup.
- New bomb-weight filter (`<100kg` / `100–249kg` / `250–499kg` / `500kg+`) in the control panel. Selecting a band isolates high-explosive devices of that size across both the named records and the potential-sites layer (which only has a type category, not per-point weight, so it narrows to HE-type points as the closest available match).
- Removed the public "Am I inside an evacuation radius?" simulator entry point from the control panel — the cordon/distance-check tool now only activates through Live Incident mode.
- Added a placeholder "Then & now" section in the detail panel flagging a future Street View + archival photo comparison feature (not built yet — will need copyright/licensing clearance for any archival images used).

## v1.1 highlights
- Two live stat pills in the top-right of the nav: **Bombs Plotted** (updates with the active filter/timeline) and **Raid Nights** (59, from the wartime bomb book).
- Map markers redesigned as bullseye/target-style concentric circles (outer halo, ring, solid core) in place of the earlier teardrop pins; "Found UXO" markers pulse gently.
- Live Incident mode is now a plain on/off toggle in the nav — **no admin passcode for now**. This is a deliberate test-phase simplification; the gated version can be restored later.

## v1.0 highlights
- Map is embedded within the full page (hero → stats → interactive map → facts → sources) — not a full-screen takeover.
- Clicking a marker opens the record panel with status, date, summary, notes, and source links.
- Filter buttons (All / Found / Reported / Historic) and a play-able timeline slider restored.
- "Am I inside an evacuation radius?" is a public tool anyone can open from the map's control panel — a simulated 300m cordon, no live badge triggered.

## Stack
- Vanilla HTML/CSS/JS (ES6+)
- Leaflet.js + OpenStreetMap tiles (CartoDB dark tiles for the decorative hero map)
- Nominatim (OpenStreetMap) for postcode/street geocoding in the cordon check

## Structure
- `index.html` — full page layout (hero, stats, map section, facts, sources)
- `css/style.css` — editorial light-theme design system
- `js/app.js` — record data, map logic (markers, filters, timeline), hero map, and the cordon/incident-toggle tools
- `data/bomb-locations.csv` — master research dataset (see Data below), mirrored by hand into the `records` array in `js/app.js`

## Running locally
Any static server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Data

### Current database (18 records)
`data/bomb-locations.csv` is the maintainable master copy of every plotted point; `js/app.js` currently duplicates it by hand into the `records` array (there's no build step yet to generate one from the other — worth adding once the dataset grows further). Each record carries a status (`found` / `reported` / `historic`), a confidence note, and one or more source links. Current coverage:
- **4 confirmed modern UXO finds**: Notte Street (2010, two devices), Devonport Park (2010), Keyham (2024), Millbay (2026), Southway (2026) — sourced from Plymouth City Council incident pages, BBC News, and ITV News West Country.
- **7 confirmed Blitz-era sites**: Swilly Road (first bombs, 6 July 1940), Portland Square air-raid shelter (76 killed, the worst single incident of the Blitz), Charles Church, St Andrew's Church, the Guildhall, the Marine Biological Association laboratory, and HMNB Devonport's main office building — sourced from Wikipedia (citing Gill, 1993), Historic England, the Imperial War Museum, the Marine Biological Association, and 1st Line Defence's UXO city guide.
- **2 broad/approximate areas**: the wider city-centre raid damage and the Devonport Dockyard target zone, kept deliberately vague pending better coordinates.
- **4 Saltash/Devonport records (v1.4)**: the King Street, Devonport UXB tragedy that killed six Saltash firemen (22 April 1941), and three sites from the 28 April 1941 raid on Saltash itself — Fore Street & Commercial Place, the railway station goods yard, and Glebe Terrace & Belle Vue Road — sourced from contemporary Cornish Times 85th-anniversary reporting (2026). Coordinates for these four are recalled street-level estimates, same confidence tier as the other approximate points on this map.
- **2 new Plymstock records (v1.5)**: the Turnchapel Oil Depot fire (27 November 1940, two firemen killed) and Gertrude Ann Cleverton's death on Hayes Road, Oreston (30 April 1944) — sourced from Devon Heritage's transcription of Plympton St Mary Rural District Council's own bombing casualty records, which covered Plymstock, Oreston, Hooe and Turnchapel (areas the city's own "bomb book" and 1940s census map don't reach). No verifiable, individually-sourced incident for Plympton proper or Yelverton turned up in this pass — see the note below.

### Scale — how much is left to plot
Home Office wartime bombing statistics for the County Borough of Plymouth (via [1st Line Defence's UXO City Guide](https://www.1stlinedefence.co.uk/resources/uxo-city-guides/plymouth/)) record **2,820 individual weapons** dropped in total: 2,584 high-explosive bombs, 27 parachute mines, 190 phosphorus bombs, 18 fire pots, and 1 oil bomb, across 9,525 acres (296.1 items per 1,000 acres) — and that figure excludes the roughly 205,000 incendiary bombs dropped over just seven nights in March/April 1941. So this named-incident database plots the well-documented cases, not anywhere near every individual bomb.

The one document that could get us there is the Town Clerk's wartime "**bomb book**", held at The Box, Plymouth — 59 hand-drawn raid maps (6 July 1940 to 30 April 1944) with a written log of date, bomb type, and position (road/building) for each strike, viewable page-by-page via [The Box's online archive catalogue](https://web.plymouth.gov.uk/archivescatalogue/) (search "bomb book"). It doesn't cover Devonport Dockyard, Plympton, or Plymstock. Turning that into real coordinates means transcribing each raid map by hand (or requesting scans from The Box) and geocoding street/building names one by one — a proper follow-up project, not something derivable from the web alone.

**On Plympton and Yelverton specifically:** a search for named, dated, sourced bombing incidents turned up solid material for Plymstock (via Plympton St Mary RDC's own casualty records, added above) but nothing equivalent for Plympton town itself or for Yelverton. This lines up with what's already known about the source material — Plympton isn't covered by the city's bomb book or 1940s census map either, and Yelverton (on the edge of Dartmoor) functioned as an evacuation and dispersal point rather than a raid target, which is consistent with there being no record of it being bombed. If a Plympton- or Yelverton-specific incident does turn up (a parish record, local history society, or family account), it can be added the same way the Saltash and Plymstock records were.

### A note on source discrepancies
Published casualty/damage totals vary slightly by source: Plymouth City Council states 1,174 killed, 3,209 injured, 4,000+ properties destroyed and 18,000 damaged; Wikipedia (citing Gill, *Plymouth: A New History*, 1993) gives 1,172 killed, 4,448 injured, 3,754 houses destroyed and 18,398 seriously damaged. The site currently displays the Council's figures. Worth flagging if this is ever presented as a definitive archive rather than a public-facing overview.

Historic-area points remain approximate and should be replaced with archive-backed coordinates before treating this as a formal public archive.

### Potential sites layer (3,351 points, approximate)
`data/potential-bomb-sites.js` (loaded via a plain `<script>` tag, see below), `data/potential-bomb-sites.json` (same data, plain JSON), and `data/potential-bomb-sites.csv` (full traceable master, with category and source per point) hold a much larger, much lower-confidence layer than the named records above: every marker digitised from two independent secondary sources, colour-coded on the map by category (small dots, toggled from the control panel, `L.canvas()`-backed per the project's own 500+ marker guidance since regular DOM markers would choke at this count).

| Source | Points | Category | How |
|---|---|---|---|
| `1940s-map` | 2,397 | `undifferentiated` (doesn't distinguish bomb type) | WWII-era "City of Plymouth — Where the Bombs Fell" census map, re-digitised **directly from a sharper, higher-resolution scan of the source supplied this round** (see below) |
| `gmaps-overlay` | 954 (843 `HE`, 66 `incendiary`, 45 `unknown`) | colour-coded by the source image itself | user-supplied Google Maps screenshot with pins already placed on a modern satellite basemap (unchanged — no new scan was supplied for this source) |

**Source 1 — the 1940s bomb census map, rebuilt again from a clearer scan.** The previous release's rebuild was anchored to only two reference points (Crownhill Fort and Torpoint) and used a slightly lower-resolution scan. This release replaces the entire `1940s-map` layer with a fresh digitisation run directly against a sharper full-borough scan of the same "CITY OF PLYMOUTH — WHERE THE BOMBS FELL" census map, and adds a third, independently-checkable anchor point: **Home Park Stadium** (50.38806°N, 4.15083°W, from Wikipedia), which sits centrally between Devonport and the Mutley/Lipson/Cattedown area the previous release was flagged as weakest in. The three anchors (Crownhill Fort, Torpoint, Home Park) fix an exact affine transform (rather than a two-point similarity transform), which additionally corrects for any non-uniform scale or shear introduced by the scan/photograph rather than assuming pure rotation+scale.

*Method:* thresholding and a 3×3 morphological opening again strip road lines and text while keeping the filled bomb-symbol dots; connected-component analysis finds each remaining blob, filtered by size and aspect ratio to reject non-dot marks. Blobs larger than a single dot's typical printed area are split via k-means on their pixel coordinates into a proportional number of points — including one genuinely solid ink clump over the city centre (Frankfort Gate/Old Town Street area) dense enough that individual dots are no longer visually separable at all; the point count there is a scaled estimate, flagged as such. The legend/scale-bar box (top-right of the scan) was masked out by pixel region so its "Bomb site •" key marker isn't picked up as a real point. A small number (3) of detections landing in clearly open water off Mount Edgcumbe/the Hamoaze were checked against the source image directly and removed, the same halftone-shading artefact documented in the previous release.

*Result — this is a materially different, more accurate rebuild than last time, not a touch-up:* the three-anchor affine transform was validated for internal consistency (pairwise scale estimates between the three anchors agreed to within roughly 10%), and a visual overlay of every detected point back onto the source scan confirms markers landing squarely on the actual printed dots street-by-street across Crown Hill, Honicknowle, St Budeaux, Weston Mill, Keyham, Devonport, Stonehouse, Mutley, Lipson, Mount Gold, Cattedown and Laira — the areas specifically flagged as mismatched previously.

**Source 2 — the Google Maps overlay.** Unchanged — see the earlier methodology notes retained in git history. A user-supplied screenshot showing colour-coded pins (red = high explosive, green = incendiary, navy = a smaller unlabelled category) already placed on a real satellite/street basemap, spanning a wider area than source 1 (Derriford, Roborough/Plymbridge in the north, out to Plymstock/Pomphlett). Georeferenced from landmark memory (mean error ~255m) — no new source image was supplied for this layer.

**Known limitations — read before treating this as reliable:**
- Neither source is independently confirmed the way the named incident records are.
- Source 1's three-point affine transform is still built from only three anchors — accurate at and between them, but unverified at the map's outer extremities (far Plympton/Plymstock edge, Saltash). Source 2 still relies entirely on recalled coordinates (~255m mean error).
- Overlapping-marker splitting (both sources) is a statistical estimate (area ÷ typical marker area), not a true count — most unreliable in the one solid city-centre ink clump noted above.
- **The Devonport Dockyard basins themselves are essentially blank of dots on the original 1940s source** — very likely a wartime security omission from the original census map, not a digitisation gap. The confirmed HMNB Devonport record (28–29 April 1941) is the only marker actually sitting on dockyard land.
- The `gmaps-overlay` source may double up on locations already present in source 1, since there's no reliable way to deduplicate two independently-derived, individually-approximate point sets.
- **A photographed/scanned paper map without embedded coordinates has a hard accuracy ceiling** — this method gets dots onto the correct street and correct side of it, not onto an exact house number. True street-address-level accuracy would require either the Town Clerk's original "bomb book" raid-by-raid log (see below) transcribed and geocoded by hand, or a scan of this same map with visible OS grid reference numbers printed on it, which would let every grid intersection act as a control point instead of just three landmarks.
- **Bottom line:** treat every point as "something happened on or very near this street," a large step up in confidence from the previous release's neighbourhood-level accuracy, but still not a substitute for the named, sourced records above.

**To improve it further:** if a scan turns up with visible OS grid reference numbers along its margin, that would allow a much denser, mathematically exact control-point set (rather than three landmarks) and should be the next thing tried. Source 2 (the Google Maps overlay) is also still worth redoing from an actual image, the same way source 1 has now been redone twice.

**Why a `<script>` tag and not `fetch()`:** `data/potential-bomb-sites.js` just assigns `const POTENTIAL_BOMB_SITES = [...]` and is loaded as a normal script before `js/app.js`. `fetch()` of a local JSON file is blocked by browsers when `index.html` is opened directly as a file (`file://...`) rather than served over `http://` — which is exactly how most people will first open this site. The `.json` file is kept alongside it for anyone who wants the plain data without parsing JS.
