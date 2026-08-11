const records = [
  {
    id: "notte-street-2010",
    title: "Notte Street, City Centre",
    status: "found",
    statusLabel: "Found UXO",
    date: "11 November 2010",
    sortYear: 2010,
    confidence: "Confirmed incident",
    lat: 50.36836,
    lng: -4.1395,
    bombType: "HE",
    weightKg: 70,
    cordonRadiusM: 300,
    disposal: "Removed to Cawsand Bay and detonated at sea.",
    evacuationNote: "Nearby hotels evacuated, including the Holiday Inn and Duke of Cornwall.",
    casualties: 0,
    summary: "Demolition workers uncovered a partially buried WWII device at a building site on Notte Street. A 300m cordon forced the evacuation of nearby hotels, including the Holiday Inn and Duke of Cornwall, before the 70kg bomb was taken out to Cawsand Bay and detonated at sea.",
    note: "A second device was found at the same site the following February — a reminder that more than one wartime bomb can lie beneath a single redevelopment site.",
    sources: [
      { label: "Heart Plymouth: Unexploded WW2 bomb made safe", url: "https://www.heart.co.uk/plymouth/news/local/unexploded-ww2-bomb-made-safe/" },
      { label: "BBC News: Bomb detonated off Cawsand Bay", url: "https://feeds.bbci.co.uk/news/uk-england-devon-11742273" }
    ]
  },
  {
    id: "keyham-2024",
    title: "St Michael Avenue, Keyham",
    status: "found",
    statusLabel: "Found UXO",
    date: "20–23 February 2024",
    sortYear: 2024,
    confidence: "Confirmed incident",
    lat: 50.3869,
    lng: -4.17221,
    bombType: "HE",
    weightKg: 500,
    cordonRadiusM: 300,
    disposal: "Moved by military convoy to the Torpoint Ferry slipway, then disposed of at sea.",
    evacuationPeople: 3250,
    evacuationProperties: 4300,
    casualties: 0,
    summary: "A 500kg German WWII bomb was found in a back garden on St Michael Avenue. A 300m cordon led to an estimated 3,250 people and around 4,300 properties being evacuated before the device was moved by military convoy to the Torpoint Ferry slipway for disposal at sea.",
    note: "Described by the Ministry of Defence as one of the largest UK peacetime evacuations since the Second World War.",
    sources: [
      { label: "Plymouth City Council: Keyham incident updates", url: "https://www.plymouth.gov.uk/news/major-incident-updates" },
      { label: "BBC News: Live coverage, February 2024", url: "https://feeds.bbci.co.uk/news/live/uk-england-devon-68354617" }
    ]
  },
  {
    id: "millbay-2026",
    title: "Bath Street / Millbay",
    status: "found",
    statusLabel: "Found UXO",
    date: "14–15 January 2026",
    sortYear: 2026,
    confidence: "Confirmed incident",
    lat: 50.36875,
    lng: -4.15093,
    bombType: "HE",
    weightKg: 50,
    cordonRadiusM: 400,
    initialCordonRadiusM: 100,
    disposal: "Transferred to King Point Marina.",
    evacuationNote: "Nearby homes, businesses, hotels, and Millbay Academy affected.",
    casualties: 0,
    summary: "A magnetometer survey ahead of a housing development uncovered a German SC50 bomb buried around 4.3m deep on Bath Street. The cordon grew from 100m to 400m, covering nearby homes, businesses, hotels, and Millbay Academy, before the device was transferred to King Point Marina.",
    note: "Investigators returned to the same site in May and again in July 2026 to check for further buried ordnance before construction could resume.",
    sources: [
      { label: "Plymouth City Council: Millbay UXO incident", url: "https://www.plymouth.gov.uk/news/unexploded-ordnance-millbay-building-site" },
      { label: "The Herald: Search for bombs on building site (14 Jul 2026)", url: "https://www.magzter.com/stories/newspaper/The-Herald/SEARCH-FOR-BOMBS-ON-BUILDING-SITE" }
    ]
  },
  {
    id: "southway-2026",
    title: "Flamborough Road, Southway",
    status: "found",
    statusLabel: "Found UXO",
    date: "29 April – 1 May 2026",
    sortYear: 2026,
    confidence: "Confirmed incident",
    lat: 50.42974,
    lng: -4.1253,
    bombType: "HE",
    weightKg: 250,
    cordonRadiusM: 400,
    disposal: "Destroyed in a controlled detonation in situ, behind a sand mitigation structure.",
    evacuationProperties: 1260,
    casualties: 0,
    summary: "A 250kg German SC250 bomb was found on a building site during construction works. Judged too unstable to move, it was destroyed in a controlled detonation on 1 May behind a sand mitigation structure, after a 400m cordon and evacuation affecting roughly 1,260 properties.",
    note: "The evacuation centre at Southway Youth and Community Centre supported more than 50 residents, with 25 households placed in temporary accommodation.",
    sources: [
      { label: "Plymouth City Council: Southway emergency incident", url: "https://www.plymouth.gov.uk/news/southway-emergency-incident" },
      { label: "ITV News West Country: bomb detonated in situ", url: "https://www.itv.com/news/westcountry/2026-05-01/stay-away-from-area-warning-as-ww2-bomb-to-be-blown-up-where-it-was-found" }
    ]
  },
  {
    id: "swilly-road-1940",
    title: "Swilly Road",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "6 July 1940",
    sortYear: 1940,
    confidence: "Approximate point",
    lat: 50.39755,
    lng: -4.16928,
    bombType: "HE",
    casualties: 3,
    summary: "The first bombs to fall on Plymouth landed just before midday on a block of eight Corporation houses in Swilly Road, destroying three and killing a 33-year-old woman, a 58-year-old man, and a 13-year-old boy — the city's first civilian casualties of the war.",
    note: "This is the opening entry in the Town Clerk's wartime 'bomb book', now held at The Box. Note: some secondary sources (citing Gill, 1993) place this first raid in the neighbouring North Prospect area rather than Swilly Road by name — the two are adjoining streets in the same St Budeaux/Swilly district, and casualty/date details agree. Replace with a street-level archival coordinate if publishing a formal public archive.",
    sources: [
      { label: "Plymouth City Council: Death / Destruction", url: "https://www.plymouth.gov.uk/deathdestruction" },
      { label: "The Box: Blitz 80 — The Bomb Book", url: "https://www.theboxplymouth.com/blog/archives/blitz-80-the-bomb-book" },
      { label: "Wikipedia: Plymouth Blitz", url: "https://en.wikipedia.org/wiki/Plymouth_Blitz" }
    ]
  },
  {
    id: "city-centre-1941",
    title: "City Centre",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "March to April 1941",
    sortYear: 1941,
    confidence: "Rough area",
    lat: 50.371,
    lng: -4.142,
    bombType: "mixed",
    casualties: 1174,
    casualtiesNote: "Citywide Blitz toll, not specific to this area alone.",
    summary: "The central shopping and civic areas were devastated during the seven heaviest nights of the Blitz, part of a citywide toll of 1,174 civilians killed, 3,209 injured, and over 4,000 properties destroyed outright.",
    note: "This should become a polygon or cluster once individual raid reports from the bomb book are digitised.",
    sources: [
      { label: "Plymouth City Council: Death / Destruction", url: "https://www.plymouth.gov.uk/deathdestruction" },
      { label: "The Box: Blitz 80 — Images from the archives", url: "https://www.theboxplymouth.com/blog/history/blitz-80-archive-images" }
    ]
  },
  {
    id: "devonport-1941",
    title: "Devonport Dockyard area",
    status: "reported",
    statusLabel: "Reported target area",
    date: "1940 to 1944",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 50.386,
    lng: -4.181,
    bombType: "target-area",
    summary: "Devonport's naval facilities were one of the reasons Plymouth became a major Luftwaffe target throughout the war.",
    note: "Use this category for target zones or unconfirmed reports until precise locations are available.",
    sources: [
      { label: "Plymouth City Council: Death / Destruction", url: "https://www.plymouth.gov.uk/deathdestruction" }
    ]
  },
  {
    id: "devonport-park-2010",
    title: "Devonport Park, Stoke",
    status: "found",
    statusLabel: "Found UXO",
    date: "December 2010",
    sortYear: 2010,
    confidence: "Confirmed incident",
    lat: 50.37573,
    lng: -4.17485,
    bombType: "unknown",
    cordonRadiusM: 200,
    disposal: "Cordon lifted without a controlled detonation — device was not thought to be viable.",
    casualties: 0,
    summary: "A suspected WWII-era device was uncovered in Devonport Park, prompting a 200m police cordon while bomb disposal specialists assessed it — coming only weeks after the Notte Street find nearby.",
    note: "Police said the device was not thought to be \"viable\" and the cordon was lifted without a controlled detonation — a reminder that not every wartime find turns into a full evacuation.",
    sources: [
      { label: "BBC News: Unexploded bomb found in Plymouth park", url: "https://feeds.bbci.co.uk/news/uk-england-devon-11960573" }
    ]
  },
  {
    id: "portland-square-1941",
    title: "Portland Square, North Hill",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "22 April 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.37577,
    lng: -4.13807,
    bombType: "HE",
    casualties: 76,
    summary: "A communal air-raid shelter at Portland Square took a direct hit during an attack on the central area, killing 76 people — the single greatest loss of civilian life in the Plymouth Blitz. Only three people in the shelter survived.",
    note: "The University of Plymouth later named a building on the site after the incident and commissioned a memorial artwork; the victims are listed on the Imperial War Museum's War Memorials register.",
    sources: [
      { label: "Wikipedia: Plymouth Blitz", url: "https://en.wikipedia.org/wiki/Plymouth_Blitz" },
      { label: "IWM: Portland Square Air Raid Shelter Victims memorial", url: "https://www.iwm.org.uk/memorials/item/memorial/46036" },
      { label: "University of Plymouth: 75th anniversary of the Portland Square bombing", url: "https://www.plymouth.ac.uk/news/university-to-mark-75th-anniversary-of-portland-square-bombing" }
    ]
  },
  {
    id: "charles-church-1941",
    title: "Charles Church, Charles Cross",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20–21 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.37157,
    lng: -4.13453,
    bombType: "incendiary",
    summary: "Plymouth's second-oldest church was gutted by incendiary bombs on the Blitz's heaviest night; nearby water mains had already been cut, so the fire couldn't be fought.",
    note: "Rather than rebuild it, the city preserved the shell as a permanent memorial to the Blitz's civilian dead — it still stands roofless on its traffic island at Charles Cross today.",
    sources: [
      { label: "Historic England: Preserved in Ruin", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/preserved-in-ruin/" },
      { label: "Wikipedia: Charles Church, Plymouth", url: "https://en.wikipedia.org/wiki/Charles_Church,_Plymouth" }
    ]
  },
  {
    id: "st-andrews-church-1941",
    title: "St Andrew's Church, Royal Parade",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20–22 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.36974,
    lng: -4.13983,
    bombType: "incendiary",
    summary: "Plymouth's civic parish church was burnt out during the heaviest nights of the Blitz. Amid the ruins, a local headmistress nailed up a wooden sign reading \"Resurgam\" — \"I shall rise again\".",
    note: "The door is still known as the Resurgam door, marked today by a carved granite plaque; the church was reconsecrated on St Andrew's Day, 30 November 1957.",
    sources: [
      { label: "Wikipedia: St Andrew's Church, Plymouth", url: "https://en.wikipedia.org/wiki/St_Andrew%27s_Church,_Plymouth" },
      { label: "Old Plymouth Society: A brief history of St Andrew's Church", url: "https://oldplymouthsociety.net/a-brief-history-of-st-andrews-church/" }
    ]
  },
  {
    id: "guildhall-1941",
    title: "Guildhall, Armada Way",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.3696,
    lng: -4.14091,
    bombType: "unspecified",
    summary: "Plymouth's Victorian civic Guildhall was reduced to a shell during the 1941 raids, one of nearly every civic building lost in the city centre that spring.",
    note: "It survived a 1951 council vote on demolition by a single vote, and was restored to its original Victorian plans between 1954 and 1959 — now a Grade II listed anchor point of the rebuilt city centre.",
    sources: [
      { label: "Historic England: Guildhall listing", url: "https://historicengland.org.uk/listing/the-list/list-entry/1113280" },
      { label: "Plymouth City Council: Guildhall restoration", url: "https://www.plymouth.gov.uk/news/guildhall-gleaming-thanks-restoration" }
    ]
  },
  {
    id: "mba-laboratory-1941",
    title: "Marine Biological Association, Citadel Hill",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.3643,
    lng: -4.13917,
    bombType: "unspecified",
    summary: "The Marine Biological Association's laboratory on the Hoe, sited next to the Royal Citadel, was severely damaged by bombing — an unintended casualty of its proximity to a military target.",
    note: "Staff spent the following months repairing lab space, with unexploded bombs still reported in and around the premises weeks later. The Nobel-winning nerve-conduction research of Hodgkin and Huxley resumed there in 1947 once it was rebuilt.",
    sources: [
      { label: "Wikipedia: Plymouth Blitz", url: "https://en.wikipedia.org/wiki/Plymouth_Blitz" },
      { label: "Marine Biological Association: 140th anniversary at Citadel Hill", url: "https://www.mba.ac.uk/140-citadel-hill/" }
    ]
  },
  {
    id: "hmnb-devonport-office-1941",
    title: "HMNB Devonport — main office building",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28–29 April 1941",
    sortYear: 1941,
    confidence: "Approximate — dockyard admin area, building unknown",
    lat: 50.375,
    lng: -4.178,
    bombType: "HE",
    summary: "The worst of the raids on the naval dockyard came on the night of 28th/29th April 1941: six laboratories, a small-arms ammunition store and several other buildings were damaged, and the main office building took a direct hit from a high-explosive bomb.",
    note: "Devonport Dockyard sits outside the coverage of the Town Clerk's 'bomb book', so this point is placed from descriptive accounts rather than the book's own plotting — treat it as indicative rather than exact.",
    sources: [
      { label: "1st Line Defence: Plymouth UXO City Guide", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/plymouth/" }
    ]
  },
  {
    id: "kingstreet-devonport-1941",
    title: "King Street, Devonport",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "22 April 1941",
    sortYear: 1941,
    confidence: "Street located from historic sources",
    lat: 50.3733,
    lng: -4.18075,
    bombType: "UXB",
    casualties: 6,
    summary: "Six volunteer Auxiliary Fire Service men from Saltash — Francis Brooking (44), Stanley Crabb (26), Alfred Crapp (33), Bernard Jasper (27), John Stanlake (28), and Leslie Tibbs (31) — were killed instantly when their vehicle drove over an unexploded bomb in King Street, Devonport, while responding to help fight fires from the Blitz.",
    note: "Contemporary reporting (85th-anniversary coverage, 2026) describes this as the largest single loss of life suffered by a fire brigade in England and Wales during any one wartime incident. The six men's graves at St Stephen's Churchyard, Saltash, were restored in 2026 following a community fundraising campaign.",
    sources: [
      { label: "Cornish Times: Restored graves unveiled for firefighters killed in wartime tragedy", url: "https://www.cornish-times.co.uk/news/restored-graves-unveiled-for-firefighters-killed-in-wartime-tragedy-900335" }
    ]
  },
  {
    id: "saltash-fore-street-1941",
    title: "Fore Street & Commercial Place, Saltash",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 April 1941",
    sortYear: 1941,
    confidence: "Street located from historic sources",
    lat: 50.40892,
    lng: -4.2142,
    bombType: "HE",
    casualties: 6,
    summary: "As German bombers turned for home after raiding Plymouth, they released their remaining bombs over Saltash to lighten their load. In a 25-minute spell from 11.45pm, bombs fell street after street: Charles and Emma Allen were killed at 71 Fore Street, Dorothy Goad and her daughter Joan at 105 Fore Street two minutes later, and Aaron Brooking behind Fore Street at Commercial Place. ARP Warden Alfred William Olver was injured in Fore Street and died later at St Barnabas Hospital.",
    note: "Nine Saltash civilians were killed across the town that night — just six days after six Saltash firemen had been killed in the King Street tragedy in Devonport (see that record). Because an unexploded bomb lay near St Stephen's churchyard, victims were first buried at Landrake for safety before some were later reinterred in Saltash; others remain at Landrake and Botus Fleming.",
    sources: [
      { label: "Cornish Times: Saltash pays tribute to nine killed in Blitz horror 85 years ago", url: "https://www.cornish-times.co.uk/news/saltash-pays-tribute-to-nine-killed-in-blitz-horror-85-years-ago-901579" }
    ]
  },
  {
    id: "saltash-station-1941",
    title: "Saltash railway station goods yard",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 April 1941",
    sortYear: 1941,
    confidence: "Street located from historic sources",
    lat: 50.4072,
    lng: -4.20915,
    bombType: "HE",
    casualties: 1,
    summary: "A bomb hit the GWR goods yard at Saltash railway station during the same 28 April 1941 raid that struck the town centre, killing 18-year-old Donald Noel Cummins, a Scout and Auxiliary Fire Service volunteer on duty that night.",
    note: "Part of the same short, deadly raid described in the Fore Street & Commercial Place record — bombs released by aircraft returning from Plymouth after lightening their load over the Tamar.",
    sources: [
      { label: "Cornish Times: Saltash pays tribute to nine killed in Blitz horror 85 years ago", url: "https://www.cornish-times.co.uk/news/saltash-pays-tribute-to-nine-killed-in-blitz-horror-85-years-ago-901579" }
    ]
  },
  {
    id: "saltash-glebe-bellevue-1941",
    title: "Glebe Terrace & Belle Vue Road, Saltash",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 April 1941",
    sortYear: 1941,
    confidence: "Street located from historic sources",
    lat: 50.4103,
    lng: -4.21346,
    bombType: "HE",
    casualties: 2,
    summary: "Further bombs from the same 28 April 1941 raid killed Walter Eales at Glebe Terrace and William Rogers at Belle Vue Road.",
    note: "Part of the same short, deadly raid described in the Fore Street & Commercial Place record — nine Saltash civilians were killed across the town in a single 25-minute spell.",
    sources: [
      { label: "Cornish Times: Saltash pays tribute to nine killed in Blitz horror 85 years ago", url: "https://www.cornish-times.co.uk/news/saltash-pays-tribute-to-nine-killed-in-blitz-horror-85-years-ago-901579" }
    ]
  },
  {
    id: "turnchapel-oil-depot-1940",
    title: "Turnchapel Oil Depot, Plymstock",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "27 November 1940",
    sortYear: 1940,
    confidence: "Street located from historic sources",
    lat: 50.35908,
    lng: -4.11624,
    bombType: "HE (fire/explosion)",
    casualties: 2,
    summary: "A bomb hit one of the Admiralty oil storage tanks at Turnchapel, on the south bank of the Cattewater opposite Mount Batten, setting it ablaze. The fire was so intense firefighters' hose water evaporated before reaching the flames. Two days later the heat set the neighbouring tanks alight; burning oil poured into Hooe Lake, engulfing two fireboats. Firemen Robert Widger and Thomas J. Callicott were killed; other crew swam clear before both boats exploded.",
    note: "The fires burned for five days, lighting up Plymouth at night. Plymstock and Turnchapel fall outside the area covered by the Town Clerk's 'bomb book' and the 1940s census map used elsewhere on this site, so this record — like the Saltash ones — is a separately researched, named incident rather than part of either bulk dataset.",
    sources: [
      { label: "Devon Heritage: Casualties of bombing listed by Plympton RDC (Turnchapel Oil Depot fire)", url: "https://www.devonheritage.org/Places/Plympton%20St%20Mary/CasualtiesofbombinglistedbyPlymptonRDC.htm" }
    ]
  },
  {
    id: "hayes-road-oreston-1944",
    title: "Hayes Road, Oreston, Plymstock",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "30 April 1944",
    sortYear: 1944,
    confidence: "Street located from historic sources",
    lat: 50.36066,
    lng: -4.10562,
    bombType: "unknown",
    casualties: 1,
    summary: "Gertrude Ann Cleverton, 51, of Kenridge, Plymstock Road, Oreston, was killed in the roadway at Hayes Road during a late-war raid — one of the last recorded civilian bombing deaths in the Plymouth area.",
    note: "Recorded under Plympton St Mary Rural District Council, which was responsible for logging bombing casualties across the parishes to the east of Plymouth — including Plymstock, Oreston, Hooe and Turnchapel — that the city's own 'bomb book' and 1940s census map don't cover.",
    sources: [
      { label: "Devon Heritage: Casualties of bombing listed by Plympton RDC", url: "https://www.devonheritage.org/Places/Plympton%20St%20Mary/CasualtiesofbombinglistedbyPlymptonRDC.htm" },
      { label: "CWGC: Civilian War Dead search", url: "https://www.cwgc.org/find-records/find-war-dead/" }
    ]
  },

  /* ---------- Outside the city boundary ----------
     Plymouth's own bomb book stops at the city line, and the 1940s census
     map covers little beyond it, so incidents across the Tamar and around
     the Sound go unrecorded by both of this site's main sources. These are
     individually researched and sourced. The bar for inclusion is a named,
     dated incident from a primary or near-primary source — which is why
     this list is short: plenty of villages around the Sound were hit, but
     most surviving accounts are undated or unlocatable, and padding the
     map with those would undo the point of the coordinate audit.
  ------------------------------------------------------------------- */
  {
    id: "hms-raleigh-1941",
    title: "HMS Raleigh air-raid shelter, Torpoint",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 April 1941",
    sortYear: 1941,
    confidence: "Confirmed incident, establishment-level",
    lat: 50.37061,
    lng: -4.21770,
    bombType: "HE",
    casualties: 65,
    summary: "A bomb struck an air-raid shelter inside the naval training establishment HMS Raleigh, killing 44 sailors and 21 Royal Engineers — 65 deaths in a single incident, across the Tamar from the Plymouth raids of the same night.",
    note: "The Royal Engineers are thought to have belonged to two troops based in the Plymouth area, preparing assault boats for the North Africa campaign. The dead are buried at Horson Cemetery, Torpoint, where HMS Raleigh still holds an annual service. Point placed at the establishment, not the shelter — its exact position within the site isn't published.",
    sources: [
      { label: "Royal Navy: HMS Raleigh remembers the Fallen", url: "https://www.royalnavy.mod.uk/news/2017/november/08/171108-hms-raleigh-remembers-the-fallen" },
      { label: "CWGC: Horson Cemetery, Torpoint", url: "https://www.cwgc.org/visit-us/find-cemeteries-memorials/cemetery-details/2000105/torpoint-horson-cemetery/" }
    ]
  },
  {
    id: "mount-edgcumbe-1941",
    title: "Mount Edgcumbe House, Cremyll",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "22 April 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 50.35432,
    lng: -4.17588,
    bombType: "incendiary",
    casualties: 0,
    summary: "A stick of incendiaries intended for the Dockyard fell across the Tamar onto Mount Edgcumbe House, the Edgcumbe family seat since the 1550s. The interiors burned out completely, leaving only the outer walls standing.",
    note: "A number of Joshua Reynolds family portraits were lost with the house. Rebuilding began in 1951 and ran to 1964, omitting the original central tower; the estate was bought jointly by Cornwall County Council and Plymouth City Council in 1971. A clear illustration of how far off-target loads fell — this is roughly 2km south-west of the intended aiming point.",
    sources: [
      { label: "Wikipedia: Mount Edgcumbe House", url: "https://en.wikipedia.org/wiki/Mount_Edgcumbe_House" },
      { label: "MERIT: History of Mount Edgcumbe House", url: "https://www.meritcharity.org/buildings-and-structures/mount-edgcumbe-house" },
      { label: "Mount Edgcumbe: A Story in 100 Objects", url: "https://www.mountedgcumbe.gov.uk/visit/exhibitions/a-story-in-100-objects/03-electric-fire/" }
    ]
  },
  {
    id: "newquay-afs-crew-1941",
    title: "Newquay AFS crew, Swilly",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "23 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (mutual-aid crew, exact incident street not traced)",
    lat: 50.3958,
    lng: -4.1705,
    bombType: "HE",
    casualties: 5,
    casualtiesNote: "Five of a nine-man crew killed and two badly wounded; one of the dead died the same day at Swilly Hospital.",
    summary: "Auxiliary Fire Service crews were sent to Plymouth from across the West Country during the Blitz. Newquay's nine-man volunteer crew was hit by a bomb as it arrived on the night of 23 April 1941, killing five of them.",
    note: "Filed under Plymouth because that is where it happened, though the loss belongs to Newquay — photographs and a memorial bell stand at Newquay fire station. 41 firefighters died in total during the Plymouth Blitz, including crews from Saltash. The coordinate is an area estimate for the Swilly district, not the incident street.",
    sources: [
      { label: "Newquay's AFS fire crew remembered, 80 years on", url: "https://worldwarzoogardener1939.wordpress.com/2021/04/23/newquays-afs-fire-crew-remembered-plymouth-blitz-80-years-on-23-april-1941/" },
      { label: "BBC News: Saltash firefighters who died in the Blitz remembered", url: "https://feeds.bbci.co.uk/news/uk-england-cornwall-56838387" }
    ]
  }
];

/* ---------- Exeter records (a smaller starter set) ----------
   Exeter suffered its own major Baedeker raid in May 1942 and, like
   Plymouth, still turns up wartime ordnance today. This is a much
   smaller, hand-researched set than Plymouth's — three well-documented,
   individually sourced incidents rather than a bomb-book-derived
   database or an undigitised potential-sites layer (neither of which
   exists for Exeter here). Coordinates for the two historic entries are
   landmark-derived rather than GPS-verified; Glenthorne Road's is a
   postcode-area estimate — all three should be treated as approximate
   until replaced with archive-backed coordinates.
------------------------------------------------------------------- */
const exeterRecords = [
  {
    id: "exeter-bedford-circus-1942",
    title: "Bedford Circus & High Street",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "3–4 May 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point (Bedford Circus was demolished after the war)",
    lat: 50.72377,
    lng: -3.52853,
    bombType: "mixed",
    casualties: 156,
    casualtiesNote: "Citywide toll for the raid: 156 killed, 583 injured, across roughly 30 acres of the city centre.",
    summary: "Twenty bombers hit Exeter's centre just after midnight in a 70-minute raid, destroying Bedford Circus, the top of High Street, and parts of Sidwell Street and Paris Street. Deller's Cafe, St Lawrence Church, the Lower Market, the Globe Hotel, and the College of the Vicars Choral were among the buildings lost.",
    note: "Fire crews from Torquay and Plymouth were called in — 195 appliances and 1,080 firefighters worked to bring the blaze under control, largely achieved by 5 May, though outbreaks continued to 7 May.",
    sources: [
      { label: "Exeter Memories: The story of the Exeter Blitz, May 1942", url: "https://www.exetermemories.co.uk/em/exeterblitz.php" },
      { label: "Wikipedia: Exeter Blitz", url: "https://en.wikipedia.org/wiki/Exeter_Blitz" },
      { label: "Devon Heritage: Blitz casualties", url: "http://devonheritage.org/Places/Exeter/Blitzcasualties.htm" }
    ]
  },
  {
    id: "exeter-cathedral-1942",
    title: "Exeter Cathedral, St James' Chapel",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3–4 May 1942",
    sortYear: 1942,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 50.72252,
    lng: -3.52985,
    bombType: "HE",
    summary: "A bomb struck the Chapel of St James in the Cathedral's south choir aisle, destroying three bays of the outer wall, two flying buttresses, and the chapel itself along with its monuments.",
    note: "The Cathedral's stained glass had been removed for safekeeping in 1940, saving it from the blast. Missing masonry was patched with asbestos and Sunralite panels for years afterward; scaffolding still stands in place of the lost buttresses today.",
    sources: [
      { label: "Historic England: Exeter Cathedral bomb damage", url: "https://historicengland.org.uk/images-books/photos/item/OWS01/17/088" },
      { label: "Devon and Exeter Institution: Cathedral bomb damage collection", url: "https://collectionsexplorer.devonandexeterinstitution.org/online-collection/photographs/cathedral-bomb-damage/exeter-cathedral-bomb-damage/1658795-master-mason-george-down-examining-bomb-damage-to-st-james-chapel-exeter-cathedral" }
    ]
  },
  {
    id: "exeter-glenthorne-road-2021",
    title: "Glenthorne Road, Duryard/St James",
    status: "found",
    statusLabel: "Found UXO",
    date: "26 February 2021",
    sortYear: 2021,
    confidence: "Confirmed incident, approximate point (postcode-area estimate, not street-verified)",
    lat: 50.73831,
    lng: -3.54357,
    bombType: "HE",
    weightKg: 1000,
    cordonRadiusM: 400,
    initialCordonRadiusM: 100,
    disposal: "Destroyed in situ, surrounded by more than 400 tonnes of sand — the blast still threw debris up to 250m.",
    evacuationPeople: 2600,
    evacuationNote: "Included around 1,400 University of Exeter students; some residents couldn't return for three nights, and the blast left some homes uninhabitable.",
    casualties: 0,
    summary: "Construction workers uncovered a 1,000kg German WWII bomb next to a care home and student accommodation. An initial 100m cordon grew to 400m once a Royal Navy EOD team attended.",
    note: "Exeter was hit in 19 wartime raids that dropped more than 7,000 bombs on the city — this device had lain undiscovered for nearly 80 years.",
    sources: [
      { label: "1st Line Defence: 1,000kg unexploded WWII bomb discovered in Exeter", url: "https://www.1stlinedefence.co.uk/news/1000kg-unexploded-wwii-german-bomb-discovered-in-exeter/" },
      { label: "BBC News: Exeter WW2 bomb detonated after homes evacuated", url: "https://feeds.bbci.co.uk/news/uk-england-devon-56221697" },
      { label: "Zetica UXO: Large evacuation as Army detonates 1,000kg UXB", url: "https://zeticauxo.com/news/large-evacuation-as-army-detonates-1000kg-uxb-found-in-exeter/" }
    ]
  }
];

/* ============================================================
   Wider Devon & Cornwall record sets
   ------------------------------------------------------------
   Beyond Plymouth and Exeter, the South West's smaller coastal towns
   were hit repeatedly — mostly by low-level "tip and run" fighter-bomber
   raids from 1942–43, which arrived under the radar and often gave no
   warning at all. Each town below is a small, hand-researched set of
   individually sourced incidents.

   COORDINATE CAVEAT: every point here is landmark- or street-derived
   from published accounts, not from an archival grid reference. They are
   accurate to roughly the right building or block, and should be treated
   as approximate — the same standard applied to the Exeter set above.
   ============================================================ */

/* ---------- Torquay / Torbay ---------- */
const torquayRecords = [
  {
    id: "torquay-palace-hotel-1942",
    title: "Palace Hotel (RAF Hospital), Babbacombe",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "25 October 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point (the hotel was demolished in 2020)",
    lat: 50.47,
    lng: -3.5148,
    bombType: "HE",
    casualties: 21,
    casualtiesNote: "Disputed. RAF medical-service histories give 21: 14 officers, five staff and two Home Guard. Some local hotel histories put the toll at 64. The lower, archive-derived figure is used here.",
    summary: "Four Focke-Wulf 190s attacked the requisitioned Palace Hotel, then in use as an RAF officers' hospital, despite a large red cross painted on its roof. A direct hit severed the east wing and a second bomb on the adjacent road wrecked the west wing. The hospital had 203 patients at the time; all theatres and examination rooms were destroyed, so only basic first aid could be given at the scene.",
    note: "The hospital never reopened. The building was attacked again on 8 January 1943 while under care and maintenance, without casualties, and was not used as a hotel again until 1948. It was demolished in 2020.",
    sources: [
      { label: "Wikipedia: RAF Hospital Torquay", url: "https://en.wikipedia.org/wiki/RAF_Hospital_Torquay" },
      { label: "The National Archives: RAF Officers' Hospital, Torquay — enemy air attack, 25 Oct 1942", url: "https://discovery.nationalarchives.gov.uk/details/r/C2363048" },
      { label: "Babbacombe & St Marychurch History Society: The Palace Hotel", url: "https://www.babbacombelhs.org.uk/memories/the-palace-hotel/" }
    ]
  },
  {
    id: "torquay-st-marychurch-1943",
    title: "St Mary the Virgin Church, St Marychurch",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "30 May 1943",
    sortYear: 1943,
    confidence: "Confirmed event, landmark point",
    lat: 50.4807,
    lng: -3.5222,
    bombType: "HE",
    casualties: 45,
    casualtiesNote: "45 killed across the St Marychurch and Hele areas, including 21 children and three teachers at the church.",
    summary: "A Sunday-morning tip-and-run raid by around 20 aircraft struck St Marychurch while a children's Sunday school was in progress. A bomb fell near the high altar and brought down the roof and walls, killing 21 children and three of their teachers. Torquay's deadliest day of the war: 45 people died and some 50 buildings were destroyed across the surrounding area.",
    note: "A memorial in the rebuilt church names the children. The crucifix hanging in the church survived the blast and still hangs there today.",
    sources: [
      { label: "Diocese of Exeter: Torquay church marks 80th anniversary of the Sunday school bombing", url: "https://exeter.anglican.org/torquay-church-marks-80th-anniversary-of-tragic-world-war-two-sunday-school-bomb-attack/" },
      { label: "Devon Heritage: Casualties of the bombing of St Marychurch", url: "https://www.devonheritage.org/Places/Torquay/CasualtiesofthebombingofSt.Marychurch.htm" },
      { label: "BBC News: Town remembers 45 victims of WW2 bombing", url: "https://feeds.bbci.co.uk/news/articles/cxe5n7vkgjno" }
    ]
  },
  {
    id: "torquay-barton-gas-works-1942",
    title: "Barton Gas Works",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "June 1942",
    sortYear: 1942,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 50.4822,
    lng: -3.5378,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "Gunner C. R. Crocker of the 10th (Torbay) Battalion, Devonshire Home Guard.",
    summary: "A Home Guard gunner was killed when the gas works at Barton were bombed — one of three Torquay Home Guard members to die by enemy action during the war.",
    note: "Coordinate caveat: placed at Barton on the strength of the memorial inscription alone. The precise works location has not been confirmed against a wartime map and should be corrected before this point is relied on.",
    sources: [
      { label: "Brixham Battery Heritage Centre: Home Guard memorial, Corbyn Head", url: "https://www.brixhambattery.net/428963310" }
    ]
  },
  {
    id: "torquay-corbyn-head-1944",
    title: "Corbyn Head coastal battery",
    status: "reported",
    statusLabel: "Reported target area",
    date: "11 August 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point — NOT enemy action",
    lat: 50.4562,
    lng: -3.5407,
    bombType: "target-area",
    casualties: 6,
    casualtiesNote: "Four Home Guard killed instantly; a Royal Artillery RSM and a sixth man died later of burns.",
    summary: "During a practice shoot at the Corbyn Head coastal battery, the breech of one gun burst. Four Home Guard gunners of the 10th (Torbay) Battalion died instantly; the Royal Artillery Sergeant Major and one more gunner died later of extensive burns. The sole survivor in the gunpit gave the only evidence at the inquest, which returned death by misadventure.",
    note: "Included because it is an ordnance death on the Torbay coast, but this was an accident during training, not a German attack — it should not be read as a bombing record. A granite memorial stands on the spot, unveiled on the 61st anniversary.",
    sources: [
      { label: "Brixham Battery Heritage Centre: Tragedy at Corbyn Head", url: "https://www.brixhambattery.net/428963310" }
    ]
  },
  {
    id: "torquay-harbour-target-1942",
    title: "Torquay harbour and seafront",
    status: "reported",
    statusLabel: "Reported target area",
    date: "1940 to 1944",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 50.4619,
    lng: -3.5253,
    bombType: "target-area",
    casualties: 168,
    casualtiesNote: "Townwide toll across the war, not specific to this area alone.",
    summary: "Torquay's harbour, seafront hotels and rail links drew repeated low-level attacks, and the town was a military training area throughout the war — RAF training units early on, US forces preparing for D-Day later. It was hit in at least 40 raids, in which 168 people were killed.",
    note: "Area marker, not a single incident — use the individual records for confirmed strike points. A further Home Guard death came at Barton Gas Works in June 1942, and six men died at the Corbyn Head coastal battery in August 1944 when a gun burst during practice — an accident rather than enemy action.",
    sources: [
      { label: "Devon Heritage: Civilian casualties of the bombing of Torquay", url: "https://devonheritage.org/Places/Torquay/CiviliancasualtiesofthebombingofTorquay.htm" },
      { label: "Brixham Battery Heritage Centre: WW2 in Torbay / Corbyn Head", url: "https://www.brixhambattery.net/428963310" }
    ]
  }
];

/* ---------- Paignton ---------- */
const paigntonRecords = [
  {
    id: "paignton-first-raid-1941",
    title: "Ebenezer Road & Corsham Road",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "11–12 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (two separate streets)",
    lat: 50.439,
    lng: -3.564,
    bombType: "incendiary",
    casualties: 2,
    casualtiesNote: "Frankie Williams, a volunteer air raid warden, and Ernest Evans of Corsham Road.",
    summary: "Paignton's first air raid. Several incendiary bombs started fires across the town and killed two men — an ARP warden injured in Ebenezer Road, and a resident of Corsham Road. Both died the same day at the District Hospital.",
    note: "The town was crowded at the time: hundreds of evacuee children had been billeted there, joined that March by families made homeless by the Plymouth Blitz.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Paignton", url: "https://www.devonheritage.org/Places/Paignton/CasualtiesofthebombingofPaignton.htm" }
    ]
  },
  {
    id: "paignton-langs-road-1942",
    title: "Langs Road, Preston",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "4 September 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 50.447,
    lng: -3.5595,
    bombType: "HE",
    casualties: 13,
    casualtiesNote: "All 13 died at numbers 9, 11, 13 and 15 Langs Road, and at number 23.",
    summary: "The deadliest raid on Paignton. Numbers 9, 11, 13, 15 and 23 Langs Road were destroyed outright and thirteen people killed, with more than 1,200 other houses in the area damaged. Three generations of one family died at number 15.",
    note: "The raid led to every Paignton woman aged 20 to 45 being required to register for fire-watching.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Paignton", url: "https://www.devonheritage.org/Places/Paignton/CasualtiesofthebombingofPaignton.htm" }
    ]
  },
  {
    id: "paignton-labour-exchange-1943",
    title: "Labour Exchange, Torquay Road",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "16 November 1943",
    sortYear: 1943,
    confidence: "Confirmed event, approximate point",
    lat: 50.4455,
    lng: -3.562,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "Walter Weston, killed while fire-watching.",
    summary: "A lone hit-and-run raider killed a fire-watcher at the Labour Exchange. It was the last month of the war in which Paignton was attacked from the air — the same month the town received its first consignment of Morrison and Anderson shelters.",
    note: "An earlier raid on 13 February 1943 damaged further property including Oldway, the mansion built by the Singer family, without loss of life.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Paignton", url: "https://www.devonheritage.org/Places/Paignton/CasualtiesofthebombingofPaignton.htm" }
    ]
  }
];

/* ---------- Brixham ---------- */
const brixhamRecords = [
  {
    id: "brixham-fore-street-1941",
    title: "60 Fore Street",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "19 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 50.3948,
    lng: -3.5127,
    bombType: "HE",
    casualties: 4,
    casualtiesNote: "Three members of the Preston family, and 14-year-old Geoffrey Hill.",
    summary: "A delayed-action bomb lodged in a house at 60 Fore Street. Geoffrey Hill — a 14-year-old firewatcher and St John Ambulance member, on his first day at work — was trying to reach the Preston family inside when it detonated, killing him and all three Prestons.",
    note: "One of only two Brixham raids to cause fatalities, despite the town being hit repeatedly. Contemporary references also mention time bombs falling on Middle Street; no casualty names have been traced for those.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Brixham", url: "https://devonheritage.org/Places/Brixham/CasualtiesofthebombingofBrixham.htm" }
    ]
  },
  {
    id: "brixham-outer-harbour-1942",
    title: "Outer Harbour & breakwater",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "6 May 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point (at sea)",
    lat: 50.3985,
    lng: -3.5107,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "Garnet Tucker, a 62-year-old fisherman, killed aboard his boat near the breakwater.",
    summary: "A raid on the harbour killed a fisherman working on his boat near the breakwater. The harbour was attacked repeatedly: the coaling hulk London City was sunk at her moorings three times and salvaged twice.",
    note: "Brixham's raids were almost all 'tip and run' — aircraft came in over Berry Head so low and so suddenly that the air raid warning never sounded.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Brixham", url: "https://devonheritage.org/Places/Brixham/CasualtiesofthebombingofBrixham.htm" }
    ]
  },
  {
    id: "brixham-raids-area",
    title: "Brixham harbour and town",
    status: "reported",
    statusLabel: "Reported target area",
    date: "1940 to 1944",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 50.3958,
    lng: -3.514,
    bombType: "target-area",
    summary: "Official Civil Defence records list 17 raids on Brixham itself between July 1940 and May 1943 — a very different picture from the local impression that the town escaped lightly. A former resident working from ARP incident books has since identified at least five further raids missing from that list.",
    note: "Area marker. The raid list is explicitly incomplete: wartime record-keeping was patchy, and Brixham Urban District also covered the Kingswear side of the Dart, so some incidents appear in the Dartmouth records instead.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Brixham (raid list and ARP corrections)", url: "https://devonheritage.org/Places/Brixham/CasualtiesofthebombingofBrixham.htm" }
    ]
  }
];

/* ---------- Salcombe & Kingsbridge ---------- */
const salcombeRecords = [
  {
    id: "salcombe-church-street-1942",
    title: "Church Street",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "8 September 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 50.2385,
    lng: -3.768,
    bombType: "HE",
    casualties: 9,
    casualtiesNote: "Eight died at numbers 4 and 5 Church Street; an 11-month-old boy from Church Street died the following day at Kingsbridge hospital.",
    summary: "Bombs fell in the Church Street area, demolishing three houses on the southern side of the street and severely damaging those opposite. Four members of the Putt family died at number 4, along with two evacuated brothers aged 4 and 7 billeted there.",
    note: "The parish church and houses on The Island were also damaged. Salcombe's deadliest single incident of the war.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Salcombe", url: "https://www.devonheritage.org/Places/Salcombe/CasualtiesofthebombingofSalcombe.htm" }
    ]
  },
  {
    id: "salcombe-fore-street-1943",
    title: "Fore Street & Clifton Place",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "12–13 March 1943",
    sortYear: 1943,
    confidence: "Confirmed event, street-derived point",
    lat: 50.2371,
    lng: -3.7692,
    bombType: "HE",
    casualties: 5,
    casualtiesNote: "Deaths at 65A and 9 Fore Street and at 1 Clifton Place, including a mother and her 15-year-old daughter.",
    summary: "Bombs fell on the centre of Salcombe overnight. RAF 266 (Rhodesia) Squadron, then tasked with stopping the hit-and-run raids, shot down one Focke-Wulf 190 over nearby Chivelstone and a second as it reached the French coast — but others got through.",
    note: "Among the dead were a Fire Guard and a member of the St John Ambulance Brigade.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Salcombe", url: "https://www.devonheritage.org/Places/Salcombe/CasualtiesofthebombingofSalcombe.htm" }
    ]
  },
  {
    id: "salcombe-fort-charles-1943",
    title: "Fort Charles, North Sands",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "30 March 1943",
    sortYear: 1943,
    confidence: "Confirmed event, landmark point",
    lat: 50.2323,
    lng: -3.7773,
    bombType: "HE",
    casualties: 2,
    casualtiesNote: "Two children, aged 3 and 2 — one of them an evacuee from Colliers Wood in London.",
    summary: "Two small children were killed at Fort Charles in a raid that also struck Bolt Head and Malborough the same day.",
    note: "Both were the children of serving soldiers. One had been evacuated from London to what Whitehall planners had classed as a safe area.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Salcombe", url: "https://www.devonheritage.org/Places/Salcombe/CasualtiesofthebombingofSalcombe.htm" }
    ]
  },
  {
    id: "salcombe-bolt-head-target",
    title: "RAF Bolt Head & the Kingsbridge estuary",
    status: "reported",
    statusLabel: "Reported target area",
    date: "1940 to 1944",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 50.2205,
    lng: -3.7885,
    bombType: "target-area",
    summary: "Whitehall classed Salcombe a safe reception area and sent evacuees. The Luftwaffe read the same map differently: low-level reconnaissance spotted the RAF airfield under construction at Bolt Head in 1940, and from then on the base, the harbour and the estuary drew regular attacks — on the aircraft using it, and on the towns as a deterrent to the civilian population.",
    note: "Recorded raids in the area cover Kingsbridge (Oct 1940, Jan and Feb 1943), Salcombe, Bolt Head and Malborough. The published list is explicitly not exhaustive. Two requisitioned landing barges being trialled for the planned Sledgehammer landings were bombed and sunk here on 19 September 1942.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Salcombe", url: "https://www.devonheritage.org/Places/Salcombe/CasualtiesofthebombingofSalcombe.htm" }
    ]
  }
];

/* ---------- Teignmouth ---------- */
const teignmouthRecords = [
  {
    id: "teignmouth-town-1940-1943",
    title: "Teignmouth town centre",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "1940 to 1943",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 50.5465,
    lng: -3.4972,
    bombType: "mixed",
    casualties: 79,
    casualtiesNote: "79 killed and 151 wounded across all raids on the town.",
    summary: "Teignmouth was struck in around ten raids between 1940 and 1943, most of them low-level tip-and-run attacks on the town centre and seafront. 228 houses were demolished and some 2,000 more damaged — for its size, one of the most heavily bombed towns in the country.",
    note: "Area marker covering the town centre; individual strike points are recorded in the Teignmouth Old Cemetery war graves project and Devon Heritage casualty lists.",
    sources: [
      { label: "Mid Devon Advertiser: Teignmouth's time during the Blitz", url: "https://www.middevonadvertiser.co.uk/news/towns-heavy-toll-in-wartime-blitz-562227" },
      { label: "Teignmouth & Shaldon in WW2: Bombings", url: "https://www.teignmouthshaldonww2.co.uk/index.php/teignmouth-bombings" },
      { label: "Devon Heritage: Casualties of the bombing of Teignmouth", url: "https://www.devonheritage.org/Places/Teignmouth/CasualtiesofthebombingofTeignmouthinWorldWar2.htm" }
    ]
  },
  {
    id: "teignmouth-pier-2018",
    title: "Seafront off Teignmouth Pier",
    status: "found",
    statusLabel: "Found UXO",
    date: "10 July 2018",
    sortYear: 2018,
    confidence: "Confirmed incident, approximate point (found underwater)",
    lat: 50.545,
    lng: -3.493,
    bombType: "HE",
    weightKg: 1200,
    disposal: "Towed out to sea and destroyed in a controlled explosion by Royal Navy divers from Devonport.",
    evacuationNote: "Seafront properties evacuated while the device was moved.",
    casualties: 0,
    summary: "A recreational scuba diver and his nephew found a German SC1200 bomb on the seabed close to the pier. Police evacuated seafront properties so that a bomb disposal team could tow the device clear of the town before Royal Navy divers destroyed it at sea.",
    note: "The SC1200 carried around 631kg of Trialen high explosive — among the largest devices recovered on the Devon coast in recent years.",
    sources: [
      { label: "BBC News: Teignmouth evacuated over WW2 bomb find", url: "https://feeds.bbci.co.uk/news/uk-england-devon-44784001" },
      { label: "BBC News: Teignmouth WW2 bomb detonated after diving discovery", url: "https://feeds.bbci.co.uk/news/uk-england-devon-44784298" },
      { label: "1st Line Defence: Teignmouth seafront evacuated after WWII bomb found", url: "https://www.1stlinedefence.co.uk/news/teignmouth-seafront-evacuated-wwii-bomb-found/" }
    ]
  }
];

/* ---------- Exmouth ---------- */
const exmouthRecords = [
  {
    id: "exmouth-st-andrews-1941",
    title: "St Andrew's Road & Victoria Road",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "25 February 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 50.6201,
    lng: -3.4184,
    bombType: "HE",
    summary: "ARP logs record three high-explosive bombs falling in the vicinity of St Andrew's Road and Victoria Road, the streets running alongside what is now Exmouth Marina.",
    note: "UXO analysts have since suggested a fourth bomb from this raid may have fallen unnoticed into the water — the likely origin of the device dredged up at the marina in January 2026.",
    sources: [
      { label: "Zetica UXO: The historical context behind the WWII bombs discovered in Devon", url: "https://zeticauxo.com/news/analysis-the-historical-context-behind-the-wwii-bombs-discovered-in-devon/" },
      { label: "Devon Heritage: Casualties of the bombing of Exmouth", url: "https://www.devonheritage.org/Places/Exmouth/CasualtiesofthebombingofExmouth.htm" }
    ]
  },
  {
    id: "exmouth-town-1940-1943",
    title: "Exmouth town and seafront",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "September 1940 to February 1943",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 50.6206,
    lng: -3.4136,
    bombType: "mixed",
    summary: "47 bombs fell on Exmouth across 14 air raids, predominantly tip-and-run attacks on opportunistic targets. The River Exe was used as a navigational aid by Luftwaffe crews, leaving the town exposed to overspill from the much heavier raids on Exeter.",
    note: "On 26 February 1943 the gas holder, housing and a train were machine-gunned during a raid on the town — one of the last significant attacks on Exmouth.",
    sources: [
      { label: "Zetica UXO: The historical context behind the WWII bombs discovered in Devon", url: "https://zeticauxo.com/news/analysis-the-historical-context-behind-the-wwii-bombs-discovered-in-devon/" },
      { label: "Devon Heritage: Casualties of the bombing of Exmouth", url: "https://www.devonheritage.org/Places/Exmouth/CasualtiesofthebombingofExmouth.htm" }
    ]
  },
  {
    id: "exmouth-marina-2026",
    title: "Exmouth Marina",
    status: "found",
    statusLabel: "Found UXO",
    date: "14–16 January 2026",
    sortYear: 2026,
    confidence: "Confirmed incident",
    lat: 50.6178,
    lng: -3.4155,
    bombType: "HE",
    weightKg: 250,
    cordonRadiusM: 600,
    initialCordonRadiusM: 100,
    disposal: "Floated out to sea on a flotation pack, sunk to the seabed at 17m and destroyed in a controlled explosion at 08:13 on 16 January.",
    evacuationPeople: 5000,
    evacuationProperties: 2000,
    evacuationNote: "A further 500 properties were evacuated overnight when the cordon was extended from 400m to 600m.",
    casualties: 0,
    summary: "A mud-clearing dredger raised a suspected 250kg German bomb from the bed of Exmouth Marina, triggering a major incident. The cordon grew from 100m to 400m and then to 600m, affecting around 5,000 people and 2,000 properties, before a Royal Navy EOD team took the device out to sea.",
    note: "Found on the same day as the Bath Street device in Plymouth — the first time two WWII bombs had been discovered in Devon on a single day.",
    sources: [
      { label: "ITV News West Country: Two WW2 bombs found in Devon detonated at sea", url: "https://www.itv.com/news/westcountry/2026-01-16/second-of-two-unexploded-ww2-bombs-to-be-detonated-at-sea" },
      { label: "Exmouth Journal: World War II bomb in Exmouth Marina towed out and detonated", url: "https://www.exmouthjournal.co.uk/news/25777189.world-war-ii-bomb-exmouth-marina-towed-detonated/" },
      { label: "Zetica UXO: The historical context behind the WWII bombs discovered in Devon", url: "https://zeticauxo.com/news/analysis-the-historical-context-behind-the-wwii-bombs-discovered-in-devon/" }
    ]
  }
];

/* ---------- Dartmouth ---------- */
const dartmouthRecords = [
  {
    id: "dartmouth-town-1943",
    title: "Dartmouth town centre",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "13 February 1943",
    sortYear: 1943,
    confidence: "Confirmed event, approximate point",
    lat: 50.352,
    lng: -3.5793,
    bombType: "HE",
    casualties: 15,
    summary: "A daylight raid dropped three bombs on Dartmouth and the Royal Naval College. Two destroyed several buildings in the town, killing 15 people.",
    note: "Dartmouth's deep-water harbour made it a base for motor torpedo boats and, later, a D-Day embarkation point — keeping the town a target throughout the war.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Dartmouth", url: "http://www.devonheritage.org/Places/Dartmouth/CasualtiesofthebombingofDartmouth.htm" },
      { label: "Liberation Route Europe: Dartmouth at War", url: "https://www.liberationroute.com/en/themed-routes/127/dartmouth-at-war" }
    ]
  },
  {
    id: "noss-works-1942",
    title: "Philip & Son's Noss shipyard, Kingswear",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "18 September 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 50.3628,
    lng: -3.5735,
    bombType: "HE",
    casualties: 20,
    casualtiesNote: "Figures vary between sources — around 20 is the most commonly cited, with Devon Heritage naming 15 of the dead. The workforce included ARP wardens, an NFS fireman aged 17 and a Home Guard member aged 17.",
    summary: "The Noss shipyard on the east bank of the Dart, then building and repairing small warships, was hit in a daylight raid. It was the worst single loss of life in the Dartmouth area during the war.",
    note: "The Kingswear side of the river fell under Brixham Urban District Council at the time, so the dead appear in both the Brixham and Dartmouth casualty lists. The yard survived and continued operating for decades afterwards.",
    sources: [
      { label: "Devon Heritage: Casualties of the bombing of Brixham (Noss Works names)", url: "https://devonheritage.org/Places/Brixham/CasualtiesofthebombingofBrixham.htm" },
      { label: "Wikipedia: Philip and Son", url: "https://en.wikipedia.org/wiki/Philip_and_Son" },
      { label: "Dartmouth Museum: Philip & Son", url: "https://www.dartmouthmuseum.org/product/philip-son/" }
    ]
  },
  {
    id: "dartmouth-naval-college-1942",
    title: "Britannia Royal Naval College",
    status: "reported",
    statusLabel: "Reported target area",
    date: "18 September 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 50.3549,
    lng: -3.576,
    bombType: "HE",
    summary: "The Royal Naval College on the hill above the town was hit in a daylight raid. The college was evacuated to Eaton Hall in Cheshire and the buildings were taken over for other wartime uses.",
    note: "The college site is a landmark point; the exact impact positions within the grounds are not recorded here.",
    sources: [
      { label: "Liberation Route Europe: Dartmouth at War", url: "https://www.liberationroute.com/en/themed-routes/127/dartmouth-at-war" },
      { label: "Dartmouth History Research Group archive", url: "https://dartmouth-history.org.uk/dhrg_archive/102987_0.pdf" }
    ]
  }
];

/* ---------- Newton Abbot ---------- */
const newtonAbbotRecords = [
  {
    id: "newton-abbot-station-1940",
    title: "Newton Abbot railway station",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "20 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 50.5295,
    lng: -3.6111,
    bombType: "HE",
    casualties: 14,
    casualtiesNote: "Contemporary and later accounts differ: 14 killed is the most commonly cited figure, with some local sources putting the toll higher and the seriously injured at around 90.",
    summary: "Three German aircraft attacked the station and its yards in the early evening, dropping six bombs — one of which failed to explode — and strafing the site with machine-gun fire. Station Cottages and Forde Road were hit directly, locomotives and rolling stock were wrecked, and the station buildings were badly damaged.",
    note: "Newton Abbot was a major Great Western Railway junction and locomotive works, making it one of the most strategically valuable rail targets in the South West.",
    sources: [
      { label: "Wikipedia: Newton Abbot railway station", url: "https://en.wikipedia.org/wiki/Newton_Abbot_railway_station" },
      { label: "Mid Devon Advertiser: The day war came to Newton", url: "https://www.middevonadvertiser.co.uk/news/the-day-war-came-to-newton-255529" },
      { label: "Devon Museums: A Newton Abbot resident remembers the bombing", url: "https://www.devonmuseums.net/includes/learning/helensgrandma-bombing.pdf" }
    ]
  }
];

/* ---------- Falmouth ---------- */
const falmouthRecords = [
  {
    id: "falmouth-docks-1940",
    title: "Falmouth Docks",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "10 July 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 50.1513,
    lng: -5.053,
    bombType: "HE",
    casualties: 10,
    casualtiesNote: "Ten sailors and dock staff killed.",
    summary: "A daylight raid on Falmouth Docks set the 7,000-ton motor vessel British Chancellor ablaze and killed ten sailors and dock workers. It was among the first significant attacks on a Cornish target and one of the opening actions of what became the Battle of Britain.",
    note: "Falmouth's deep natural harbour and ship-repair yards made it the most heavily targeted place in Cornwall throughout the war.",
    sources: [
      { label: "CWGC: Falmouth Cemetery", url: "https://www.cwgc.org/our-war-graves-your-history/explore-great-britain/south-west-region/falmouth-cemetery/" },
      { label: "The Poly, Falmouth: Bombs on Falmouth (war records)", url: "https://thepoly.org/history-archive/item/56/bombs-on-falmouth" }
    ]
  },
  {
    id: "falmouth-registan-1941",
    title: "SS Registan, Falmouth harbour",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "27 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (vessel at anchor)",
    lat: 50.1497,
    lng: -5.053,
    bombType: "HE",
    casualties: 27,
    casualtiesNote: "Five graves in Falmouth Cemetery hold the remains of 27 unidentified sailors from the vessel.",
    summary: "The armed merchant ship Registan was bombed in Falmouth harbour. Twenty-seven of the dead could not be identified and are buried together in Falmouth Cemetery.",
    note: "Air raids and harbour mining caused repeated casualties at Falmouth through 1941; this was the single worst incident.",
    sources: [
      { label: "CWGC: Falmouth Cemetery", url: "https://www.cwgc.org/our-war-graves-your-history/explore-great-britain/south-west-region/falmouth-cemetery/" },
      { label: "The Poly, Falmouth: Bombs on Falmouth (war records)", url: "https://thepoly.org/history-archive/item/56/bombs-on-falmouth" }
    ]
  }
];

/* ---------- Truro ---------- */
const truroRecords = [
  {
    id: "truro-infirmary-1942",
    title: "Royal Cornwall Infirmary, Infirmary Hill",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "6 August 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 50.262,
    lng: -5.0578,
    bombType: "HE",
    weightKg: 500,
    casualties: 14,
    casualtiesNote: "14 killed and 65 injured across the raid as a whole.",
    summary: "A Focke-Wulf 190 fighter-bomber scored a direct hit on the Royal Cornwall Infirmary with a 500kg bomb, demolishing the south wing. There was no air raid warning: the German tactic of arriving fast and low had evaded both radar and, in part, the Royal Observer Corps. Fourteen people were killed, 65 injured, three houses destroyed and more than 100 damaged.",
    note: "Despite the damage, half the hospital was back in use within a week and emergency surgical cases were being admitted three days after the raid.",
    sources: [
      { label: "Royal Observer Corps Association: The tragic Truro raid of 6 August 1942 (PDF)", url: "https://www.rocatwentytwelve.org/uploads/1/2/9/1/12917554/tragic_truro_raid_final.pdf" },
      { label: "Visit Truro: Remembrance service for the Truro air raid of 1942", url: "https://www.visittruro.org.uk/whats-on/remembrance-service-for-the-truro-air-raid-of-1942" }
    ]
  }
];

/* ---------- Penzance ---------- */
const penzanceRecords = [
  {
    id: "penzance-alma-terrace-1941",
    title: "Alma Terrace & St James Street",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "8 June 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 50.118,
    lng: -5.5412,
    bombType: "HE",
    casualties: 9,
    casualtiesNote: "Nine killed and 26 injured; hundreds of houses damaged.",
    summary: "Bombing struck the residential streets of Alma Terrace and St James Street, killing nine people and injuring 26. It was the deadliest single attack on Penzance in the whole war.",
    note: "Across the war Penzance recorded 16 dead, 48 houses completely destroyed and 157 seriously damaged, under more than 700 air raid alerts.",
    sources: [
      { label: "1st Line Defence: UXO risk in Penzance", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/penzance/" },
      { label: "Air raid news report on Penzance, June 1941", url: "https://djwilson22.wordpress.com/2018/12/30/air-raid-on-penzance-june-1941/" }
    ]
  },
  {
    id: "penzance-harbour-target",
    title: "Penzance Harbour & railway terminus",
    status: "reported",
    statusLabel: "Reported target area",
    date: "1940 to 1944",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 50.1178,
    lng: -5.533,
    bombType: "target-area",
    summary: "Home Office statistics record 211 weapons falling on the Municipal Borough of Penzance — 170 high-explosive bombs, 39 fire pots, one oil bomb and one parachute mine. The harbour, the neighbouring Newlyn harbour and the railway terminus were the principal draws.",
    note: "Area marker derived from borough-level Home Office bombing statistics, not a single incident.",
    sources: [
      { label: "1st Line Defence: UXO risk in Penzance (Home Office bombing statistics)", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/penzance/" }
    ]
  }
];

/* ---------- Bodmin ---------- */
const bodminRecords = [
  {
    id: "bodmin-mill-street-1942",
    title: "Gas works & Mill Street food depot",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "7 August 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 50.4701,
    lng: -4.7266,
    bombType: "HE",
    casualties: 9,
    casualtiesNote: "Nine killed and 18 injured; eight of the dead were from a single family, the Sargents, whose home was wrecked.",
    summary: "Two Focke-Wulf 190s ran a succession of bombs and cannon fire across the town. The Retort House at the gas works and the food depot in Mill Street were demolished, and houses in Mill Street and Berrycoombe Road destroyed or badly damaged.",
    note: "Part of a run of tip-and-run attacks across Cornwall over several days that August — the Truro and St Ives raids came from the same campaign.",
    sources: [
      { label: "Bodmin Keep: The Cornwall Blitz and the bombing of Bodmin", url: "https://bodminkeep.org/the-cornwall-blitz-and-the-bombing-of-bodmin" },
      { label: "Cornish Times: Memorial service on the anniversary of the Bodmin raid", url: "https://www.cornish-times.co.uk/news/memorial-service-being-held-on-anniversary-of-world-war-ii-bombing-raid-in-bodmin-705466" }
    ]
  }
];

/* ---------- St Ives ---------- */
const stIvesRecords = [
  {
    id: "st-ives-porthminster-1942",
    title: "Porthminster Beach & town centre",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "August 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point",
    lat: 50.2085,
    lng: -5.4775,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "One woman killed.",
    summary: "Two German fighters attacked St Ives, opening with machine-gun fire across Porthminster Beach before strafing the main streets and heading back out to sea. One woman was killed.",
    note: "Part of a run of tip-and-run attacks across Cornwall in August 1942; reported in The Cornishman on 3 September 1942.",
    sources: [
      { label: "The bombing of St Ives and the strafing of its beaches, August 1942", url: "https://djwilson22.wordpress.com/2018/11/14/the-bombing-of-st-ives-cornwall-and-the-strafing-of-its-beaches-by-the-luftwaffe-august-1942/" },
      { label: "IWM: When bombs fell — the air raids on Cornwall during the Second World War", url: "https://www.iwm.org.uk/collections/item/object/1500052235" }
    ]
  }
];

/* ---------- Regions ----------
   One entry per town: its records, where to fly when it's chosen, and the
   accent colour used in the selector.

   Note what `activeRegion` does and does not control. It is a *viewport*
   selection, not a data filter — every region's records are plotted at
   once (see the combined-layer block immediately below this object). The
   only things keyed off the active region are the hero copy, the raid-night
   pill, and where the map is pointing.

   Plymouth carries the full bomb-book-derived dataset plus the digitised
   potential-sites layer; the other towns are smaller hand-researched sets
   with no equivalent census imagery to digitise.
------------------------------------------------------------------- */
const regionData = {
  plymouth: {
    label: "Plymouth, Devon",
    short: "Plymouth",
    county: "Devon",
    accent: "var(--cyan)",
    records,
    center: [50.386, -4.154],
    zoom: 13,
    raidNights: 59,
    hasPotential: true
  },
  exeter: {
    label: "Exeter, Devon",
    short: "Exeter",
    county: "Devon",
    accent: "var(--amber)",
    records: exeterRecords,
    center: [50.7236, -3.5305],
    zoom: 14,
    raidNights: 19,
    hasPotential: false
  },
  torquay: {
    label: "Torquay, Devon",
    short: "Torquay",
    county: "Devon",
    accent: "var(--amber)",
    records: torquayRecords,
    center: [50.4715, -3.522],
    zoom: 14,
    raidNights: 40,
    hasPotential: false
  },
  paignton: {
    label: "Paignton, Devon",
    short: "Paignton",
    county: "Devon",
    accent: "var(--amber)",
    records: paigntonRecords,
    center: [50.4415, -3.5615],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  brixham: {
    label: "Brixham, Devon",
    short: "Brixham",
    county: "Devon",
    accent: "var(--amber)",
    records: brixhamRecords,
    center: [50.3963, -3.5135],
    zoom: 15,
    raidNights: 17,
    hasPotential: false
  },
  teignmouth: {
    label: "Teignmouth, Devon",
    short: "Teignmouth",
    county: "Devon",
    accent: "var(--amber)",
    records: teignmouthRecords,
    center: [50.546, -3.4955],
    zoom: 15,
    raidNights: 10,
    hasPotential: false
  },
  exmouth: {
    label: "Exmouth, Devon",
    short: "Exmouth",
    county: "Devon",
    accent: "var(--amber)",
    records: exmouthRecords,
    center: [50.6195, -3.4155],
    zoom: 15,
    raidNights: 14,
    hasPotential: false
  },
  dartmouth: {
    label: "Dartmouth, Devon",
    short: "Dartmouth",
    county: "Devon",
    accent: "var(--amber)",
    records: dartmouthRecords,
    center: [50.3535, -3.578],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  salcombe: {
    label: "Salcombe & Kingsbridge, Devon",
    short: "Salcombe",
    county: "Devon",
    accent: "var(--amber)",
    records: salcombeRecords,
    center: [50.2345, -3.775],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  "newton-abbot": {
    label: "Newton Abbot, Devon",
    short: "Newton Abbot",
    county: "Devon",
    accent: "var(--amber)",
    records: newtonAbbotRecords,
    center: [50.5295, -3.6111],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  falmouth: {
    label: "Falmouth, Cornwall",
    short: "Falmouth",
    county: "Cornwall",
    accent: "var(--green)",
    records: falmouthRecords,
    center: [50.1505, -5.053],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  truro: {
    label: "Truro, Cornwall",
    short: "Truro",
    county: "Cornwall",
    accent: "var(--green)",
    records: truroRecords,
    center: [50.2625, -5.055],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  penzance: {
    label: "Penzance, Cornwall",
    short: "Penzance",
    county: "Cornwall",
    accent: "var(--green)",
    records: penzanceRecords,
    center: [50.1182, -5.5375],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  "st-ives": {
    label: "St Ives, Cornwall",
    short: "St Ives",
    county: "Cornwall",
    accent: "var(--green)",
    records: stIvesRecords,
    center: [50.2095, -5.4785],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  bodmin: {
    label: "Bodmin, Cornwall",
    short: "Bodmin",
    county: "Cornwall",
    accent: "var(--green)",
    records: bodminRecords,
    center: [50.4707, -4.7258],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  }
};

/* ---------- One combined layer, always ----------
   Previously only the selected region's records existed on the map, so
   picking a town and zooming out left an empty map — every other town's
   records had been unloaded. That reads as "there's nothing there", which
   is the opposite of the truth.

   Now every region's records are plotted at once and stay plotted. Choosing
   a town moves the viewport; it never swaps the dataset. The status,
   weight and timeline filters apply across the whole set.
------------------------------------------------------------------- */
const TOWN_KEYS = Object.keys(regionData);

// Stamp each record with where it came from. A flat array loses the region
// context otherwise, and both search and the detail panel now need it.
TOWN_KEYS.forEach((key) => {
  const cfg = regionData[key];
  cfg.records.forEach((record) => {
    record.regionKey = key;
    record.regionLabel = cfg.label;
    record.regionShort = cfg.short || cfg.label;
    record.regionCounty = cfg.county || "";
  });
});

const ALL_RECORDS = TOWN_KEYS.flatMap((key) => regionData[key].records);

// Padded box that holds every plotted record — the opening view.
const ALL_BOUNDS = L.latLngBounds(ALL_RECORDS.map((r) => [r.lat, r.lng])).pad(0.08);

/* Pseudo-region meaning "no town selected". It sits in regionData so the
   selector, hero copy and stats pills can treat it like any other entry,
   but it's flagged isAll so the menu builder can pin it to the top rather
   than filing it under a county. */
const ALL_REGIONS_KEY = "all";
regionData[ALL_REGIONS_KEY] = {
  label: "Devon & Cornwall — all locations",
  short: "All locations",
  county: null,
  accent: "var(--cyan)",
  records: ALL_RECORDS,
  center: ALL_BOUNDS.getCenter(),
  zoom: 8,
  raidNights: null,
  hasPotential: true,
  isAll: true
};

let activeRegion = ALL_REGIONS_KEY;

function getActiveRecords() {
  return ALL_RECORDS;
}

/* ---------- Counties ----------
   Coverage now grows county by county, so the county — not the town — is
   the unit people navigate by. Towns don't disappear; they move into the
   search box, which finds them faster than a dropdown ever did and doesn't
   grow unusable as coverage spreads.

   Derived from the towns rather than declared separately, so adding a town
   to regionData with a `county` puts it in the right place here for free.

   These are modern ceremonial counties, which is what visitors recognise.
   Worth knowing they aren't identical to wartime administrative boundaries
   — Plymouth is its own unitary authority today but was part of Devon then.
   For navigation that difference doesn't matter; for any future claim about
   which county a record "belongs" to, it would.
------------------------------------------------------------------- */
const COUNTY_ALL = "all";

function buildCounties() {
  const counties = new Map();
  TOWN_KEYS.forEach((key) => {
    const cfg = regionData[key];
    const name = cfg.county;
    if (!name) return;
    if (!counties.has(name)) {
      counties.set(name, { name, accent: cfg.accent, townKeys: [], records: [] });
    }
    const entry = counties.get(name);
    entry.townKeys.push(key);
    entry.records.push(...cfg.records);
  });

  counties.forEach((entry) => {
    entry.bounds = L.latLngBounds(entry.records.map((r) => [r.lat, r.lng])).pad(0.15);
  });
  return counties;
}

const COUNTIES = buildCounties();
let activeCounty = COUNTY_ALL;

/* The potential-sites layer is Plymouth-only *data*, but it is part of the
   same single combined layer as everything else — it stays on the map
   whichever town is selected, rather than vanishing the moment you pick
   Exeter. Availability is therefore a question about the dataset, not about
   the current selection. The data script loads before this one (see the
   <script> order in index.html), so this is safe to read at parse time. */
const HAS_POTENTIAL_DATA =
  typeof POTENTIAL_BOMB_SITES !== "undefined" && POTENTIAL_BOMB_SITES.length > 0;

// The potential-sites layer is digitised from Plymouth mapping only, so the
// whole layer belongs to one county for scoping purposes.
const POTENTIAL_SITES_COUNTY = "Devon";

/* ---------- Which county is a record actually in? ----------
   Records are grouped into regions for editorial reasons, and a region's
   county is not always the county the record sits in. The Saltash records
   are the clear case: they are filed under Plymouth, because that is the
   raid they belong to, but Saltash is in Cornwall. Taking the county from
   the region put them in Devon and dropped them out of scope whenever
   Cornwall was selected — visibly wrong, since they are plotted well the
   Cornish side of the Tamar.

   So the county comes from the coordinates, tested against the same
   boundaries the map draws, and falls back to the region's county only when
   no polygon claims the point (a missing boundary file, or a record just
   offshore). Results are cached — the answer can't change during a session. */
const COUNTY_GEOMETRIES =
  typeof COUNTY_BOUNDARIES !== "undefined" && COUNTY_BOUNDARIES ? COUNTY_BOUNDARIES : {};

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
    // Ring 0 is the outline; any further ring is a hole punched out of it.
    let inHole = false;
    for (let i = 1; i < rings.length; i++) {
      if (pointInRing(lat, lng, rings[i])) { inHole = true; break; }
    }
    if (!inHole) return true;
  }
  return false;
}

const recordCountyCache = new Map();

function recordCounty(record) {
  if (recordCountyCache.has(record.id)) return recordCountyCache.get(record.id);
  let county = "";
  for (const [name, geometry] of Object.entries(COUNTY_GEOMETRIES)) {
    if (pointInGeometry(record.lat, record.lng, geometry)) { county = name; break; }
  }
  if (!county) county = record.regionCounty || "";
  recordCountyCache.set(record.id, county);
  return county;
}

function isOutsideSelection(county) {
  return activeCounty !== COUNTY_ALL && !!county && county !== activeCounty;
}

function isRecordOutOfScope(record) {
  return isOutsideSelection(recordCounty(record));
}

/* ---------- Modelled years for the potential-sites layer ----------
   The ~3,500 "potential sites" points (see below) carry no individual
   date — they're digitised from two secondary-source maps, not
   individually researched incidents. To let the timeline filter them too,
   each point is given a *modelled* year (1940–44), sampled from a rough
   year-weighting built from published Plymouth Blitz facts rather than
   from any per-point evidence:
     - First raid: 6 July 1940 (light, sporadic bombing through the year).
     - 1941 was overwhelmingly the heaviest year — "In early 1941, five
       raids reduced much of the city to rubble" (Wikipedia / Gill 1993),
       including the seven nights in March–April alone that accounted for
       6,000+ high-explosive bombs and 205,000 incendiaries citywide.
     - Raids continued at a lower level through 1942–43.
     - The 59th and final raid closed the Town Clerk's "bomb book" on
       30 April 1944, with only two minor raids that spring.
   This is a display aid for exploring the layer by period, not a claim
   about any individual point's true date — see README for the full
   caveat and the same treatment applied to the year-breakdown chart.
   Sources: Wikipedia "Plymouth Blitz"; Plymouth City Council,
   "Death/Destruction" and "Plymouth Blitz remembered 80 years on".
------------------------------------------------------------------- */
const BLITZ_YEAR_WEIGHTS = { 1940: 0.08, 1941: 0.70, 1942: 0.13, 1943: 0.06, 1944: 0.03 };

// Deterministic PRNG (mulberry32) — same seed every load, so a given point
// always lands on the same modelled year rather than reshuffling on refresh.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function assignEstimatedYears(points) {
  const years = Object.keys(BLITZ_YEAR_WEIGHTS).map(Number);
  const total = years.reduce((sum, y) => sum + BLITZ_YEAR_WEIGHTS[y], 0);
  const cumulative = [];
  years.reduce((acc, y) => {
    const next = acc + BLITZ_YEAR_WEIGHTS[y] / total;
    cumulative.push(next);
    return next;
  }, 0);
  const rand = mulberry32(19400706); // seed: 6 July 1940, the first raid
  points.forEach((p) => {
    const r = rand();
    const idx = cumulative.findIndex((c) => r <= c);
    p.estYear = years[idx === -1 ? years.length - 1 : idx];
  });
  return points;
}

// Timeline domain: confirmed-record years, plus (for Plymouth) the modelled
// 1940–44 potential-sites years, so scrubbing the timeline reveals both
// layers together instead of leaving the potential layer static.
function computeSortedYears() {
  const years = new Set(getActiveRecords().map((r) => r.sortYear));
  if (HAS_POTENTIAL_DATA) {
    Object.keys(BLITZ_YEAR_WEIGHTS).forEach((y) => years.add(Number(y)));
  }
  return [...years].sort((a, b) => a - b);
}

let sortedYears = computeSortedYears();
let yearIndex = sortedYears.length; // sortedYears.length === "all years"
let playTimer = null;

function currentYearCeiling() {
  return yearIndex >= sortedYears.length ? Infinity : sortedYears[yearIndex];
}

// Heatmap view — hidden until this flag flips true, then confirmed
// records + potential sites blend into a Leaflet.heat density surface
// instead of individual markers/dots. Declared this early so the
// potential-layer render function (defined below, and invoked as soon as
// the data script loads) can already read it safely.
let heatmapMode = false;
let heatLayer = null;

// Opens on the full extent of the data rather than one city, so the first
// thing a visitor sees is how much is plotted and where.
const map = L.map("map", {
  scrollWheelZoom: false,
  zoomControl: false
}).fitBounds(ALL_BOUNDS);

L.control.zoom({ position: "bottomright" }).addTo(map);

/* ---------- Theme: Light / System / Dark ----------
   The <html data-theme> attribute is set before first paint by the inline
   bootstrap in index.html (see the comment there — it exists to stop a
   dark-mode visitor seeing a white flash). This module owns everything
   after that: the segmented control, persistence, and keeping the basemap
   in step.

   Two separate pieces of state, deliberately:
     - themePref     "light" | "dark" | "system"  — what the visitor chose
     - resolvedTheme "light" | "dark"             — what's actually painted
   "System" is a live subscription, not a one-off read: if the OS flips at
   sunset, the page follows without a reload.
------------------------------------------------------------------- */
const THEME_KEY = "pbm-theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const TILE_URLS = {
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
};

function readThemePref() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch (e) {
    return "system"; // Safari private mode throws on localStorage access
  }
}

let themePref = readThemePref();
const resolveTheme = () => (themePref === "system" ? (darkQuery.matches ? "dark" : "light") : themePref);

const tileLayer = L.tileLayer(TILE_URLS[resolveTheme()], {
  maxZoom: 19,
  subdomains: "abcd",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
}).addTo(map);

const themeToggle = document.getElementById("themeToggle");
const themeOptions = themeToggle ? [...themeToggle.querySelectorAll(".theme-opt")] : [];

function applyTheme() {
  const resolved = resolveTheme();
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-theme-pref", themePref);

  tileLayer.setUrl(TILE_URLS[resolved]);

  themeOptions.forEach((btn) => {
    const selected = btn.dataset.themeSet === themePref;
    btn.setAttribute("aria-checked", String(selected));
    // Roving tabindex: the group is one tab stop, arrow keys move within it.
    btn.tabIndex = selected ? 0 : -1;
  });

  // Keeps the mobile browser chrome (address bar) in step with the page.
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.remove());
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = resolved === "dark" ? "#0b0f17" : "#f7f4ec";
  document.head.appendChild(meta);
}

function setThemePref(pref) {
  themePref = pref;
  try {
    if (pref === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, pref);
  } catch (e) { /* storage unavailable — theme still applies for this session */ }
  applyTheme();
}

themeOptions.forEach((btn, i) => {
  btn.addEventListener("click", () => setThemePref(btn.dataset.themeSet));
  btn.addEventListener("keydown", (e) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1
        : 0;
    if (!step) return;
    e.preventDefault();
    const next = themeOptions[(i + step + themeOptions.length) % themeOptions.length];
    setThemePref(next.dataset.themeSet);
    next.focus();
  });
});

// Only meaningful while the visitor is on "System" — applyTheme() re-resolves
// and no-ops if they've since pinned light or dark.
const onSystemThemeChange = () => { if (themePref === "system") applyTheme(); };
if (typeof darkQuery.addEventListener === "function") darkQuery.addEventListener("change", onSystemThemeChange);
else darkQuery.addListener(onSystemThemeChange); // Safari < 14

applyTheme();

// The map now fills the hero section — give it a nudge once it's settled
// into its final on-screen size (fonts/layout can shift it after first paint).
window.addEventListener("load", () => map.invalidateSize());
window.addEventListener("resize", () => map.invalidateSize());
setTimeout(() => map.invalidateSize(), 300);

/* ---------- Potential bomb sites layer (undigitized bomb census) ----------
   These ~3,500 points are NOT individually verified incidents — they come
   from image analysis of two independent secondary sources, neither of
   which is individually confirmed the way the 14 records above are:
     1. "1940s-map" (2,537 pts, cat "undifferentiated") — a WWII Home Office
        bomb census map (Plymouth City Council copyright; matches "Where the
        bombs fell — Plymouth centre", Flickr user jamiegaquinn, 2011).
        OpenCV blob detection finds each ink dot, k-means splits dots that
        overlap/touch, georeferenced against 19 borough-wide landmarks.
     2. "gmaps-overlay" (954 pts, cat "HE"/"incendiary"/"unknown") — a
        user-supplied Google Maps screenshot with colour-coded pins already
        placed on a modern satellite basemap. Colour-thresholded blob
        detection + k-means splitting, georeferenced against 11 well-known
        Plymouth landmarks (Tamar Bridge, Royal Citadel, Derriford Hospital,
        etc.) — despite the modern basemap, this did NOT come out more
        accurate than source 1, because the bottleneck is our own
        unverified recollection of landmark coordinates (no network
        geocoding was available), not image quality.
   Every point here should be read as "somewhere in this neighbourhood," not
   a precise address — full methodology, per-source error figures, and
   known limitations are in data/potential-bomb-sites.csv and the README.
   Rendered with L.canvas() per the project's own performance guidance for
   500+ markers — regular SVG/DOM markers would be far too slow at this count.
------------------------------------------------------------------------- */
const potentialPane = L.canvas({ padding: 0.5 });
let potentialLayer = null;
let potentialSitesData = [];
const potentialToggle = document.getElementById("potentialToggle");
const potentialCount = document.getElementById("potentialCount");
const potentialGroup = document.querySelector(".potential-group");
const potentialZoomNote = document.getElementById("potentialZoomNote");

// Declared here (rather than down with the other filter state) because
// renderPotentialLayer() below reads it and can run as early as page load —
// a `let` declared later in the file would throw a temporal-dead-zone
// ReferenceError at that point and halt the whole script.
let currentWeightBand = "all"; // "all" | "min-max" (kg)

const potentialColors = {
  HE: "#FF5252",
  incendiary: "#4CAF50",
  unknown: "#3F51B5",
  undifferentiated: "#9CA3AF"
};

const potentialLabels = {
  HE: "Potential site — high explosive (approximate, undigitized)",
  incendiary: "Potential site — incendiary (approximate, undigitized)",
  unknown: "Potential site — type unknown (approximate, undigitized)",
  undifferentiated: "Potential bomb site — approximate, undigitized"
};

/* ---------- Weight filter vs the potential-sites layer ----------
   Confirmed records carry a real weightKg, so a band like "250-499kg" is an
   exact match against them. The potential-sites layer carries no weight at
   all — only a type category — so a band can never be *matched* there, only
   used to rule points out.

   What we can honestly exclude: incendiaries, which aren't weighted HE bombs.
   What we must keep: "undifferentiated" (the census map's own dots, printed
   with no type at all) and "unknown". Dropping those would assert they aren't
   high explosive, which the source doesn't say — and it's what made the filter
   look broken, since it wiped 2,397 census dots off the map the moment any
   band was picked.
------------------------------------------------------------------- */
function potentialMatchesWeight(p) {
  if (currentWeightBand === "all") return true;
  return p.cat !== "incendiary";
}

const weightCaveat = document.getElementById("weightCaveat");

function updateWeightCaveat() {
  if (!weightCaveat) return;
  if (currentWeightBand === "all") {
    weightCaveat.hidden = true;
    weightCaveat.textContent = "";
    return;
  }
  weightCaveat.hidden = false;
  weightCaveat.textContent =
    "Potential sites aren't filtered by weight — the source maps don't record it. " +
    "Incendiaries are hidden; the rest stay visible because their type is unrecorded, not because it matches.";
}

const yearBreakdownEl = document.getElementById("yearBreakdown");

// Renders the small "estimated bombs by year" bar chart from the full,
// unfiltered modelled distribution — a reference for the layer as a whole,
// so it doesn't jump around as the weight/status filters change.
function renderYearBreakdown() {
  if (!yearBreakdownEl) return;
  if (!HAS_POTENTIAL_DATA || !potentialSitesData.length) {
    yearBreakdownEl.hidden = true;
    yearBreakdownEl.innerHTML = "";
    return;
  }
  const years = Object.keys(BLITZ_YEAR_WEIGHTS).map(Number).sort((a, b) => a - b);
  const counts = {};
  potentialSitesData.forEach((p) => { counts[p.estYear] = (counts[p.estYear] || 0) + 1; });
  const max = Math.max(...years.map((y) => counts[y] || 0), 1);
  yearBreakdownEl.innerHTML = years
    .map((y) => {
      const c = counts[y] || 0;
      const h = Math.round((c / max) * 40) + 4;
      return `<div class="year-bar" title="~${c.toLocaleString("en-GB")} modelled points, ${y}">
        <div class="year-bar-track"><div class="year-bar-fill" style="height:${h}px"></div></div>
        <span class="year-bar-year">${y}</span>
        <span class="year-bar-count">${c.toLocaleString("en-GB")}</span>
      </div>`;
    })
    .join("");
  yearBreakdownEl.hidden = false;
}

/* ---------- Zoom gate for the potential-sites layer ----------
   Three thousand coloured dots inside one city are legible at street zoom
   and meaningless at national zoom: they collapse into a single saturated
   blob over Plymouth that reads as an artefact of the map rather than as
   data, and visually outweighs fifteen towns of individually researched
   records. Below this zoom the layer is withheld and the sidebar says so,
   rather than the checkbox silently lying about what's on screen.

   Set at 11 — roughly "one city fills the viewport". Above it the dots
   separate; below it they merge. */
const POTENTIAL_MIN_ZOOM = 11;

function potentialZoomAllowed() {
  return map.getZoom() >= POTENTIAL_MIN_ZOOM;
}

// Redraw when crossing the threshold, not on every zoom step — rebuilding a
// three-thousand-point layer mid-pinch is wasted work.
let lastPotentialZoomState = null;

function handlePotentialZoomChange() {
  const allowed = potentialZoomAllowed();
  if (allowed === lastPotentialZoomState) return;
  lastPotentialZoomState = allowed;
  if (potentialZoomNote) potentialZoomNote.hidden = allowed;
  updatePotentialCounts();
  renderPotentialLayer();
  refreshHeatLayer();
}

function renderPotentialLayer() {
  if (potentialLayer) { map.removeLayer(potentialLayer); potentialLayer = null; }
  // Plymouth-only layer — Exeter has no equivalent digitised dataset here.
  if (!HAS_POTENTIAL_DATA) return;
  if (!potentialToggle.checked || !potentialSitesData.length) return;
  if (!potentialZoomAllowed()) return;
  // Plymouth-only data, so the whole layer is out of scope the moment a
  // county other than Devon is selected.
  if (isOutsideSelection(POTENTIAL_SITES_COUNTY)) return;
  const yearCeiling = currentYearCeiling();
  // A weight filter isolates high explosives: the potential-sites layer has
  // no per-point weight data, only a type category, so when a weight band is
  // active we can only narrow it down to "HE" points (the closest available
  // proxy) rather than an exact weight match. The timeline filters by each
  // point's *modelled* year (see assignEstimatedYears above) the same way it
  // filters the confirmed records by sortYear.
  const points = potentialSitesData.filter((p) => {
    if (!potentialMatchesWeight(p)) return false;
    return typeof p.estYear !== "number" || p.estYear <= yearCeiling;
  });
  // In heatmap mode the individual dots are replaced by the density layer —
  // still build the layer group (cheap) but don't add it to the map.
  if (heatmapMode) return;
  potentialLayer = L.layerGroup(
    points.map((p) => {
      const cat = p.cat || "undifferentiated";
      return L.circleMarker([p.lat, p.lng], {
        renderer: potentialPane,
        radius: 2.5,
        weight: 0,
        fillColor: potentialColors[cat] || potentialColors.undifferentiated,
        fillOpacity: 0.6
      }).bindTooltip(`${potentialLabels[cat] || potentialLabels.undifferentiated} — est. ${p.estYear}`, { direction: "top", sticky: true });
    })
  ).addTo(map);
}

function updatePotentialAvailability() {
  if (!potentialToggle) return;
  if (!HAS_POTENTIAL_DATA) {
    potentialToggle.disabled = true;
    potentialCount.textContent = "Plymouth only";
    if (potentialLayer) { map.removeLayer(potentialLayer); potentialLayer = null; }
    renderYearBreakdown();
    return;
  }
  potentialToggle.disabled = false;
  updatePotentialCounts();
  renderPotentialLayer();
  renderYearBreakdown();
}

// Reflects what's actually plotted, so the number moves with the weight filter
// instead of advertising a total the map isn't showing.
function updatePotentialCounts() {
  if (!potentialSitesData.length) {
    potentialCount.textContent = "unavailable";
    return;
  }
  // Say "zoom in" rather than a count the map isn't currently honouring —
  // a number next to a ticked box that draws nothing is just confusing.
  if (!potentialZoomAllowed()) {
    potentialCount.textContent = "zoom in";
    if (potentialGroup) potentialGroup.classList.add("is-zoom-gated");
    return;
  }
  if (potentialGroup) potentialGroup.classList.remove("is-zoom-gated");
  potentialCount.textContent = potentialSitesData
    .filter(potentialMatchesWeight)
    .length.toLocaleString("en-GB");
}

if (potentialToggle) {
  // Loaded from data/potential-bomb-sites.js as a plain global (see the
  // <script> tag in index.html) rather than via fetch(), because fetching a
  // local JSON file is blocked by browsers when index.html is opened
  // directly (file://) rather than served over http:// — a script tag works
  // either way. This dataset is Plymouth-only.
  if (typeof POTENTIAL_BOMB_SITES !== "undefined" && POTENTIAL_BOMB_SITES.length) {
    potentialSitesData = POTENTIAL_BOMB_SITES;
    assignEstimatedYears(potentialSitesData);
    updatePotentialCounts();
    renderPotentialLayer();
    renderYearBreakdown();
  } else {
    potentialCount.textContent = "unavailable";
    potentialToggle.disabled = true;
  }

  potentialToggle.addEventListener("change", () => {
    renderPotentialLayer();
    refreshHeatLayer();
    saveUiState();
  });
}

/* ---------- Heatmap view ----------
   Blends confirmed records (weighted higher — these are individually
   sourced) with the potential-sites layer (weighted lower — modelled/
   undigitised) into a single Leaflet.heat density surface, so it's obvious
   at a glance which neighbourhoods took the worst of it. Respects the same
   status/weight/timeline/potential-toggle filters as the marker views.
------------------------------------------------------------------- */
const heatmapToggle = document.getElementById("heatmapToggle");
const heatmapLegend = document.getElementById("heatmapLegend");

function refreshHeatLayer() {
  if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }
  if (!heatmapMode || typeof L.heatLayer !== "function") return;

  const heatPoints = visibleRecords().map((r) => [r.lat, r.lng, r.status === "historic" ? 0.6 : 1]);

  if (HAS_POTENTIAL_DATA && potentialToggle.checked && potentialSitesData.length) {
    const yearCeiling = currentYearCeiling();
    potentialSitesData.forEach((p) => {
      if (!potentialMatchesWeight(p)) return;
      if (typeof p.estYear === "number" && p.estYear > yearCeiling) return;
      heatPoints.push([p.lat, p.lng, 0.35]);
    });
  }

  heatLayer = L.heatLayer(heatPoints, {
    radius: 22,
    blur: 22,
    max: 6,
    maxZoom: 17,
    minOpacity: 0.25,
    gradient: { 0.15: "#00f2fe", 0.45: "#00f2fe", 0.7: "#ff9f43", 1: "#ff5252" }
  }).addTo(map);
}

if (heatmapToggle) {
  heatmapToggle.addEventListener("change", () => {
    heatmapMode = heatmapToggle.checked;
    if (heatmapLegend) heatmapLegend.hidden = !heatmapMode;
    renderMarkers();
    renderPotentialLayer();
    refreshHeatLayer();
    saveUiState();
  });
}

const colors = {
  found: "#c94f3d",
  reported: "#d69b2d",
  historic: "#4169a8"
};

let currentFilter = "all";
let activeId = getActiveRecords()[0].id;
const markers = new Map();
// Positional-uncertainty circles, keyed by record id alongside their marker.
const accuracyCircles = new Map();

// The town selector lives in its own floating box (.location-select, docked to
// the top of the map) and is wired up independently below, so a plain
// ".filter-group .filter" selector here is unambiguous.
const filterButtons = document.querySelectorAll(".filter-group .filter");
const timelineSlider = document.getElementById("timelineSlider");
const timelineValue = document.getElementById("timelineValue");
const timelinePlay = document.getElementById("timelinePlay");

function markerIcon(record) {
  return L.divIcon({
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
    html: `
      <div class="marker-target marker-${record.status}">
        <span class="ring-outer"></span>
        <span class="ring-mid"><span class="ring-core"></span></span>
      </div>
    `
  });
}

function matchesWeightBand(record) {
  if (currentWeightBand === "all") return true;
  // Selecting any weight band isolates high explosives: only bombs with a
  // recorded HE weight can match a band, so incendiary/unspecified/unknown
  // records drop out of view as a side effect.
  if (record.bombType !== "HE" || typeof record.weightKg !== "number") return false;
  const [min, max] = currentWeightBand.split("-").map(Number);
  return record.weightKg >= min && record.weightKg <= max;
}

/* Selecting a county now scopes the data, not just the viewport: records in
   other counties come off the map entirely. Showing them stepped back read
   as clutter — at a glance you could not tell which plots the selection
   actually referred to.

   This is the single place scope is decided, so the markers, the accuracy
   halos, the heatmap and the stats pills can't disagree with each other. */
function visibleRecords() {
  const yearCeiling = currentYearCeiling();
  return getActiveRecords().filter((record) => {
    const matchesFilter = currentFilter === "all" || record.status === currentFilter;
    const matchesYear = record.sortYear <= yearCeiling;
    const inScope = !isRecordOutOfScope(record);
    return inScope && matchesFilter && matchesYear && matchesWeightBand(record);
  });
}

/* ---------- Right-hand record detail panel ----------
   Clicking a marker flies the map in, draws that record's evacuation cordon
   (when a radius is known) as a persistent overlay, and populates this panel
   with what/when/how-it-was-made-safe/casualty detail — replacing the old
   Leaflet popup. Future idea (flagged, not built yet): a paired modern
   Street View + archival photo comparison per marker — see the placeholder
   block below and mind image copyright/licensing before adding real photos.
------------------------------------------------------------------------- */
const detailPanel = document.getElementById("detailPanel");
const detailBody = document.getElementById("detailBody");
const detailClose = document.getElementById("detailClose");
let detailCordonCircle = null;
let detailCordonCenter = null;

function formatKg(kg) {
  return `${kg.toLocaleString("en-GB")}kg`;
}

function detailStatsHtml(record) {
  const stats = [];
  if (typeof record.weightKg === "number") {
    stats.push({ label: "Bomb weight", value: formatKg(record.weightKg) });
  } else if (record.bombType && record.bombType !== "unspecified") {
    stats.push({ label: "Bomb type", value: record.bombType });
  }
  if (record.cordonRadiusM) {
    const grew = record.initialCordonRadiusM && record.initialCordonRadiusM !== record.cordonRadiusM;
    stats.push({
      label: "Cordon radius",
      value: grew ? `${record.initialCordonRadiusM}m → ${record.cordonRadiusM}m` : `${record.cordonRadiusM}m`
    });
  }
  if (typeof record.casualties === "number") {
    stats.push({ label: "Casualties", value: record.casualties === 0 ? "None reported" : String(record.casualties) });
  }
  if (record.evacuationPeople) {
    stats.push({ label: "People evacuated", value: `~${record.evacuationPeople.toLocaleString("en-GB")}` });
  }
  if (record.evacuationProperties) {
    stats.push({ label: "Properties evacuated", value: `~${record.evacuationProperties.toLocaleString("en-GB")}` });
  }
  // Always shown, and deliberately last: it's the caveat that qualifies
  // everything above it, and it matches the circle drawn on the map.
  stats.push({ label: "Position accuracy", value: `±${accuracyRadiusM(record)}m` });

  if (!stats.length) return "";
  return `<div class="detail-stats">${stats
    .map((s) => `<div class="detail-stat"><span class="detail-stat-label">${s.label}</span><span class="detail-stat-value">${s.value}</span></div>`)
    .join("")}</div>`;
}

function detailSectionHtml(label, text) {
  if (!text) return "";
  return `<div class="detail-section"><span class="detail-section-label">${label}</span><p>${text}</p></div>`;
}

function detailContent(record) {
  const sourceLinks = (record.sources || [])
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`)
    .join("");
  const evacuationText = record.evacuationNote || null;

  return `
    <span class="detail-status">${record.statusLabel} · ${record.confidence}</span>
    <h3>${record.title}</h3>
    <p class="detail-date">${record.date}</p>
    ${detailStatsHtml(record)}
    ${detailSectionHtml("What happened", record.summary)}
    ${detailSectionHtml("How it was made safe", record.disposal)}
    ${detailSectionHtml("Evacuation", evacuationText)}
    ${detailSectionHtml("Also worth knowing", record.note)}
    ${detailSectionHtml("Casualty note", record.casualtiesNote)}
    <div class="detail-section">
      <span class="detail-section-label">Then &amp; now</span>
      <div class="detail-photo-placeholder">Street View / archival photo comparison — planned for a future update. Any archival images used here will need clear copyright/licensing from their holder (e.g. The Box, Plymouth) before publishing.</div>
    </div>
    ${sourceLinks ? `<div class="detail-section"><span class="detail-section-label">Sources</span><div class="detail-sources">${sourceLinks}</div></div>` : ""}
  `;
}

function clearDetailCordon() {
  if (detailCordonCircle) { map.removeLayer(detailCordonCircle); detailCordonCircle = null; }
  if (detailCordonCenter) { map.removeLayer(detailCordonCenter); detailCordonCenter = null; }
}

function drawDetailCordon(record) {
  clearDetailCordon();
  if (!record.cordonRadiusM) return;
  const color = "#4169a8";
  detailCordonCenter = L.circleMarker([record.lat, record.lng], {
    radius: 5, color, fillColor: color, fillOpacity: 1, weight: 2
  }).addTo(map);
  detailCordonCircle = L.circle([record.lat, record.lng], {
    radius: record.cordonRadiusM, color, weight: 1.5, fillColor: color, fillOpacity: 0.12,
    className: "detail-cordon-pulse"
  }).addTo(map);
}

/* ---------- Panel stacking ----------
   The record detail and the cordon checker are both anchored bottom-right on
   desktop and both become full-width bottom sheets below 900px, so with an
   incident running they landed on top of each other.

   Desktop: the detail panel's lower edge lifts clear of the cordon card.
   Phone/tablet: two stacked sheets would swallow the screen, so the cordon
   checker collapses to a one-line bar. It collapses rather than closing
   because during a live incident "am I inside the cordon?" has to stay
   reachable — it's the one genuinely urgent thing on the page.
------------------------------------------------------------------- */
const cordonPeek = document.getElementById("cordonPeek");
const stackedSheets = window.matchMedia("(max-width: 900px)");

function syncPanelStacking() {
  const cordonOpen = cordonCard && !cordonCard.hidden;
  const detailOpen = detailPanel && !detailPanel.hidden;

  document.body.classList.toggle("has-cordon", !!cordonOpen);

  if (cordonCard) {
    // Only collapse when both are competing for the bottom of a small screen.
    const shouldCompact = !!(cordonOpen && detailOpen && stackedSheets.matches);
    cordonCard.classList.toggle("is-compact", shouldCompact);
  }

  // Publish the cordon card's height so the detail panel can sit above it.
  const h = cordonOpen ? Math.round(cordonCard.getBoundingClientRect().height) : 0;
  document.documentElement.style.setProperty("--cordon-h", `${h}px`);
}

function openDetailPanel(record) {
  detailBody.innerHTML = detailContent(record);
  detailPanel.hidden = false;
  syncPanelStacking();
}

function closeDetailPanel() {
  detailPanel.hidden = true;
  clearDetailCordon();
  syncPanelStacking();
}

if (cordonPeek) {
  cordonPeek.addEventListener("click", () => {
    // Expanding the checker gives it the bottom of the screen back.
    closeDetailPanel();
    cordonCard.classList.remove("is-compact");
    syncPanelStacking();
  });
}

stackedSheets.addEventListener("change", syncPanelStacking);
window.addEventListener("resize", syncPanelStacking);

if (detailClose) detailClose.addEventListener("click", closeDetailPanel);

function selectRecord(id, pan = true) {
  const active = getActiveRecords();
  const record = active.find((item) => item.id === id) || visibleRecords()[0] || active[0];
  activeId = record.id;

  const marker = markers.get(record.id);
  if (marker && pan) {
    map.flyTo([record.lat, record.lng], Math.max(map.getZoom(), 15), { duration: 0.9 });
  }
  drawDetailCordon(record);
  openDetailPanel(record);
}

// Raid-night counts per region — Plymouth's 59 comes from the Town Clerk's
// wartime "bomb book" (6 July 1940 to 30 April 1944, see the timeline/README);
// Exeter's 19, Exmouth's 14 and Teignmouth's 10 come from the sources cited on
// those regions' records. Towns where no published raid count was found carry
// `raidNights: null` and show an em dash rather than an invented figure.
const statTotalBombs = document.getElementById("statTotalBombs");
const statRaidNights = document.getElementById("statRaidNights");
const statRaidNightsLabel = document.getElementById("statRaidNightsLabel");

function updateStatsPills() {
  if (statTotalBombs) statTotalBombs.textContent = String(markers.size);
  if (!statRaidNights) return;

  // Raid-night counts exist per town, from each town's own sources. Summing
  // them across a county would invent a statistic, so at county level the
  // pill reports how many towns are covered instead.
  if (activeCounty === COUNTY_ALL) {
    if (statRaidNightsLabel) statRaidNightsLabel.textContent = "Counties";
    statRaidNights.textContent = String(COUNTIES.size);
    return;
  }

  const entry = COUNTIES.get(activeCounty);
  if (statRaidNightsLabel) statRaidNightsLabel.textContent = "Towns";
  statRaidNights.textContent = entry ? String(entry.townKeys.length) : "—";
}

/* ---------- Positional uncertainty ----------
   Almost none of these positions are survey-grade. Most are derived from a
   street name in a written record, which locates an incident to a road, not
   to a doorstep — plotting that as a sharp pin claims a precision the source
   does not support, and invites exactly the "why isn't this on Fore Street?"
   question it deserves.

   So each record also gets a translucent circle sized by how the position was
   arrived at. The pin still marks the best estimate; the circle is the honest
   margin around it. Radii are deliberately generous rather than flattering.
------------------------------------------------------------------- */
const ACCURACY_RADII = [
  [/building-level/i, 30],
  [/landmark/i, 90],
  [/street-derived|street level/i, 150],
  [/confirmed incident/i, 60],
  [/approximate/i, 250],
  [/rough area|target area|area$/i, 500]
];

function accuracyRadiusM(record) {
  if (typeof record.accuracyRadiusM === "number") return record.accuracyRadiusM;
  const confidence = record.confidence || "";
  for (const [pattern, radius] of ACCURACY_RADII) {
    if (pattern.test(confidence)) return radius;
  }
  return 200; // unlabelled confidence — assume the worse case, not the better
}

function renderMarkers() {
  const wasOpen = !detailPanel.hidden;
  const previousActiveId = activeId;
  markers.forEach((marker) => marker.remove());
  markers.clear();
  accuracyCircles.forEach((circle) => circle.remove());
  accuracyCircles.clear();

  visibleRecords().forEach((record) => {
    if (!heatmapMode) {
      const circle = L.circle([record.lat, record.lng], {
        radius: accuracyRadiusM(record),
        interactive: false,
        color: "#00f2fe",
        weight: 1,
        opacity: 0.28,
        fillColor: "#00f2fe",
        fillOpacity: 0.07
      }).addTo(map);
      accuracyCircles.set(record.id, circle);
    }

    const marker = L.marker([record.lat, record.lng], { icon: markerIcon(record) });
    marker.on("click", () => selectRecord(record.id, true));
    // In heatmap mode, individual markers give way to the density layer —
    // still tracked in the `markers` map (for stats + detail lookups) but
    // not added to the map itself.
    if (!heatmapMode) marker.addTo(map);
    markers.set(record.id, marker);
  });

  // If a filter/timeline change removes the record currently shown in the
  // detail panel, close the panel rather than leaving stale info on screen.
  if (wasOpen && !markers.has(previousActiveId)) closeDetailPanel();

  updateStatsPills();
  refreshHeatLayer();
}

function updateTimelineLabel() {
  timelineValue.textContent = yearIndex >= sortedYears.length ? "All years" : `Up to ${sortedYears[yearIndex]}`;
}

function applyTimelineChange() {
  updateTimelineLabel();
  renderMarkers();
  renderPotentialLayer();
}

// Recomputes the timeline's year bounds against whichever region is active
// and resets the slider to "all years". Called on load and on region switch.
function resetTimelineBounds() {
  if (playTimer) { clearInterval(playTimer); playTimer = null; timelinePlay.textContent = "▶"; }
  sortedYears = computeSortedYears();
  yearIndex = sortedYears.length;
  timelineSlider.max = String(sortedYears.length);
  timelineSlider.value = String(yearIndex);
  updateTimelineLabel();
}

function initTimeline() {
  timelineSlider.max = String(sortedYears.length);
  timelineSlider.value = String(yearIndex);
  updateTimelineLabel();

  timelineSlider.addEventListener("input", () => {
    yearIndex = parseInt(timelineSlider.value, 10);
    applyTimelineChange();
  });

  timelinePlay.addEventListener("click", () => {
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
      timelinePlay.textContent = "▶";
      return;
    }
    timelinePlay.textContent = "❚❚";
    let cursor = yearIndex >= sortedYears.length ? 0 : yearIndex;
    playTimer = setInterval(() => {
      cursor = (cursor + 1) % (sortedYears.length + 1);
      yearIndex = cursor;
      timelineSlider.value = String(cursor);
      applyTimelineChange();
      if (cursor === sortedYears.length) {
        clearInterval(playTimer);
        playTimer = null;
        timelinePlay.textContent = "▶";
      }
    }, 1300);
  });
}

/* ---------- Cordon tool ----------
   Live incident (TEST PHASE) — a plain on/off toggle in the nav, no
   passcode gate. This is a placeholder while the real access-control
   approach is decided; it's easy to swap back to a gated version later.
   The public "Am I inside an evacuation radius?" simulator entry point has
   been removed from the control panel; this tool now only activates via
   Live Incident mode.
------------------------------------------------------------------ */
const incidentToggle = document.getElementById("incidentToggle");

const incidentAlert = document.getElementById("incidentAlert");
const incidentHeadline = document.getElementById("incidentHeadline");
const incidentStatus = document.getElementById("incidentStatus");
const incidentUpdated = document.getElementById("incidentUpdated");
const incidentFlagLabel = document.getElementById("incidentFlagLabel");
const incidentRadius = document.getElementById("incidentRadius");
const incidentTicker = document.getElementById("incidentTicker");
const incidentTickerTrack = document.getElementById("incidentTickerTrack");
const cordonCard = document.getElementById("cordonCard");
const cordonCardTitle = document.getElementById("cordonCardTitle");
const cordonCardIntro = document.getElementById("cordonCardIntro");
const cordonSearchInput = document.getElementById("cordonSearchInput");
const cordonSearchBtn = document.getElementById("cordonSearchBtn");
const cordonResult = document.getElementById("cordonResult");
const cordonClear = document.getElementById("cordonClear");
const endLiveIncidentBtn = document.getElementById("endLiveIncidentBtn");
const siteHeader = document.querySelector(".site-header");
const mapEl = document.getElementById("map");

let liveIncident = false;
let cordonCircle = null;
let cordonCenterMarker = null;
let cordonCheckMarker = null;

// Radius currently in force. Overwritten by the value in incident.json when a
// real incident is published; 300m is the default used for rehearsals.
let cordonRadiusM = 300;

// ?preview=1 exposes the rehearsal toggle in the header. Nothing else about
// the page changes, and normal visitors never see it.
const previewMode = new URLSearchParams(location.search).has("preview");
if (previewMode && incidentToggle) incidentToggle.hidden = false;

function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function setCordonResult(text, kind) {
  cordonResult.hidden = false;
  cordonResult.className = `cordon-result ${kind}`;
  cordonResult.textContent = text;
}

function clearCordon(resetResult = true) {
  if (cordonCircle) { map.removeLayer(cordonCircle); cordonCircle = null; }
  if (cordonCenterMarker) { map.removeLayer(cordonCenterMarker); cordonCenterMarker = null; }
  if (cordonCheckMarker) { map.removeLayer(cordonCheckMarker); cordonCheckMarker = null; }
  if (resetResult) cordonResult.hidden = true;
}

function placeCordon(lat, lng, radiusM) {
  clearCordon();
  if (typeof radiusM === "number" && radiusM > 0) cordonRadiusM = radiusM;
  const color = liveIncident ? "#7a1f16" : "#4169a8";
  cordonCenterMarker = L.circleMarker([lat, lng], {
    radius: 6, color, fillColor: color, fillOpacity: 1, weight: 2
  }).addTo(map);
  cordonCircle = L.circle([lat, lng], {
    radius: cordonRadiusM, color, weight: 1.5, fillColor: color, fillOpacity: 0.12,
    dashArray: liveIncident ? null : "4 6",
    className: liveIncident ? "cordon-pulse" : ""
  }).addTo(map);
  map.flyTo([lat, lng], Math.max(map.getZoom(), 14), { duration: 0.7 });
  setCordonResult(
    `${liveIncident ? "Live" : "Simulated"} cordon set — ${cordonRadiusM}m evacuation radius.`,
    "neutral"
  );
}

async function geocodePlymouth(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=gb&viewbox=-4.22,50.44,-4.05,50.32&bounded=1&q=${encodeURIComponent(query + ", Plymouth")}`;
  const res = await fetch(url, { headers: { "Accept-Language": "en-GB" } });
  const data = await res.json();
  return data && data.length ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) } : null;
}

async function checkCordonAddress() {
  if (!cordonCircle) {
    setCordonResult("Place a cordon on the map first.", "neutral");
    return;
  }
  const query = cordonSearchInput.value.trim();
  if (!query) return;
  setCordonResult("Checking…", "neutral");
  const loc = await geocodePlymouth(query);
  if (!loc) {
    setCordonResult("No match found in Plymouth.", "neutral");
    return;
  }
  const center = cordonCircle.getLatLng();
  const distance = haversineMeters(center.lat, center.lng, loc.lat, loc.lng);
  const inside = distance <= cordonRadiusM;

  if (cordonCheckMarker) map.removeLayer(cordonCheckMarker);
  cordonCheckMarker = L.circleMarker([loc.lat, loc.lng], {
    radius: 6, color: "#18211f", fillColor: inside ? "#c94f3d" : "#1f7a5c", fillOpacity: 1, weight: 2
  }).addTo(map);

  setCordonResult(
    inside
      ? `Inside cordon — approx. ${Math.round(distance)}m from centre. Evacuate.`
      : `Outside cordon — approx. ${Math.round(distance)}m from centre. Clear.`,
    inside ? "inside" : "outside"
  );
}

/* ---------- Incident mode ----------
   Two ways in, and they are deliberately different:

   1. A published incident — data/incident.json has "active": true. This is
      the real thing: the alert banner carries the headline and links to the
      news page, and the cordon is drawn automatically at the recorded
      location. Nothing on the page can turn it on or off.
   2. A rehearsal — the ?preview=1 toggle. No headline, no news link, and the
      banner says so, so a rehearsal can never be mistaken for a real alert.
------------------------------------------------------------------- */
function startLiveIncident(data) {
  liveIncident = true;
  const published = !!data;

  siteHeader.classList.add("incident-active");

  if (incidentAlert) {
    incidentAlert.hidden = false;
    incidentAlert.classList.toggle("is-preview", !published);
    if (incidentFlagLabel) incidentFlagLabel.textContent = published ? "Live" : "Preview";
    if (incidentHeadline) {
      incidentHeadline.textContent = published
        ? (data.headline || "Live incident")
        : "Preview mode — this is a rehearsal, not a real incident";
    }
    if (incidentStatus) incidentStatus.textContent = published ? (data.status || "") : "Simulated cordon";
    if (incidentRadius) {
      const r = published ? data.cordonRadiusM : cordonRadiusM;
      incidentRadius.textContent = r ? `${r}m cordon` : "";
    }
    if (incidentUpdated) incidentUpdated.textContent = published ? formatUpdated(data.updated) : "";
    // The news link is meaningless during a rehearsal — there is nothing to read.
    const link = incidentAlert.querySelector(".incident-alert-link");
    if (link) link.hidden = !published;
    renderIncidentTicker(published ? data.updates : null);
  }

  cordonCard.hidden = false;
  cordonCard.classList.add("cordon-live");
  cordonCardTitle.textContent = published ? "Am I inside the evacuation cordon?" : "Evacuation cordon (preview)";
  cordonCardIntro.textContent = published
    ? `Check whether an address falls inside the ${data.cordonRadiusM || cordonRadiusM}m cordon. Always follow official instructions from the police and council — this map is a guide, not an authority.`
    : "Rehearsal only. Click the map or check a postcode to see how the cordon tool behaves during a real incident.";

  // Only offer "end incident" during a rehearsal. A published incident ends
  // when the JSON says it does, not because a visitor clicked something.
  endLiveIncidentBtn.hidden = published;
  mapEl.classList.add("cordon-cursor");
  incidentToggle.setAttribute("aria-pressed", "true");
  syncPanelStacking();

  if (published && typeof data.lat === "number" && typeof data.lng === "number") {
    placeCordon(data.lat, data.lng, data.cordonRadiusM);
  }
}

/* ---------- Update ticker ----------
   A rolling line of the latest updates, the way a rolling news channel runs
   them along the bottom of the screen. Two deliberate constraints:

   - The track is duplicated so the loop is seamless. The clone is
     aria-hidden, otherwise a screen reader announces every update twice.
   - Motion is opt-out. With prefers-reduced-motion the ticker doesn't scroll
     at all; it shows the single most recent update as static text. A moving
     strip of red text is exactly the kind of thing that triggers migraine
     and vestibular symptoms, and this banner appears when people are already
     stressed.
------------------------------------------------------------------- */
const prefersReducedMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function tickerItems(updates) {
  return (Array.isArray(updates) ? updates : [])
    .filter((u) => u && u.text)
    .slice()
    .sort((a, b) => {
      const da = new Date(a.time), db = new Date(b.time);
      if (isNaN(da) || isNaN(db)) return 0;
      return db - da;
    });
}

function tickerTime(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "";
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function buildTickerRun(items, hidden) {
  const run = document.createElement("div");
  run.className = "incident-ticker-run";
  if (hidden) run.setAttribute("aria-hidden", "true");
  items.forEach((u) => {
    const item = document.createElement("span");
    item.className = "incident-ticker-item";
    const stamp = tickerTime(u.time);
    if (stamp) {
      const t = document.createElement("span");
      t.className = "incident-ticker-time";
      t.textContent = stamp;
      item.appendChild(t);
    }
    item.appendChild(document.createTextNode(u.text));
    run.appendChild(item);
  });
  return run;
}

function renderIncidentTicker(updates) {
  if (!incidentTicker || !incidentTickerTrack) return;
  const items = tickerItems(updates);

  incidentTickerTrack.innerHTML = "";
  incidentTickerTrack.classList.remove("is-scrolling");
  incidentTicker.hidden = items.length === 0;
  if (!items.length) return;

  if (prefersReducedMotion) {
    // Static: newest update only, no animation.
    incidentTickerTrack.appendChild(buildTickerRun(items.slice(0, 1), false));
    return;
  }

  incidentTickerTrack.appendChild(buildTickerRun(items, false));
  incidentTickerTrack.appendChild(buildTickerRun(items, true));

  // Pace it by content length rather than a fixed duration, so a long log
  // doesn't fly past and a short one doesn't crawl. ~55px per second.
  requestAnimationFrame(() => {
    const run = incidentTickerTrack.firstElementChild;
    const width = run ? run.getBoundingClientRect().width : 0;
    if (!width) return;
    incidentTickerTrack.style.setProperty("--ticker-distance", `${Math.round(width)}px`);
    incidentTickerTrack.style.setProperty("--ticker-duration", `${Math.max(18, Math.round(width / 55))}s`);
    incidentTickerTrack.classList.add("is-scrolling");
  });
}

function endLiveIncident() {
  liveIncident = false;
  siteHeader.classList.remove("incident-active");
  if (incidentAlert) incidentAlert.hidden = true;
  renderIncidentTicker(null);
  cordonCard.hidden = true;
  cordonCard.classList.remove("cordon-live");
  mapEl.classList.remove("cordon-cursor");
  incidentToggle.setAttribute("aria-pressed", "false");
  clearCordon();
  syncPanelStacking();
}

cordonClear.addEventListener("click", () => {
  // Visitors can dismiss the card; the incident itself stays active and the
  // banner stays up, so the checker can be reopened from the news page.
  cordonCard.hidden = true;
  syncPanelStacking();
});

endLiveIncidentBtn.addEventListener("click", endLiveIncident);

map.on("click", (e) => {
  if (!liveIncident) return;
  placeCordon(e.latlng.lat, e.latlng.lng);
});

cordonSearchBtn.addEventListener("click", checkCordonAddress);
cordonSearchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkCordonAddress();
});

/* ---------- Rehearsal toggle (only present with ?preview=1) ---------- */
incidentToggle.addEventListener("click", () => {
  if (liveIncident) endLiveIncident(); else startLiveIncident();
});

/* ---------- Published incident feed ----------
   data/incident.json is the single switch for a real alert. Edit it on
   github.com, set "active": true, commit — the site picks it up on the next
   load, and again every 5 minutes for anyone who leaves the page open.

   Failure is silent by design. If the file is missing, malformed, or blocked
   (opening index.html straight off disk with file:// will block the fetch),
   the site simply behaves as though no incident is running. A broken alert
   banner would be worse than none at all.
------------------------------------------------------------------- */
const INCIDENT_FEED = "data/incident.json";
const INCIDENT_POLL_MS = 5 * 60 * 1000;
let lastIncidentStamp = null;

function formatUpdated(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return "";
  const mins = Math.round((Date.now() - d.getTime()) / 60000);
  if (mins < 1) return "updated just now";
  if (mins < 60) return `updated ${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `updated ${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  return `updated ${d.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`;
}

async function fetchIncident() {
  try {
    const res = await fetch(`${INCIDENT_FEED}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

async function refreshIncident() {
  const data = await fetchIncident();
  const isActive = !!(data && data.active === true);

  if (!isActive) {
    // Only tear down a published incident. A rehearsal in preview mode is the
    // visitor's own doing and shouldn't be cancelled by a poll.
    if (liveIncident && lastIncidentStamp !== null) {
      lastIncidentStamp = null;
      endLiveIncident();
    }
    return;
  }

  // Re-render only when something actually changed, so the cordon doesn't
  // re-fly the map every five minutes.
  const stamp = JSON.stringify([data.headline, data.status, data.updated, data.lat, data.lng, data.cordonRadiusM]);
  if (stamp === lastIncidentStamp) return;
  lastIncidentStamp = stamp;
  startLiveIncident(data);
}

refreshIncident();
setInterval(refreshIncident, INCIDENT_POLL_MS);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderMarkers();
    saveUiState();
  });
});

const weightButtons = document.querySelectorAll(".weight-pill");
const weightValue = document.getElementById("weightValue");
const weightLabels = {
  all: "All",
  "0-99": "<100kg",
  "100-249": "100–249kg",
  "250-499": "250–499kg",
  "500-99999": "500kg+"
};

weightButtons.forEach((button) => {
  button.addEventListener("click", () => {
    weightButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentWeightBand = button.dataset.weight;
    if (weightValue) weightValue.textContent = weightLabels[currentWeightBand] || "All";
    updateWeightCaveat();
    updatePotentialCounts();
    renderMarkers();
    renderPotentialLayer();
    refreshHeatLayer();
    saveUiState();
  });
});

/* ---------- Location selector (Devon & Cornwall towns) ----------
   Eleven towns as a row of pills was too much chrome across the top of the
   map, so this is a single trigger plus a grouped dropdown. The option list
   is generated from `regionData` rather than written out in the HTML, so
   adding a town anywhere above automatically adds it here — grouped under
   its county, with its record count.
------------------------------------------------------------------- */
const locationSelect = document.getElementById("locationSelect");
const locationTrigger = document.getElementById("locationTrigger");
const locationTriggerLabel = document.getElementById("locationTriggerLabel");
const locationTriggerDot = document.getElementById("locationTriggerDot");
const locationMenu = document.getElementById("locationMenu");

let locationOptions = [];

// One option per county, plus "All locations" pinned at the top as the way
// back out. Towns are deliberately absent — they live in the search box now,
// which stays usable however far coverage spreads.
function buildLocationMenu() {
  if (!locationMenu) return;
  locationMenu.innerHTML = "";

  function addOption(county, label, count, countTitle, accent, extraClass) {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `location-option${extraClass ? ` ${extraClass}` : ""}`;
    option.setAttribute("role", "option");
    option.dataset.county = county;
    option.innerHTML =
      `<span class="dot" style="background: ${accent}"></span>` +
      `<span class="location-option-name"></span>` +
      `<span class="location-option-count"></span>`;
    option.querySelector(".location-option-name").textContent = label;
    const countEl = option.querySelector(".location-option-count");
    countEl.textContent = count;
    countEl.title = countTitle;
    locationMenu.appendChild(option);
    return option;
  }

  addOption(
    COUNTY_ALL,
    "All counties",
    ALL_RECORDS.length,
    `${ALL_RECORDS.length} records across ${COUNTIES.size} counties`,
    "var(--cyan)",
    "location-option-all"
  );

  for (const [name, entry] of COUNTIES) {
    const towns = entry.townKeys.length;
    addOption(
      name,
      name,
      entry.records.length,
      `${entry.records.length} record${entry.records.length === 1 ? "" : "s"} across ${towns} town${towns === 1 ? "" : "s"}`,
      entry.accent || "var(--amber)"
    );
  }

  locationOptions = [...locationMenu.querySelectorAll(".location-option")];
  locationOptions.forEach((option) => {
    option.addEventListener("click", () => {
      switchCounty(option.dataset.county);
      saveUiState();
      closeLocationMenu({ refocus: true });
    });
  });
}

function syncLocationSelector() {
  const isAll = activeCounty === COUNTY_ALL;
  const entry = isAll ? null : COUNTIES.get(activeCounty);

  if (locationTriggerLabel) {
    locationTriggerLabel.textContent = isAll ? "All counties" : activeCounty;
  }
  if (locationTriggerDot) {
    locationTriggerDot.style.background = isAll ? "var(--cyan)" : (entry && entry.accent) || "var(--amber)";
  }
  locationOptions.forEach((option) => {
    const isActive = option.dataset.county === activeCounty;
    option.classList.toggle("is-selected", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

let locationMenuOpen = false;

function openLocationMenu() {
  if (!locationMenu || locationMenuOpen) return;
  locationMenuOpen = true;
  locationMenu.hidden = false;
  locationSelect.classList.add("is-open");
  locationTrigger.setAttribute("aria-expanded", "true");
  // Start keyboard navigation on the current county, not the top of the list.
  const current = locationOptions.find((o) => o.dataset.county === activeCounty);
  (current || locationOptions[0])?.focus();
}

function closeLocationMenu(opts) {
  if (!locationMenu || !locationMenuOpen) return;
  locationMenuOpen = false;
  locationMenu.hidden = true;
  locationSelect.classList.remove("is-open");
  locationTrigger.setAttribute("aria-expanded", "false");
  if (opts && opts.refocus) locationTrigger.focus();
}

function initLocationMenu() {
  if (!locationSelect || !locationTrigger || !locationMenu) return;
  buildLocationMenu();
  syncLocationSelector();

  locationTrigger.addEventListener("click", () => {
    locationMenuOpen ? closeLocationMenu() : openLocationMenu();
  });

  // Roving arrow-key navigation across the flat option list, ignoring the
  // county headings in between.
  locationMenu.addEventListener("keydown", (e) => {
    const index = locationOptions.indexOf(document.activeElement);
    if (index === -1) return;
    let next = null;
    if (e.key === "ArrowDown") next = locationOptions[index + 1] || locationOptions[0];
    else if (e.key === "ArrowUp") next = locationOptions[index - 1] || locationOptions[locationOptions.length - 1];
    else if (e.key === "Home") next = locationOptions[0];
    else if (e.key === "End") next = locationOptions[locationOptions.length - 1];
    else if (e.key === "Escape") { closeLocationMenu({ refocus: true }); return; }
    else if (e.key === "Tab") { closeLocationMenu(); return; }
    else return;
    e.preventDefault();
    next.focus();
  });

  locationTrigger.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); openLocationMenu(); }
  });

  document.addEventListener("click", (e) => {
    if (locationMenuOpen && !locationSelect.contains(e.target)) closeLocationMenu();
  });
}
/* ---------- Map search ----------
   Local first, network second. Every keystroke filters the site's own
   records and town list in memory — instant, works offline, and cannot
   rate-limit. Only when someone presses Enter without picking one of those
   do we fall back to OpenStreetMap's Nominatim for a general place lookup,
   which is what makes an arbitrary postcode or unlisted street work.

   Nominatim's usage policy asks for no more than one request a second and
   no autocomplete-style per-keystroke querying, which is exactly why the
   remote lookup is on submit only rather than on input.
------------------------------------------------------------------- */
const mapSearchInput = document.getElementById("mapSearchInput");
const mapSearchResults = document.getElementById("mapSearchResults");
const mapSearchStatus = document.getElementById("mapSearchStatus");
const mapSearchClear = document.getElementById("mapSearchClear");

let searchSuggestions = [];
let searchActiveIndex = -1;
let searchMarker = null;

function normaliseForSearch(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents so "Plymouth" matches either way
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function setSearchStatus(text) {
  if (!mapSearchStatus) return;
  mapSearchStatus.textContent = text || "";
  mapSearchStatus.hidden = !text;
}

// Records score above towns, and a prefix match scores above a mid-string
// one, so typing "sal" offers Salcombe the town before a street that merely
// contains those letters.
function buildSuggestions(rawQuery) {
  const q = normaliseForSearch(rawQuery);
  if (q.length < 2) return [];

  const scored = [];

  TOWN_KEYS.forEach((key) => {
    const cfg = regionData[key];
    const hay = normaliseForSearch(`${cfg.label} ${cfg.short} ${cfg.county}`);
    const at = hay.indexOf(q);
    if (at === -1) return;
    scored.push({
      kind: "town",
      key,
      label: cfg.short || cfg.label,
      detail: `${cfg.county} · ${cfg.records.length} record${cfg.records.length === 1 ? "" : "s"}`,
      score: (at === 0 ? 0 : 40) + at
    });
  });

  ALL_RECORDS.forEach((record) => {
    const hay = normaliseForSearch(`${record.title} ${record.regionShort} ${record.date}`);
    const at = hay.indexOf(q);
    if (at === -1) return;
    scored.push({
      kind: "record",
      id: record.id,
      label: record.title,
      detail: `${record.regionShort} · ${record.date}`,
      score: (at === 0 ? 0 : 20) + at + 5
    });
  });

  return scored.sort((a, b) => a.score - b.score || a.label.localeCompare(b.label)).slice(0, 8);
}

function renderSearchResults() {
  if (!mapSearchResults) return;
  if (!searchSuggestions.length) {
    mapSearchResults.hidden = true;
    mapSearchResults.innerHTML = "";
    mapSearchInput.setAttribute("aria-expanded", "false");
    return;
  }

  mapSearchResults.innerHTML = searchSuggestions
    .map((s, i) => `
      <li class="search-result${i === searchActiveIndex ? " is-active" : ""}"
          role="option" id="searchResult-${i}" data-index="${i}"
          aria-selected="${i === searchActiveIndex}">
        <span class="search-result-kind search-result-kind-${s.kind}">${s.kind === "town" ? "Town" : "Record"}</span>
        <span class="search-result-text">
          <span class="search-result-label"></span>
          <span class="search-result-detail"></span>
        </span>
      </li>`)
    .join("");

  // Text set via textContent rather than interpolated above, so a stray
  // angle bracket in a record title can never become markup.
  [...mapSearchResults.children].forEach((li, i) => {
    li.querySelector(".search-result-label").textContent = searchSuggestions[i].label;
    li.querySelector(".search-result-detail").textContent = searchSuggestions[i].detail;
  });

  mapSearchResults.hidden = false;
  mapSearchInput.setAttribute("aria-expanded", "true");
}

function closeSearchResults() {
  searchSuggestions = [];
  searchActiveIndex = -1;
  renderSearchResults();
}

function clearSearchMarker() {
  if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null; }
}

function applySuggestion(suggestion) {
  if (!suggestion) return;
  if (suggestion.kind === "town") {
    clearSearchMarker();
    switchRegion(suggestion.key);
    saveUiState();
    setSearchStatus("");
  } else {
    const record = ALL_RECORDS.find((r) => r.id === suggestion.id);
    if (!record) return;
    clearSearchMarker();
    // Keep the town selector honest about where the map has just landed.
    if (record.regionKey !== activeRegion) switchRegion(record.regionKey, { fly: false });
    saveUiState();
    selectRecord(record.id, true);
    setSearchStatus("");
  }
  closeSearchResults();
}

// Biased to the South West but not restricted to it: someone searching an
// address outside the covered towns should still get taken there and see,
// plainly, that nothing is plotted nearby.
async function geocodePlace(query) {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=gb" +
    "&viewbox=-6.0,51.3,-2.9,49.8" +
    `&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { "Accept-Language": "en-GB" } });
  if (!res.ok) throw new Error(`Nominatim responded ${res.status}`);
  const data = await res.json();
  return data && data.length
    ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), name: data[0].display_name }
    : null;
}

function nearestRecordTo(lat, lng) {
  let best = null;
  ALL_RECORDS.forEach((record) => {
    const d = haversineMeters(lat, lng, record.lat, record.lng);
    if (!best || d < best.distance) best = { record, distance: d };
  });
  return best;
}

async function runRemoteSearch(query) {
  setSearchStatus("Searching…");
  let place;
  try {
    place = await geocodePlace(query);
  } catch (e) {
    setSearchStatus("Search is unavailable right now — try a town from the list.");
    return;
  }
  if (!place) {
    setSearchStatus(`No place found for “${query}”.`);
    return;
  }

  clearSearchMarker();
  searchMarker = L.circleMarker([place.lat, place.lng], {
    radius: 7, weight: 2, color: "#0b0f17", fillColor: "#00f2fe", fillOpacity: 1
  }).addTo(map);

  map.flyTo([place.lat, place.lng], 15, { duration: 1 });

  // Say plainly whether there is anything plotted nearby, rather than
  // dropping someone on a blank street and leaving them to guess.
  const nearest = nearestRecordTo(place.lat, place.lng);
  if (nearest && nearest.distance <= 1500) {
    setSearchStatus(`Nearest record: ${nearest.record.title} (${nearest.record.regionShort}), about ${Math.round(nearest.distance)}m away.`);
  } else if (nearest) {
    const km = (nearest.distance / 1000).toFixed(nearest.distance < 10000 ? 1 : 0);
    setSearchStatus(`Nothing plotted here. Nearest record is ${nearest.record.title} (${nearest.record.regionShort}), about ${km}km away.`);
  } else {
    setSearchStatus("Nothing plotted here.");
  }
}

function initMapSearch() {
  if (!mapSearchInput || !mapSearchResults) return;

  mapSearchInput.addEventListener("input", () => {
    const value = mapSearchInput.value;
    if (mapSearchClear) mapSearchClear.hidden = !value;
    setSearchStatus("");
    searchSuggestions = buildSuggestions(value);
    searchActiveIndex = searchSuggestions.length ? 0 : -1;
    renderSearchResults();
  });

  mapSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!searchSuggestions.length) return;
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      searchActiveIndex = (searchActiveIndex + step + searchSuggestions.length) % searchSuggestions.length;
      renderSearchResults();
      mapSearchInput.setAttribute("aria-activedescendant", `searchResult-${searchActiveIndex}`);
      return;
    }
    if (e.key === "Escape") { closeSearchResults(); setSearchStatus(""); return; }
    if (e.key !== "Enter") return;

    e.preventDefault();
    if (searchActiveIndex >= 0 && searchSuggestions[searchActiveIndex]) {
      applySuggestion(searchSuggestions[searchActiveIndex]);
      return;
    }
    const query = mapSearchInput.value.trim();
    if (query.length >= 2) { closeSearchResults(); runRemoteSearch(query); }
  });

  mapSearchResults.addEventListener("mousedown", (e) => {
    // mousedown, not click: blur would close the list before click landed.
    const li = e.target.closest(".search-result");
    if (!li) return;
    e.preventDefault();
    applySuggestion(searchSuggestions[Number(li.dataset.index)]);
  });

  if (mapSearchClear) {
    mapSearchClear.addEventListener("click", () => {
      mapSearchInput.value = "";
      mapSearchClear.hidden = true;
      clearSearchMarker();
      closeSearchResults();
      setSearchStatus("");
      mapSearchInput.focus();
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-group")) closeSearchResults();
  });
}

/* ---------- County outline ----------
   The selected county is drawn as a red dashed boundary, so it's obvious
   what's in scope and what merely happens to be on screen.

   Boundaries come from one of two places, in order:
     1. data/county-boundaries.json, if it's been generated — instant, works
        offline, and the polygons are already simplified. Build it with
        tools/fetch-county-boundaries.js.
     2. Failing that, OpenStreetMap at runtime, fetched once per county and
        held in memory for the session.
   The fallback means this works before anyone runs the tool; the file means
   it stops depending on someone else's server once they have.

   A missing boundary is not an error. The map still flies to the county and
   filters normally — it just doesn't draw the outline.
------------------------------------------------------------------- */
const COUNTY_OUTLINE_STYLE = {
  color: "#ff5252",
  weight: 2,
  opacity: 0.9,
  dashArray: "6 6",
  fill: false,
  interactive: false
};

let countyOutline = null;
const countyBoundaryCache = new Map();

// Populated by the <script> tag in index.html when the generated file exists.
if (typeof COUNTY_BOUNDARIES !== "undefined" && COUNTY_BOUNDARIES) {
  Object.entries(COUNTY_BOUNDARIES).forEach(([name, geometry]) => {
    countyBoundaryCache.set(name, geometry);
  });
}

function clearCountyOutline() {
  if (countyOutline) { map.removeLayer(countyOutline); countyOutline = null; }
  hideCountyMask();
}

/* geojson.io-flavoured bbox area, in square degrees. Only used to rank
   candidate matches against each other — never shown to a user — so raw
   lat/lng degrees (rather than a proper equal-area projection) are fine. */
function geometryBBoxArea(geometry) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const visit = (ring) => {
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  };
  if (geometry.type === "Polygon") geometry.coordinates.forEach(visit);
  else if (geometry.type === "MultiPolygon") geometry.coordinates.forEach((poly) => poly.forEach(visit));
  else return 0;
  if (!Number.isFinite(minX) || !Number.isFinite(maxX)) return 0;
  return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
}

/* A real county is on the order of 1° x 1° or more. A coastal heritage-coast
   strip, a beach, or a single settlement polygon — the kind of thing that
   used to slip through when this only looked at Nominatim's first result —
   is nowhere close. Anything under this is treated as "not a county" rather
   than drawn as if it were one. */
const MIN_COUNTY_BBOX_AREA_DEG2 = 0.05;

/* Nominatim's top hit for a bare county name is not reliably the
   administrative boundary — it has previously matched things like a
   heritage-coast designation that only traces the coastline, which is why
   the drawn outline hugged the shore and cut inland towns like Newton Abbot
   out of "Devon" entirely. Asking for several candidates and picking the
   one that is actually an administrative boundary (and a plausibly
   county-sized one) fixes that at the source. */
function pickBestBoundaryMatch(results) {
  const candidates = (results || [])
    .filter((hit) => hit && hit.geojson && /Polygon$/.test(hit.geojson.type))
    .map((hit) => ({ hit, area: geometryBBoxArea(hit.geojson) }));

  const administrative = candidates.filter(
    (c) => c.hit.class === "boundary" && c.hit.type === "administrative" && c.area >= MIN_COUNTY_BBOX_AREA_DEG2
  );
  const pool = administrative.length ? administrative : candidates.filter((c) => c.area >= MIN_COUNTY_BBOX_AREA_DEG2);
  if (!pool.length) return null;

  pool.sort((a, b) => b.area - a.area);
  return pool[0].hit;
}

async function fetchCountyBoundary(name) {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=5&polygon_geojson=1" +
    `&countrycodes=gb&q=${encodeURIComponent(`${name}, United Kingdom`)}`;
  const res = await fetch(url, { headers: { "Accept-Language": "en-GB" } });
  if (!res.ok) throw new Error(`Nominatim responded ${res.status}`);
  const data = await res.json();
  const best = pickBestBoundaryMatch(data);
  if (!best) throw new Error("no plausible county boundary in results");
  return best.geojson;
}

async function drawCountyOutline(name) {
  clearCountyOutline();
  if (!name || name === COUNTY_ALL) return;

  let geometry = countyBoundaryCache.get(name);
  if (!geometry) {
    try {
      geometry = await fetchCountyBoundary(name);
      countyBoundaryCache.set(name, geometry);
    } catch (e) {
      return; // no outline available; the rest of the selection still works
    }
  }

  // The county may have changed while the request was in flight.
  if (activeCounty !== name) return;
  countyOutline = L.geoJSON(geometry, { style: () => COUNTY_OUTLINE_STYLE }).addTo(map);
  showCountyMask(geometry);
}

/* ---------- County mask (dim everything outside the selection) ----------
   The dashed outline says what is in scope; this makes it unmissable by
   darkening the basemap outside it, so the selected county reads as the
   thing in focus.

   WHY A LEAFLET POLYGON AND NOT A BLURRED OVERLAY
   The first version of this was a div with `backdrop-filter: blur()`,
   clipped to the inverse of the county. It looked right in a still frame
   and fell apart in motion, for two reasons:

     1. backdrop-filter has to re-blur the map underneath on every single
        frame of a pan. Over an area this size that is far too much work,
        and it showed up as strobing and tearing while dragging.
     2. A plain div in a pane gets no zoom-animation transform. Leaflet
        animates a zoom by transforming the layers that opt into it — tile
        layers, and the SVG/canvas renderers. The div was not one of them,
        so for the length of every zoom the hole sat at the previous zoom's
        scale while the map moved underneath it. That is the ghosting, and
        the reason the red outline appeared to come unpinned from the mask.

   A polygon rendered by Leaflet's own SVG renderer has neither problem: it
   is transformed in step with the tiles during a zoom, it costs nothing to
   pan because the browser composites it like any other vector, and it needs
   no manual reprojection at all. The cost is the blur — a vector fill can
   darken but cannot blur what is behind it. Given the blur was the direct
   cause of both defects, darkening alone is the better trade.

   The mask lives in its own pane at 350: above the tiles at 200, below the
   overlay pane at 400 that carries the outline, and below the markers at
   600. Leaflet's pane z-indexes are only comparable to each other, since
   they all sit inside .leaflet-map-pane, which is itself a pane at 400 and
   so a stacking context. */
const COUNTY_MASK_PANE = "countyMask";

const COUNTY_MASK_STYLE = {
  stroke: false,
  fillColor: "#050a14",
  fillOpacity: 0.34,
  interactive: false,
  className: "county-mask-shape"
};

/* The mask is one big polygon with the county punched out of it as a hole.
   Leaflet clips vector layers to the viewport before drawing, so a ring
   this size costs no more to render than a small one. */
const COUNTY_MASK_OUTER_RING = [
  [-85, -179.9],
  [-85, 179.9],
  [85, 179.9],
  [85, -179.9]
];

let countyMaskLayer = null;
let countyMaskRenderer = null;

// GeoJSON is [lng, lat] and Leaflet wants [lat, lng]. Only the outer ring of
// each polygon is used: an inland hole in a county is not something the
// selection needs to carve back out of the mask.
function countyMaskRings(geometry) {
  if (!geometry) return [];
  const rings =
    geometry.type === "Polygon"
      ? [geometry.coordinates[0]]
      : geometry.type === "MultiPolygon"
        ? geometry.coordinates.map((poly) => poly[0])
        : [];
  return rings
    .filter((ring) => ring && ring.length >= 3)
    .map((ring) => ring.map(([lng, lat]) => [lat, lng]));
}

function showCountyMask(geometry) {
  hideCountyMask();

  const holes = countyMaskRings(geometry);
  if (!holes.length) return;

  if (!map.getPane(COUNTY_MASK_PANE)) map.createPane(COUNTY_MASK_PANE);
  if (!countyMaskRenderer) countyMaskRenderer = L.svg({ pane: COUNTY_MASK_PANE });

  countyMaskLayer = L.polygon([COUNTY_MASK_OUTER_RING, ...holes], {
    ...COUNTY_MASK_STYLE,
    pane: COUNTY_MASK_PANE,
    renderer: countyMaskRenderer
  }).addTo(map);
}

function hideCountyMask() {
  if (countyMaskLayer) {
    map.removeLayer(countyMaskLayer);
    countyMaskLayer = null;
  }
}

const heroEyebrow = document.getElementById("heroEyebrow");

function updateHeroCopy() {
  if (!heroEyebrow) return;
  heroEyebrow.textContent =
    activeCounty === COUNTY_ALL ? "Every county covered so far" : `${activeCounty}, England`;
}

/* Selecting a county is a viewport move plus an outline, not a data swap.
   Every record is already on the map and stays there — the outline says
   what's in scope without hiding what's beside it, which matters when a
   raid on one side of a county line is part of the same night's story as
   one on the other.

   Filters aren't reset either: a status or weight selection means the same
   thing in the next county as it did in the last. */
function switchCounty(county, opts) {
  const target = COUNTIES.has(county) ? county : COUNTY_ALL;
  const fly = !opts || opts.fly !== false;
  activeCounty = target;

  syncLocationSelector();
  updateHeroCopy();
  updateStatsPills();
  drawCountyOutline(target);
  // Records are not swapped out, but which of them are in scope has changed,
  // so both layers are redrawn to pick up the out-of-county dimming. Cheap:
  // a few dozen markers, and the potential layer is rebuilt on every filter
  // change already.
  renderMarkers();
  renderPotentialLayer();

  if (!fly) return;
  if (target === COUNTY_ALL) map.flyToBounds(ALL_BOUNDS, { duration: 1 });
  else map.flyToBounds(COUNTIES.get(target).bounds, { duration: 1 });
}

/* Kept for the search box: picking a town still needs to fly there, and to
   put the selector into that town's county so the outline follows. */
function switchRegion(region, opts) {
  const cfg = regionData[region];
  if (!cfg) return;
  const fly = !opts || opts.fly !== false;
  activeRegion = region;

  if (cfg.isAll) {
    switchCounty(COUNTY_ALL, { fly });
    return;
  }

  if (cfg.county && cfg.county !== activeCounty) {
    switchCounty(cfg.county, { fly: false });
  }
  if (fly) map.flyTo(cfg.center, cfg.zoom, { duration: 1 });
}

initLocationMenu();
initMapSearch();
switchCounty(COUNTY_ALL, { fly: false }); // paint the trigger, hero and pills

map.on("zoomend", handlePotentialZoomChange);
handlePotentialZoomChange(); // set the initial state to match the opening zoom

/* ---------- Header height ----------
   Several sticky offsets keyed off a hard-coded 66px header, which is only
   true on desktop: the nav wraps to two or three rows on a phone, so the
   incident banner used to tuck underneath it and the hero came up short.
   Measuring it once and publishing it as --header-h keeps CSS honest at any
   width, including after an orientation change.
------------------------------------------------------------------- */
(function trackHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function apply() {
    const h = Math.round(header.getBoundingClientRect().height);
    if (h > 0) document.documentElement.style.setProperty("--header-h", `${h}px`);
  }

  apply();
  window.addEventListener("resize", apply);
  window.addEventListener("orientationchange", apply);
  // Web fonts land after first paint and can change the nav's height.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(apply);
  if (typeof ResizeObserver === "function") new ResizeObserver(apply).observe(header);
})();

/* ---------- Keep Leaflet in step with its container ----------
   Leaflet caches the map's pixel size. When the container changes — rotating
   a phone, the mobile URL bar collapsing, or crossing the 900px breakpoint
   where the map switches from full-bleed to a fixed-height block — it keeps
   drawing at the old size and leaves grey strips along the edges.
   invalidateSize() forces a re-measure.
------------------------------------------------------------------- */
(function keepMapSized() {
  const container = document.getElementById("map");
  if (!container || !map) return;

  let pending = null;
  function resize() {
    clearTimeout(pending);
    // Debounced: iOS fires a burst of resize events as the URL bar animates.
    pending = setTimeout(() => map.invalidateSize({ animate: false }), 150);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", resize);
  if (typeof ResizeObserver === "function") new ResizeObserver(resize).observe(container);
})();

/* ---------- Sidebar info tooltips ----------
   Each control's explanatory copy lives on an "i" button's data-tip. The
   bubble itself is a single shared element on <body>, positioned with
   `fixed`, because the control panel scrolls and would otherwise clip it.
   Preferred placement is to the right of the icon (out over the map); it
   flips left and clamps vertically when that would leave the viewport.
------------------------------------------------------------------- */
function initInfoTips() {
  const tips = document.querySelectorAll(".info-tip");
  if (!tips.length) return;

  const bubble = document.createElement("div");
  bubble.className = "info-tip-bubble";
  bubble.setAttribute("role", "tooltip");
  bubble.id = "infoTipBubble";
  document.body.appendChild(bubble);

  let activeTip = null;
  const GAP = 10;
  const EDGE = 12;

  function place() {
    if (!activeTip) return;
    const anchor = activeTip.getBoundingClientRect();
    const box = bubble.getBoundingClientRect();

    // Right of the icon by default; flip left if it would overrun the window.
    let left = anchor.right + GAP;
    if (left + box.width > window.innerWidth - EDGE) {
      left = anchor.left - GAP - box.width;
    }
    left = Math.max(EDGE, Math.min(left, window.innerWidth - box.width - EDGE));

    let top = anchor.top + anchor.height / 2 - box.height / 2;
    top = Math.max(EDGE, Math.min(top, window.innerHeight - box.height - EDGE));

    bubble.style.left = `${Math.round(left)}px`;
    bubble.style.top = `${Math.round(top)}px`;
  }

  function show(tip) {
    activeTip = tip;
    bubble.textContent = tip.dataset.tip || "";
    tip.setAttribute("aria-describedby", bubble.id);
    bubble.classList.add("is-visible");
    place();
  }

  function hide() {
    if (activeTip) activeTip.removeAttribute("aria-describedby");
    activeTip = null;
    bubble.classList.remove("is-visible");
  }

  tips.forEach((tip) => {
    tip.addEventListener("mouseenter", () => show(tip));
    tip.addEventListener("mouseleave", hide);
    tip.addEventListener("focus", () => show(tip));
    tip.addEventListener("blur", hide);
    // Touch: tapping focuses the button, which shows the bubble; a second tap
    // elsewhere blurs it. Prevent the click from also toggling a parent label.
    tip.addEventListener("click", (e) => e.preventDefault());
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  // The panel scrolls independently of the page, so track both.
  window.addEventListener("scroll", place, true);
  window.addEventListener("resize", hide);
}

initInfoTips();

initTimeline();
renderMarkers();

/* ---------- Remembered view state ----------
   Persists the durable layer choices — which city, which record statuses,
   which weight band, which potential-site sources, heatmap on/off — so a
   return visitor lands back where they left off.

   Deliberately NOT persisted: the timeline scrubber position. That's a
   transient exploration state; restoring it would silently hide most of the
   map from someone who's forgotten they left it part-way through 1941.
------------------------------------------------------------------- */
const UI_KEY = "pbm-ui";

function saveUiState() {
  try {
    localStorage.setItem(UI_KEY, JSON.stringify({
      county: activeCounty,
      filter: currentFilter,
      weight: currentWeightBand,
      potential: potentialToggle ? potentialToggle.checked : true,
      heatmap: heatmapToggle ? heatmapToggle.checked : false
    }));
  } catch (e) { /* storage unavailable — session-only, not worth surfacing */ }
}

function restoreUiState() {
  let st;
  try {
    st = JSON.parse(localStorage.getItem(UI_KEY) || "null");
  } catch (e) { return; }
  if (!st || typeof st !== "object") return;

  // Restore the selected county without the fly-in animation — on first paint
  // an animated pan from the national view looks like a bug, not a feature.
  // `st.region` is read too, so anyone carrying saved state from before the
  // selector became county-based lands somewhere sensible rather than nowhere.
  const savedCounty =
    st.county || (st.region && regionData[st.region] && regionData[st.region].county) || null;

  if (savedCounty && savedCounty !== activeCounty && COUNTIES.has(savedCounty)) {
    switchCounty(savedCounty, { fly: false });
    map.fitBounds(COUNTIES.get(savedCounty).bounds);
  }

  const statusBtn = [...filterButtons].find((b) => b.dataset.filter === st.filter);
  if (statusBtn) {
    filterButtons.forEach((b) => b.classList.toggle("active", b === statusBtn));
    currentFilter = st.filter;
  }

  const weightBtn = [...weightButtons].find((b) => b.dataset.weight === st.weight);
  if (weightBtn) {
    weightButtons.forEach((b) => b.classList.toggle("active", b === weightBtn));
    currentWeightBand = st.weight;
    if (weightValue) weightValue.textContent = weightLabels[st.weight] || "All";
  }

  if (potentialToggle && typeof st.potential === "boolean") potentialToggle.checked = st.potential;
  if (heatmapToggle && typeof st.heatmap === "boolean") {
    heatmapToggle.checked = st.heatmap;
    heatmapMode = st.heatmap;
    if (heatmapLegend) heatmapLegend.hidden = !heatmapMode;
  }

  updateWeightCaveat();
  updatePotentialCounts();
  renderMarkers();
  renderPotentialLayer();
  refreshHeatLayer();
}

restoreUiState();

/* ---------- Map accuracy notice ----------
   Rendered hidden and shown here, so it never flashes up for someone who has
   already dismissed it. The dismissal persists, which is only acceptable
   because the same caveat is stated permanently in the Sources section — the
   notice is a prompt to read it, not the sole place it exists.
------------------------------------------------------------------- */
const DISCLAIMER_KEY = "pbm-disclaimer-dismissed";
const mapDisclaimer = document.getElementById("mapDisclaimer");
const mapDisclaimerClose = document.getElementById("mapDisclaimerClose");

if (mapDisclaimer) {
  let dismissed = false;
  try { dismissed = localStorage.getItem(DISCLAIMER_KEY) === "1"; } catch (e) { /* storage blocked */ }
  mapDisclaimer.hidden = dismissed;

  if (mapDisclaimerClose) {
    mapDisclaimerClose.addEventListener("click", () => {
      mapDisclaimer.hidden = true;
      try { localStorage.setItem(DISCLAIMER_KEY, "1"); } catch (e) { /* storage blocked */ }
    });
  }
}

/* ---------- Support link ----------
   Paste a Buy Me a Coffee / Ko-fi URL here and the footer button appears.
   Left empty, the button stays hidden rather than linking to "#".
------------------------------------------------------------------- */
const COFFEE_URL = "https://buymeacoffee.com/stewartps";
const coffeeBtn = document.getElementById("coffeeBtn");
if (coffeeBtn && COFFEE_URL) {
  coffeeBtn.href = COFFEE_URL;
  coffeeBtn.hidden = false;
}

/* ---------- Interactive events timeline (dark section) ----------
   Progressive enhancement only: all the content already renders as plain
   HTML, this just adds expand/collapse, scroll-reveal, and the glowing
   scroll-progress line down the spine.
------------------------------------------------------------------- */
(function initEventsTimeline() {
  const items = document.querySelectorAll("#eventsTimeline .timeline-item");
  if (!items.length) return;

  items.forEach((item) => {
    const toggle = item.querySelector(".timeline-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const expanded = item.classList.toggle("expanded");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    // No IntersectionObserver support — just show everything.
    items.forEach((item) => item.classList.add("in-view"));
  }

  const progress = document.getElementById("timelineProgress");
  const wrap = document.querySelector(".timeline-wrap");
  if (progress && wrap) {
    const updateProgress = () => {
      const rect = wrap.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height;
      // How far the viewport's vertical centre has travelled through the wrap.
      const travelled = viewportH / 2 - rect.top;
      const ratio = Math.min(1, Math.max(0, travelled / total));
      progress.style.height = `${ratio * 100}%`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }
})();
