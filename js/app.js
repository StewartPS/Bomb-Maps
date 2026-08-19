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
    id: "st-john-exeter-street-1940",
    title: "St John Street & Exeter Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "10 July 1940",
    sortYear: 1940,
    confidence: "Street-derived point, catalogue caption only (not yet examined at source)",
    lat: 50.37149,
    lng: -4.13300,
    bombType: "HE",
    summary: "Plymouth Police photographed air raid damage at St John Street, Exeter Street, the rear of Carlisle Avenue, and St James Place West during Raid 4 of the Blitz.",
    note: "Sourced from a Plymouth Archives catalogue entry (ref AD7/4/1-7) — a caption only. The photographs themselves have not been viewed, so bomb type, casualties and the exact building(s) hit are not yet confirmed; the coordinate is a street-level estimate for Exeter Street, the best-located of the four names given. 'Carlisle Avenue' could not be matched to a present-day Plymouth street (a 'Carlisle Road' exists nearby) — treat that part of the caption as unresolved.",
    sources: [
      { label: "Plymouth Archives Catalogue: AD7/4/1-7, Air Raid Damage, St John Street, Exeter Street, rear of Carlisle Avenue and St James Place West", url: "https://web.plymouth.gov.uk/archivescatalogue/?criteria=bomb&operator=AND" }
    ]
  },
  {
    id: "austin-avenue-devonport-1940",
    title: "Austin Avenue, Devonport",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "12 July 1940",
    sortYear: 1940,
    confidence: "Street-derived point, catalogue caption only (not yet examined at source)",
    lat: 50.39074,
    lng: -4.16578,
    bombType: "HE",
    summary: "Plymouth Police photographed air raid damage at Austin Avenue in Devonport, Cookworthy Road, and the gas works site on St Levan's Road during Raid 5 of the Blitz.",
    note: "Sourced from a Plymouth Archives catalogue entry (ref AD7/5/1-4) — a caption only. The photographs themselves have not been viewed, so bomb type, casualties and the exact building(s) hit are not yet confirmed. Cookworthy Road (50.3929, -4.1688) and the St Levan's Road gas works site (50.3846, -4.1694) are the other two locations named in the same caption but not separately plotted here.",
    sources: [
      { label: "Plymouth Archives Catalogue: AD7/5/1-4, Air Raid Damage, Austin Avenue, Cookworthy Road and gas works site, St Levan's Road", url: "https://web.plymouth.gov.uk/archivescatalogue/?criteria=bomb&operator=AND" }
    ]
  },
  {
    id: "lincoln-avenue-1940",
    title: "Lincoln Avenue",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 December 1940",
    sortYear: 1940,
    confidence: "Street-derived point, catalogue caption only (not yet examined at source)",
    lat: 50.37931,
    lng: -4.12288,
    bombType: "incendiary",
    summary: "Plymouth Police photographed an incendiary bomb at Lincoln Avenue during Raid 25 of the Blitz.",
    note: "Sourced from a Plymouth Archives catalogue entry (ref AD7/13/3) — a caption only. The photograph itself has not been viewed, so casualties and the exact address are not yet confirmed.",
    sources: [
      { label: "Plymouth Archives Catalogue: AD7/13/3, Air Raid Damage, incendiary bomb, Lincoln Avenue", url: "https://web.plymouth.gov.uk/archivescatalogue/?criteria=bomb&operator=AND" }
    ]
  },
  {
    id: "victoria-park-crater-1940",
    title: "Victoria Park, bomb crater",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 December 1940",
    sortYear: 1940,
    confidence: "Park-level point, catalogue caption only (not yet examined at source)",
    lat: 50.37621,
    lng: -4.15421,
    bombType: "HE",
    summary: "Plymouth Police photographed a bomb crater in Victoria Park during Raid 25 of the Blitz, the same night as the Lincoln Avenue incendiary.",
    note: "Sourced from a Plymouth Archives catalogue entry (ref AD7/13/16) — a caption only. The photograph itself has not been viewed, so casualties are not confirmed (a park crater suggests none). Coordinate is the park's approximate centre, not the crater's exact position.",
    sources: [
      { label: "Plymouth Archives Catalogue: AD7/13/16, Air Raid Damage, bomb crater, Victoria Park", url: "https://web.plymouth.gov.uk/archivescatalogue/?criteria=bomb&operator=AND" }
    ]
  },
  {
    id: "raf-mount-batten-1940",
    title: "RAF Mount Batten",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 November 1940",
    sortYear: 1940,
    confidence: "Site-level point, catalogue caption only (not yet examined at source)",
    lat: 50.3553,
    lng: -4.1247,
    bombType: "HE",
    summary: "Bomb damage to buildings at the RAF flying-boat station on Mount Batten during Raid 22 of the Blitz.",
    note: "Sourced from Plymouth Archives catalogue entries (refs 3488/5458 and 3488/5463) — captions only. The photographs themselves have not been viewed, so casualties and the specific buildings hit are not yet confirmed.",
    sources: [
      { label: "Plymouth Archives Catalogue: 3488/5458 & 3488/5463, Bomb damage at RAF Mountbatten", url: "https://web.plymouth.gov.uk/archivescatalogue/?criteria=bomb&operator=AND" },
      { label: "Wikipedia: RAF Mount Batten", url: "https://en.wikipedia.org/wiki/RAF_Mount_Batten" }
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
    id: "milehouse-stoke-reported-1941",
    title: "Milehouse / Stoke, reported parachute mine and incendiary fall",
    status: "reported",
    statusLabel: "Reported, unconfirmed",
    date: "1940 to 1944 (exact date not yet established)",
    sortYear: 1941,
    confidence: "Reader-reported, not yet corroborated against the bomb book",
    lat: 50.38,
    lng: -4.15,
    bombType: "unknown",
    summary: "A reader recalls a parachute-mine landmine coming down in the Milehouse/Stoke area, plus heavy incendiary fall across the district — including several incendiaries on their own house and garden — consistent with the thousands of incendiaries dropped on Plymouth during the Blitz.",
    note: "Filed as a placeholder pending a specific date and street. Stoke and Milehouse sit within the area the Town Clerk's bomb book covers (held at The Box), which would be the authoritative source for pinning this to an exact site and night — see the correction routes on this site if you can supply a date, street, or bomb-book reference. The coordinate given is a rough district centre only, not an incident location.",
    sources: [
      { label: "The Box: Blitz 80 - The Bomb Book", url: "https://www.theboxplymouth.com/blog/archives/blitz-80-the-bomb-book" }
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
  },
  {
    id: "exeter-okehampton-street-1942",
    title: "Okehampton Street, St Thomas",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "23 April 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 50.7183,
    lng: -3.5425,
    bombType: "HE",
    casualtiesNote: "Sources give four or five killed in Okehampton Street, with eight injured.",
    summary: "The opening Baedeker attack on Exeter, by around 49 bombers, largely missed the city centre in heavy cloud. Seven high-explosive bombs fell on St Thomas and Marsh Barton west of the Exe, damaging some 200 houses.",
    note: "Okehampton Street is in Exeter St Thomas, not the town of Okehampton — an easy confusion when reading wartime records.",
    sources: [
      { label: "Exeter Memories: Air raids on Exeter 1940-1942", url: "https://www.exetermemories.co.uk/em/_events/airraids.php" },
      { label: "Wikipedia: Exeter Blitz", url: "https://en.wikipedia.org/wiki/Exeter_Blitz" }
    ]
  },
  {
    id: "exeter-pennsylvania-1942",
    title: "Pennsylvania & Newtown",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "25 April 1942",
    sortYear: 1942,
    confidence: "Rough area",
    lat: 50.73115,
    lng: -3.5335,
    bombType: "HE",
    casualties: 73,
    casualtiesNote: "73 killed, with 20 seriously and 53 slightly injured.",
    summary: "Two waves of bombers attacked in clear conditions, preceded by parachute flares, striking Culverland Road, Cumberland Terrace, Morgan Square, King Street, Fore Street and Paris Street.",
    note: "The deadliest of the April Baedeker attacks on Exeter and the second-deadliest raid on the city, after 4 May.",
    sources: [
      { label: "Exeter Memories: Air raids on Exeter 1940-1942", url: "https://www.exetermemories.co.uk/em/_events/airraids.php" }
    ]
  },
  {
    id: "exeter-dellers-cafe-1942",
    title: "Deller's Cafe, Bedford Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4 May 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 50.7233,
    lng: -3.5295,
    bombType: "incendiary",
    summary: "Deller's Cafe, a landmark galleried tea room and one of the best-known social venues in the city, was burnt out during the Baedeker raid.",
    note: "Its loss is still cited as one of the most-mourned casualties of the Exeter Blitz — a reminder that what a city misses is not always what was most valuable.",
    sources: [
      { label: "Exeter Memories: The Exeter Blitz", url: "https://www.exetermemories.co.uk/em/exeterblitz.php" }
    ]
  },
  {
    id: "exeter-lower-market-1942",
    title: "The Lower Market, Milk Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4 May 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point",
    lat: 50.7224,
    lng: -3.5343,
    bombType: "incendiary",
    summary: "The Lower Market, a Greek Revival market hall of 1835-37, was gutted in the raid, along with the top of Fore Street and much of South Street.",
    note: "Its surviving shell was demolished in the 1960s — like Bedford Circus, lost to post-war clearance rather than to the bombing itself.",
    sources: [
      { label: "Exeter Memories: The Exeter Blitz", url: "https://www.exetermemories.co.uk/em/exeterblitz.php" }
    ]
  },
  {
    id: "exeter-city-library-1942",
    title: "Exeter City Library, Castle Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4 May 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 50.72555,
    lng: -3.53,
    bombType: "incendiary",
    summary: "The City Library was burnt out, with roughly one million books lost, including much of the Devon and Exeter Institution's holdings and the city's irreplaceable local archive.",
    note: "One of the worst single losses of documentary heritage in the English blitz. It is also why some Exeter incidents are harder to research than those elsewhere — the records burned with the building.",
    sources: [
      { label: "Exeter Memories: The Exeter Blitz", url: "https://www.exetermemories.co.uk/em/exeterblitz.php" },
      { label: "Wikipedia: Exeter Blitz", url: "https://en.wikipedia.org/wiki/Exeter_Blitz" }
    ]
  },
  {
    id: "exeter-heavitree-1940",
    title: "Heavitree parachute mines",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "28 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 50.7224,
    lng: -3.5035,
    bombType: "parachute-mine",
    casualties: 4,
    casualtiesNote: "Four killed and 26 injured.",
    summary: "Two parachute mines fell on Heavitree, causing damage across more than thirty streets including Woodstock Road and Cranbrook Road.",
    note: "The most destructive attack on Exeter before the 1942 Baedeker raids.",
    sources: [
      { label: "Exeter Memories: Air raids on Exeter 1940-1942", url: "https://www.exetermemories.co.uk/em/_events/airraids.php" }
    ]
  },
  {
    id: "exeter-holloway-street-1942",
    title: "Holloway Street & Isca Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "30 December 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 50.7196,
    lng: -3.5288,
    bombType: "HE",
    weightKg: 500,
    casualties: 19,
    summary: "Six 500kg bombs fell across Holloway Street, Isca Road, South Street, Willeys Avenue and the Topsham Road area, killing nineteen people.",
    note: "The last significant raid on Exeter.",
    sources: [
      { label: "Exeter Memories: Air raids on Exeter 1940-1942", url: "https://www.exetermemories.co.uk/em/_events/airraids.php" }
    ]
  },
  {
    id: "exeter-bovemoors-mile-lane-1940",
    title: "Bovemoors Lane & Mile Lane fields, east Exeter",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16 August 1940, 03:25",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point (open-field fall, exact crater not traced)",
    lat: 50.7186,
    lng: -3.5031,
    bombType: "HE",
    summary: "Two high-explosive bombs fell in fields by Bovemoor Lane and Mile Lane on the eastern edge of the city, causing only slight damage to nearby buildings.",
    note: "One of Exeter's earliest raids, well before the 1942 Baedeker attacks devastated the centre. A local account holds that one of these bombs killed a cow in the field — plausible for an open-field HE fall of this kind, but not yet corroborated against the primary bomb register (Devon's WW2 bomb census is held by the South West Heritage Trust at the Devon Heritage Centre and is not digitised or searchable online). Coordinate is a postcode-area estimate for Bovemoors Lane, EX2 — the exact field is not pinpointed. Treat as approximate until checked against the SW Heritage Trust register.",
    sources: [
      { label: "Exeter Memories: Air raids on Exeter 1940-1942", url: "https://www.exetermemories.co.uk/em/_events/airraids.php" },
      { label: "South West Heritage Trust: Devon archives and local studies", url: "https://swheritage.org.uk/devon-archives/" }
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
/* ---------- Somerset & Bristol ----------
   Added after Devon and Cornwall. Two points worth knowing:

   Bristol is NOT in Somerset. It is its own ceremonial county (the City and
   County of Bristol); Bath is in Somerset, via Bath & North East Somerset.
   They are filed here as separate counties for that reason.

   These sets are hand-researched named incidents, like the Exeter and
   Cornwall sets and unlike the Plymouth bulk layer. Where two records would
   otherwise land on the same coordinate — several raids anchored to one town
   centre — the lesser-documented raid is recorded in the note of the record
   it sits alongside rather than given a pin of its own. Two markers stacked
   on one point hides one of them, and a hidden record is worse than a
   footnoted one.
------------------------------------------------------------------- */
const bristolRecords = [
  {
    id: "filton-bac-1940",
    title: "Bristol Aeroplane Company works, Filton",
    status: "reported",
    statusLabel: "Reported target area",
    date: "25 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 51.5194,
    lng: -2.5908,
    bombType: "HE",
    casualties: 132,
    casualtiesNote: "Of the dead, 91 were Bristol Aeroplane Company employees. A further 315 people were injured.",
    summary: "Fifty-eight Heinkel He 111 bombers with fighter escort attacked the Bristol Aeroplane Company works and airfield in a daylight raid shortly before noon. Six semi-underground shelters took direct hits. Eight completed aircraft and a Beaufighter prototype were destroyed.",
    note: "Sources differ on the death toll: the University of the West of England's Bristol History Resource gives 132, John Penny's archival study for the Bristol Branch of the Historical Association gives 131, and BBC anniversary coverage says 'more than 140'. The figure shown is the most commonly cited. Note also that Filton lies just outside the modern city boundary, in South Gloucestershire, so this marker sits fractionally beyond the Bristol outline — the works were 'Bristol' by name and by workforce, not by council area.",
    sources: [
      { label: "UWE Bristol History Resource: Bristol during World War Two", url: "http://humanities.uwe.ac.uk/bhr/Main/ww2/1_7.htm" },
      { label: "Bristol Branch of the Historical Association: Luftwaffe Operations over Bristol (John Penny)", url: "https://bristolha.wordpress.com/wp-content/uploads/2019/09/bha085.pdf" },
      { label: "BBC News: Filton Blitz remembered", url: "https://feeds.bbci.co.uk/news/av/uk-england-bristol-54292520" }
    ]
  },
  {
    id: "wine-street-castle-1940",
    title: "Wine Street & Castle Street, Old City",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "24 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point",
    lat: 51.4552,
    lng: -2.5896,
    bombType: "incendiary",
    casualties: 207,
    summary: "The first and most destructive raid of the Bristol Blitz. Around 135 to 148 aircraft attacked for roughly four and a half hours, dropping some 156 tonnes of high explosive and about 12,500 incendiaries. The medieval shopping heart of the city around Castle Street, Wine Street and Mary-le-Port Street burned out.",
    note: "That quarter was never rebuilt; the ground is now Castle Park, which is why the modern map shows open green space where the city centre used to be. Casualty figures vary between sources — 207 killed and 187 seriously injured is the most commonly cited, while John Penny's archival study gives 200 killed and 689 injured.",
    sources: [
      { label: "Historic England: The Bristol Blitz", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/the-bristol-blitz/" },
      { label: "Bristol24/7: Remembering the Bristol Blitz 75 years on", url: "https://www.bristol247.com/news-and-features/news/75-years-on-from-the-bristol-blitz/" }
    ]
  },
  {
    id: "park-street-museum-1940",
    title: "Park Street & Bristol Museum, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "24 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 51.4553,
    lng: -2.6042,
    bombType: "incendiary",
    summary: "During the same raid Park Street was severely burnt, with a contemporary journalist recording that every third shop was ablaze. Bristol Museum & Art Gallery on Queen's Road was hit, and the university district and Clifton Parish Church were damaged.",
    note: "No separate casualty figure is published for Park Street. The 207 dead recorded for the night of 24 November are a city-wide total and are not broken down by street.",
    sources: [
      { label: "Historic England: The Bristol Blitz", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/the-bristol-blitz/" }
    ]
  },
  {
    id: "temple-meads-1941",
    title: "Temple Meads station & Queen Square",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3 January 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 51.4492,
    lng: -2.5813,
    bombType: "HE",
    casualties: 149,
    summary: "The longest raid on Bristol, lasting over eleven hours, with 178 aircraft dropping about 152 tonnes of high explosive and more than 53,000 incendiaries. Temple Meads lost platforms 9 and 12, its booking office, telegraph office and clock tower.",
    note: "A 2,000kg bomb nicknamed 'Satan' fell during this raid and failed to explode. It was not recovered until April 1943, and was later paraded through London in the 1945 Victory Parade.",
    sources: [
      { label: "Bristol Branch of the Historical Association: Luftwaffe Operations over Bristol", url: "https://bristolha.wordpress.com/wp-content/uploads/2019/09/bha085.pdf" },
      { label: "Bristol24/7: Remembering the Bristol Blitz 75 years on", url: "https://www.bristol247.com/news-and-features/news/75-years-on-from-the-bristol-blitz/" }
    ]
  },
  {
    id: "avonmouth-docks-1941",
    title: "Avonmouth Docks",
    status: "reported",
    statusLabel: "Reported target area",
    date: "4 January 1941",
    sortYear: 1941,
    confidence: "Strategic target area",
    lat: 51.5040,
    lng: -2.6990,
    bombType: "incendiary",
    casualties: 18,
    casualtiesNote: "The 18 killed and 109 injured is the figure for the Bristol area as a whole that night, not for the docks alone.",
    summary: "A raid of roughly nine and a half hours by 126 bombers targeted the port, dropping about 158 tonnes of high explosive and nearly 55,000 incendiaries.",
    note: "Damage was serious enough that on 17 January normal dock operations stopped entirely — the only day in the whole war on which enemy action halted the port.",
    sources: [
      { label: "Bristol Branch of the Historical Association: Luftwaffe Operations over Bristol", url: "https://bristolha.wordpress.com/wp-content/uploads/2019/09/bha085.pdf" }
    ]
  },
  {
    id: "easton-stpauls-1941",
    title: "Easton, St Paul's, Whitehall & Fishponds",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "16 March 1941",
    sortYear: 1941,
    confidence: "Rough area",
    lat: 51.4622,
    lng: -2.5877,
    bombType: "HE",
    casualties: 257,
    summary: "A seven-hour attack by 164 aircraft dropped roughly 164 tonnes of high explosive and nearly 34,000 incendiaries on Bristol and Avonmouth. Poor visibility caused the bombing to drift into densely built working-class suburbs, producing the highest single-night death toll of the Bristol raids.",
    note: "This marker is a district-level anchor covering Easton, St Paul's, Whitehall and Fishponds, not a bomb location. UWE's Bristol History Resource describes this as perhaps the worst Bristol raid measured by casualties: 257 killed and 391 injured.",
    sources: [
      { label: "UWE Bristol History Resource: Bristol during World War Two", url: "http://humanities.uwe.ac.uk/bhr/Main/ww2/1_8.htm" },
      { label: "Bristol24/7: Remembering the Bristol Blitz 75 years on", url: "https://www.bristol247.com/news-and-features/news/75-years-on-from-the-bristol-blitz/" }
    ]
  },
  {
    id: "good-friday-raid-1941",
    title: "Good Friday raid — Queen Square & Prince Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "11 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 51.4501,
    lng: -2.5959,
    bombType: "HE",
    casualties: 180,
    summary: "The last of the six major raids on Bristol. About 153 aircraft attacked over roughly five hours, dropping some 193 tonnes of high explosive and nearly 37,000 incendiaries on the harbour and industrial areas, Avonmouth and Portishead.",
    note: "Damage to the electricity supply ended Bristol's tram system permanently. Recorded impact areas include Prince Street, Canon's Marsh, Queen Square, Colston Avenue and St Philip's Bridge, along with Bedminster, Knowle, Hotwells and Shirehampton.",
    sources: [
      { label: "Bristol Branch of the Historical Association: Luftwaffe Operations over Bristol", url: "https://bristolha.wordpress.com/wp-content/uploads/2019/09/bha085.pdf" },
      { label: "Bristol24/7: Remembering the Bristol Blitz 75 years on", url: "https://www.bristol247.com/news-and-features/news/75-years-on-from-the-bristol-blitz/" }
    ]
  },
  {
    id: "broad-weir-1942",
    title: "Broad Weir, Old Market",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "28 August 1942",
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 51.4571,
    lng: -2.5876,
    bombType: "HE",
    casualtiesNote: "Deliberately left blank. Published figures for this incident range from five killed and 24 injured to 45 killed, and this site has not been able to resolve the difference from a source it trusts.",
    summary: "A single Luftwaffe bomber attacking in daylight scored a chance hit on buses standing at Broad Weir, near the corner of Philadelphia Street. Fire spread through the vehicles, and the incident is widely described as the largest loss of life caused by one bomb in Bristol during the war.",
    note: "The casualty figure is genuinely disputed rather than merely uncertain: Bristol24/7 reports 45 killed, while other local accounts give five killed and 24 injured. Both cannot be right, and no figure is asserted here until a reliable source settles it. Wikipedia's Bristol Blitz article does not cover the incident at all.",
    sources: [
      { label: "Bristol24/7: Remembering the Bristol Blitz 75 years on", url: "https://www.bristol247.com/news-and-features/news/75-years-on-from-the-bristol-blitz/" },
      { label: "brisray.com: Bristol — The Blitz", url: "https://brisray.com/bristol/blitz.htm" }
    ]
  },
  {
    id: "kings-weston-lane-2024",
    title: "Kings Weston Lane, Avonmouth",
    status: "found",
    statusLabel: "Found UXO",
    date: "October 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point",
    lat: 51.5100,
    lng: -2.6810,
    bombType: "unspecified",
    summary: "A suspected unexploded device was uncovered during construction work on Kings Weston Lane in Avonmouth. Police established a safety cordon and bomb disposal specialists attended to examine the item before the road reopened.",
    note: "The device type and final disposal were not published. The month is taken from a UXO contractor's incident list — the BBC report itself carries no visible date.",
    sources: [
      { label: "BBC News: Bomb squad called to 'unexploded device'", url: "https://feeds.bbci.co.uk/news/articles/cdje7g2mjmjo" },
      { label: "1st Line Defence: UXO risk in Bristol", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/bristol/" }
    ]
  },
  {
    id: "sneyd-park-shell-2024",
    title: "Sneyd Park garden shell",
    status: "found",
    statusLabel: "Found UXO",
    date: "January 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point (exact garden not published)",
    lat: 51.4744,
    lng: -2.6317,
    bombType: "HE",
    disposal: "Removed to open ground on Durdham Downs and destroyed in a controlled explosion.",
    summary: "A Second World War two-pounder high explosive shell was found in a garden in Sneyd Park. An Explosive Ordnance Disposal team moved it to Durdham Downs and carried out a controlled explosion, leaving a crater about three feet across.",
    note: "A separate unexploded shell was reportedly dealt with at Sneyd Park in June 2017. The two appear to be distinct finds, but that could not be confirmed from a news source.",
    sources: [
      { label: "Zetica UXO: Unexploded shell found in Bristol garden", url: "https://zeticauxo.com/news/unexploded-shell-found-bristol-garden/" }
    ]
  }
];

const bathRecords = [
  {
    id: "bath-royal-crescent-1942",
    title: "Royal Crescent, Bath",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25–27 April 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 51.3865,
    lng: -2.3690,
    bombType: "HE",
    summary: "Houses in the Royal Crescent were destroyed during the Baedeker raids of April 1942. The damaged sections were later reconstructed behind the surviving Georgian frontage.",
    note: "The Baedeker raids were explicitly reprisal attacks on historic cities of cultural rather than military value, named after the German tourist guidebooks said to have been used to choose them. No street-level casualty figure is published for the Royal Crescent.",
    sources: [
      { label: "Bath Heritage: Baedeker Raids war memorial", url: "http://bath-heritage.co.uk/war-memorial_airraids.html" }
    ]
  },
  {
    id: "bath-assembly-rooms-1942",
    title: "Assembly Rooms & The Circus, Bath",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25–27 April 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 51.3866,
    lng: -2.3636,
    bombType: "incendiary",
    summary: "The Bath Assembly Rooms were burnt out during the April 1942 raids, and houses in The Circus and the Paragon were destroyed. Completed in 1771, the Assembly Rooms were among the most significant Georgian buildings in the city and were later restored.",
    note: "Across the raids 218 buildings of architectural or historic interest were damaged. Bath Abbey and the Roman Baths survived, the Abbey losing a stained glass window; St Andrew's and St James's churches were damaged beyond repair and demolished.",
    sources: [
      { label: "Bath Heritage: Baedeker Raids war memorial", url: "http://bath-heritage.co.uk/war-memorial_airraids.html" }
    ]
  },
  {
    id: "bath-queen-square-1942",
    title: "Queen Square, Bath",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25–27 April 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 51.3840,
    lng: -2.3648,
    bombType: "HE",
    weightKg: 500,
    summary: "A 500kg high explosive bomb struck the south side of Queen Square, damaging the frontage of the Francis Hotel and neighbouring buildings. The lost section of the John Wood the Elder terrace was later rebuilt.",
    note: "The Bath Blitz Memorial Project records 118 bombs of 500kg dropped on Bath across the two nights, alongside 165 of 250kg, 58 of 50kg, 22 of 1,000kg, two of 1,800kg and 4,356 one-kilogram incendiaries. The project states plainly that these are best estimates, because the Civil Defence records were themselves destroyed in the bombing.",
    sources: [
      { label: "Bath Blitz Memorial Project: bomb types", url: "http://www.bathheritagewatchdog.org/bathblitz/bombtypes.htm" }
    ]
  },
  {
    id: "bath-roseberry-road-shelter-1942",
    title: "Roseberry Road public shelter",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "26 April 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point",
    lat: 51.3790,
    lng: -2.3830,
    bombType: "HE",
    casualties: 30,
    casualtiesNote: "Approximate. One account gives 'over 30 deaths'; the memorial plaque confirms the shelter as a site of mass casualties but gives no number.",
    summary: "A public air raid shelter in Roseberry Road was hit on 26 April 1942, one of the worst single losses of life in the Bath Blitz. The updated Bath Blitz memorial plaque records it alongside a shelter in Third Avenue as a specific site of mass casualties.",
    note: "Sources spell the road both Roseberry and Rosebery, and place it variously in Twerton and Oldfield Park, so the point here is an area anchor rather than a located shelter. The Third Avenue shelter is confirmed as a second mass-casualty site but has no confirmable location, so it is recorded in the Oldfield Park entry rather than given its own marker.",
    sources: [
      { label: "Bath Heritage: Shaftesbury Road memorial garden and plaques", url: "http://bath-heritage.co.uk/shaftesbury-road.html" }
    ]
  },
  {
    id: "bath-oldfield-park-1942",
    title: "Oldfield Park & Twerton — Bath Blitz memorial",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "25–27 April 1942",
    sortYear: 1942,
    confidence: "Rough area",
    lat: 51.3776,
    lng: -2.3773,
    bombType: "HE",
    casualtiesNote: "417 people were killed across Bath, including 56 young children. That is a city-wide total, not a figure for this district. Other accounts say 'over 400'.",
    summary: "The residential districts west and south of the centre, including Oldfield Park and Twerton, suffered the heaviest destruction and loss of life — not the Georgian set pieces the raids are remembered for. A memorial garden off Shaftesbury Road commemorates the dead.",
    note: "City-wide, 329 houses and shops were totally destroyed, around 700 more wrecked and roughly 1,900 further buildings damaged. A memorial service at this garden in 2008 was attended by Willi Schludecker, a former Luftwaffe pilot who had taken part in the raids.",
    sources: [
      { label: "Bath Heritage: Shaftesbury Road memorial garden", url: "http://bath-heritage.co.uk/shaftesbury-road.html" },
      { label: "Bath Heritage: Baedeker Raids war memorial", url: "http://bath-heritage.co.uk/war-memorial_airraids.html" }
    ]
  },
  {
    id: "bath-lansdown-road-2016",
    title: "Lansdown Road — former Royal High Junior School",
    status: "found",
    statusLabel: "Found UXO",
    date: "May 2016",
    sortYear: 2016,
    confidence: "Confirmed event, street-derived point",
    lat: 51.3948,
    lng: -2.3660,
    bombType: "HE",
    weightKg: 228,
    cordonRadiusM: 300,
    disposal: "Shielded behind 250 tonnes of sand, then removed under police escort and destroyed in a controlled explosion away from the city.",
    evacuationNote: "Up to 1,000 homes evacuated within a 300m exclusion zone; residents were moved to Bath Racecourse.",
    casualties: 0,
    summary: "Contractors using a digger on the former Royal High Junior School site uncovered a suspected unexploded 500lb German bomb, 1.42 metres long. Bomb disposal teams built a barrier of 250 tonnes of sand around the device before removing it.",
    note: "Later Bath finds include a suspected device at a primary school in July 2018 and a suspected WWII grenade recovered by a magnet fisher in December 2020.",
    sources: [
      { label: "BBC News: Bath WW2 bomb scare — hundreds of homes evacuated", url: "https://feeds.bbci.co.uk/news/uk-england-somerset-36279782" },
      { label: "1st Line Defence: UXO risk in Bath", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/bath/" }
    ]
  }
];

const westonRecords = [
  {
    id: "weston-baedeker-1942",
    title: "Weston-super-Mare — the Baedeker raids",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "27–29 June 1942",
    sortYear: 1942,
    confidence: "Rough area",
    lat: 51.3458,
    lng: -2.9770,
    bombType: "HE",
    casualties: 102,
    casualtiesNote: "Figures vary. Historic England gives 'over 100 deaths' across the two nights; a local-history account gives 102 killed and 400 injured; a privately compiled casualty register names 87 dead across the two nights. Around 100 is the most commonly cited figure.",
    summary: "Weston was attacked on two consecutive nights in June 1942, part of the Baedeker reprisal campaign. Historic England records roughly 100 high-explosive bombs and 10,000 incendiaries across the two nights. Deaths were concentrated in Orchard Street, Devonshire Road, Moorland Road, Prospect Place and the Bournville Estate.",
    note: "Weston was also raided overnight on 4/5 January 1941, an incendiary attack that caused deaths across the town centre; the named casualty register lists around 32 dead for that night. That raid is recorded here rather than as a separate marker because both would anchor to the same town-centre point. The borough's total civilian war dead was 110.",
    sources: [
      { label: "Historic England: Weston-super-Mare — the view from above", url: "https://historicengland.org.uk/whats-new/research/back-issues/weston-super-mare-the-view-from-above/" },
      { label: "The Weston-super-Mare Blitz war memorial (casualty register)", url: "https://sassienie.com/In%20memory/THE%20WESTON.htm" }
    ]
  },
  {
    id: "banwell-1940",
    title: "Banwell village",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 51.3260,
    lng: -2.8700,
    bombType: "HE",
    weightKg: 680,
    casualties: 5,
    casualtiesNote: "Around 50 people were injured. The dead included PC Basil Stockbridge and Special Constable Ronald Clark.",
    summary: "At about 9.30pm a single German bomber attacked the village of Banwell, north-east of Weston-super-Mare. Damage was reported at Banwell House, the post office and telephone exchange in the Narrows, and several houses and workshops.",
    note: "Two German parachute land mines were also reported near Park Farm, Wolvershill, and two unexploded bombs near The Grange. This rests on a single local-history account and the casualty figure has not been cross-checked against an official record.",
    sources: [
      { label: "Strawberry Line Times: when Banwell was bombed", url: "https://www.harrymottram.co.uk/2025/04/11/strawberry-line-times-when-banwell-was-bombed-in-world-war-two-and-weston-super-mare-suffered-its-own-blitz/" }
    ]
  }
];

const yeovilRecords = [
  {
    id: "yeovil-shelters-1940",
    title: "Preston Road & Vicarage Street shelters",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "7 October 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 50.9420,
    lng: -2.6320,
    bombType: "HE",
    casualties: 27,
    casualtiesNote: "The 27 dead covers both the 7 October raid and a second raid the following day; the source does not split the figure by day.",
    summary: "Yeovil's first and most serious air raid, followed by a second the next day. Two bombs made direct hits on air raid shelters — one in Preston Road, one at Vicarage Street Methodist Church.",
    note: "Across the war Yeovil recorded ten air raids and 107 high-explosive bombs, killing or fatally wounding 49 people. No incendiaries are recorded as having fallen on the town. The last raid, on 5 August 1942, damaged nearly a thousand houses; it is noted here rather than mapped separately because it would anchor to this same town-centre point.",
    sources: [
      { label: "Yeovil History: wartime", url: "https://www.yeoviltown.com/history/wartime.aspx" }
    ]
  },
  {
    id: "westland-works-1941",
    title: "Westland Aircraft works & Westland Road",
    status: "reported",
    statusLabel: "Reported target area",
    date: "March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point",
    lat: 50.9405,
    lng: -2.6510,
    bombType: "HE",
    summary: "A single Dornier 17 attacked the Westland Aircraft factory at lunchtime. Two bombs struck the factory, one hit the car park, and further bombs fell on houses in Westland Road, where a direct hit destroyed a home and killed a mother and her five-year-old son.",
    note: "The account comes from Yeovil local historian Jack Sweet, who witnessed the raid aged five. No exact day in March 1941 and no total death toll are given, and the factory position here is indicative rather than surveyed.",
    sources: [
      { label: "Westland 100: Jack Sweet remembers the March 1941 raid", url: "https://www.westland100.org.uk/content/topics/world-war-11-wartime-production/jack-sweet-local-historian-yeovil-remembers-5-yr-old-boy-witnessing-raid-single-german-bomber-westland-factory-march-1941" }
    ]
  }
];

const bridgwaterRecords = [
  {
    id: "bridgwater-1940",
    title: "Cranleigh Gardens & Old Taunton Road",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "24/25 August 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 51.1280,
    lng: -2.9930,
    bombType: "incendiary",
    casualties: 7,
    casualtiesNote: "The dead included ARP Warden Len Wilkins, his wife Gladys and their thirteen-year-old daughter Margaret, along with Daisy Balham and Mr and Mrs Collard.",
    summary: "Bridgwater's first major attack, when around 200 incendiaries and heavy bombs fell on Cranleigh Gardens, the Colley Lane brickyard and Southgate Terrace in Old Taunton Road. Nine houses were damaged or destroyed.",
    note: "On 20 March 1941 two magnetic mines detonated in the Meads near Fairfield, damaging nearly 1,500 premises across the town and killing one person; it is recorded here rather than mapped separately because no located point for the Meads was available. Across the war Bridgwater recorded 263 high-explosive bombs, 6,671 incendiaries, 10 land and other mines, and 63 unexploded bombs.",
    sources: [
      { label: "Bridgwater Town Council: Second World War air raids", url: "https://bridgwater-tc.gov.uk/history/second-world-war/air-raids/" }
    ]
  }
];

const tauntonRecords = [
  {
    id: "richard-huish-2023",
    title: "Richard Huish College, Taunton",
    status: "found",
    statusLabel: "Found UXO",
    date: "August 2023",
    sortYear: 2023,
    confidence: "Confirmed incident, approximate point",
    lat: 51.0130,
    lng: -3.1030,
    bombType: "unspecified",
    disposal: "Destroyed in a controlled explosion by an Army Explosive Ordnance Disposal team.",
    summary: "Contractors excavating a field behind Richard Huish College uncovered an unexploded bomb. The Army's EOD unit attended and carried out a controlled explosion at around 16:40.",
    note: "The BBC report gives the day only as a Thursday, so the exact date is recorded here as August 2023.",
    sources: [
      { label: "BBC News: Unexploded bomb destroyed near Taunton college", url: "https://feeds.bbci.co.uk/news/uk-england-somerset-66404933" }
    ]
  }
];

const burnhamRecords = [
  {
    id: "brean-beach-2024",
    title: "Brean beach — artillery shell",
    status: "found",
    statusLabel: "Found UXO",
    date: "16 January 2024",
    sortYear: 2024,
    confidence: "Rough area",
    lat: 51.3080,
    lng: -3.0180,
    bombType: "unspecified",
    disposal: "Moved down the beach, buried in the sand and detonated in place.",
    evacuationNote: "Nearby properties evacuated as a precaution.",
    summary: "An angler discovered a WWII-era artillery shell on Brean beach. An Explosive Ordnance Disposal team moved the device, buried it and detonated it.",
    note: "Finds recur along this coast for a reason: Berrow Flats formed part of the Stert Flats North Range, used heavily for practice bombing and gunnery. More than 3 million .303 rounds and 1 million 20mm rounds were fired there. A separate find in July 2020 — a shrapnel bomb fuse head roughly the size of a rugby ball — was detonated on the same beach after an eight-hour coastguard cordon. This point sits on the tidal sands, seaward of the administrative coastline, so it falls outside the drawn county outline while still belonging to Somerset.",
    sources: [
      { label: "Zetica UXO: More UXO found on Brean beach in Somerset", url: "https://zeticauxo.com/news/more-uxo-found-on-brean-beach-in-somerset/" },
      { label: "Burnham-On-Sea.com: Army bomb disposal team detonates WW2 device on Brean beach", url: "https://www.burnham-on-sea.com/news/video-army-bomb-disposal-team-detonate-ww2-explosive-device-on-brean-beach/" }
    ]
  },
  {
    id: "brean-seagull-2025",
    title: "Brean beach — suspected ordnance",
    status: "found",
    statusLabel: "Found UXO",
    date: "25 August 2025",
    sortYear: 2025,
    confidence: "Confirmed event, street-derived point",
    lat: 51.3070,
    lng: -3.0080,
    bombType: "unspecified",
    disposal: "Assessed by a bomb disposal team and declared harmless.",
    summary: "On Bank Holiday Monday a metal-detector user found a cylinder-shaped object on Brean beach behind the Seagull pub. Coastguards and police cordoned off the area and a bomb disposal team attended.",
    note: "Recorded as a documented response rather than a confirmed munition — the object was ultimately assessed as safe. Not every cordon ends in a detonation, and the ones that do not are part of the picture too.",
    sources: [
      { label: "Burnham-On-Sea.com: Suspected ordnance find sparks beach closure in Brean", url: "https://www.burnham-on-sea.com/news/suspected-ordnance-find-sparks-beach-closure-in-brean-on-bank-holiday-monday" }
    ]
  },
  {
    id: "apex-park-2026",
    title: "Apex Park, Burnham-on-Sea",
    status: "found",
    statusLabel: "Found UXO",
    date: "March 2026",
    sortYear: 2026,
    confidence: "Confirmed incident, approximate point",
    lat: 51.2340,
    lng: -2.9840,
    bombType: "unspecified",
    cordonRadiusM: 50,
    summary: "Construction contractors at Apex Park found small pieces of suspected unexploded ordnance on the east side of the lake, including what appeared to be mortar shells and a grenade. Somerset Council imposed a 50-metre cordon, halted the works and put up temporary fencing.",
    note: "A specialist contractor was to be engaged to assess and clear any remaining ordnance. The council notice was updated on 6 March 2026; the exact discovery date was not stated.",
    sources: [
      { label: "Somerset Council: Council cordons off section of park after suspected ordnance found", url: "https://www.somerset.gov.uk/news/council-takes-action-to-cordon-off-section-of-park-after-suspected-ordnance-is-found" }
    ]
  }
];

/* ---------- London, Hampshire, Kent and Sussex ----------
   Sussex is TWO ceremonial counties, East and West, not one — East Grinstead
   (West Sussex) and Brighton (East Sussex) are filed separately for that
   reason. Portsmouth, Southampton, Medway and Brighton & Hove are unitary
   authorities but ceremonially belong to their historic counties, the same
   pattern as Plymouth and Torbay in Devon.

   London is a selection and can only ever be one: around 30,000 civilians
   were killed there. What follows is the incidents that are individually
   documented and located, spread across the city rather than concentrated
   in the East End, and covering the V-weapon campaign as well as the Blitz.
------------------------------------------------------------------- */
const londonRecords = [
  {
    id: "croydon-airport-1940",
    title: "Croydon Airport & Purley Way factories",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "15 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 51.35603,
    lng: -0.1166,
    bombType: "HE",
    casualties: 68,
    casualtiesNote: "62 civilians, five airmen of No. 111 Squadron and one from Station Headquarters. More than 35 of the dead were at the British N.S.F. factory.",
    summary: "Twenty-two Messerschmitt Bf 110 fighter-bombers of Erprobungsgruppe 210 attacked the aerodrome and the factories along Purley Way, hitting the terminal, the armoury and the Bourjois and British N.S.F. works. Around 200 houses on the Waddon estate were damaged and 180 people made homeless.",
    note: "The first major raid on the Greater London area. The casualties were spread across the adjacent factory sites rather than concentrated at the marker.",
    sources: [
      { label: "Historic Croydon Airport Trust: World War II military operations", url: "https://www.historiccroydonairport.org.uk/history/world-war-ii-military-operations/" }
    ]
  },
  {
    id: "south-hallsville-1940",
    title: "South Hallsville School, Canning Town",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "10 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point (school destroyed, site redeveloped)",
    lat: 51.516,
    lng: 0.0145,
    bombType: "parachute-mine",
    casualtiesNote: "Deliberately left blank. The official figure was around 70; local residents and campaigners have long maintained the true toll was closer to 600. The wartime press blackout means the difference has never been settled.",
    summary: "Families made homeless by earlier raids were sheltering in the school basement, waiting for evacuation buses that had not arrived, when the building took a direct hit and collapsed into the basement.",
    note: "A wartime press blackout suppressed the location, the details and the photographs, which is why the death toll remains contested more than eighty years later. The disaster contributed to the decision to open Underground stations as public shelters.",
    sources: [
      { label: "London Borough of Newham: honouring the hidden victims of the Blitz", url: "https://www.newham.gov.uk/news/article/540/mayor-of-newham-and-school-children-honour-the-hidden-victims-of-the-blitz" }
    ]
  },
  {
    id: "balham-station-1940",
    title: "Balham Underground station, Wandsworth",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 October 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 51.44327,
    lng: -0.15264,
    bombType: "HE",
    weightKg: 1400,
    casualtiesNote: "Sources give between 64 and 68 killed: the Commonwealth War Graves Commission records 66, other accounts give 68 (64 shelterers and four railway staff). More than 70 were injured.",
    summary: "A 1,400kg bomb fell on Balham High Road above the northern end of the platform tunnels, collapsing the northbound tunnel and flooding it with earth and water from fractured mains and sewers. Hundreds of people were sheltering below at the time.",
    note: "The Northern line stayed closed between Tooting Bec and Clapham Common until 12 January 1941.",
    sources: [
      { label: "Wikipedia: Balham tube station", url: "https://en.wikipedia.org/wiki/Balham_tube_station" }
    ]
  },
  {
    id: "bank-station-1941",
    title: "Bank Underground station, City of London",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "11 January 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 51.5134,
    lng: -0.089,
    bombType: "HE",
    casualties: 56,
    casualtiesNote: "56 killed and 69 seriously injured is the figure on the 2017 memorial plaque and in standard accounts. A higher figure of 160 has appeared in some recent commemorations and should be treated as contested.",
    summary: "A bomb struck the Central line booking hall and the blast travelled down the stairs and escalators onto the crowded platforms below. The explosion left a crater roughly 120 by 100 feet in the roadway, later bridged with a Bailey bridge to restore traffic.",
    note: "The station was closed for two months.",
    sources: [
      { label: "London Remembers: Bank Station WW2 bomb memorial", url: "https://www.londonremembers.com/memorials/bank-station-ww2-bomb" },
      { label: "Wikipedia: Bank and Monument stations", url: "https://en.wikipedia.org/wiki/Bank_and_Monument_stations" }
    ]
  },
  {
    id: "old-palace-school-1941",
    title: "Old Palace School, Poplar",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point (a new school stands on the site)",
    lat: 51.5142,
    lng: -0.0158,
    bombType: "parachute-mine",
    casualties: 34,
    casualtiesNote: "Thirteen from the London Fire Brigade and Auxiliary Fire Service in London, and twenty-one from AFS Beckenham who had come in to help. Among them were firewomen, messengers and a despatch rider.",
    summary: "The school was in use as an Auxiliary Fire Service sub-station during the heavy raid on the night of 19-20 April 1941. A parachute mine struck the building, destroying it and killing everyone inside.",
    note: "The largest single loss of fire brigade personnel in English history. Lansbury Lawrence Primary School now stands on the site and carries a memorial plaque. Recorded here after a submitted dataset placed a 240-death incident at Waterloo Bridge on this same night — no such incident could be corroborated, and this appears to be the raid it was reaching for.",
    sources: [
      { label: "Wikipedia: 1941 Old Palace School bombing", url: "https://en.wikipedia.org/wiki/1941_Old_Palace_School_bombing" }
    ]
  },
  {
    id: "cafe-de-paris-1941",
    title: "Cafe de Paris, Coventry Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 51.5104,
    lng: -0.133,
    bombType: "HE",
    weightKg: 50,
    casualties: 34,
    casualtiesNote: "At least 34 killed and around 80 injured. Higher figures circulate in popular accounts; 34 is the sourced minimum.",
    summary: "A 50kg bomb fell through a ventilation shaft into the basement ballroom at 3-4 Coventry Street and detonated in front of the stage shortly after the evening performance began. Among the dead were the bandleader Ken Johnson and members of his band.",
    note: "Rescue was delayed because the street frontage appeared undamaged. Looting of the dead and injured led to Scots Guards being posted to secure the site.",
    sources: [
      { label: "Wikipedia: Cafe de Paris, London", url: "https://en.wikipedia.org/wiki/Caf%C3%A9_de_Paris,_London" }
    ]
  },
  {
    id: "palace-of-westminster-1941",
    title: "Palace of Westminster — Commons Chamber",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "10-11 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 51.4995,
    lng: -0.1248,
    bombType: "incendiary",
    casualtiesNote: "No Palace-specific death toll is given by the parliamentary sources consulted. The House of Lords Library records 1,436 civilian deaths across London on that night's raid — a city-wide figure, not one for this site.",
    summary: "On the heaviest night of the London Blitz, incendiary and high-explosive bombs struck the Palace of Westminster. The Commons Chamber was gutted by fire, the roof of Westminster Hall was set alight, and the Lords Chamber and Clock Tower were damaged.",
    note: "The Commons sat in the Lords Chamber from June 1941 until 1950, when Giles Gilbert Scott's replacement Chamber opened.",
    sources: [
      { label: "House of Lords Library: Bombing of the Houses of Parliament", url: "https://lordslibrary.parliament.uk/research-briefings/lif-2016-0028/" },
      { label: "UK Parliament: Bomb damage", url: "https://www.parliament.uk/about/living-heritage/building/palace/architecture/palacestructure/bomb-damage/" }
    ]
  },
  {
    id: "sandhurst-road-school-1943",
    title: "Sandhurst Road School, Catford",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20 January 1943",
    sortYear: 1943,
    confidence: "Confirmed event, landmark point",
    lat: 51.4478,
    lng: -0.0095,
    bombType: "HE",
    weightKg: 500,
    casualties: 44,
    casualtiesNote: "38 children and six staff. Thirty-two children died at the school and six later in hospital; around 60 people were injured.",
    summary: "A Focke-Wulf Fw 190 fighter-bomber struck the school at about half past twelve during a low-level daylight raid. The air-raid siren had not sounded before the aircraft arrived, and most of the dead were children eating lunch in the dining hall.",
    note: "Thirty-one children and one teacher were buried together at Hither Green Cemetery before a crowd of more than 7,000 mourners.",
    sources: [
      { label: "Wikipedia: Bombing of Sandhurst Road School", url: "https://en.wikipedia.org/wiki/Bombing_of_Sandhurst_Road_School" }
    ]
  },
  {
    id: "grove-road-v1-1944",
    title: "Grove Road railway bridge, Bow — first V-1 on London",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13 June 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.5293,
    lng: -0.0392,
    bombType: "V1",
    casualties: 6,
    casualtiesNote: "Six killed and 42 injured.",
    summary: "The first V-1 flying bomb to reach London fell on the railway bridge carrying the Liverpool Street to Stratford line over Grove Road, Mile End. Houses in Antill Road and neighbouring streets were wrecked and the line was severed.",
    note: "Services resumed within about 40 hours on a temporary bridge. An English Heritage blue plaque on the bridge records the event.",
    sources: [
      { label: "English Heritage: The First Flying Bomb on London", url: "https://www.english-heritage.org.uk/visit/blue-plaques/flying-bomb/" }
    ]
  },
  {
    id: "guards-chapel-1944",
    title: "Guards' Chapel, Wellington Barracks",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "18 June 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.5013,
    lng: -0.1345,
    bombType: "V1",
    casualties: 121,
    casualtiesNote: "121 killed and 141 injured, service personnel and civilians together.",
    summary: "A V-1 struck the Guards' Chapel during Sunday morning service, collapsing the concrete roof onto the congregation. It was the deadliest single V-1 incident of the war in London.",
    note: "The chapel was rebuilt in a modernist style and completed in 1963.",
    sources: [
      { label: "Wikipedia: Guards' Chapel, Wellington Barracks", url: "https://en.wikipedia.org/wiki/Guards_Chapel,_Wellington_Barracks" }
    ]
  },
  {
    id: "aldwych-v1-1944",
    title: "Aldwych, Westminster",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "30 June 1944",
    sortYear: 1944,
    confidence: "Confirmed event, street-derived point",
    lat: 51.5129,
    lng: -0.1178,
    bombType: "V1",
    casualties: 48,
    casualtiesNote: "48 killed and around 200 seriously injured. A figure of 198 deaths appears in some retellings and is most likely a confusion with the number injured.",
    summary: "A V-1 cut out over Waterloo and dived into the roadway outside Adastral House, opposite Bush House, shortly after two in the afternoon. The street was crowded with office workers returning from lunch and queuing at the post office, and many of the dead were young women clerical staff.",
    sources: [
      { label: "Flying Bombs and Rockets: V1 The Aldwych", url: "http://www.flyingbombsandrockets.com/V1_maintxtd.html" }
    ]
  },
  {
    id: "sloane-court-1944",
    title: "Sloane Court East, Chelsea",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3 July 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.4901,
    lng: -0.1568,
    bombType: "V1",
    casualties: 77,
    casualtiesNote: "74 US Army personnel and three civilians. The costliest single V-1 incident for American forces in Britain.",
    summary: "A V-1 fell on Sloane Court East early in the morning as American servicemen billeted in the requisitioned flats were assembling in the street.",
    note: "A stone tablet on the boundary wall of the Duke of York's Headquarters, opposite the junction with Sloane Court East, records the dead.",
    sources: [
      { label: "IWM War Memorials Register: Sloane Court Chelsea V1 Incident 1944", url: "https://memorials.iwm.org.uk/memorial/23188" }
    ]
  },
  {
    id: "staveley-road-v2-1944",
    title: "Staveley Road, Chiswick — first V-2 on Britain",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 September 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.482,
    lng: -0.261,
    bombType: "V2",
    casualties: 3,
    casualtiesNote: "Three killed, including a three-year-old girl, and 19 injured.",
    summary: "At 6.37pm the first V-2 rocket to strike Britain fell on Staveley Road near the junction with Burlington Lane, leaving a crater about thirty feet across and destroying houses. The rocket had been launched from Wassenaar in the occupied Netherlands.",
    note: "A granite memorial stone was placed near the impact point in 2004.",
    sources: [
      { label: "Wikipedia: Staveley Road", url: "https://en.wikipedia.org/wiki/Staveley_Road" }
    ]
  },
  {
    id: "new-cross-woolworths-1944",
    title: "Woolworths, New Cross Road, Deptford",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25 November 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.4753,
    lng: -0.0378,
    bombType: "V2",
    casualties: 168,
    casualtiesNote: "168 killed, including 33 children, and around 122 injured.",
    summary: "A V-2 struck the crowded Woolworths store on New Cross Road at 12.26pm on a Saturday, collapsing the building and devastating the adjoining Co-operative store and nearby offices. The blast overturned lorries and threw debris up to half a mile.",
    note: "It remains one of the worst single civilian-casualty incidents on British soil during the war. Memorial plaques mark the site.",
    sources: [
      { label: "Historic England: Devastating V2 rocket attack on Woolworths, New Cross", url: "https://heritagecalling.com/2019/11/25/devastating-v2-rocket-attack-on-woolworths-new-cross-london/" },
      { label: "Woolworths Museum: Remember New Cross", url: "https://www.woolworthsmuseum.co.uk/1940s-remembernewcross.htm" }
    ]
  },
  {
    id: "smithfield-market-1945",
    title: "Smithfield Market, Farringdon",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 March 1945",
    sortYear: 1945,
    confidence: "Confirmed event, landmark point",
    lat: 51.5203,
    lng: -0.1055,
    bombType: "V2",
    casualties: 110,
    casualtiesNote: "110 killed and 366 injured. A small number of accounts date the strike to 9 March; the memorial on site records 8 March 1945.",
    summary: "A V-2 struck the market at the junction of Charterhouse Street and Farringdon Road late on a weekday morning, the buildings collapsing into the railway tunnels beneath. The death toll was high because crowds had gathered for a rare consignment of rabbit meat during rationing.",
    note: "A brass memorial disc, its pattern based on a cross-section of a V-2, marks the site at the J J Mack Building.",
    sources: [
      { label: "Flying Bombs and Rockets: V2 Smithfield Market", url: "http://www.flyingbombsandrockets.com/V2_maintextd.html" },
      { label: "IanVisits: A new memorial marks the site of the Smithfield Market bombing", url: "https://www.ianvisits.co.uk/articles/a-new-memorial-marks-the-site-of-londons-smithfield-market-bombing-78603/" }
    ]
  },
  {
    id: "hughes-mansions-1945",
    title: "Hughes Mansions, Vallance Road, Stepney — last V-2 on London",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "27 March 1945",
    sortYear: 1945,
    confidence: "Confirmed event, landmark point",
    lat: 51.5209,
    lng: -0.0596,
    bombType: "V2",
    casualties: 134,
    summary: "At 7.21am a V-2 struck Hughes Mansions on Vallance Road, destroying the central block of the flats and killing 134 men, women and children, many of them from the local Jewish community. It was the last V-2 to fall on London.",
    note: "A memorial plaque in the rear courtyard records the names of the dead.",
    sources: [
      { label: "London Remembers: Hughes Mansions memorial", url: "https://www.londonremembers.com/memorials/hughes-mansions" }
    ]
  },
  {
    id: "kynaston-road-1945",
    title: "Kynaston Road, Orpington — last V-2 death in Britain",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "27 March 1945",
    sortYear: 1945,
    confidence: "Confirmed event, street-derived point (the house has been rebuilt)",
    lat: 51.3812,
    lng: 0.1,
    bombType: "V2",
    casualties: 1,
    casualtiesNote: "Ivy Millichamp, aged 34, killed in the kitchen of her home. Twenty-four people were injured.",
    summary: "One of the final two V-2 rockets launched at Britain struck Kynaston Road, Orpington, leaving a crater around forty feet across and twenty feet deep.",
    note: "Ivy Millichamp was the last civilian killed by enemy action in Britain during the Second World War.",
    sources: [
      { label: "Bromley Times: Tale of Orpington woman killed by Hitler's final V2", url: "https://www.bromleytimes.co.uk/news/tale-of-orpington-woman-killed-by-hitler-s-final-v2-uncovered-in-new-book-1-1649097" }
    ]
  },
  {
    id: "grange-walk-bermondsey-2015",
    title: "Grange Walk, Bermondsey",
    status: "found",
    statusLabel: "Found UXO",
    date: "23 March 2015",
    sortYear: 2015,
    confidence: "Confirmed incident, landmark point",
    lat: 51.4976,
    lng: -0.077,
    bombType: "HE",
    weightKg: 250,
    cordonRadiusM: 200,
    disposal: "Removed under escort by the Royal Logistic Corps to a quarry in Kent for controlled detonation.",
    evacuationNote: "Hundreds of homes evacuated within a 200m cordon, two primary schools closed and around 100 residents rehoused overnight.",
    casualties: 0,
    summary: "A German bomb about five feet long was uncovered on a demolition site at the corner of The Grange and Grange Walk.",
    note: "Reported weights conflict: the BBC gives 250kg, while some contemporary reports described it as roughly 1,000lb.",
    sources: [
      { label: "BBC News: Bermondsey bomb safely removed", url: "https://feeds.bbci.co.uk/news/uk-england-london-32030875" },
      { label: "London SE1: Unexploded bomb found on Bermondsey building site", url: "https://www.london-se1.co.uk/news/view/8154" }
    ]
  },
  {
    id: "empire-way-wembley-2015",
    title: "Empire Way, Wembley",
    status: "found",
    statusLabel: "Found UXO",
    date: "21 May 2015",
    sortYear: 2015,
    confidence: "Confirmed incident, approximate point",
    lat: 51.5548,
    lng: -0.2833,
    bombType: "HE",
    weightKg: 50,
    disposal: "Removed by the Army and detonated in Bedfordshire.",
    evacuationNote: "About 300 properties evacuated, including television studios then in use, with around 70 people spending the night in an evacuation centre.",
    casualties: 0,
    summary: "A 50kg German bomb was found on a building site roughly 200 metres from Wembley Stadium. The Army said the device posed a genuine risk to life.",
    sources: [
      { label: "BBC News: Wembley WW2 live bomb posed 'risk to life'", url: "https://feeds.bbci.co.uk/news/uk-england-london-32841971" }
    ]
  }
];

const southamptonRecords = [
  {
    id: "supermarine-woolston-1940",
    title: "Supermarine Aviation Works, Woolston",
    status: "reported",
    statusLabel: "Reported target area",
    date: "26 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 50.8975,
    lng: -1.3892,
    bombType: "HE",
    casualtiesNote: "Figures depend on which raid is counted. The Spitfire Society gives 36 killed and 60 seriously injured in Southampton on 26 September; a combined total of 110 is given for the raids of 24 and 26 September together.",
    summary: "The Luftwaffe made two daylight raids on the riverside factory building Spitfires, with around 60 Heinkel He 111s escorted by Bf 110s. Most bombs overshot into surrounding residential streets and factory shelters; only seven hit the Woolston works.",
    note: "Production was suspended and Spitfire manufacture was afterwards dispersed across the region — the raid achieved less than the casualty figures suggest.",
    sources: [
      { label: "The Spitfire Society: Luftwaffe raid on Southampton, 26 September 1940", url: "https://www.spitfiresociety.org/blogcontent-13-2-luftwaffe-raid-on-southampton---26-september-1940" },
      { label: "Wikipedia: Southampton Blitz", url: "https://en.wikipedia.org/wiki/Southampton_Blitz" }
    ]
  },
  {
    id: "woolston-railway-arch-1940",
    title: "Railway arch shelter, Woolston",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "26 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 50.9035,
    lng: -1.3825,
    bombType: "HE",
    casualties: 7,
    summary: "About twenty people sheltering in a disused brick tunnel in the railway embankment were buried when a bomb collapsed the entrance. Rescuers dug survivors out by hand despite an unexploded bomb nearby, and recovery of the dead continued for almost 24 hours.",
    sources: [
      { label: "The Supermariners: The Fatal Railway Arch", url: "https://supermariners.wordpress.com/2021/07/09/the-fatal-railway-arch/" }
    ]
  },
  {
    id: "northam-gasworks-1940",
    title: "Northam Gasworks",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "26 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 50.9105,
    lng: -1.3865,
    bombType: "HE",
    casualties: 11,
    summary: "Bombs aimed at the Itchen industrial corridor struck the gasworks at Northam during the same daylight raid that targeted Supermarine, killing eleven workers.",
    sources: [
      { label: "Wikipedia: Southampton Blitz", url: "https://en.wikipedia.org/wiki/Southampton_Blitz" }
    ]
  },
  {
    id: "civic-centre-art-gallery-1940",
    title: "Civic Centre Art Gallery school shelter",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "6 November 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 50.90635,
    lng: -1.4067,
    bombType: "HE",
    weightKg: 227,
    casualties: 35,
    casualtiesNote: "35 killed including 14 or 15 children. Of the fifteen children sheltering in the basement, only one survived.",
    summary: "A 500lb bomb fell through the roof of the art gallery in a daylight raid and exploded in the lower floors, where a school class was sheltering during an art lesson.",
    sources: [
      { label: "Historic Southampton: Postcards from the Blitz", url: "https://historicsouthampton.co.uk/postcards-from-the-blitz/" },
      { label: "Wikipedia: Southampton Blitz", url: "https://en.wikipedia.org/wiki/Southampton_Blitz" }
    ]
  },
  {
    id: "holyrood-church-1940",
    title: "Holyrood Church, High Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "30 November 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 50.8976,
    lng: -1.4027,
    bombType: "incendiary",
    casualtiesNote: "No deaths are attributed to the church itself. The raid of 30 November killed 137 people across the town, 96 of them in air raid shelters — a town-wide figure.",
    summary: "The medieval church took a direct hit and was burnt out, leaving a shell. Around 800 high-explosive bombs and 9,000 incendiaries fell on the town centre that night.",
    note: "The ruins were dedicated in 1957 as a memorial to Merchant Navy seafarers and now house a Titanic memorial fountain.",
    sources: [
      { label: "Wikipedia: Holyrood Church, Southampton", url: "https://en.wikipedia.org/wiki/Holyrood_Church,_Southampton" },
      { label: "Historic Southampton: Postcards from the Blitz", url: "https://historicsouthampton.co.uk/postcards-from-the-blitz/" }
    ]
  },
  {
    id: "above-bar-street-1940",
    title: "Above Bar Street",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "30 November 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 50.9021,
    lng: -1.4043,
    bombType: "incendiary",
    casualtiesNote: "No site-specific figure. 137 people were killed across Southampton on 30 November 1940, and 214 across the raids of 23 and 30 November together.",
    summary: "Southampton's principal shopping street, including the Regal Cinema and Above Bar Church, was gutted in the raid of 30 November 1940.",
    note: "Around 45,000 buildings across the town were damaged or destroyed during the campaign — proportionally the heaviest housing loss of any UK city, at 12.5 per cent of stock. Southampton's war dead totalled 631.",
    sources: [
      { label: "Historic Southampton: Postcards from the Blitz", url: "https://historicsouthampton.co.uk/postcards-from-the-blitz/" },
      { label: "Wikipedia: Southampton Blitz", url: "https://en.wikipedia.org/wiki/Southampton_Blitz" }
    ]
  },
  {
    id: "cumberland-place-2024",
    title: "Cumberland Place, city centre",
    status: "found",
    statusLabel: "Found UXO",
    date: "14 March 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point",
    lat: 50.9081,
    lng: -1.4084,
    bombType: "unspecified",
    casualties: 0,
    evacuationNote: "Office workers and gym users evacuated; cordons placed at Commercial Road and Watts Park.",
    summary: "Suspected unexploded ordnance was found near Cumberland Place in the city centre shortly after 10am. Military bomb disposal experts attended and closures were lifted by early afternoon.",
    sources: [
      { label: "BBC News: Unexploded ordnance found in Southampton city centre", url: "https://feeds.bbci.co.uk/news/uk-england-hampshire-68565342" }
    ]
  }
];

const portsmouthRecords = [
  {
    id: "portsmouth-guildhall-1941",
    title: "Portsmouth Guildhall",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "10 January 1941",
    sortYear: 1941,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 50.7983,
    lng: -1.0919,
    bombType: "incendiary",
    casualtiesNote: "No deaths are attributed to the Guildhall itself. 172 people were killed across Portsmouth on the night of 10/11 January 1941 — a city-wide figure. Portsmouth's war total was 930 dead and 2,837 injured across 67 major raids.",
    summary: "The Guildhall was struck by multiple incendiaries and completely gutted. An observer described ribbons of green fire dropping down the side of the building as the copper of the cupola melted.",
    note: "The civic silver was recovered from a basement safe. The building was not rebuilt until the 1950s.",
    sources: [
      { label: "Portsmouth Guildhall: 80 years on — Portsmouth and the Blitz", url: "https://www.portsmouthguildhall.org.uk/2021/01/08/80-years-on-portsmouth-and-the-blitz/" },
      { label: "Daly History Blog: The Portsmouth Blitz, 70 years on", url: "https://dalyhistory.wordpress.com/2011/01/11/the-portsmouth-blitz-70-years-on/" }
    ]
  },
  {
    id: "besant-road-shelter-1941",
    title: "Besant Road shelter, Arundel Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "10 January 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 50.7997,
    lng: -1.0836,
    bombType: "HE",
    casualtiesNote: "Sources conflict sharply: contemporary and secondary accounts give 47 killed by a direct hit on the shelter, while the memorial plaque on the site states 80 men, women and children died — though only 76 names are listed on it.",
    summary: "An underground shelter serving the Arundel Street area took a direct hit during Portsmouth's heaviest raid. Most of the dead were buried together in Kingston Cemetery.",
    note: "A memorial plaque marks the site at the junction of Arundel Street and Holbrook Road.",
    sources: [
      { label: "Memorials in Portsmouth: Besant Road air raid shelter", url: "https://www.memorialsinportsmouth.co.uk/city-centre/besant-road-shelter.htm" },
      { label: "Daly History Blog: 69 years ago, the Portsmouth Blitz", url: "https://dalyhistory.wordpress.com/2010/01/11/69-years-ago-the-portsmouth-blitz-pt-2/" }
    ]
  },
  {
    id: "portsmouth-dockyard-1941",
    title: "Royal Dockyard, Portsea & Landport",
    status: "reported",
    statusLabel: "Reported target area",
    date: "10 January 1941",
    sortYear: 1941,
    confidence: "Strategic target area",
    lat: 50.8017,
    lng: -1.1075,
    bombType: "incendiary",
    casualtiesNote: "No site-specific figure available. The city-wide toll for the night was 172.",
    summary: "The naval dockyard and the adjoining Portsea and Landport districts were among the principal targets of the 10 January raid, alongside the power station, six churches, a hospital and three cinemas. Around 40,000 incendiaries and 140 tons of high explosive fell over roughly seven hours, starting 2,314 fires and fracturing 60 water mains.",
    note: "The city's records manager recorded that survivors found large parts of Portsea, Landport and Southsea were smoking ruins.",
    sources: [
      { label: "Portsmouth Guildhall: 80 years on — Portsmouth and the Blitz", url: "https://www.portsmouthguildhall.org.uk/2021/01/08/80-years-on-portsmouth-and-the-blitz/" }
    ]
  },
  {
    id: "langstone-decoy-1941",
    title: "Langstone Harbour decoy site",
    status: "reported",
    statusLabel: "Reported target area",
    date: "17 April 1941",
    sortYear: 1941,
    confidence: "Rough area",
    lat: 50.818,
    lng: -1.02,
    bombType: "unspecified",
    casualties: 0,
    summary: "Around 200 air-dropped munitions fell on a decoy site in Langstone Harbour rather than on the city — a successful use of the deception sites built to draw bombing away from populated Portsmouth.",
    note: "Recorded because the decoys are part of the story of why bombs fell where they did. Portsmouth also built a deep shelter into Portsdown Hill in 1942, designed to hold 2,500 people.",
    sources: [
      { label: "Liberation Route Europe: The Portsmouth Blitz", url: "https://www.liberationroute.com/en/stories/437/the-portsmouth-blitz" }
    ]
  },
  {
    id: "portsmouth-harbour-2016",
    title: "Portsmouth Harbour, off Gunwharf",
    status: "found",
    statusLabel: "Found UXO",
    date: "23 November 2016",
    sortYear: 2016,
    confidence: "Confirmed incident, approximate point (found underwater)",
    lat: 50.7965,
    lng: -1.105,
    bombType: "HE",
    weightKg: 227,
    cordonRadiusM: 500,
    disposal: "Towed out and detonated about 1.5 miles east of the Isle of Wight.",
    evacuationNote: "Gunwharf Quays, Old Portsmouth, the Historic Dockyard, Portsmouth Harbour station and the Gosport and Wightlink ferry terminals all cleared.",
    casualties: 0,
    summary: "A 500lb German bomb was found in Portsmouth Harbour early one morning, prompting a 500m exclusion zone across the waterfront.",
    note: "The Royal Navy noted that such devices still pose a very serious threat when they are moved — the reason a find that has lain harmlessly for eighty years still closes a city centre.",
    sources: [
      { label: "BBC News: Portsmouth evacuations prompted by WW2 bomb find", url: "https://feeds.bbci.co.uk/news/uk-england-hampshire-37997259" }
    ]
  }
];

const hampshireWiderRecords = [
  {
    id: "gosport-forton-road-1940",
    title: "St Vincent sports ground, Forton Road, Gosport",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "12 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 50.797,
    lng: -1.13,
    bombType: "HE",
    casualties: 15,
    casualtiesNote: "At least fifteen: twelve military personnel, ten of them from barrage balloon squadrons, two civilian groundsmen, and at least three further civilians.",
    summary: "Junkers Ju 87 Stukas attacked the 933 Barrage Balloon Squadron site at St Vincent sports ground, part of a raid of more than 150 aircraft. The railway line to Fareham is thought to have given the pilots their run-in.",
    note: "Most of the servicemen killed were buried in the war graves section of Ann's Hill Cemetery.",
    sources: [
      { label: "Barrage Balloon Reunion Club: Tragic loss of life at 933 Barrage Balloon Squadron, Gosport", url: "http://www.bbrclub.org/Tragic%20Loss%20of%20Life%20at%20933%20Barrage%20Balloon%20Squadron%20at%20Gosport%2012th%20August%201940.htm" }
    ]
  },
  {
    id: "basingstoke-church-square-1940",
    title: "Church Square, Basingstoke",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 51.2662,
    lng: -1.0878,
    bombType: "HE",
    casualties: 10,
    summary: "Basingstoke's largest raid struck the area around Church Square and Church Lane at about the time most people were leaving work. St Michael's Church was left with only one intact window and the Methodist church needed extensive restoration.",
    note: "A motorcyclist was killed and a resident was shot by machine-gun fire during the same attack.",
    sources: [
      { label: "Max Love: World War Two, Basingstoke", url: "http://www.maxlove.co.uk/ww2.htm" },
      { label: "Alton Herald: The day the bombs fell on Farnborough and Bordon", url: "https://www.altonherald.com/news/nostalgia-the-day-the-bombs-fell-on-farnborough-and-bordon-706790" }
    ]
  },
  {
    id: "rae-farnborough-1940",
    title: "Royal Aircraft Establishment, Farnborough",
    status: "reported",
    statusLabel: "Reported target area",
    date: "16 August 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 51.283,
    lng: -0.754,
    bombType: "HE",
    casualties: 3,
    casualtiesNote: "Three Home Guard members killed at Farnborough. Around 166 civilian deaths were recorded across southern England that day — a regional figure that should not be attributed to Farnborough.",
    summary: "A large Luftwaffe formation crossed the coast near the Solent and split into groups of eight or nine aircraft, striking the Royal Aircraft Establishment as well as Bordon Camp and Basingstoke.",
    note: "Broken cloud hampered Fighter Command's interception of the roughly 200 bombers dispersed that day.",
    sources: [
      { label: "Alton Herald: The day the bombs fell on Farnborough and Bordon", url: "https://www.altonherald.com/news/nostalgia-the-day-the-bombs-fell-on-farnborough-and-bordon-706790" }
    ]
  },
  {
    id: "winchester-hyde-street-1943",
    title: "Hyde Street, Winchester",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "9 February 1943",
    sortYear: 1943,
    confidence: "Confirmed event, street-derived point",
    lat: 51.068,
    lng: -1.3168,
    bombType: "HE",
    casualties: 7,
    summary: "A bomb fell beside a bus stop on Hyde Street, killing seven people waiting for a bus. A first bomb had hit the Theatre Royal on Jewry Street and five more fell in nearby gardens without fatalities.",
    note: "These were the only bombs to directly hit Winchester during the entire war — a reminder that proximity to a target city was not the same as being one.",
    sources: [
      { label: "Culture on Call (Hampshire Cultural Trust): Winchester during modern war", url: "https://www.cultureoncall.com/winchester-wars/" }
    ]
  },
  {
    id: "hogmoor-bordon-2024",
    title: "Hogmoor Inclosure, Bordon",
    status: "found",
    statusLabel: "Found UXO",
    date: "16 January 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point",
    lat: 51.116,
    lng: -0.868,
    bombType: "HE",
    cordonRadiusM: 1500,
    initialCordonRadiusM: 200,
    disposal: "Destroyed in a controlled explosion behind a blast wall built from more than 300 tonnes of imported sand.",
    evacuationNote: "Properties evacuated and the gas supply cut before detonation.",
    casualties: 0,
    summary: "Construction workers redeveloping the former army training area found a German WWII bomb at Hogmoor Inclosure. The controlled explosion was heard up to fifteen miles away.",
    sources: [
      { label: "Zetica UXO: Controlled explosion as WWII German UXB found in Bordon", url: "https://zeticauxo.com/news/controlled-explosion-as-wwii-german-uxb-found-in-bordon/" },
      { label: "Surrey Live: Bordon homes evacuated after Second World War bomb discovered", url: "https://www.getsurrey.co.uk/news/surrey-news/bordon-homes-evacuated-after-german-16956447" }
    ]
  }
];

const canterburyRecords = [
  {
    id: "canterbury-baedeker-1942",
    title: "St George's Street & the Longmarket",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "1 June 1942",
    sortYear: 1942,
    confidence: "Rough area",
    lat: 51.2783,
    lng: 1.0834,
    bombType: "incendiary",
    casualties: 43,
    casualtiesNote: "43 killed and around 100 injured across the city — a city-wide total for the raid, not a figure for this street.",
    summary: "In the early hours the Luftwaffe struck Canterbury as part of the Baedeker reprisal raids for the RAF attack on Cologne. The commercial heart of the city around St George's Street and the Longmarket was gutted; 800 buildings were destroyed and around 6,000 more damaged.",
    note: "The burnt-out St George's clock tower survives as a marker of the destroyed quarter.",
    sources: [
      { label: "KentOnline: 75th anniversary of the Baedeker Blitz on Canterbury", url: "https://www.kentonline.co.uk/canterbury/news/the-day-bombs-fell-like-126561/" },
      { label: "IWM: What were the Baedeker raids?", url: "https://www.iwm.org.uk/history/what-were-the-baedeker-raids" }
    ]
  },
  {
    id: "canterbury-cathedral-1942",
    title: "Canterbury Cathedral — Library & Deanery",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "1 June 1942",
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 51.2803,
    lng: 1.0825,
    bombType: "incendiary",
    casualtiesNote: "No casualties are attributed to the Cathedral precincts.",
    summary: "Sixteen bombs fell in the immediate vicinity of the cathedral, but the church itself survived largely undamaged. The Cathedral Library and the Deanery were badly damaged, and four fire watchers on the roof extinguished incendiaries before they could take hold.",
    note: "The medieval stained glass had been removed and stored beforehand; later Victorian windows left in place were destroyed. The cathedral's survival owed as much to the men on its roof as to luck.",
    sources: [
      { label: "Canterbury Cathedral Learning: World War Two", url: "https://learning.canterbury-cathedral.org/a-walk-through-time/ww2/" }
    ]
  }
];

const doverRecords = [
  {
    id: "dover-cross-channel-shelling",
    title: "Dover town centre — cross-Channel shelling",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "1940-1944",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 51.1279,
    lng: 1.3117,
    bombType: "shell",
    casualtiesNote: "216 civilians killed, 344 severely and 416 slightly injured in Dover across the whole war. This is a town-wide, war-long total covering both shelling and bombing, not a figure for any one impact.",
    summary: "From 1940 to 1944 Dover was bombarded by German long-range artillery on the French coast around Cap Gris-Nez, some 21 miles away — a form of attack unique in Britain and the origin of the town's Hellfire Corner name. Borough records count 2,226 shells landing on the town and 686 in the surrounding district, alongside 464 high-explosive bombs and three parachute mines.",
    note: "Shells, not bombs. The 380mm guns at Cap Gris-Nez fired projectiles containing around 70kg of explosive. There were 3,059 air-raid alerts, and 10,056 buildings were damaged, 957 of them destroyed. Sources disagree on the date of the first shell, giving either 12 or 22 August 1940.",
    sources: [
      { label: "Dover Museum: Cross Channel Shelling, World War Two", url: "https://www.dovermuseum.co.uk/Information-Resources/The-Collection/Cross-Channel-Shelling,-World-War-Two.aspx" },
      { label: "Dover-Kent.co.uk: Dover in the Second World War — bombing and shelling", url: "https://www.dover-kent.co.uk/ww2_bombing.html" }
    ]
  },
  {
    id: "barwicks-cave-1944",
    title: "Barwick's Cave shelter, Snargate Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "26 September 1944",
    sortYear: 1944,
    confidence: "Confirmed event, landmark point",
    lat: 51.1236,
    lng: 1.3072,
    bombType: "shell",
    weightKg: 1000,
    casualties: 1,
    casualtiesNote: "Patience Ransley, aged 63 — the last civilian death from cross-Channel shelling.",
    summary: "The final enemy shell to land on Kent struck the cliff above Barwick's Cave, one of Dover's deep cliff shelters, at 7.15pm. It passed through a grave in the cemetery above and bored a further 24 feet through solid chalk before detonating about seven feet above the shelter's reinforced concrete roof.",
    note: "A 16-inch shell fired from the Lindemann Battery near Sangatte. The shelter ran through from Snargate Street to Durham Hill; the marker is the Snargate Street end.",
    sources: [
      { label: "Dover's History Archive: The Unlikely Death of Patience Ransley", url: "https://www.dover.uk.com/history/1944/the-unlikely-death-of-patience-ransley" },
      { label: "The Dover Society: Last enemy shell to land in Kent, September 1944", url: "https://thedoversociety.co.uk/2-last-enemy-shell-to-land-in-kent-sept-1944/" }
    ]
  }
];

const folkestoneRecords = [
  {
    id: "folkestone-bridge-street-1944",
    title: "Bridge Street, Folkestone",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3 July 1944",
    sortYear: 1944,
    confidence: "Confirmed event, street-derived point",
    lat: 51.0806,
    lng: 1.1832,
    bombType: "V1",
    casualties: 3,
    casualtiesNote: "Three killed, including the licensee of the Wheatsheaf Inn, and sixty injured.",
    summary: "A V-1 flying bomb crashed into Bridge Street near the harbour, destroying nine houses and the Wheatsheaf Inn.",
    note: "Folkestone recorded 123 civilian deaths, 778 injuries and 14,141 properties damaged across the war. Like Dover, it was shelled from France as well as bombed; its worst shelling day was 14 September 1944.",
    sources: [
      { label: "Folkestone Families: WWII civilian deaths roll", url: "http://freepages.rootsweb.com/~folkestonefamilies/genealogy/wwiicivil.htm" }
    ]
  }
];

const ashfordRecords = [
  {
    id: "ashford-great-raid-1943",
    title: "Ashford Railway Works, Newtown",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "24 March 1943",
    sortYear: 1943,
    confidence: "Confirmed event, landmark point",
    lat: 51.14,
    lng: 0.8785,
    bombType: "HE",
    casualtiesNote: "Sources give between 53 and 60 killed, with 150 to 250 injured. KentOnline's 2023 anniversary piece gives 53 killed and more than 150 injured.",
    summary: "Fifteen Focke-Wulf 190 fighter-bombers attacked Ashford in a low-level daylight raid at about ten in the morning, coming in out of the sun with the railway works as the primary target. Around 13,500kg of high explosive was dropped.",
    note: "Bombs also struck the Stanhay works, Hayward's garage, Snashall's bakery and the tannery at Dover Place, with damage along Milton, Star, Hardinge and Beaver Roads. Beaver Road School was destroyed but no children were killed there.",
    sources: [
      { label: "KentOnline: 80 years since the Second World War bombing in Ashford which claimed 53 lives", url: "https://www.kentonline.co.uk/ashford/news/now-people-panic-when-a-firework-goes-off-we-got-used-to-b-284161/" }
    ]
  },
  {
    id: "little-chart-v1-1944",
    title: "Church of St Mary, Little Chart",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16 August 1944",
    sortYear: 1944,
    confidence: "Confirmed site, building-level",
    lat: 51.1616,
    lng: 0.7833,
    bombType: "V1",
    casualties: 0,
    summary: "A V-1 heading for London was shot down by a fighter over Little Chart and fell onto the medieval Church of St Mary at about eight in the evening. The nave, north aisle, chancel and north chapel were destroyed.",
    note: "The west tower of about 1500 and part of the chancel survive as a listed ruin. No injuries were reported — one of many V-1s brought down over Kent short of their target, which is why the county was called bomb alley.",
    sources: [
      { label: "Kent Historic Environment Record: Ruins of Church of St Mary, Little Chart", url: "https://heritage.kent.gov.uk/Monument/MKE22073" }
    ]
  }
];

const maidstoneRecords = [
  {
    id: "maidstone-mill-street-1940",
    title: "Mill Street, Maidstone",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "31 October 1940",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point",
    lat: 51.2723,
    lng: 0.5205,
    bombType: "HE",
    casualtiesNote: "Deaths occurred but no figure is given in the source consulted, so none is asserted here.",
    summary: "A lone Dornier 17 bombed Mill Street shortly before nine in the morning — the last bombs to fall on the town during the Battle of Britain period. The intended target was the Rootes Motors repair workshops, which built and repaired military vehicles.",
    note: "Shops and offices in Mill Street were heavily damaged and the town's trolleybus system had to be re-routed.",
    sources: [
      { label: "KentOnline: Onslaught from the air remembered", url: "https://www.kentonline.co.uk/maidstone/news/onslaught-from-the-air-remembere-a41954/" }
    ]
  }
];

const ramsgateRecords = [
  {
    id: "ramsgate-five-minute-raid-1940",
    title: "Ramsgate town centre — the five-minute raid",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "24 August 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 51.3339,
    lng: 1.4183,
    bombType: "HE",
    casualties: 31,
    casualtiesNote: "29 civilians and two soldiers killed; ten seriously and forty slightly injured.",
    summary: "The Luftwaffe dropped more than 500 bombs on Ramsgate in roughly five minutes, damaging or destroying some 1,200 houses.",
    note: "The town's deep shelter tunnels, completed shortly before, are credited with keeping the death toll far lower than the scale of destruction would suggest — around 300 families later lived in them permanently. Fireman Moore received the George Medal for dragging a wounded colleague to safety under machine-gun fire.",
    sources: [
      { label: "Ramsgate Tunnels: Ramsgate bombing, August 1940", url: "https://www.ramsgatetunnels.org/ramsgate-bombing-august-1940/" },
      { label: "Historic England: Ramsgate Tunnels case study", url: "https://historicengland.org.uk/research/heritage-counts/2018-heritage-in-commercial-use/case-studies/ramsgate-tunnels/" }
    ]
  }
];

const medwayRecords = [
  {
    id: "chatham-dockyard-1940",
    title: "Chatham Dockyard",
    status: "reported",
    statusLabel: "Reported target area",
    date: "19 August 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 51.3985,
    lng: 0.5291,
    bombType: "HE",
    casualties: 3,
    casualtiesNote: "Three dockyard workers killed and two wounded in the 19 August raid. The raids of 27-28 August killed 21 and seriously wounded 19 across the Medway Towns as a whole — not at the dockyard alone.",
    summary: "Chatham Dockyard, the Nore Command's principal naval base, was bombed on 19 August 1940. The nights of 27 and 28 August brought what contemporary records describe as one of the Medway Towns' worst attacks of the war.",
    note: "Bombs later fell on dockyard buildings including the Fitted Rigging House, the Locomotive Shop and the Factory.",
    sources: [
      { label: "Kent Archaeology: Defending Chatham 1939-1941", url: "https://www.kentarchaeology.org.uk/books/defending-chatham-1939-1941" },
      { label: "Chatham Historic Dockyard Trust: Chatham during the war", url: "https://thedockyard.co.uk/news/ve80-chatham-during-the-war/" }
    ]
  },
  {
    id: "ordnance-street-chatham-1940",
    title: "Ordnance Street, Chatham",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "December 1940",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point",
    lat: 51.3823,
    lng: 0.5206,
    bombType: "parachute-mine",
    casualties: 24,
    summary: "Twenty-four people were killed when parachute mines fell on Ordnance Street, destroying homes including that of the Thorn family, who died together.",
    note: "Survivor Steve Foy, ten years old at the time, campaigned for years for a permanent memorial; a plaque naming the dead was unveiled in 2014 at the spot where the second mine came down. The source gives the month but not the day, so no exact date is asserted.",
    sources: [
      { label: "KentOnline: Chatham memorial unveiled to remember 24 killed in Ordnance Street", url: "https://www.kentonline.co.uk/medway/news/wartime-memorial-unveiled-24709/" }
    ]
  },
  {
    id: "rochester-wickham-street-1941",
    title: "Wickham Street, Rochester",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 51.3878,
    lng: 0.5062,
    bombType: "HE",
    casualties: 11,
    casualtiesNote: "Eleven killed, among them three firefighters of the Rochester Auxiliary Fire Service and a two-year-old boy. More than a hundred were injured.",
    summary: "High-explosive bombs, parachute mines and around 1,000 incendiaries fell on Rochester overnight, destroying dozens of homes in the Wickham Street area.",
    note: "An ARP officer's account records residents sweeping up glass and debris almost immediately afterwards.",
    sources: [
      { label: "KentOnline: Eleven died when bombs fell on a Rochester street 75 years ago", url: "https://www.kentonline.co.uk/medway/news/mayhem-and-death-on-a-93963/" }
    ]
  },
  {
    id: "upchurch-v1-1944",
    title: "Oak Lane railway bridge, Upchurch",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16 August 1944",
    sortYear: 1944,
    confidence: "Confirmed event, approximate point",
    lat: 51.36,
    lng: 0.634,
    bombType: "V1",
    casualties: 8,
    casualtiesNote: "Seven train passengers and one railway worker sheltering beneath the bridge. Around 200 people were injured, eighteen of them seriously.",
    summary: "A V-1 destroyed the railway bridge carrying the line over Oak Lane at Upchurch. The Victoria to Ramsgate train, carrying around 400 passengers, arrived moments later and ran into the gap.",
    note: "The driver reported his hat being blown off and a cloud of smoke ahead before the crash. A replacement structure was in place within three days.",
    sources: [
      { label: "KentOnline: Historian unearths new details of the Upchurch doodlebug train crash", url: "https://www.kentonline.co.uk/sittingbourne/news/doodlebug-crash-7081/" }
    ]
  }
];

const kingsHillRecords = [
  {
    id: "kings-hill-2024",
    title: "King's Hill, former RAF West Malling",
    status: "found",
    statusLabel: "Found UXO",
    date: "January 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point",
    lat: 51.2793,
    lng: 0.4025,
    bombType: "HE",
    weightKg: 50,
    disposal: "Destroyed in a controlled explosion the following day, behind blast mitigation installed by an EOD team.",
    evacuationNote: "A school and several neighbouring premises evacuated behind a police cordon.",
    casualties: 0,
    summary: "A 50kg German unexploded bomb was uncovered during construction work at King's Hill, on the site of the former RAF West Malling airfield, which was heavily attacked during the Battle of Britain.",
    note: "A second 50kg German bomb had been found and destroyed at the same site in June 2023. Wartime airfields remain among the most reliable places to find unexploded ordnance eighty years on.",
    sources: [
      { label: "Zetica UXO: Another 50kg WWII bomb found at King's Hill in Kent", url: "https://zeticauxo.com/news/another-wwii-bomb-found-at-kings-hill/" },
      { label: "KentOnline: Second World War bomb discovered in Kings Hill", url: "https://www.kentonline.co.uk/malling/news/unearthed-bomb-likely-to-be-detonated-tomorrow-213033/" }
    ]
  }
];

const brightonRecords = [
  {
    id: "kemp-town-odeon-1940",
    title: "Odeon Cinema, Kemp Town",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 September 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 50.8187,
    lng: -0.1268,
    bombType: "HE",
    weightKg: 50,
    casualtiesNote: "Published figures for the raid range from 52 to 59 killed, of whom roughly six to twelve died inside the cinema itself. Royal Pavilion & Museums gives 52 across the raid; other accounts give 54 or 59.",
    summary: "A lone Dornier Do 17, pursued by Spitfires, jettisoned twenty 50kg bombs over Kemp Town at about half past three on a Saturday afternoon. Two struck the Odeon cinema at 38 St George's Road during a children's matinee.",
    note: "Brighton's deadliest air raid of the war. Other bombs fell in Edward Street, Upper Rock Gardens, Hereford Street, Upper Bedford Street, Rock Street and Kemp Town Place.",
    sources: [
      { label: "Royal Pavilion & Museums: Brighton's deadliest bombing raid of WW2", url: "https://ww2.brightonmuseums.org/looking-forwards-reflecting-back/brightons-deadliest-bombing-raid-of-ww2/" },
      { label: "Wikipedia: Brighton Blitz", url: "https://en.wikipedia.org/wiki/Brighton_Blitz" }
    ]
  },
  {
    id: "london-road-viaduct-1943",
    title: "London Road Viaduct, Brighton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25 May 1943",
    sortYear: 1943,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 50.8368,
    lng: -0.1355,
    bombType: "HE",
    weightKg: 500,
    casualties: 24,
    casualtiesNote: "24 killed — ten men, twelve women and two children — with 58 seriously and 69 slightly injured.",
    summary: "Between 25 and 30 Focke-Wulf Fw 190 fighter-bombers attacked Brighton in a low-level daylight raid, demolishing a central pier of the London Road railway viaduct. Around 150 homes were destroyed and more than 500 people displaced.",
    note: "The most structurally destructive raid of the war on the town. The Black Rock gasworks was also set ablaze.",
    sources: [
      { label: "Wikipedia: Brighton Blitz", url: "https://en.wikipedia.org/wiki/Brighton_Blitz" }
    ]
  },
  {
    id: "hove-walsingham-terrace-1943",
    title: "Walsingham Terrace & Rutland Gardens, Hove",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "9 March 1943",
    sortYear: 1943,
    confidence: "Confirmed event, approximate point (four streets affected)",
    lat: 50.8272,
    lng: -0.1935,
    bombType: "HE",
    casualties: 12,
    casualtiesNote: "Twelve killed: six women, four men, one child and one serviceman.",
    summary: "Fighter-bombers struck west Hove at 4.55pm, hitting Walsingham Terrace, Rutland Gardens, Shelley Road and Amherst Crescent with bombs and cannon fire. It was Hove's worst single raid.",
    note: "Hove recorded 91 exploding high-explosive bombs, 1,272 incendiaries, two sea mines and four unexploded bombs between 1939 and 1944, with 30 people killed overall — town-wide figures, not for this site.",
    sources: [
      { label: "Hove in the Past (Judy Middleton): Hove and the Second World War", url: "https://hovehistory.blogspot.com/2016/11/hove-and-second-world-war.html" }
    ]
  }
];

const eastbourneRecords = [
  {
    id: "eastbourne-station-1940",
    title: "Eastbourne railway station",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "26 October 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 50.769,
    lng: 0.2807,
    bombType: "HE",
    casualties: 4,
    casualtiesNote: "Four killed that day when a bomb struck a train standing in the station.",
    summary: "A bomb hit a train at Eastbourne railway station, one of many raids on what the Home Office designated the most raided town in the South East region.",
    note: "Town-wide totals vary widely and should be treated with care: 187 civilians are recorded as dying in the borough through enemy action, a Civil Defence regional officer cited 96 enemy air attacks — more than any other town in the region — and one oral-history account says over 400 bombs fell between July 1940 and December 1941.",
    sources: [
      { label: "Heritage Eastbourne: Peace! But Eastbourne remembers", url: "https://heritageeastbourne.home.blog/2020/05/06/peace-but-eastbourne-remembers/" },
      { label: "Unknown Kent & Sussex: When Eastbourne suffered bombing devastation", url: "https://unknownkentandsussex.co.uk/when-eastbourne-suffered-bombing-devastation/" }
    ]
  }
];

const hastingsRecords = [
  {
    id: "hastings-silverhill-1943",
    title: "Silverhill & Battle Road, Hastings",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "11 March 1943",
    sortYear: 1943,
    confidence: "Rough area",
    lat: 50.8697,
    lng: 0.556,
    bombType: "HE",
    casualties: 38,
    casualtiesNote: "The highest fatality count of any single raid on Hastings.",
    summary: "A low-level tip-and-run fighter-bomber attack struck Combermere Road, Battle Road, St Matthew's School and Alma Terrace.",
    note: "The raid was spread across several separated streets, so this is an area marker rather than a located impact point.",
    sources: [
      { label: "Historical Hastings: Air Raids", url: "https://historymap.info/Air_Raids" }
    ]
  },
  {
    id: "hastings-swan-inn-1943",
    title: "The Swan Inn, High Street, Old Town",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "23 May 1943",
    sortYear: 1943,
    confidence: "Confirmed site, building-level",
    lat: 50.8566,
    lng: 0.5946,
    bombType: "HE",
    casualtiesNote: "Fifteen or sixteen killed at the Swan itself — eleven customers, two staff and two children per the Friends of Hastings Cemetery; a newspaper feature gives sixteen. Across Hastings that day 25 were killed and 85 injured.",
    summary: "Around ten fighter-bombers crossed the coast at the eastern end of Hastings and dived to rooftop height, dropping high-explosive bombs on the Old Town. The Swan Inn was destroyed, along with Swan Terrace and the Albany Hotel.",
    note: "The Swan site is now a Garden of Remembrance, and the victims lie in the Civilian War Dead plot at Hastings Cemetery.",
    sources: [
      { label: "Friends of Hastings Cemetery: Swan Inn 1943", url: "https://friendsofhastingscemetery.org.uk/swaninn.html" },
      { label: "Historical Hastings: Air Raids", url: "https://historymap.info/Air_Raids" }
    ]
  }
];

const bexhillRecords = [
  {
    id: "bexhill-suffolk-house-1943",
    title: "Suffolk House, Brassey Road, Bexhill-on-Sea",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2 January 1943",
    sortYear: 1943,
    confidence: "Confirmed event, street-derived point",
    lat: 50.8412,
    lng: 0.4707,
    bombType: "HE",
    casualties: 4,
    casualtiesNote: "Ada Mary Adamson, Jane Charlotte Cana, Edith Lilian Corke and Eleanor May Coventry.",
    summary: "A tip-and-run raid destroyed Suffolk House in Brassey Road, killing four residents.",
    note: "53 civilians were killed within Bexhill borough by enemy action during the war — a borough-wide figure. A memorial to them was installed at Marina Court Gardens in 2015.",
    sources: [
      { label: "Bexhill Museum: Civilian War Dead", url: "https://www.bexhillmuseum.org.uk/access-centre/second-world-war-2/civilian-war-dead/" }
    ]
  },
  {
    id: "birling-gap-2016",
    title: "Birling Gap beach",
    status: "found",
    statusLabel: "Found UXO",
    date: "22 March 2016",
    sortYear: 2016,
    confidence: "Confirmed incident, approximate point",
    lat: 50.7418,
    lng: 0.2004,
    bombType: "unspecified",
    disposal: "Moved into the water by a Royal Navy bomb disposal team and destroyed in a controlled explosion.",
    casualties: 0,
    summary: "A member of the public found a heavily corroded Second World War shell on the beach at Birling Gap. The beach was cleared and the device destroyed at about half past four; it reopened shortly after five.",
    note: "The shell was too corroded to carry identifying marks — a common outcome for coastal finds, and the reason many are recorded as unspecified.",
    sources: [
      { label: "Sussex Express: Bomb disposal teams handle explosion at Birling Gap", url: "https://www.sussexexpress.co.uk/news/bomb-disposal-teams-handle-explosion-at-birling-gap-1255717" }
    ]
  }
];

const eastGrinsteadRecords = [
  {
    id: "whitehall-cinema-1943",
    title: "Whitehall Cinema, London Road, East Grinstead",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "9 July 1943",
    sortYear: 1943,
    confidence: "Confirmed site, building-level",
    lat: 51.1268,
    lng: -0.0108,
    bombType: "HE",
    weightKg: 500,
    casualties: 108,
    casualtiesNote: "108 killed and 235 injured — the largest loss of life in any air raid in Sussex. Twenty-two of the dead are buried in a communal grave at Mount Noddy Cemetery.",
    summary: "A single twin-engined German bomber attacked the town centre in daylight. A 500kg bomb hit the Whitehall Cinema, which held 184 people, many of them children who had come straight from school.",
    note: "Seven bombs fell in total, including two 50kg devices on Bridgland's Ironmongers and Rice Brothers and a further 500kg bomb near the Methodist Church.",
    sources: [
      { label: "East Grinstead Town Council: Whitehall Cinema bombing", url: "https://www.eastgrinstead.gov.uk/the-council/services/burial-services/history-of-mount-noddy/whitehall-cinema-bombing" },
      { label: "Spartacus Educational: Bombing of the Whitehall Cinema", url: "https://spartacus-educational.com/2WWwhitehall.htm" }
    ]
  }
];

const petworthRecords = [
  {
    id: "petworth-boys-school-1942",
    title: "Petworth Boys' School",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 September 1942",
    sortYear: 1942,
    confidence: "Confirmed event, approximate point",
    lat: 50.9878,
    lng: -0.61,
    bombType: "HE",
    casualties: 32,
    casualtiesNote: "Around 32 killed, including 28 boys.",
    summary: "A Junkers Ju 88 bombed the boys' school at Petworth, killing around thirty-two people, most of them pupils.",
    note: "One of the most devastating single incidents of the war in rural West Sussex, commemorated by a memorial cross registered with the Imperial War Museum.",
    sources: [
      { label: "West Sussex County Council: Petworth bombing case study", url: "http://www2.westsussex.gov.uk/learning-resources/LR/learning/learning_resources/wartime_west_sussex_1939-45/case_studies_for_teachers/petworth_bombing.html" }
    ]
  }
];

const fordRecords = [
  {
    id: "rnas-ford-1940",
    title: "RNAS Ford (HMS Peregrine)",
    status: "reported",
    statusLabel: "Reported target area",
    date: "18 August 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 50.8181,
    lng: -0.5878,
    bombType: "HE",
    casualties: 28,
    summary: "A formation of Stuka dive bombers attacked the Fleet Air Arm station at Ford during the Battle of Britain, wrecking airfield buildings and the landing ground.",
    note: "Some of the dead are buried in Clymping churchyard. The station passed to the RAF shortly afterwards.",
    sources: [
      { label: "Yapton & Ford Local History Group: RNAS Ford / HMS Peregrine, 18 August 1940", url: "http://yaptonhistory.org.uk/places/ford-aerodrome/rnas-ford-hms-peregrine/" }
    ]
  }
];

const shorehamRecords = [
  {
    id: "shoreham-coal-wharf-1940",
    title: "Shoreham Harbour coal wharf",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20 October 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 50.8306,
    lng: -0.2597,
    bombType: "HE",
    casualties: 5,
    casualtiesNote: "Five killed, including 17-year-old Home Guard member George Earthey.",
    summary: "Bombs struck the Shoreham Shipping Coal Company wharf in the harbour.",
    note: "Thirty-seven raids were made on Shoreham and Southwick during the war, causing 17 deaths and 108 injuries, with over 100 high-explosive bombs and more than 2,000 incendiaries recorded — town-wide figures.",
    sources: [
      { label: "shorehambysea.com: Bombing and other incidents during WW2", url: "https://www.shorehambysea.com/bombing-incidents-ww2/" }
    ]
  },
  {
    id: "west-wittering-2024",
    title: "West Wittering beach",
    status: "found",
    statusLabel: "Found UXO",
    date: "26 May 2024",
    sortYear: 2024,
    confidence: "Rough area",
    lat: 50.7737,
    lng: -0.911,
    bombType: "unspecified",
    disposal: "Controlled explosion on the beach by an Explosive Ordnance Disposal team.",
    casualties: 0,
    summary: "Suspected ordnance was reported on West Wittering beach at 3.26pm on the Sunday of the late-May bank holiday. Coastguard crews cordoned the object until an EOD team arrived, standing down at 7.15pm.",
    sources: [
      { label: "Sussex Express: West Sussex beach evacuated after bomb was exploded", url: "https://www.sussexexpress.co.uk/news/people/west-sussex-beach-evacuated-as-bomb-exploded-4645546" }
    ]
  },
  {
    id: "arundel-river-arun-2025",
    title: "River Arun bank, Queen Street, Arundel",
    status: "found",
    statusLabel: "Found UXO",
    date: "3 May 2025",
    sortYear: 2025,
    confidence: "Confirmed incident, street-derived point",
    lat: 50.8523,
    lng: -0.5527,
    bombType: "unspecified",
    disposal: "Made safe by a Royal Navy bomb disposal unit the following morning.",
    evacuationNote: "A cordon was placed and residents asked to avoid the area rather than evacuate.",
    casualties: 0,
    summary: "An unexploded bomb was found at about one in the afternoon on the bank of the River Arun near Queen Street, bringing central Arundel to a standstill. Tidal conditions prevented access until the next morning.",
    sources: [
      { label: "ITV News Meridian: Unexploded bomb brings Arundel to a standstill", url: "https://www.itv.com/news/meridian/2025-05-03/unexploded-bomb-brings-arundel-to-a-standstill" }
    ]
  }
];

const redruthRecords = [
  {
    id: "redruth-bassett-street-1941",
    title: "Bassett Street & Bond Street, Redruth",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "20 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 50.233,
    lng: -5.2274,
    bombType: "HE",
    casualties: 6,
    casualtiesNote: "Six killed and twelve injured, five of them seriously.",
    summary: "A lone raider followed a train into Redruth and bombed the station area and town centre, dropping eleven bombs on Bassett Street, Bond Street, Wesley Street and West Trewirgie.",
    note: "One of the eleven bombs, at East End, failed to explode.",
    sources: [
      { label: "The Bombing of Redruth on 20 March 1941", url: "https://djwilson22.wordpress.com/2018/11/10/the-bombing-of-redruth-on-20th-march-1941/" },
      { label: "Cornwall Railway Society: Cornish Railways War Diary", url: "https://www.cornwallrailwaysociety.org.uk/cornish-railways-war-diary.html" }
    ]
  }
];

const parRecords = [
  {
    id: "par-docks-1941",
    title: "Par Docks, St Austell",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point",
    lat: 50.3462,
    lng: -4.706,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "One soldier killed and two others injured.",
    summary: "Three high-explosive bombs fell near the entrance to Par Docks, damaging the permanent way.",
    note: "Further bombs fell in the St Austell district on 23 June and 13 November 1941 without fatalities.",
    sources: [
      { label: "Cornwall Railway Society: Cornish Railways War Diary", url: "https://www.cornwallrailwaysociety.org.uk/cornish-railways-war-diary.html" }
    ]
  }
];

const hayleRecords = [
  {
    id: "hayle-copperhouse-1941",
    title: "Copperhouse railway cutting, Hayle",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "30 October 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point",
    lat: 50.1875,
    lng: -5.4145,
    bombType: "HE",
    casualties: 0,
    summary: "Bombs fell on the main railway line in the Copperhouse cutting, blocking both tracks and severing the West Cornwall main line. Both lines were cleared by the following day.",
    note: "Recorded because the railway was itself a target: cutting the line to the far west mattered more than the buildings above it.",
    sources: [
      { label: "Cornwall Railway Society: Cornish Railways War Diary", url: "https://www.cornwallrailwaysociety.org.uk/cornish-railways-war-diary.html" }
    ]
  }
];

/* ---------- The northern cities ----------
   Merseyside, Greater Manchester, the West Midlands, South Yorkshire, Hull
   and Tyne and Wear. These are metropolitan counties, so unlike Devon or
   Somerset there is no unitary-authority trap in their boundaries — Hull
   aside, which sits ceremonially in the East Riding.

   One thing dominates the sourcing here and is worth stating plainly: for
   the big northern raids the famous number is almost always a CITY-WIDE
   total for a whole night, not a figure for any one building. Coventry's
   568, Manchester's 684, Liverpool's ~1,900, Hull's ~1,200 — attaching any
   of those to a single pin would be a lie by placement. Where that is the
   only figure available it is recorded in casualtiesNote and the record
   carries no casualty number of its own.
------------------------------------------------------------------- */
const liverpoolRecords = [
  {
    id: "durning-road-1940",
    title: "Durning Road shelter, Edge Hill",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 November 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 53.4032,
    lng: -2.9501,
    bombType: "parachute-mine",
    weightKg: 1000,
    casualties: 166,
    casualtiesNote: "National Museums Liverpool and the University of Liverpool both give 'at least 166'. The University notes the real toll may be higher, because the records of the night were overwhelmed.",
    summary: "A parachute mine struck the Edge Hill Training College on Durning Road, collapsing the building onto around 300 people sheltering in its basement. Boiling water from ruptured heating boilers, escaping gas and fire compounded the disaster and hampered rescue.",
    note: "Widely reported as the single worst civilian incident of the war in Britain, a description attributed to Churchill. The raid began on the night of 28 November; the mine fell in the early hours of the 29th, which is why sources differ on the date.",
    sources: [
      { label: "National Museums Liverpool: Durning Road, Edge Hill", url: "https://www.liverpoolmuseums.org.uk/artifact/durning-road-edge-hill" },
      { label: "University of Liverpool: Remembering the Durning Road tragedy", url: "https://news.liverpool.ac.uk/2024/11/07/when-liverpool-burned-the-university-remembers-the-durning-road-tragedy/" }
    ]
  },
  {
    id: "ss-malakand-1941",
    title: "SS Malakand, Huskisson Dock",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 53.4356,
    lng: -3.0072,
    bombType: "HE",
    casualties: 4,
    summary: "The Brocklebank cargo ship Malakand, loaded with about 1,000 tons of munitions, caught fire during the May Blitz while berthed in Huskisson Branch Dock No. 2. Hours after the raid ended her cargo detonated, destroying the entire branch dock.",
    note: "Debris was thrown up to two and a half miles; a two-ton anchor landed a mile and a half away at Bootle General Hospital. Accounts of the cause differ — the Imperial War Museum's memorial record attributes the fire to a burning barrage balloon, while other accounts say that fire was put out and the ship was ignited by burning dock sheds.",
    sources: [
      { label: "IWM War Memorials Register: SS Malakand memorial", url: "https://memorials.iwm.org.uk/memorial/110491" },
      { label: "National Museums Liverpool: Huskisson Dock after the Malakand explosion", url: "https://www.liverpoolmuseums.org.uk/artifact/photographs-of-huskisson-dock-liverpool-following-explosion-of-brocklebank-ship-malakand" }
    ]
  },
  {
    id: "mill-road-infirmary-1941",
    title: "Mill Road Infirmary, Everton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point",
    lat: 53.4212,
    lng: -2.9663,
    bombType: "HE",
    casualties: 80,
    casualtiesNote: "Approximately 80. The figure is an estimate rather than a confirmed count, and the source notes the true number is likely higher.",
    summary: "A direct hit destroyed three ward blocks of Mill Road Infirmary, including the maternity ward, killing mothers, newborn babies and medical staff. Surviving patients were transferred to Broadgreen Hospital.",
    note: "Superintendent Leonard Findlay received the George Medal and Matron Gertrude Riding the OBE for their conduct that night. The hospital site is now an industrial estate.",
    sources: [
      { label: "Liverpool Blitz 70: The bombing of Mill Road Hospital", url: "http://www.liverpoolblitz70.co.uk/2011/04/08/the-bombing-of-mill-road-hospital/" }
    ]
  },
  {
    id: "st-lukes-liverpool-1941",
    title: "St Luke's Church, Berry Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "6 May 1941",
    sortYear: 1941,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.4019,
    lng: -2.9754,
    bombType: "incendiary",
    casualtiesNote: "No casualties are recorded for this site. The figures often quoted alongside it — over 1,900 killed and nearly 1,500 seriously injured — are city-wide totals for the whole May Blitz week of 1-8 May 1941.",
    summary: "An incendiary set fire to St Luke's just after midnight, gutting the interior and roof and bringing down the bells, while the outer walls largely survived. The shell was deliberately left standing as a memorial to the May Blitz.",
    note: "Known locally as the Bombed Out Church, it remains a civic landmark and events venue.",
    sources: [
      { label: "St Luke's Bombed Out Church: The story", url: "https://www.slboc.com/the-story" },
      { label: "IWM: The Liverpool Blitz", url: "https://www.iwm.org.uk/history/the-liverpool-blitz" }
    ]
  }
];

const grimsbyRecords = [
  {
    id: "grimsby-butterfly-bomb-raid-1943",
    title: "Grimsby & Cleethorpes — the Butterfly Bomb Raid",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "13–14 June 1943",
    sortYear: 1943,
    confidence: "Confirmed event, area-level point (town-wide raid, not a single site)",
    lat: 53.5675,
    lng: -0.0798,
    bombType: "mixed",
    casualties: 114,
    casualtiesNote: "114 killed in total, including deaths in the days, weeks and months after the raid from bombs with anti-disturbance fuses — more than half of all civilian deaths across 37 raids on the two towns over the war. 44 died in the raid itself and its immediate aftermath; the toll rose to 114 over time (research by James Rogers, University of Hull).",
    summary: "Starting at 1:43am, German bombers dropped roughly 18 tonnes of high-explosive and incendiary bombs on Grimsby and Cleethorpes, followed by around 3,000 SD-2 'butterfly bombs' — small anti-personnel cluster munitions scattered across streets, gardens, allotments and rooftops. An estimated 1,350–1,500 failed to explode on impact, turning both towns into a live minefield. 332 fires were burning within two hours, with 68 more unattended; 211 houses were destroyed and around eighty fish-dock businesses burnt out.",
    note: "A 300-strong bomb disposal team (No. 3 Bomb Disposal Company, under Major William Parker) worked from the night of the raid until 9 July 1943 to clear roughly 1,350 devices, but the area was not declared fully safe until 1948 — bombs with anti-disturbance fuses kept killing and injuring people for years: John Johnson and Sydney Russell died in May 1944 when a plough disturbed one, and nine-year-old Frank Childs was killed in a cemetery explosion in March 1944. This is a town-wide area point; individual incidents (Canon Ainslie School, Burgess Street) are recorded separately below. A permanent memorial to the 114 dead was still being campaigned for as of the sourcing below — check for an unveiling before treating the memorial as built.",
    sources: [
      { label: "The Butterfly Bombing of Grimsby and Cleethorpes (memorial project)", url: "https://www.butterflybombmemorial.co.uk/" },
      { label: "Grimsby Telegraph: The day butterfly bombs brought terror to Grimsby and Cleethorpes", url: "https://www.grimsbytelegraph.co.uk/news/nostalgia/butterfly-bombs-bring-terror-morning-1683109" },
      { label: "Grimsby Telegraph: Man's fight for memorial commemorating 114 victims", url: "https://www.grimsbytelegraph.co.uk/news/grimsby-news/mans-fight-memorial-commemorating-114-10163084" },
      { label: "Grimsby Telegraph: Remembering the 295 people who died in Second World War air raids on Grimsby and Cleethorpes", url: "https://www.grimsbytelegraph.co.uk/news/grimsby-news/remembering-295-people-who-died-4676082" }
    ]
  },
  {
    id: "grimsby-canon-ainslie-school-1943",
    title: "Canon Ainslie School, Ainslie Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 June 1943, 10:25am",
    sortYear: 1943,
    confidence: "Confirmed site, street-derived point",
    lat: 53.560235,
    lng: -0.083193,
    bombType: "parachute-mine",
    casualties: 4,
    casualtiesNote: "Four wardens killed instantly when a butterfly bomb detonated during clearance work: Charles Heath, his son Walter Heath, George Wilson, and Harold Blundell.",
    summary: "Hours after the main raid, an unexploded butterfly bomb detonated at the school on the corner of Ainslie Street and Abbey Road, killing four air raid wardens working to clear the site.",
    note: "Part of the wider Grimsby & Cleethorpes butterfly bomb raid of 13–14 June 1943 — see the area record for the full raid. Bomb type recorded as 'parachute-mine' to match the site's schema for the SD-2 butterfly bomb, an anti-personnel cluster munition rather than a conventional parachute mine; treat the categorisation as the closest available fit, not a literal match.",
    sources: [
      { label: "Grimsby Telegraph: The day butterfly bombs brought terror to Grimsby and Cleethorpes", url: "https://www.grimsbytelegraph.co.uk/news/nostalgia/butterfly-bombs-bring-terror-morning-1683109" }
    ]
  },
  {
    id: "grimsby-burgess-street-1943",
    title: "Burgess Street & King Edward Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13–14 June 1943",
    sortYear: 1943,
    confidence: "Confirmed event, street-derived point",
    lat: 53.568001,
    lng: -0.079731,
    bombType: "HE",
    weightKg: 1000,
    summary: "A 1,000kg high-explosive bomb struck Burgess Street, devastating King Edward Street, Victoria Street, Grime Street and Fotherby Street. Air raid warden John Denford and sailor Fred Dolphin rescued a young woman from a collapsed terraced house on King Edward Street.",
    note: "Part of the wider Grimsby & Cleethorpes butterfly bomb raid of 13–14 June 1943 — see the area record for the full raid and its casualty total. No per-site death toll is published for this street cluster specifically.",
    sources: [
      { label: "Grimsby Telegraph: The day butterfly bombs brought terror to Grimsby and Cleethorpes", url: "https://www.grimsbytelegraph.co.uk/news/nostalgia/butterfly-bombs-bring-terror-morning-1683109" }
    ]
  },
  {
    id: "grimsby-kingsley-grove-1943",
    title: "Kingsley Grove, Nunsthorpe",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "June 1943",
    sortYear: 1943,
    confidence: "Confirmed event, street-derived point (exact date within the clearance period not specified in sources)",
    lat: 53.549311,
    lng: -0.09774,
    bombType: "parachute-mine",
    casualties: 1,
    casualtiesNote: "An ARP warden was fatally injured after reportedly disturbing an unexploded butterfly bomb on Kingsley Grove.",
    summary: "One of the butterfly bombs scattered across Grimsby and Cleethorpes on 13–14 June 1943 came down on Kingsley Grove in the Nunsthorpe estate, fatally injuring an air raid warden.",
    note: "Part of the wider Grimsby & Cleethorpes butterfly bomb raid — see the area record. Bomb type recorded as 'parachute-mine' to match the site's schema for the SD-2 butterfly bomb; see the Canon Ainslie School record for the same note. The warden is not named in the source used.",
    sources: [
      { label: "The Butterfly Bombing of Grimsby and Cleethorpes (memorial project)", url: "https://www.butterflybombmemorial.co.uk/" }
    ]
  }
];

const bootleRecords = [
  {
    id: "bootle-coop-shelter-1941",
    title: "Co-op shelter, Stanley Road, Bootle",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "7 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 53.4466,
    lng: -2.994,
    bombType: "HE",
    casualtiesNote: "Deliberately left blank. The source records only that 'many' died, and that 40 of the bodies at the temporary mortuary were never identified, several of them from this shelter. No reliable count exists.",
    summary: "A high-explosive bomb struck the Co-operative store at 340 Stanley Road, whose basement was in use as a public shelter, reached through the billiards hall on the corner of Ash Street. The front wall was blown out and the upper floors collapsed onto those below.",
    note: "Bootle was, proportionally, the most heavily bombed borough in the country: the Imperial War Museum records that 8,000 of its 17,000 houses were destroyed or damaged in the May Blitz.",
    sources: [
      { label: "Liverpool Blitz 70: Co-op shelter", url: "https://www.liverpoolblitz70.co.uk/tag/co-op-shelter/" },
      { label: "IWM: The Liverpool Blitz", url: "https://www.iwm.org.uk/history/the-liverpool-blitz" }
    ]
  },
  {
    id: "north-atlantic-avenue-2024",
    title: "North Atlantic Avenue, Bootle",
    status: "found",
    statusLabel: "Found UXO",
    date: "22 October 2024",
    sortYear: 2024,
    confidence: "Confirmed incident, approximate point",
    lat: 53.478,
    lng: -2.982,
    bombType: "unspecified",
    disposal: "The first device was taken to Ainsdale Beach near Southport and detonated by an Army EOD team; the second was removed for disposal elsewhere.",
    casualties: 0,
    summary: "Two suspected WWII bombs were found two days apart at a building site on North Atlantic Avenue. Dunnings Bridge Road was closed in both directions while they were dealt with.",
    note: "The second device was found on 24 October. Nobody was hurt and the roads reopened afterwards.",
    sources: [
      { label: "BBC News: Second unexploded bomb found in street", url: "https://feeds.bbci.co.uk/news/articles/c5yp30y03y2o" },
      { label: "ITV News Granada: Second unexploded bomb found on construction site", url: "https://www.itv.com/news/granada/2024-10-24/second-unexploded-bomb-found-on-construction-site" }
    ]
  }
];

const wirralRecords = [
  {
    id: "laird-street-1941",
    title: "Laird Street, Birkenhead",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "12 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (a run of houses, not one address)",
    lat: 53.3982,
    lng: -3.0335,
    bombType: "parachute-mine",
    casualties: 31,
    casualtiesNote: "Compiled by a local-history project from Commonwealth War Graves Commission and civilian war dead address records, covering Laird Street numbers 294-346 and the neighbouring Bertha Street and Miriam Place.",
    summary: "During Birkenhead's heaviest raids of the war, parachute land mines detonated in Laird Street, flattening a long run of terraced housing. Casualties extended into the streets behind.",
    note: "The parachute-mine identification rests on eyewitness testimony and the damage pattern rather than an official record. Birkenhead's war death toll of 442 is a borough-wide figure, not one for this street.",
    sources: [
      { label: "Blitz Incidents: Birkenhead, Laird Street, 12 March 1941", url: "http://blitzincidents.blogspot.com/2015/01/birkenhead-laird-street-12th-march-1941.html" }
    ]
  },
  {
    id: "wallasey-lancaster-avenue-1941",
    title: "Lancaster Avenue & Church Street, Wallasey",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "12-14 March 1941",
    sortYear: 1941,
    confidence: "Rough area",
    lat: 53.4193,
    lng: -3.0405,
    bombType: "HE",
    casualties: 174,
    casualtiesNote: "174 killed and 158 seriously injured across the WHOLE of Wallasey during the three-night March raid, not at Lancaster Avenue alone. Wallasey's war total is given as 324 by one local source and 332 by another.",
    summary: "Wallasey's most severe raid of the war fell across three nights in March 1941, with the heaviest destruction in Church Street, Lancaster Avenue and Foxhey Road. Eleven churches were damaged and around 10,000 people were made homeless.",
    note: "A baby was recovered alive from the Lancaster Avenue rubble after three and a half days, shielded by her parents' bodies and a Victorian cradle. Across the war Wallasey recorded 658 high-explosive bombs and thousands of incendiaries.",
    sources: [
      { label: "History of the Wirral: Wallasey — the Blitz", url: "http://www.wirralhistory.uk/wallaseyblitz.html" }
    ]
  }
];

const stHelensRecords = [
  {
    id: "jubits-lane-1941",
    title: "Jubits Lane, Sutton Manor, St Helens",
    status: "found",
    statusLabel: "Found UXO",
    date: "May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point",
    lat: 53.4295,
    lng: -2.716,
    bombType: "HE",
    casualties: 0,
    summary: "An unexploded bomb lodged at 80 Jubits Lane in Sutton Manor took around six weeks to make safe, and nearby St Theresa's school stayed closed until June.",
    note: "Other St Helens ordnance recorded nearby includes a 500lb bomb in a field between Lea Green Road and Scots Avenue, and incendiaries that burned into the carriageway of Walkers Lane. St Helens is poorly documented compared with Liverpool; this rests on a single local-history account.",
    sources: [
      { label: "Sutton Beauty & Heritage: Sutton St Helens at war", url: "https://www.suttonbeauty.org.uk/suttonhistory/suttonwar2/" }
    ]
  }
];

const manchesterRecords = [
  {
    id: "manchester-cathedral-1940",
    title: "Manchester Cathedral",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "22 December 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.48505,
    lng: -2.24475,
    bombType: "parachute-mine",
    casualtiesNote: "No casualties are recorded at the cathedral. The figure of around 684 killed is the city-wide total for the whole Christmas Blitz.",
    summary: "A parachuted land mine detonated at the cathedral's north-east corner, destroying the Ely Chapel — never rebuilt — and the Lady Chapel, and wrecking both organs, the choir stalls, the high altar and every window.",
    note: "The blast lifted the lead roof clear and dropped it back into place. Because no fire took hold, the building survived where Coventry Cathedral had not. Restoration ran for two decades after the war.",
    sources: [
      { label: "Manchester Cathedral: Manchester Cathedral and WWII", url: "https://manchestercathedral.org/news-events/news/manchester-cathedral-and-wwii-the-city-is-hit" },
      { label: "IWM: The Manchester Blitz", url: "https://www.iwm.org.uk/history/the-manchester-blitz" }
    ]
  },
  {
    id: "free-trade-hall-1940",
    title: "Free Trade Hall, Peter Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "22-23 December 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.4779,
    lng: -2.2481,
    bombType: "unspecified",
    casualtiesNote: "No casualty figure is recorded for this building. The 684 dead is a city-wide Christmas Blitz total.",
    summary: "Manchester's principal concert hall, built on the site of the Peterloo massacre at St Peter's Fields, was gutted during the Christmas Blitz and stood as an empty shell for years afterwards.",
    note: "A new auditorium was built behind the two surviving façade walls to a design by city architect L. C. Howitt, reopening in 1951.",
    sources: [
      { label: "BBC News: Manchester's devastating Christmas Blitz", url: "https://feeds.bbci.co.uk/news/uk-england-manchester-35094565" }
    ]
  },
  {
    id: "parker-street-1940",
    title: "Parker Street warehouses, Piccadilly",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "22-24 December 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 53.4805,
    lng: -2.237,
    bombType: "incendiary",
    casualtiesNote: "No site-specific figure. Around 684 people were killed across Manchester during the Christmas Blitz.",
    summary: "The warehouse buildings along Parker Street, on the south side of Piccadilly Gardens, were destroyed during the Christmas Blitz, in a commercial district that suffered some of the raid's worst fire damage. Around 2,000 incendiaries started roughly 600 fires across the two nights.",
    note: "The gardens themselves survived. The cleared bombsite was eventually redeveloped as Piccadilly Plaza between 1959 and 1965.",
    sources: [
      { label: "IWM: The Manchester Blitz", url: "https://www.iwm.org.uk/history/the-manchester-blitz" }
    ]
  }
];

const traffordRecords = [
  {
    id: "metrovickers-1940",
    title: "Metropolitan-Vickers works, Trafford Park",
    status: "reported",
    statusLabel: "Reported target area",
    date: "23 December 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 53.468,
    lng: -2.313,
    bombType: "HE",
    casualtiesNote: "No site-specific figure available.",
    summary: "The Metropolitan-Vickers works on Mosley Road, one of the largest engineering plants in the Trafford Park industrial estate, was badly damaged during the Christmas Blitz.",
    note: "Trafford Park was the Luftwaffe's principal industrial objective in Manchester, also housing Ford's aero-engine plant and A. V. Roe production. 272 tons of high explosive fell on the city on the night of 22/23 December and a further 195 tons the next night — city-wide figures.",
    sources: [
      { label: "IWM: The Manchester Blitz", url: "https://www.iwm.org.uk/history/the-manchester-blitz" }
    ]
  },
  {
    id: "old-trafford-1941",
    title: "Old Trafford stadium",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "11 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.4631,
    lng: -2.2913,
    bombType: "HE",
    summary: "A bomb aimed at the Trafford Park industrial area struck Manchester United's Main Stand, wrecking it almost completely and scorching the pitch.",
    note: "Wartime censorship meant the Manchester Guardian could report only 'slight outbreaks of fire at a football ground'. Manchester City offered United the use of Maine Road, where they played from April 1941 until 1949.",
    sources: [
      { label: "Gary James Football Archive: the bombing of Old Trafford", url: "https://gjfootballarchive.com/2021/03/11/80-years-ago-today-the-bombing-of-old-trafford/" }
    ]
  },
  {
    id: "oakfield-road-altrincham-1940",
    title: "Oakfield Road & Moss Lane, Altrincham",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "23 December 1940",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point",
    lat: 53.3855,
    lng: -2.3495,
    bombType: "HE",
    casualties: 14,
    summary: "High-explosive bombs falling wide of the Trafford Park target area struck houses and a sweet shop at the Oakfield Road and Moss Lane junction, killing fourteen civilians. A memorial plaque now marks the site.",
    note: "Stretford, Old Trafford, Sale, Timperley and Urmston were all hit by bombs intended for the industrial estate — the ordinary consequence of night bombing aimed at a factory.",
    sources: [
      { label: "Exploring Trafford's Heritage: Remembering the Manchester Blitz", url: "https://exploringtraffordsheritage.omeka.net/exhibits/show/remembering-the-manchester-bli" }
    ]
  }
];

const salfordRecords = [
  {
    id: "salford-royal-1941",
    title: "Salford Royal Hospital, Chapel Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2 June 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 53.4849,
    lng: -2.2606,
    bombType: "unspecified",
    casualties: 14,
    casualtiesNote: "Fourteen nurses, named on the memorial tablet. The memorial records nurses only and does not rule out other casualties.",
    summary: "Fourteen nurses were killed at Salford Royal Hospital during a raid on the night of 2 June 1941. A marble memorial tablet naming them was unveiled by the Duchess of Kent in February 1944, and fourteen hospital beds were endowed in their memory.",
    note: "The building closed as a hospital in 1993 and is now apartments; the memorial remains in place.",
    sources: [
      { label: "IWM War Memorials Register: nurses of Salford Royal Hospital", url: "https://memorials.iwm.org.uk/memorial/63775" }
    ]
  },
  {
    id: "swinton-moss-lane-2021",
    title: "Moss Lane, Swinton",
    status: "found",
    statusLabel: "Found UXO",
    date: "3 November 2021",
    sortYear: 2021,
    confidence: "Confirmed incident, street-derived point",
    lat: 53.514,
    lng: -2.339,
    bombType: "unspecified",
    disposal: "Assessed by an Explosive Ordnance Disposal team and declared safe.",
    evacuationNote: "Neighbouring homes evacuated behind a cordon.",
    casualties: 0,
    summary: "A suspected WWII bomb was found in a garden on Moss Lane shortly before half past eleven in the morning. Emergency services stood down and residents returned home by about four in the afternoon.",
    note: "Recorded as a documented response rather than a confirmed munition — not every cordon ends in a detonation.",
    sources: [
      { label: "BBC News: Salford WW2-era bomb find in garden prompts evacuation", url: "https://feeds.bbci.co.uk/news/uk-england-manchester-59112417" }
    ]
  }
];

const oldhamRecords = [
  {
    id: "abbey-hills-road-1944",
    title: "Abbey Hills Road, Oldham",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "24 December 1944",
    sortYear: 1944,
    confidence: "Confirmed event, street-derived point",
    lat: 53.5305,
    lng: -2.109,
    bombType: "V1",
    casualties: 27,
    casualtiesNote: "27 killed and 49 seriously injured. The youngest was eighteen months old.",
    summary: "A V-1 flying bomb, one of around 45 air-launched at the Manchester area on Christmas Eve 1944, struck a row of terraced houses on Abbey Hills Road. It was the worst of that night's impacts in the region.",
    note: "Air-launched from Heinkel bombers over the North Sea rather than fired from the French coast — by this stage the launch sites in northern France had been overrun. Post-war housing occupies the site and a plaque marks the spot.",
    sources: [
      { label: "BBC News: 'Doodlebug' bomb attack remembered 80 years on", url: "https://feeds.bbci.co.uk/news/articles/c07g5yzk045o" },
      { label: "Oldham Chronicle: events mark the V1 bombing of 1944", url: "https://www.oldham-chronicle.co.uk/news-features/8/news-headlines/89474/events-will-mark-the-v1-bombing-of-1944-that-killed-27" }
    ]
  }
];

const coventryRecords = [
  {
    id: "coventry-cathedral-1940",
    title: "Coventry Cathedral (St Michael's)",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 November 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 52.4081,
    lng: -1.5083,
    bombType: "incendiary",
    casualtiesNote: "No casualty figure exists for the cathedral itself, and the famous 568 must not be read as one — that is the toll for the whole city across the whole night.",
    summary: "The fourteenth-century cathedral church of St Michael was gutted by fire during Operation Moonlight Sonata, the only English cathedral destroyed in the Second World War. The tower, spire and outer walls survived.",
    note: "The ruins were kept as a memorial beside Basil Spence's new cathedral rather than cleared — a deliberate decision to leave the damage legible.",
    sources: [
      { label: "Coventry City Council: 20 facts about the Coventry Blitz", url: "https://www.coventry.gov.uk/coventry-blitz/20-facts-might-not-know-coventry-blitz" },
      { label: "IWM: The Blitz around Britain", url: "https://www.iwm.org.uk/history/the-blitz-around-britain" }
    ]
  },
  {
    id: "coventry-raid-1940",
    title: "Coventry city centre — the raid of 14-15 November 1940",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "14-15 November 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 52.4083,
    lng: -1.5122,
    bombType: "HE",
    casualtiesNote: "Sources differ: Historic Coventry and the Imperial War Museum give 568 confirmed killed, while Coventry City Council states the official death toll was 554. Both are CITY-WIDE totals for the whole ten-hour raid. Historic Coventry adds 863 seriously wounded and 393 injured.",
    summary: "449 of the 522 bombers despatched reached Coventry in a concentrated ten-hour attack, dropping some 503 tons of high explosive and oil bombs and around 30,000 incendiaries. 2,306 houses were destroyed, 41,500 damaged, and 111 of the city's 180 factories hit.",
    note: "This marker exists to hold the raid-wide totals so they are not misread as belonging to the cathedral or any other single site. Around 50 parachute mines of 1,000kg each are recorded as falling that night.",
    sources: [
      { label: "Historic Coventry: Blitz statistics", url: "https://www.historiccoventry.co.uk/blitz/blitz.php?pg=stats" },
      { label: "Coventry City Council: 20 facts about the Coventry Blitz", url: "https://www.coventry.gov.uk/coventry-blitz/20-facts-might-not-know-coventry-blitz" }
    ]
  },
  {
    id: "daimler-radford-1940",
    title: "Daimler works, Radford",
    status: "reported",
    statusLabel: "Reported target area",
    date: "14 November 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 52.4225,
    lng: -1.5175,
    bombType: "HE",
    summary: "Up to 150 high-explosive bombs and 3,000 incendiaries turned fifteen acres of the Daimler works into what the city council describes as one of the largest fires in Britain during the war. The plant was a major producer of military vehicles and aero components.",
    note: "No casualty figure is published for the works.",
    sources: [
      { label: "Coventry City Council: 20 facts about the Coventry Blitz", url: "https://www.coventry.gov.uk/coventry-blitz/20-facts-might-not-know-coventry-blitz" }
    ]
  },
  {
    id: "alvis-holyhead-road-1940",
    title: "Alvis works, Holyhead Road",
    status: "reported",
    statusLabel: "Reported target area",
    date: "14 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point",
    lat: 52.4123,
    lng: -1.5333,
    bombType: "unspecified",
    summary: "The Alvis factory on Holyhead Road was severely damaged in the raid, ending car manufacture there for the rest of the war. Alvis's military work — aero engines and the management of shadow factories — continued afterwards.",
    sources: [
      { label: "CoventryLive: the history of Alvis", url: "https://www.coventrytelegraph.net/news/coventry-news/alvis-history-coventry-15431654" }
    ]
  },
  {
    id: "fords-hospital-1940",
    title: "Ford's Hospital almshouses, Greyfriars Lane",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 October 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 52.4065,
    lng: -1.5111,
    bombType: "HE",
    casualties: 9,
    casualtiesNote: "The warden, a nurse and six residents.",
    summary: "A single bomb struck the 1509 timber-framed almshouse a month before the great raid, killing the warden, a nurse and six of the elderly residents. The building was severely damaged and restored in 1953 using salvaged original material.",
    sources: [
      { label: "Historic Coventry: Ford's Hospital, Greyfriars Lane", url: "https://www.historiccoventry.co.uk/tour/content.php?pg=fords" }
    ]
  },
  {
    id: "coventry-warwickshire-hospital-1941",
    title: "Coventry & Warwickshire Hospital, Stoney Stanton Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 April 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 52.416,
    lng: -1.5,
    bombType: "HE",
    casualties: 33,
    casualtiesNote: "21 patients, seven nurses, two doctors and three St John Ambulance stretcher-bearers. This is a site-specific figure. Separately, 281 were killed across Coventry on 8 April and 170 on 10 April — raid-wide totals.",
    summary: "The hospital escaped with only minor damage on 14 November 1940 but took ten direct hits during the Easter raid of 8 April 1941. The worst loss came the next morning, when an unexploded bomb outside the entrance detonated and buried patients who had been moved to the basement for safety.",
    sources: [
      { label: "University of Warwick: Coventry's Heritage — the Coventry Blitz", url: "https://warwick.ac.uk/fac/arts/history/chmst/outreach/cwhp/events/onelastlook/sites/blitz/" },
      { label: "Historic Coventry: Blitz statistics", url: "https://www.historiccoventry.co.uk/blitz/blitz.php?pg=stats" }
    ]
  },
  {
    id: "coventry-market-hall-1940",
    title: "Market Hall & Central Library, Coventry",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, approximate point (the pre-war street pattern was erased in reconstruction)",
    lat: 52.4079,
    lng: -1.5112,
    bombType: "incendiary",
    casualtiesNote: "Not separately recorded. Do not read the city-wide 568 as applying here.",
    summary: "The raid destroyed the central library, the Market Hall, hundreds of shops and public buildings, and the sixteenth-century Palace Yard. The Market Hall's clock tower was left standing amid the ruins and survives.",
    sources: [
      { label: "Coventry City Council: 20 facts about the Coventry Blitz", url: "https://www.coventry.gov.uk/coventry-blitz/20-facts-might-not-know-coventry-blitz" }
    ]
  },
  {
    id: "rex-cinema-coventry-1940",
    title: "Rex Cinema, Corporation Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2 November 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 52.4093,
    lng: -1.5128,
    bombType: "HE",
    summary: "The 2,562-seat Art Deco Rex, opened in February 1937, was Coventry's newest cinema and the first in the city to be bombed.",
    note: "The date is contested. Cinema Treasures gives damage on 25 August 1940 and total destruction on 2 November 1940; Historic Coventry gives only 'in 1940'. The often-repeated claim that it was destroyed on 14 November could not be verified, so it is not asserted here.",
    sources: [
      { label: "Cinema Treasures: Rex Cinema, Coventry", url: "https://cinematreasures.org/theaters/34029" },
      { label: "Historic Coventry: Coventry's theatres and cinemas", url: "https://www.historiccoventry.co.uk/articles/content.php?pg=bill-birch-theatres" }
    ]
  },
  {
    id: "sandy-lane-coventry-2026",
    title: "Sandy Lane Business Park, Radford",
    status: "found",
    statusLabel: "Found UXO",
    date: "3 June 2026",
    sortYear: 2026,
    confidence: "Confirmed incident, approximate point",
    lat: 52.4202,
    lng: -1.5223,
    bombType: "HE",
    cordonRadiusM: 100,
    disposal: "Fuze detonated in a controlled explosion by 8th Engineer Brigade behind 340 tonnes of sand, and the bomb removed.",
    evacuationNote: "Nearly 100 homes evacuated within a 100m cordon.",
    casualties: 0,
    summary: "A wartime bomb was uncovered at a construction site on Sandy Lane Business Park at 2.55pm. Sand was brought in to absorb the blast before the device was made safe the following day.",
    sources: [
      { label: "ITV News Central: WW2 bomb found in Coventry construction site safely detonated", url: "https://www.itv.com/news/central/2026-06-03/ww2-bomb-found-in-construction-site-safely-detonated" }
    ]
  }
];

const birminghamRecords = [
  {
    id: "bsa-small-heath-1940",
    title: "BSA works, Armoury Road, Small Heath",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "19 November 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 52.4684,
    lng: -1.8531,
    bombType: "HE",
    casualties: 53,
    casualtiesNote: "53 killed and 89 injured, 30 of them seriously — a site-specific figure corroborated by the Imperial War Museum and Historic England. Not to be confused with the 450 killed across Birmingham that same night.",
    summary: "Around 7.15pm two bombs struck the New Building of the Birmingham Small Arms works during the night shift, and it collapsed. The dead were aged 18 to 68, ten of them women.",
    note: "Rifle production stopped for three months and sixteen gallantry awards were made to rescuers.",
    sources: [
      { label: "IWM: The Blitz around Britain", url: "https://www.iwm.org.uk/history/the-blitz-around-britain" },
      { label: "Historic England: Birmingham — industrial city", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/birmingham-industrial-city/" }
    ]
  },
  {
    id: "birmingham-market-hall-1940",
    title: "Market Hall, the Bull Ring",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, landmark point",
    lat: 52.4778,
    lng: -1.8939,
    bombType: "incendiary",
    casualtiesNote: "25 killed is the total for the whole city-centre raid that night, not for the Market Hall itself. No building-specific figure was found.",
    summary: "The roof and interior of the 1835 Market Hall were destroyed by fire started by incendiaries during Birmingham's first heavy city-centre raid. The shell stood until the Bull Ring was redeveloped in the 1960s.",
    sources: [
      { label: "Wikipedia: Birmingham Blitz", url: "https://en.wikipedia.org/wiki/Birmingham_Blitz" }
    ]
  },
  {
    id: "carlton-cinema-sparkbrook-1940",
    title: "Carlton Cinema, Taunton Road, Sparkbrook",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "25 October 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 52.4606,
    lng: -1.876,
    bombType: "HE",
    casualties: 19,
    casualtiesNote: "Nineteen in the audience, the heaviest losses among those seated nearest the screen.",
    summary: "A high-explosive bomb tore through the roof and burst in the auditorium a few yards in front of the screen during a showing of the Dorothy Lamour film Typhoon. The entrance hall was turned into an emergency first-aid post.",
    sources: [
      { label: "Wonderland Birmingham: The Carlton", url: "https://www.wonderlandbirmingham.co.uk/cinemas/the-carlton/" }
    ]
  },
  {
    id: "erdington-1940",
    title: "Erdington — Birmingham's first air-raid death",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "9 August 1940",
    sortYear: 1940,
    confidence: "Rough area",
    lat: 52.5125,
    lng: -1.832,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "One killed and six injured across the whole stick of eight bombs. Jimmy Fry of Montague Road was the city's first air-raid fatality.",
    summary: "Erdington was the first Birmingham suburb bombed in the war, when a single German aircraft dropped eight bombs on 9 August 1940.",
    note: "An area marker rather than an impact point: the council names the victim's address, which is not necessarily where the bomb fell, and the eight bombs were spread across the area.",
    sources: [
      { label: "Birmingham City Council: Erdington local history", url: "https://www.birmingham.gov.uk/info/50170/local_history/1647/erdington_local_history/4" }
    ]
  },
  {
    id: "st-thomas-bath-row-1940",
    title: "St Thomas' Church, Bath Row",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "11 December 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 52.4727,
    lng: -1.9074,
    bombType: "incendiary",
    casualtiesNote: "No figure for the church itself. For context only, 263 were killed and 243 badly injured across Birmingham in this thirteen-hour raid, the longest of the city's Blitz — a city-wide total.",
    summary: "All of St Thomas' Church was destroyed except its tower and classical west portico. Around 25,000 incendiaries fell on the city that night.",
    note: "The church was never rebuilt; the surviving fragments and grounds were laid out in 1995 as St Thomas' Peace Garden.",
    sources: [
      { label: "The Peace Gardens: St Thomas' Church", url: "https://hallofmemory.co.uk/st-thomas-church.php" },
      { label: "Wikipedia: Birmingham Blitz", url: "https://en.wikipedia.org/wiki/Birmingham_Blitz" }
    ]
  },
  {
    id: "priory-road-aston-2017",
    title: "Priory Road, Aston",
    status: "found",
    statusLabel: "Found UXO",
    date: "15 May 2017",
    sortYear: 2017,
    confidence: "Confirmed incident, street-derived point",
    lat: 52.5063,
    lng: -1.888,
    bombType: "HE",
    weightKg: 250,
    cordonRadiusM: 500,
    disposal: "Banked with roughly 250 tonnes of sand and destroyed in a controlled detonation the following afternoon.",
    evacuationNote: "Around 100 homes and businesses evacuated, about 80 people spending the night in rest centres; the A38(M) Aston Expressway and stretches of the M6 were closed.",
    casualties: 0,
    summary: "A 250kg German SC250 bomb, containing 139kg of high explosive, was found on a construction site off Priory Road at about 9.45 on a Monday morning.",
    sources: [
      { label: "BBC News: WW2 bomb detonated safely near M6 in Birmingham", url: "https://feeds.bbci.co.uk/news/uk-england-birmingham-39939925" }
    ]
  },
  {
    id: "islington-row-2018",
    title: "Islington Row Middleway, city centre",
    status: "found",
    statusLabel: "Found UXO",
    date: "30 May 2018",
    sortYear: 2018,
    confidence: "Confirmed incident, approximate point",
    lat: 52.4732,
    lng: -1.913,
    bombType: "unspecified",
    disposal: "Removed safely by an Army bomb disposal team.",
    casualties: 0,
    summary: "An unexploded wartime device was found on a construction site between Islington Row Middleway and Bath Row on the afternoon of 30 May 2018. Roads were closed and the site evacuated.",
    sources: [
      { label: "Express & Star: Unexploded WW2 bomb found in Birmingham", url: "https://www.expressandstar.com/news/birmingham/unexploded-ww2-bomb-found-in-birmingham-6214903" }
    ]
  }
];

const sheffieldRecords = [
  {
    id: "marples-hotel-1940",
    title: "Marples Hotel, Fitzalan Square",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "12 December 1940",
    sortYear: 1940,
    confidence: "Confirmed site, building-level",
    lat: 53.38278,
    lng: -1.46139,
    bombType: "HE",
    casualtiesNote: "Sources give 70 or 78. Local research and the BBC's 2024 blue-plaque report give 70 of the 77 people present; Wikipedia's Sheffield Blitz article gives 78. Only 64 bodies were recovered intact, plus partial remains of six or seven more, which is the root of the disagreement.",
    summary: "A high-explosive bomb struck the seven-storey Marples Hotel at 11.44pm, collapsing every floor into the cellars where people had taken shelter. Seven people were rescued alive.",
    note: "Consistently described as the worst single loss of life in Sheffield during the war and one of the worst single-incident tolls of the British Blitz. A blue plaque was unveiled on the site in 2024.",
    sources: [
      { label: "Chris Hobbs: Death at Marples", url: "https://www.chrishobbs.com/marples1940.htm" },
      { label: "BBC News: Blue plaque honours 70 killed in Sheffield Blitz", url: "https://feeds.bbci.co.uk/news/uk-england-south-yorkshire-68735727" }
    ]
  },
  {
    id: "sheffield-cathedral-1940",
    title: "Sheffield Cathedral, Campo Lane",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "12 December 1940",
    sortYear: 1940,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.3831,
    lng: -1.4694,
    bombType: "HE",
    casualtiesNote: "None reliably stated for this site.",
    summary: "Bombs falling on Campo Lane and Vicar Lane demolished the west end of Sheffield Cathedral early in the first night of the Blitz, at around half past nine.",
    note: "Sheffield's war total was over 660 killed, more than 1,500 injured and 40,000 made homeless — city-wide figures across the whole campaign, not for this building.",
    sources: [
      { label: "Wikipedia: Sheffield Blitz", url: "https://en.wikipedia.org/wiki/Sheffield_Blitz" },
      { label: "Sheffield Libraries: The Sheffield Blitz of 1940", url: "http://shefflibraries.blogspot.com/2020/04/the-sheffield-blitz-of-1940.html" }
    ]
  },
  {
    id: "hadfields-tinsley-1940",
    title: "Hadfields East Hecla Works, Tinsley",
    status: "reported",
    statusLabel: "Reported target area",
    date: "15-16 December 1940",
    sortYear: 1940,
    confidence: "Strategic target area",
    lat: 53.41194,
    lng: -1.40738,
    bombType: "HE",
    casualtiesNote: "No site-specific figure exists. Sheffield's 660-plus dead is a city-wide total.",
    summary: "The second night of the Sheffield Blitz was directed at the east-end steel and armaments plants. Hadfields, Brown Bayleys and Steel, Peech and Tozer all took hits, but sources agree the damage was not serious enough to interrupt production.",
    note: "Hadfields' ninety-acre East Hecla Works on Vulcan Road is now largely covered by the Meadowhall shopping centre.",
    sources: [
      { label: "Wikipedia: Sheffield Blitz", url: "https://en.wikipedia.org/wiki/Sheffield_Blitz" },
      { label: "Sheffield Libraries: The Sheffield Blitz of 1940", url: "http://shefflibraries.blogspot.com/2020/04/the-sheffield-blitz-of-1940.html" }
    ]
  },
  {
    id: "sheaf-street-1940",
    title: "Sheaf Street, near Midland Station",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 August 1940",
    sortYear: 1940,
    confidence: "Confirmed event, street-derived point",
    lat: 53.38029,
    lng: -1.462,
    bombType: "unspecified",
    casualties: 4,
    summary: "A bomb exploded on Sheaf Street close to Sheffield Midland railway station, killing four people — the first air-raid deaths in the city, months before the December Blitz.",
    note: "Sheffield was under air-raid conditions across 264 days of the war.",
    sources: [
      { label: "Wikipedia: Sheffield Blitz", url: "https://en.wikipedia.org/wiki/Sheffield_Blitz" }
    ]
  }
];

const hullRecords = [
  {
    id: "prudential-hull-1941",
    title: "Prudential Assurance building, Queen Victoria Square",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "8 May 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 53.7437,
    lng: -0.33922,
    bombType: "HE",
    casualties: 16,
    summary: "A direct hit destroyed the boiler room in the basement, fracturing a gas main and turning the basement — in use as an air-raid shelter — into an inferno within fifteen minutes. Heat prevented rescue attempts for 48 hours.",
    note: "The image of the building's tower left leaning alone among the ruins became the defining photograph of the Hull Blitz. It was demolished the next day.",
    sources: [
      { label: "Hull History Centre: Prudential Assurance — a Hull wartime tragedy", url: "https://hullhistorycentre.blogspot.com/2016/09/prudential-assurance-company-limited.html" }
    ]
  },
  {
    id: "national-picture-theatre-1941",
    title: "National Picture Theatre, Beverley Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "18 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 53.75467,
    lng: -0.34781,
    bombType: "HE",
    casualties: 0,
    casualtiesNote: "About 150 people were sheltering in the foyer and all escaped.",
    summary: "The cinema was wrecked during a raid while around 150 people sheltered in its foyer. None were killed.",
    note: "The surviving facade and fragments of foyer and vestibule were Grade II listed in 2007 as the last substantial civilian bomb ruin still standing in Britain. Restoration began in 2024.",
    sources: [
      { label: "Historic England: National Picture Theatre list entry", url: "https://historicengland.org.uk/listing/the-list/list-entry/1391850" },
      { label: "Wikipedia: National Picture Theatre", url: "https://en.wikipedia.org/wiki/National_Picture_Theatre,_Kingston_upon_Hull" }
    ]
  },
  {
    id: "bean-street-shelter-1941",
    title: "Bean Street public shelter, off Hessle Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "14-15 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point",
    lat: 53.74207,
    lng: -0.36079,
    bombType: "parachute-mine",
    casualtiesNote: "Deliberately left blank. Sources record that the shelter was hit and that there were multiple deaths, but give no figure, and none is invented here.",
    summary: "During the March 1941 raids on the Hessle Road and St Andrew's Dock district, a parachute mine struck a public air-raid shelter in Bean Street.",
    sources: [
      { label: "Wikipedia: Hull Blitz", url: "https://en.wikipedia.org/wiki/Hull_Blitz" }
    ]
  },
  {
    id: "hull-may-blitz-1941",
    title: "Hedon Road & the eastern docks — the May Blitz",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "7-9 May 1941",
    sortYear: 1941,
    confidence: "Rough area",
    lat: 53.74698,
    lng: -0.2808,
    bombType: "incendiary",
    casualtiesNote: "Just under 400 killed — a city-wide total for the two nights, not a figure for the docks. Across the whole campaign Hull lost around 1,200 people with 3,000 injured.",
    summary: "The nights of 7-8 and 8-9 May 1941 were Hull's heaviest, concentrated on the docks and city centre, with major fires among the timber storage along Hedon Road.",
    note: "Wartime censorship never named the city, reporting the raids only on 'a north-east coast town'. Hull was, by proportion, the most severely damaged British city after London — 95 per cent of its houses damaged, and only about 6,000 of 91,000 left untouched by the end of the war — yet its suffering stayed largely invisible nationally.",
    sources: [
      { label: "Wikipedia: Hull Blitz", url: "https://en.wikipedia.org/wiki/Hull_Blitz" },
      { label: "BBC News: Hull marks 75th anniversary of its heaviest raids", url: "https://feeds.bbci.co.uk/news/uk-england-humber-36212234" }
    ]
  }
];

const northShieldsRecords = [
  {
    id: "wilkinsons-north-shields-1941",
    title: "Wilkinson's lemonade factory shelter, North Shields",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "3 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, street-derived point (the site has been redeveloped)",
    lat: 55.011,
    lng: -1.4415,
    bombType: "HE",
    casualtiesNote: "Sources give 105 or 107. The Tyne and Wear Historic Environment Record gives 105 killed, 41 of them children; the North Shields 173 project gives 107 of the 192 people present, the figure used for the 2016 memorial.",
    summary: "A single bomb scored a direct hit on W. A. Wilkinson's lemonade factory at the corner of King Street and George Street at 11.12pm, collapsing the unreinforced ceiling of the basement shelter and bringing bottling machinery and the upper floors down onto the people below.",
    note: "The shelter had been fitted with bunk beds for up to 210. ARP warden Ellen Lee, herself badly burned, pulled 32 people from the wreckage. The Tyne and Wear HER describes it as the worst bombing incident in this part of the country during the war.",
    sources: [
      { label: "North Shields 173: The air raid disaster", url: "https://northshields173.org/story/" },
      { label: "Tyne and Wear HER 7675", url: "https://www.twsitelines.info/SMR/7675" }
    ]
  }
];

const southShieldsRecords = [
  {
    id: "south-shields-market-place-1941",
    title: "Market Place shelters, South Shields",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2-3 October 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (the shelters' exact position is unknown)",
    lat: 54.99745,
    lng: -1.43818,
    bombType: "HE",
    casualties: 12,
    casualtiesNote: "Twelve killed in the shelters and five rescued — the site-specific figure. The widely quoted 68 killed is a TOWN-WIDE total for the whole raid, and is routinely misattributed to the shelter itself. A third source gives 50 across the 2-3 October raids.",
    summary: "Two bombs struck entrances to the shelters beneath South Shields Market Place; one fell near East Street, rupturing a gas main and setting a trolleybus alight, and another hit the shelter in the north-east quarter.",
    note: "The toll was lower than it might have been because the usual route from Union Alley had been blocked in an earlier raid, sending many cinema-goers to the North Street shelter instead. Around 240 shops, houses and offices in the Market Place were destroyed or later demolished. The dead were commemorated with a Union flag laid in cobblestones.",
    sources: [
      { label: "Tyne and Wear HER 16444: Market Place air raid shelters", url: "https://twsitelines.info/SMR/16444" },
      { label: "NE Diary 1939-45: incidents October 1941", url: "https://ne-diary.genuki.uk/Inc/ISeq_24.html" }
    ]
  }
];

const newcastleRecords = [
  {
    id: "new-bridge-street-1941",
    title: "New Bridge Street Goods Station, Shieldfield",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "1 September 1941",
    sortYear: 1941,
    confidence: "Confirmed event, landmark point",
    lat: 54.97528,
    lng: -1.60394,
    bombType: "incendiary",
    casualtiesNote: "50 killed, 71 seriously injured, 140 slightly injured and over 1,000 made homeless — figures for the RAID AS A WHOLE, described as Newcastle's most severe, not for the goods station alone.",
    summary: "Newcastle's heaviest raid set fire to the New Bridge Street goods station beside Manors, said to be the largest covered goods station in the country. Packed with sugar, linseed and cattle feed, it burned for weeks.",
    note: "Around 400 people were killed in Newcastle between July 1940 and December 1941. The site was cleared in the 1980s.",
    sources: [
      { label: "Wikipedia: Newcastle Blitz", url: "https://en.wikipedia.org/wiki/Newcastle_Blitz" },
      { label: "Newcastle Sitelines: New Bridge Street Goods Station", url: "https://sitelines.newcastle.gov.uk/index.php/node/49996" }
    ]
  }
];

const sunderlandRecords = [
  {
    id: "roker-park-1943",
    title: "Roker Park & Sunderland Central Station",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "15-16 May 1943",
    sortYear: 1943,
    confidence: "Confirmed event, approximate point (Roker Park was demolished in 1997)",
    lat: 54.92122,
    lng: -1.3732,
    bombType: "HE",
    casualtiesNote: "75 killed, 82 seriously injured and 143 slightly hurt — a TOWN-WIDE total for the raid, initially reported as 71 and later revised up. Only one death is tied to Roker Park itself: a police officer patrolling the ground.",
    summary: "In Sunderland's worst night of the war a bomb cratered the Roker Park pitch near the players' tunnel and another struck the North Stand. The north end of Sunderland Central Station was severely damaged and St Thomas's Church destroyed.",
    note: "127 high-explosive bombs and 1,300 incendiaries fell, and a parachute mine destroyed the Empress Hotel. Two hundred houses were demolished and 10,000 damaged. Sources differ on the date — one local account gives 15-16 May, Wikipedia dates the two worst raids to 14 and 24 May 1943.",
    sources: [
      { label: "Sunderland Echo: the air raid which killed 75 Sunderland people", url: "https://www.sunderlandecho.com/retro/air-raid-1943-roker-park-sunderland-greenwell-station-8544615" },
      { label: "Wikipedia: Sunderland Blitz", url: "https://en.wikipedia.org/wiki/Sunderland_Blitz" }
    ]
  },
  {
    id: "suffolk-street-hendon-2002",
    title: "Suffolk Street, Hendon, Sunderland",
    status: "found",
    statusLabel: "Found UXO",
    date: "14 October 2002",
    sortYear: 2002,
    confidence: "Confirmed incident, street-derived point",
    lat: 54.89913,
    lng: -1.37147,
    bombType: "HE",
    weightKg: 454,
    disposal: "Judged impossible to disarm safely, moved to Hendon Beach at Salterfen Rocks and detonated by remote control in the early hours of 17 October.",
    evacuationNote: "Around 2,000 residents evacuated, with an estimated 1,000 more choosing to stay. Authorities warned the device could crater 25 feet and damage buildings up to 650 feet away.",
    casualties: 0,
    summary: "A 1,000lb German bomb was uncovered behind the Deerness Park Medical Centre on Suffolk Street. It had been shed by a Heinkel He 111 during a crash landing on 5 September 1940 in which five people died, including four of the German crew.",
    note: "The only recorded damage was three original stained-glass windows at the Hendon Grange pub. Sunderland's war total was 273 civilians killed and 838 injured.",
    sources: [
      { label: "Sunderland Echo: the WW2 bomb that caused chaos in the 21st century", url: "https://www.sunderlandecho.com/heritage-and-retro/retro/the-ww2-bomb-that-caused-chaos-in-sunderland-in-the-21st-century-3294997" }
    ]
  }
];

/* ============================================================
   YORK — the Baedeker raid of 29 April 1942, and the raids around it
   ------------------------------------------------------------
   Positions here are unusually good, and it is worth saying why.
   The University of York's "Raids Over York" project georeferenced
   the city's wartime ARP bomb census and its casualty registers,
   and publishes both as open map layers. So these are not points
   geocoded from a street name in a newspaper: they are the plotted
   positions the wardens recorded on the night, and the casualty
   figures are counts of NAMED INDIVIDUALS recorded at that address.

   That is also why almost every record below carries a specific
   casualty number where most of this site's blitz records do not.
   The rule is unchanged — a number only goes on a pin when a source
   states deaths AT THAT PLACE. Here, uniquely, it usually does.

   The city-wide total is deliberately NOT attached to any single
   pin. Published figures give 92 or 94 dead for the night of
   29 April 1942; both are cited on the area-level record below and
   nowhere else.

   Source: Raids Over York (University of York), raidsoveryork.co.uk,
   with the incident narratives on History of York and, for the
   railway deaths, LNER's own account.
   ============================================================ */
const yorkRecords = [
  {
    id: "york-baedeker-raid-1942",
    title: "York city centre — the Baedeker raid of 29 April 1942",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 53.95995,
    lng: -1.08205,
    bombType: "mixed",
    summary: "Between about 02:36 and 04:40 on 29 April 1942, roughly 70 aircraft attacked York with high explosive and incendiaries. It was a Baedeker raid — a reprisal attack aimed at a historic city chosen for its cultural value rather than its industry — and it fell hardest not on the medieval centre but on the terraced streets of Clifton, Holgate and Leeman Road.",
    note: "York Minster was not hit. The Guildhall, St Martin-le-Grand and the railway station were. Published counts of the high-explosive bombs dropped that night range from 69 to 95, and the Raids Over York project itself declines to settle on one; 14 bombs failed to explode.",
    casualtiesNote: "Published totals for the raid are 92 (History of York) or 94 (BBC, Raids Over York). The 94 figure matches the number of individually named dead in the project's casualty register dated 29 April 1942. This is a CITY-WIDE total for the night and belongs to no single location — the per-site figures on the other York records are counts of named individuals recorded at those addresses.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" },
      { label: "History of York: York Bombed", url: "https://www.historyofyork.org.uk/themes/20th-century/york-bombed" }
    ]
  },
  {
    id: "york-bar-convent-1942",
    title: "The Bar Convent, Blossom Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site, building-level",
    lat: 53.95528,
    lng: -1.09088,
    bombType: "HE",
    casualties: 5,
    summary: "A high-explosive bomb struck the Bar Convent, the oldest surviving convent in England, and brought down the corner of the building onto the sleeping quarters below. Five women died: two nuns, Mother Mary Agnes and Mother Mary Vincent, and three of the convent's firewatchers, Mary Ann O'Connor, Margaret Murphy and Jane McClorry.",
    note: "The five were buried in the convent's own cemetery. The chapel, hidden behind a domestic frontage since 1769 because Catholic worship had been illegal when it was built, survived.",
    casualtiesNote: "Five named individuals recorded at this address in the Raids Over York casualty register, matching History of York's account.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" },
      { label: "History of York: York Bombed", url: "https://www.historyofyork.org.uk/themes/20th-century/york-bombed" }
    ]
  },
  {
    id: "york-railway-station-1942",
    title: "York railway station",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site, building-level",
    lat: 53.95727,
    lng: -1.09313,
    bombType: "HE",
    casualties: 2,
    summary: "High explosive and incendiaries hit the station and its approaches, wrecking platforms 1 to 3, destroying the parcels office by fire and gutting the booking office. The 22:15 King's Cross to Edinburgh express was standing at the platform when it was hit and set alight; seven service personnel aboard were wounded.",
    note: "Station foreman William Milner, 42, went back into a burning building to fetch medical supplies for the injured and was killed. He was posthumously awarded the King's Commendation for Brave Conduct, and there is a memorial to him at the station. LNER railway policeman Robert William Smith, 64, died at the police office.",
    casualtiesNote: "Two named railway staff recorded at the station in the Raids Over York casualty register. The seven wounded service passengers on the Edinburgh express are recorded as injured, not killed.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" },
      { label: "LNER: tributes to two railway workers, 80 years on", url: "https://www.lner.co.uk/news/tributes-paid-to-two-railway-workers-on-the-80th-anniversary-of-the-wwii-bombing-of-york-railway-station/" }
    ]
  },
  {
    id: "york-guildhall-1942",
    title: "York Guildhall, St Martin's Courtyard",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.95963,
    lng: -1.08563,
    bombType: "incendiary",
    summary: "The fifteenth-century Guildhall was gutted by fire after incendiaries fell on the civic buildings beside the Ouse. The roof and the medieval stained glass were lost; the shell of the hall survived and was rebuilt to the original design, reopening in 1960.",
    note: "The point here is the Guildhall building itself rather than a plotted bomb position — the bomb census records this quarter of the city by ward, so no single georeferenced strike exists for the hall.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" },
      { label: "History of York: York Bombed", url: "https://www.historyofyork.org.uk/themes/20th-century/york-bombed" }
    ]
  },
  {
    id: "york-st-martin-le-grand-1942",
    title: "St Martin-le-Grand, Coney Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site, building-level",
    lat: 53.95930,
    lng: -1.08459,
    bombType: "incendiary",
    summary: "The medieval church on Coney Street burnt out during the raid, losing its nave, north aisle and east end. It was reconstructed between 1961 and 1968 by the architect George Pace, who deliberately left part of the ruin standing as a memorial rather than rebuilding the whole footprint.",
    note: "Its great fifteenth-century west window had been removed and stored for safekeeping in 1940. It survived the fire and was reinstalled in the rebuilt south wall, where it now faces the street.",
    sources: [
      { label: "Historic England: Church of St Martin le Grand", url: "https://historicengland.org.uk/listing/the-list/list-entry/1257963" },
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-amberley-street-1942",
    title: "Amberley Street, Holgate",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.96133,
    lng: -1.11546,
    bombType: "HE",
    casualties: 14,
    summary: "A high-explosive bomb fell on the pavement between numbers 37 and 39 of this short terraced street in Holgate. Fourteen people died here — the heaviest loss at any single location in the raid, and more than at any of the landmarks the raid is usually remembered for.",
    note: "Nine of the dead were in number 35 alone: five members of the Button family, including 22-month-old Gillian, twelve-year-old Audrey and fifteen-year-old Kenneth; two of the Jackson family; and two of the Nutters, one of them two years old.",
    casualtiesNote: "Fourteen named individuals recorded at numbers 35, 37 and 39 Amberley Street in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-spalding-avenue-1942",
    title: "Spalding Avenue, Clifton Without",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.97523,
    lng: -1.09271,
    bombType: "HE",
    casualties: 10,
    summary: "Ten people were killed in this suburban street on the northern edge of the city, eight of them at number 110 — members of the Helstrip, Duncan and Hyde families, four of whom were children aged between ten months and six years.",
    note: "Spalding Avenue rarely appears in popular accounts of the raid, which tend to follow the Guildhall, the station and the Bar Convent. It was one of the worst domestic losses of the night.",
    casualtiesNote: "Ten named individuals recorded in Spalding Avenue in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-bootham-crescent-1942",
    title: "Bootham Crescent, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point (a run of houses, not one address)",
    lat: 53.96654,
    lng: -1.08948,
    bombType: "HE",
    casualties: 10,
    summary: "High explosive struck the crescent in at least two places, including a direct hit on number 16. Ten people were killed along it, among them eleven-year-old Christine Blenkin and her fourteen-year-old sister Pauline.",
    note: "Four of the ten were civil-defence personnel who had turned out for the raid: firewatchers Ernest Atkin and Halbert Ord, Deputy Head Warden George Colman, and Arthur Broadhead of the National Fire Service.",
    casualtiesNote: "Ten named individuals recorded in Bootham Crescent in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-chatsworth-terrace-1942",
    title: "Chatsworth Terrace, Holgate",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.96024,
    lng: -1.11530,
    bombType: "HE",
    casualties: 9,
    summary: "A bomb burst in the roadway outside numbers 53 to 55. Nine people died, including three of the Ezard family — nine-year-old Muriel, her mother Ellen and her father James.",
    note: "Two of the dead were Air Raid Wardens killed on duty in the street they were patrolling: Albert Emmerson, 29, and John Herbert Fowler, 34.",
    casualtiesNote: "Nine named individuals recorded in Chatsworth Terrace in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-burton-stone-lane-1942",
    title: "Burton Stone Lane, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.96764,
    lng: -1.09204,
    bombType: "HE",
    casualties: 5,
    summary: "A high-explosive bomb fell in the back garden of number 16. Five people were killed, four of them women and one a two-year-old child, Janet Campbell.",
    casualtiesNote: "Five named individuals recorded at 16 Burton Stone Lane in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-nunthorpe-road-1942",
    title: "Nunthorpe Road, Scarcroft",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.95224,
    lng: -1.08854,
    bombType: "HE",
    casualties: 4,
    summary: "Bombs fell on Nunthorpe Road south of the city walls, killing four people across numbers 45, 46 and 49 — among them nine-year-old Noel Boyes and his mother Ethel, and twelve-year-old Betty Akers.",
    casualtiesNote: "Four named individuals recorded in Nunthorpe Road in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-pickering-terrace-1942",
    title: "Pickering Terrace, Newborough Street, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point (the site has been redeveloped)",
    lat: 53.96973,
    lng: -1.08710,
    bombType: "HE",
    casualties: 3,
    summary: "A high-explosive bomb landed in the roadway outside number 6 and destroyed eight houses outright. Three people died at number 6: seven-year-old June Leeming, her mother Doris, and Katherine Cooper.",
    casualtiesNote: "Three named individuals recorded at 6 Pickering Terrace in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-westminster-road-1942",
    title: "Westminster Road, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point (two separate streets)",
    lat: 53.96802,
    lng: -1.09992,
    bombType: "HE",
    casualties: 3,
    summary: "Bombs fell on Westminster Road at numbers 16 to 18 and again, as a direct hit, on number 47. Three people were killed: William Trotter, 60, at number 16, and the sisters Emily and Frances Cherry, 77 and 79, at number 18.",
    casualtiesNote: "Three named individuals recorded in Westminster Road in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-phoenix-cottages-1942",
    title: "Phoenix Cottages, Leeman Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point (the site has been redeveloped)",
    lat: 53.96168,
    lng: -1.10375,
    bombType: "HE",
    casualties: 2,
    summary: "High explosive hit the row of railway cottages on Leeman Road. Six-year-old Arthur Davies and 35-year-old Stella Skelton, of number 1, were killed.",
    note: "The LNER stables further along Leeman Road were hit in the same raid; nineteen horses were got out alive.",
    casualtiesNote: "Two named individuals recorded at Phoenix Cottages in the Raids Over York casualty register.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-queen-annes-school-1942",
    title: "Queen Anne's School shelter, Clifton",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, landmark point",
    lat: 53.96395,
    lng: -1.09337,
    bombType: "HE",
    casualties: 1,
    summary: "A high-explosive bomb fell on the lawn about a hundred feet behind the school's main building. Betty Pope, aged six, was killed in the school's air-raid shelter.",
    note: "The housing on Queen Anne's Road immediately alongside was hit separately and much harder — four died at number 20, two at number 18, and two more in the Welwyn House flats.",
    casualtiesNote: "One named individual recorded at the Queen Anne's School shelter in the Raids Over York casualty register. The nearby Queen Anne's Road deaths are recorded at those addresses, not here.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-lner-carriage-works-1942",
    title: "LNER Carriage Works, Poppleton Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site, building-level",
    lat: 53.95940,
    lng: -1.11159,
    bombType: "UXB",
    casualties: 0,
    summary: "Three high-explosive bombs fell on the carriage works site — by the aircraft detail shop and the sawmill log stack as well as here — and none of them exploded. Fourteen bombs failed to detonate across York that night.",
    note: "Unexploded bombs shut ground down for as long as it took to clear them, which on a railway works in 1942 meant halting war production as surely as a hit would have. No deaths are recorded at these three points.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-acomb-waterworks-1942",
    title: "Acomb waterworks",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site, building-level",
    lat: 53.96622,
    lng: -1.11450,
    bombType: "HE",
    summary: "A direct hit on the waterworks damaged the plant and the mains it fed. Between this and broken mains elsewhere in the city, water pressure failed across York while the fires from the incendiary attack were still spreading.",
    note: "No casualty figure is recorded for this site.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-fulford-barracks-1942",
    title: "Fulford Barracks",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "29 April 1942",
    photoLink: {
      label: "Photographs of the Baedeker raid",
      url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, approximate point",
    lat: 53.94627,
    lng: -1.07136,
    bombType: "HE",
    summary: "A stick of four high-explosive bombs fell across the cavalry and infantry barracks at Fulford, one on the barrack square and one behind the sports pavilion.",
    casualtiesNote: "Raids Over York states that six soldiers were killed here. That figure is single-sourced: the project's casualty register covers civilian deaths and holds no individual records for Fulford, so it could not be corroborated name by name as the other York figures on this site have been.",
    sources: [
      { label: "Raids Over York: Raid 8, 29 April 1942", url: "https://raidsoveryork.co.uk/raid8-29-apr-1942/" }
    ]
  },
  {
    id: "york-skeldergate-1942",
    title: "Skeldergate slipway & King's Staith",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2 August 1942",
    photoLink: {
      label: "Photographs of the raid of 2 August 1942",
      url: "https://raidsoveryork.co.uk/raid9-2-aug-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.95618,
    lng: -1.08380,
    bombType: "HE",
    casualties: 1,
    summary: "A single Dornier Do-217 came in over York in daylight and dropped four 500kg bombs across the city at about 16:36. One burst by the slipway on Skeldergate, beside the Ouse. Sidney Thompson, a 33-year-old National Fire Service man, was killed on a river patrol boat at King's Staith; 43 people were hurt.",
    note: "Two of the four bombs from this raid — at Buckingham Works on Bishophill and in the Castle grounds by Clifford's Tower — failed to explode.",
    casualtiesNote: "One named fireman recorded in the Raids Over York casualty register. Raids Over York's narrative gives his first name as either Sidney or Stanley; the casualty record says Sidney.",
    sources: [
      { label: "Raids Over York: Raid 9, 2 August 1942", url: "https://raidsoveryork.co.uk/raid9-2-aug-1942/" }
    ]
  },
  {
    id: "york-cliffords-tower-1942",
    title: "Clifford's Tower & the Castle grounds",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "2 August 1942",
    photoLink: {
      label: "Photographs of the raid of 2 August 1942",
      url: "https://raidsoveryork.co.uk/raid9-2-aug-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 53.95576,
    lng: -1.07984,
    bombType: "UXB",
    casualties: 0,
    summary: "One of the four 500kg bombs from the daylight raid of 2 August 1942 fell in the Castle grounds beside Clifford's Tower and did not go off.",
    note: "Clifford's Tower is the surviving keep of York Castle and the site of the massacre of the city's Jewish community in 1190. It came through both raids of 1942 undamaged.",
    sources: [
      { label: "Raids Over York: Raid 9, 2 August 1942", url: "https://raidsoveryork.co.uk/raid9-2-aug-1942/" }
    ]
  },
  {
    id: "york-belle-vue-terrace-1942",
    title: "Belle Vue Terrace, off Lawrence Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "24 September 1942",
    photoLink: {
      label: "Photographs of the raid of 24 September 1942",
      url: "https://raidsoveryork.co.uk/raid10-24-sept-1942/",
      note: "Raids Over York has a large photographic record of this night. The images belong to the York Press, Explore York, the National Railway Museum and private collectors — not to us, and not to the project either — so this links to them rather than copying them."
    },
    sortYear: 1942,
    confidence: "Confirmed event, street-derived point",
    lat: 53.95127,
    lng: -1.06775,
    bombType: "incendiary",
    summary: "Incendiaries fell across the east of the city — Regent Street, Tang Hall, the Foss Islands goods station and Lawrence Street — with a direct hit on number 12 Belle Vue Terrace.",
    casualtiesNote: "Three people died in this raid across the city: Civil Defence Warden Joseph Kirby, 57; Percy Beckwith, 61, at St Aelred's rest centre; and Thomas Marsh, 84, of Aldwark. None of the three is recorded at this address, so no figure is placed on this pin.",
    sources: [
      { label: "Raids Over York", url: "https://raidsoveryork.co.uk/" }
    ]
  },
  {
    id: "york-nunthorpe-grove-1945",
    title: "Nunthorpe Grove, Scarcroft",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "5 March 1945",
    sortYear: 1945,
    confidence: "Confirmed event, street-derived point",
    lat: 53.94793,
    lng: -1.08856,
    bombType: "HE",
    casualties: 2,
    summary: "Two women died at Nunthorpe Grove on the night of 5 March 1945 — Laura Thompson, 74, and Lydia Helstrip, 80. It was almost certainly Operation Gisela, the Luftwaffe's last large intruder operation over Britain, in which night fighters followed returning RAF bombers home and attacked their airfields and the country beneath them.",
    note: "This falls outside the eleven raids York is usually said to have suffered, nearly three years after the Baedeker attack and two months before the war in Europe ended.",
    casualtiesNote: "Two named individuals recorded at this address in the Raids Over York casualty register, dated 5 March 1945.",
    sources: [
      { label: "Raids Over York", url: "https://raidsoveryork.co.uk/" }
    ]
  }
];

/* ============================================================
   NORTHERN IRELAND — the Belfast Blitz
   ------------------------------------------------------------
   The single biggest omission this site had. Roughly 900 people
   died in Belfast on the night of 15-16 April 1941 — the greatest
   loss of life in any single night's raid on any city in the
   United Kingdom outside London — and until now the map showed
   nothing at all.

   COUNTY FILING. The boundary between County Antrim and County
   Down runs through Belfast along the River Lagan. Everything
   west of it is Antrim; Queen's Island and the Harbour Estate on
   the east bank are Down. So the shipyard and the city centre are
   in different counties, which is correct and will look odd if
   you don't know why.

   COORDINATES. Every point below is either a published Wikipedia
   infobox coordinate or an official grid reference converted from
   the Irish Grid (EPSG:29903) or the British National Grid
   (EPSG:27700) to WGS84. None was estimated off a map. Sites for
   which no coordinate could be obtained by those means — Burke
   Street, Hallidays Road, Percy Street, the York Street Mill —
   are deliberately NOT plotted, and are recorded in the raid
   record's casualty note instead of being given invented pins.
   Several of those streets no longer exist.
   ============================================================ */
const belfastRecords = [
  {
    id: "belfast-blitz-1941",
    title: "Belfast — the Blitz of April and May 1941",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "7 April – 5 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 54.5974,
    lng: -5.93632,
    bombType: "mixed",
    summary: "Belfast was raided four times in 1941. The Easter Tuesday attack of 15–16 April was the worst: around 180 bombers struck a city with almost no anti-aircraft defence, no night fighters and one of the lowest shelter provisions in the United Kingdom. On the night of 4–5 May the Luftwaffe returned with 203 tonnes of high explosive, 80 parachute mines and 96,000 incendiaries, and burned the Harbour Estate.",
    note: "Éire was neutral, but on the morning of 16 April Taoiseach Éamon de Valera sent fire brigades north from Dublin, Dún Laoghaire, Drogheda and Dundalk to help. Belfast's own defences were so thin that the city had only around 20 anti-aircraft guns in place on Easter Tuesday.",
    casualtiesNote: "Published totals for 15–16 April 1941 conflict and are recorded here rather than resolved: approximately 987 dead (Wikipedia), over 900 (WartimeNI archives), and almost 750 killed or later died of wounds (NI War Memorial). More than 1,500 were injured, 55,000 houses damaged and 100,000 people left temporarily homeless. The Fire Raid of 4–5 May killed over 200 more. ALL of these are city-wide totals and belong to no single location. Individual sites with published tolls that could not be plotted because no coordinate was obtainable and several of the streets no longer exist: Hogarth Street, 70; Ohio Street and Heather Street, 60 or more; Percy Street shelter, possibly 40; Atlantic Avenue shelter, 38; Church of the Holy Trinity, Unity Street, 17 to a parachute mine; 4 Ballynure Street, 14 in one house, eight of them one family; Burke Street, all twenty houses flattened and all occupants killed, number unstated. A mill wall collapse killed around 35 — sources place this at the York Street Mill and in the New Lodge, and it may be one incident counted twice.",
    sources: [
      { label: "Wikipedia: Belfast Blitz", url: "https://en.wikipedia.org/wiki/Belfast_Blitz" },
      { label: "NI War Memorial: The Easter Tuesday Raid", url: "https://www.niwarmemorial.org/the-easter-tuesday-raid" },
      { label: "WartimeNI: Belfast Blitz — the Easter Raid", url: "https://archives.wartimeni.com/article/belfast-blitz-the-easter-raid/" }
    ]
  },
  {
    id: "belfast-clonard-monastery-1941",
    title: "Clonard Monastery, Clonard Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "15–16 April 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 54.59998,
    lng: -5.95694,
    bombType: "mixed",
    summary: "Around 300 people sheltered in the crypt and cellars of the Redemptorist monastery on the Falls Road during the Easter Tuesday raid. Many of them were Protestants who had come down from the Shankill, a few streets away.",
    note: "In a city where the two communities lived largely apart, the shelters did not. It is one of the details of that night that Belfast has kept.",
    casualtiesNote: "No deaths are recorded among those sheltering here.",
    sources: [
      { label: "Wikipedia: Belfast Blitz", url: "https://en.wikipedia.org/wiki/Belfast_Blitz" },
      { label: "NI Historic Buildings Database: Clonard Church (HB26/31/001 A)", url: "https://apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=4115" }
    ]
  },
  {
    id: "belfast-st-georges-market-1941",
    title: "St George's Market, May Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16–21 April 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 54.59582,
    lng: -5.92203,
    bombType: "unspecified",
    summary: "The Victorian covered market was turned into an emergency mortuary after the Easter Tuesday raid. Two hundred and fifty-five bodies were brought here, laid out for relatives to identify. Many could not be.",
    note: "On 21 April the unclaimed and unidentified dead were buried together in a public funeral. The Falls Road Baths served as a second mortuary, where 150 bodies lay for three days before a mass burial.",
    casualtiesNote: "The figure of 255 is bodies BROUGHT to this building from across the city. Nobody was killed here. It is recorded on this pin only because the building is where the city counted its dead.",
    sources: [
      { label: "Wikipedia: St George's Market", url: "https://en.wikipedia.org/wiki/St_George%27s_Market" },
      { label: "Wikipedia: Belfast Blitz", url: "https://en.wikipedia.org/wiki/Belfast_Blitz" }
    ]
  },
  {
    id: "belfast-city-hall-1941",
    title: "Belfast City Hall, Donegall Square",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "4–5 May 1941",
    sortYear: 1941,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 54.59639,
    lng: -5.93,
    bombType: "incendiary",
    summary: "During the Fire Raid the roof above the City Hall's Banqueting Hall was destroyed. The building itself survived and still stands.",
    casualtiesNote: "No deaths recorded at this building.",
    sources: [
      { label: "Wikipedia: Belfast City Hall", url: "https://en.wikipedia.org/wiki/Belfast_City_Hall" },
      { label: "Wikipedia: Belfast Blitz", url: "https://en.wikipedia.org/wiki/Belfast_Blitz" }
    ]
  }
];

/* Queen's Island sits on the County Down side of the Lagan. */
const belfastHarbourRecords = [
  {
    id: "belfast-harland-wolff-1941",
    title: "Harland & Wolff, East Yard, Queen's Island",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "15 April – 5 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (the point locates the East Yard, not the whole works)",
    lat: 54.608,
    lng: -5.89306,
    bombType: "mixed",
    summary: "The shipyard was the reason Belfast was worth bombing. On 15–16 April three ships nearing completion were hit and the yard's own power station was struck. The Fire Raid of 4–5 May concentrated on the Harbour Estate and Queen's Island, and did the damage to war production that the Easter raid had largely missed.",
    note: "The point is the archive location for the East Yard rather than a survey point for a works covering most of an island, so treat it as accurate to a couple of hundred metres. Short & Harland's aircraft factory, building Stirling bombers on the same island, lost a four-and-a-half acre factory floor in the raid of 7 April and is separately plotted below.",
    casualtiesNote: "No per-site death toll is published for the yard. The city-wide totals for these raids are carried on the Belfast Blitz record and belong to no single location.",
    sources: [
      { label: "Wikipedia: Belfast Blitz", url: "https://en.wikipedia.org/wiki/Belfast_Blitz" },
      { label: "Britain from Above: Harland & Wolff new East Shipyard (XPW008422)", url: "https://www.britainfromabove.org.uk/en/image/XPW008422" }
    ]
  },
  {
    id: "belfast-short-harland-1941",
    title: "Short & Harland aircraft factory, Airport Road",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "7–8 April 1941",
    sortYear: 1941,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 54.605985,
    lng: -5.894049,
    bombType: "parachute-mine",
    casualties: 6,
    casualtiesNote: "Six night-shift workers killed when a parachute mine's blast collapsed part of the adjacent Harland & Wolff building; a seventh died of injuries on 20 April.",
    summary: "During the Docks Raid, two parachute mines fell over Queen's Island at 03:22. One struck the Alexandra Works aeroplane fuselage factory directly; the other's blast brought down part of the neighbouring Harland & Wolff building, killing six workers. Short & Harland's own aircraft factory — building Stirling bombers on the same island — lost a four-and-a-half acre factory floor in the same raid.",
    note: "The coordinate is a postcode centroid for Airport Road (BT3 9EU), not a surveyed site location — this site was previously left unplotted for exactly that reason (see the Harland & Wolff record above). Treat it as accurate to within a few hundred metres, not building-level.",
    sources: [
      { label: "WartimeNI: Short and Harland, Airport Road, Belfast", url: "https://archives.wartimeni.com/location/short-and-harland-airport-road-belfast-co-antrim/" },
      { label: "WartimeNI: Belfast Blitz — the Docks Raid, timeline", url: "https://wartimeni.com/article/belfast-blitz/the-docks-raid/timeline/" }
    ]
  }
];

/* ============================================================
   SCOTLAND — Clydebank
   ------------------------------------------------------------
   Filed under Dunbartonshire, the lieutenancy area, rather than
   West Dunbartonshire, the council area — because Dunbartonshire
   is what a reader looks for and what the wartime records say.
   ============================================================ */
const clydebankRecords = [
  {
    id: "clydebank-blitz-1941",
    title: "Clydebank — the raids of 13–15 March 1941",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "13–15 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 55.9014,
    lng: -4.40867,
    bombType: "mixed",
    summary: "Two nights of bombing aimed at the shipyards and the munitions works destroyed the town around them instead. On 13 March 236 aircraft dropped 272 tons of high explosive and over 1,650 incendiary canisters; the following night 203 aircraft dropped 231 tons more. Of roughly 12,000 houses in Clydebank, seven were left undamaged.",
    note: "Proportionally the most completely destroyed town in the United Kingdom. Some 35,000 people out of a population of about 47,000 were made homeless, and most of them left — the town's own fire service and rescue crews went on working through it.",
    casualtiesNote: "528 killed and 617 seriously injured in Clydebank itself, the official count made in 1942. Beware the figure of 1,200 dead that appears in many accounts including Wikipedia's: that is the CLYDESIDE total, taking in Glasgow's roughly 647, and is not a Clydebank figure. Second Avenue (80 dead from direct hits on houses) and 78 Jellicoe Street, Dalmuir (31 dead, fifteen of them members of the Rocks family) are now separately plotted below. Both remain area/street figures, not building-specific tolls except where a record below gives one.",
    sources: [
      { label: "National Records of Scotland: The Clydebank Blitz", url: "https://nrscotland.gov.uk/learning-and-events/all-features-and-articles/the-clydebank-blitz-13-15-march-1941" },
      { label: "1st Line Defence: UXO risk in Clydebank", url: "https://www.1stlinedefence.co.uk/resources/uxo-city-guides/clydebank/" }
    ]
  },
  {
    id: "clydebank-second-avenue-1941",
    title: "76 Second Avenue",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 55.910501,
    lng: -4.417552,
    bombType: "HE",
    casualties: 11,
    casualtiesNote: "Eleven members of the Diver family killed at this address. Second Avenue as a whole — including 72, 150 and 163 Second Avenue, where the Cahill, Dunn, Harris and Lee families and others also died — totalled around 80 dead; those other addresses are not separately plotted and this pin covers only the worst-hit single address.",
    summary: "A direct hit on a tenement at 76 Second Avenue killed eleven members of the Diver family, part of a wider toll of roughly 80 dead along the street during the two nights of bombing.",
    note: "The coordinate is a postcode centroid (G81 3HD), not a surveyed site location. Second Avenue's full casualty list — Ahern, Harris, Cahill, Dunn, Lee and others across several addresses — is on the source below but not individually plotted here.",
    sources: [
      { label: "Tom McKendrick: List of Casualties, Clydebank", url: "https://www.tommckendrick.com/code/casualties1.html" }
    ]
  },
  {
    id: "clydebank-jellicoe-street-1941",
    title: "78 Jellicoe Street, Dalmuir",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 55.910523,
    lng: -4.431027,
    bombType: "HE",
    casualties: 31,
    casualtiesNote: "31 dead at this single address, fifteen of them members of the Rocks family — one of the largest single-family losses of the whole Clydeside Blitz. Only Tommy Rocks is individually named in the source used here; a fuller casualty list may exist and is worth chasing.",
    summary: "A single bomb (recorded locally as 'Bomb 187') destroyed the tenement at 78 Jellicoe Street in Dalmuir, killing 31 people including fifteen of the Rocks family.",
    note: "The coordinate is a postcode centroid (G81 4HJ), not a surveyed site location. The project's earlier research corrected an assumption that this was in Radnor Park or 'the Holy City' — it was in Dalmuir, a separate part of Clydebank.",
    sources: [
      { label: "The Sunday Post: One street, one bomb, one family", url: "https://www.sundaypost.com/fp/one-street-one-bomb-one-familyblitz-remembered-survivor-tells-how-his-best-friend-and-14-relatives-died-in-just-one-devastating-explosion-in-a-night-of-horror/" }
    ]
  },
  {
    id: "clydebank-john-browns-1941",
    title: "John Brown's shipyard",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13–15 March 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 55.89726,
    lng: -4.40929,
    bombType: "mixed",
    summary: "The yard that built the Queen Mary and, at that moment, the battleship Duke of York was one of the two targets the raids were aimed at. It was hit, but it kept working.",
    note: "The point is the Titan cantilever crane, a listed structure still standing on the site. The striking thing about both nights is how much less damage the yards took than the tenements around them.",
    casualtiesNote: "No per-site death toll published. The town-wide figure of 528 is carried on the Clydebank raids record.",
    sources: [
      { label: "Historic Environment Scotland listing LB22993: Titan Cantilever Crane", url: "https://britishlistedbuildings.co.uk/200358733-titan-cantilever-crane-john-browns-shipyard-clydebank-clydebank" },
      { label: "National Records of Scotland: The Clydebank Blitz", url: "https://nrscotland.gov.uk/learning-and-events/all-features-and-articles/the-clydebank-blitz-13-15-march-1941" }
    ]
  },
  {
    id: "clydebank-singer-1941",
    title: "Singer sewing machine factory, Kilbowie",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "13–15 March 1941",
    sortYear: 1941,
    confidence: "Confirmed event, approximate point (46-acre works, point locates the factory not a specific building)",
    lat: 55.90555,
    lng: -4.40804,
    bombType: "mixed",
    summary: "The Singer works had turned from sewing machines to munitions, and its 46-acre site lost over 390,000 square feet of floor space across the two nights. The fire in its timber yard was among the largest of the raids.",
    note: "No separate grid reference is published for the timber yard, so it is not plotted apart from the factory.",
    casualtiesNote: "No per-site death toll published.",
    sources: [
      { label: "Britain from Above: Singer Sewing Machine Factory, Clydebank (SPW045856)", url: "https://www.britainfromabove.org.uk/en/image/SPW045856" },
      { label: "National Records of Scotland: The Clydebank Blitz", url: "https://nrscotland.gov.uk/learning-and-events/all-features-and-articles/the-clydebank-blitz-13-15-march-1941" }
    ]
  }
];

/* ============================================================
   WALES — Swansea
   ------------------------------------------------------------
   Filed under West Glamorgan, the preserved county.
   ============================================================ */
const swanseaRecords = [
  {
    id: "swansea-three-nights-1941",
    title: "Swansea — the Three Nights' Blitz",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "19–21 February 1941",
    sortYear: 1941,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 51.61803,
    lng: -3.92693,
    bombType: "mixed",
    summary: "Over three consecutive nights the Luftwaffe dropped 1,273 high-explosive bombs and around 56,000 incendiaries on Swansea. Forty-one acres of the town centre were destroyed. The docks were the strategic objective; the shopping streets were what burned.",
    note: "The centre was never rebuilt as it had been. Ben Evans, the department store that had served the town for over fifty years, was destroyed and never reopened — its site is now Castle Square.",
    casualtiesNote: "230 people were killed. Injured figures differ between sources: 409 (Swansea Museum) and 397 (Visit Swansea Bay). Properties destroyed given as 857 or 850, with 11,000 damaged. These are town-wide totals for the three nights and belong to no single location.",
    sources: [
      { label: "Swansea Museum: The Blitz", url: "http://www.swanseamuseum.co.uk/swansea-a-brief-history/world-war-two/the-blitz/" },
      { label: "Visit Swansea Bay: The Three Nights' Blitz", url: "https://www.visitswanseabay.com/blog/post/the-three-nights-blitz/" }
    ]
  },
  {
    id: "swansea-kings-dock-1941",
    title: "King's Dock, Swansea Docks",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "19–21 February 1941",
    sortYear: 1941,
    confidence: "Confirmed site, building-level",
    lat: 51.61659,
    lng: -3.91517,
    bombType: "mixed",
    summary: "The docks, and the oil and metals traffic through them, were why Swansea was attacked at all. They were the aiming point across all three nights.",
    casualtiesNote: "No per-site death toll published. The town-wide figure of 230 is carried on the Three Nights' Blitz record.",
    sources: [
      { label: "Coflein 419502: King's Dock, Swansea", url: "https://coflein.gov.uk/en/site/419502/" },
      { label: "Swansea Museum: The Blitz", url: "http://www.swanseamuseum.co.uk/swansea-a-brief-history/world-war-two/the-blitz/" }
    ]
  },
  {
    id: "swansea-castle-1941",
    title: "Swansea Castle, Castle Square",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "19–21 February 1941",
    sortYear: 1941,
    confidence: "Confirmed site (fixed, well-known landmark)",
    lat: 51.62021,
    lng: -3.94061,
    bombType: "mixed",
    summary: "The medieval castle stood in the middle of the burning town centre and came through the three nights. The buildings around it did not.",
    note: "Like York Minster and Canterbury Cathedral, it is plotted here for surviving rather than for being hit. Surviving stonework in nearby Castle Street still shows changes in colour and texture where bomb damage was patched with concrete.",
    casualtiesNote: "No deaths recorded at this site.",
    sources: [
      { label: "Cadw scheduled monument record: Swansea Castle", url: "https://ancientmonuments.uk/131674-swansea-castle-castle" },
      { label: "Swansea Museum: The Blitz", url: "http://www.swanseamuseum.co.uk/swansea-a-brief-history/world-war-two/the-blitz/" }
    ]
  }
];

const greenockRecords = [
  {
    id: "greenock-blitz-1941",
    title: "Greenock — the raids of 6–7 May 1941",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "6–7 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 55.9483,
    lng: -4.7644,
    bombType: "mixed",
    summary: "Around 350 German bombers attacked over two nights, aiming for the shipyards but doing far more damage to the town around them — much as at Clydebank two months earlier. Civilian deaths were markedly lower on the second night, once people had learned to shelter in tunnels in the town's east end.",
    note: "A decoy site behind Loch Thom successfully drew bombs away from the town — scores of large craters were found there afterwards. The shipyards, the intended target, escaped comparatively lightly; the sugar refineries, distillery and foundries did not.",
    casualtiesNote: "271 people killed over the two nights, more than 10,200 injured. Around 25,000 homes damaged and 5,000 destroyed — that housing-stock figure is given against a town-wide total of roughly 180,000 homes in one source, which looks too high for Greenock alone and has not been cross-checked against a second source; treat the raw casualty figures as solid and the housing totals as provisional.",
    sources: [
      { label: "Wikipedia: Greenock Blitz", url: "https://en.wikipedia.org/wiki/Greenock_Blitz" },
      { label: "IWM: Greenock Air Raids 1940–1941", url: "https://www.iwm.org.uk/memorials/item/memorial/53658" }
    ]
  },
  {
    id: "greenock-east-crawford-street-1941",
    title: "East Crawford Street & Belville Street",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "6 May 1941",
    sortYear: 1941,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 55.939365,
    lng: -4.732764,
    bombType: "HE",
    summary: "Serious damage was inflicted on East Crawford Street and Belville Street on the first night of the Greenock Blitz.",
    note: "The coordinate is a postcode centroid (PA15 2EA), not a surveyed site location. No per-site casualty figure is published; the town-wide toll of 271 is carried on the area record.",
    sources: [
      { label: "Wikipedia: Greenock Blitz", url: "https://en.wikipedia.org/wiki/Greenock_Blitz" }
    ]
  }
];

const aberdeenRecords = [
  {
    id: "aberdeen-blitz-1943",
    title: "Aberdeen — the raid of 21 April 1943",
    status: "historic",
    statusLabel: "Historic bombing area",
    date: "21 April 1943",
    sortYear: 1943,
    confidence: "Confirmed event, area-level point only (exact site not verified)",
    lat: 57.1497,
    lng: -2.0943,
    bombType: "mixed",
    casualties: 120,
    casualtiesNote: "More than 120 killed — 98 civilians and 27 soldiers of the Gordon Highlanders at Gordon Barracks — in 127 bombs dropped over 44 minutes. Named individual casualties below (the Cox family) come from a single source and have not been cross-checked against a second.",
    summary: "The last major Luftwaffe raid on any British city. 127 bombs fell in 44 minutes across residential and industrial Aberdeen, from Hilton in the north to the harbour, damaging or destroying more than 12,000 homes.",
    note: "Sites damaged without a published per-site casualty figure: Middlefield School (a direct strike; a young teacher trapped and had a leg amputated), Kittybrewster railway shelter (13 railwaymen sheltering, 4 killed), Cattofield Gardens, Powis Place (the front of Causewayend Church destroyed), George Street and Hutcheon Street.",
    sources: [
      { label: "Press and Journal: The Aberdeen Blitz of 1943 left the city in ruins", url: "https://www.pressandjournal.co.uk/fp/past-times/4170473/blitz-aberdeen/" }
    ]
  },
  {
    id: "aberdeen-bedford-place-1943",
    title: "60 Bedford Place",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "21 April 1943",
    sortYear: 1943,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 57.160702,
    lng: -2.107896,
    bombType: "HE",
    casualties: 4,
    casualtiesNote: "The Cox family killed: mother Williamina, 22, and three children. Named-victim detail from a single source, not yet cross-checked against a second — treat with the same caution as the area record's casualty note.",
    summary: "A direct hit on 60 Bedford Place killed the Cox family of four during the 21 April 1943 raid.",
    note: "The coordinate is a postcode centroid (AB24 3NX), not a surveyed site location.",
    sources: [
      { label: "Press and Journal: The Aberdeen Blitz of 1943 left the city in ruins", url: "https://www.pressandjournal.co.uk/fp/past-times/4170473/blitz-aberdeen/" }
    ]
  }
];

const wickRecords = [
  {
    id: "wick-bank-row-1940",
    title: "Bank Row",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "1 July 1940, c. 16:30",
    sortYear: 1940,
    confidence: "Confirmed event, postcode-level point (no survey coordinate found; see note)",
    lat: 58.4398,
    lng: -3.0894,
    bombType: "HE",
    weightKg: 50,
    casualties: 15,
    casualtiesNote: "15 killed (8 children, 7 adults), 30+ injured. Children: Eric Blackstock (5), John Wares (5), Betha Miller (5), Isobel Bruce (7), James Flett (7), Kenneth MacGregor (8), Amy Miller (9), Donald Thomson (16). Adults: Isobel Mackenzie (25), Pte Robert Mackenzie (30), Mary MacTavish (44), Mary Steven (44), Donald Waters (50), Bill Smith (63), Robert Mackenzie (71).",
    summary: "A single, undetected German Ju88 dropped two 50kg bombs on Bank Row — no siren sounded and no fighters were scrambled. It is recorded as the first daylight bombing raid against civilians on mainland Britain, two months before the London Blitz began.",
    note: "The coordinate is a postcode centroid (KW1 5EY), not a surveyed site location — a memorial garden now marks the site and may have a more precise published coordinate worth chasing later. This is one of the best individually-sourced incidents added in this batch: full names and ages for all 15 dead are published.",
    sources: [
      { label: "Caithness at War: Site 4, Bank Row Bombing", url: "https://caithnessatwar.com/site-4-bank-row-bombing/" },
      { label: "IWM: Wick Bomb Victims", url: "https://www.iwm.org.uk/memorials/item/memorial/84248" },
      { label: "John O'Groat Journal: Bank Row, 1940 — 'Those bombs just came out of the blue'", url: "https://www.johnogroat-journal.co.uk/news/bank-row-1940-those-bombs-just-came-out-of-the-blue-210618/" }
    ]
  }
];

const orkneyRecords = [
  {
    id: "orkney-bridge-of-waithe-1940",
    title: "Bridge of Waithe (Brig o' Waithe)",
    status: "historic",
    statusLabel: "Historic bombing site",
    date: "16 March 1940",
    sortYear: 1940,
    confidence: "Confirmed site, coordinate stated directly by source",
    lat: 58.9837367,
    lng: -3.2468247,
    bombType: "HE",
    casualties: 1,
    casualtiesNote: "James Isbister, 27, killed in his own doorway — the first British civilian killed by a German bomb in the Second World War. Seven other civilians were wounded; six military personnel were also killed and seven injured in the wider raid on Scapa Flow that night.",
    summary: "A Luftwaffe aircraft returning from a raid on the Scapa Flow naval anchorage dropped nineteen bombs near the shore of Loch Stenness, on its way back out. One killed James Isbister; it was the second major Luftwaffe attack on Scapa Flow, after an earlier raid in October 1939 had damaged the battleship Iron Duke.",
    note: "Coordinate stated directly by the source used — no geocoding was needed for this record.",
    sources: [
      { label: "Secret Scotland: James Isbister", url: "https://www.secretscotland.org.uk/index.php/Secrets/JamesIsbister" },
      { label: "IWM: J W Isbister, first civilian air raid casualty in the British Empire in WW2", url: "https://www.iwm.org.uk/memorials/item/memorial/76280" }
    ]
  }
];

const regionData = {
  belfast: {
    label: "Belfast, County Antrim",
    short: "Belfast",
    county: "County Antrim",
    accent: "var(--amber)",
    records: belfastRecords,
    center: [54.5974, -5.93632],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  belfastHarbour: {
    label: "Belfast Harbour & Queen's Island, County Down",
    short: "Belfast Harbour",
    county: "County Down",
    accent: "var(--amber)",
    records: belfastHarbourRecords,
    center: [54.608, -5.89306],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  clydebank: {
    label: "Clydebank, Dunbartonshire",
    short: "Clydebank",
    county: "Dunbartonshire",
    accent: "var(--amber)",
    records: clydebankRecords,
    center: [55.9014, -4.40867],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  greenock: {
    label: "Greenock, Renfrewshire",
    short: "Greenock",
    county: "Renfrewshire",
    accent: "var(--amber)",
    records: greenockRecords,
    center: [55.9483, -4.7644],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  aberdeen: {
    label: "Aberdeen, Aberdeenshire",
    short: "Aberdeen",
    county: "Aberdeenshire",
    accent: "var(--amber)",
    records: aberdeenRecords,
    center: [57.1497, -2.0943],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  wick: {
    label: "Wick, Caithness",
    short: "Wick",
    county: "Caithness",
    accent: "var(--amber)",
    records: wickRecords,
    center: [58.4398, -3.0894],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  orkney: {
    label: "Bridge of Waithe, Orkney",
    short: "Orkney",
    county: "Orkney",
    accent: "var(--amber)",
    records: orkneyRecords,
    center: [58.9837, -3.2468],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  swansea: {
    label: "Swansea, West Glamorgan",
    short: "Swansea",
    county: "West Glamorgan",
    accent: "var(--amber)",
    records: swanseaRecords,
    center: [51.61803, -3.92693],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  york: {
    label: "York, North Yorkshire",
    short: "York",
    county: "North Yorkshire",
    accent: "var(--amber)",
    records: yorkRecords,
    center: [53.9600, -1.0873],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  liverpool: {
    label: "Liverpool, Merseyside",
    short: "Liverpool",
    county: "Merseyside",
    accent: "var(--amber)",
    records: liverpoolRecords,
    center: [53.4084, -2.9916],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  bootle: {
    label: "Bootle, Merseyside",
    short: "Bootle",
    county: "Merseyside",
    accent: "var(--amber)",
    records: bootleRecords,
    center: [53.4457, -2.9891],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  wirral: {
    label: "Birkenhead & Wallasey, Merseyside",
    short: "Wirral",
    county: "Merseyside",
    accent: "var(--amber)",
    records: wirralRecords,
    center: [53.4088, -3.037],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  stHelens: {
    label: "St Helens, Merseyside",
    short: "St Helens",
    county: "Merseyside",
    accent: "var(--amber)",
    records: stHelensRecords,
    center: [53.4295, -2.716],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  manchester: {
    label: "Manchester",
    short: "Manchester",
    county: "Greater Manchester",
    accent: "var(--amber)",
    records: manchesterRecords,
    center: [53.4808, -2.2426],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  trafford: {
    label: "Trafford & Altrincham, Greater Manchester",
    short: "Trafford",
    county: "Greater Manchester",
    accent: "var(--amber)",
    records: traffordRecords,
    center: [53.44, -2.31],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  salford: {
    label: "Salford, Greater Manchester",
    short: "Salford",
    county: "Greater Manchester",
    accent: "var(--amber)",
    records: salfordRecords,
    center: [53.4994, -2.3],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  oldham: {
    label: "Oldham, Greater Manchester",
    short: "Oldham",
    county: "Greater Manchester",
    accent: "var(--amber)",
    records: oldhamRecords,
    center: [53.5305, -2.109],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  coventry: {
    label: "Coventry, West Midlands",
    short: "Coventry",
    county: "West Midlands",
    accent: "var(--amber)",
    records: coventryRecords,
    center: [52.4082, -1.5106],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  birmingham: {
    label: "Birmingham, West Midlands",
    short: "Birmingham",
    county: "West Midlands",
    accent: "var(--amber)",
    records: birminghamRecords,
    center: [52.4797, -1.9026],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  sheffield: {
    label: "Sheffield, South Yorkshire",
    short: "Sheffield",
    county: "South Yorkshire",
    accent: "var(--amber)",
    records: sheffieldRecords,
    center: [53.3838, -1.4659],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  hull: {
    label: "Kingston upon Hull, East Riding of Yorkshire",
    short: "Hull",
    county: "East Riding of Yorkshire",
    accent: "var(--amber)",
    records: hullRecords,
    center: [53.7446, -0.3325],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  grimsby: {
    label: "Grimsby & Cleethorpes, Lincolnshire",
    short: "Grimsby",
    county: "Lincolnshire",
    accent: "var(--amber)",
    records: grimsbyRecords,
    center: [53.5675, -0.0798],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  northShields: {
    label: "North Shields, Tyne and Wear",
    short: "North Shields",
    county: "Tyne and Wear",
    accent: "var(--amber)",
    records: northShieldsRecords,
    center: [55.011, -1.4415],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  southShields: {
    label: "South Shields, Tyne and Wear",
    short: "South Shields",
    county: "Tyne and Wear",
    accent: "var(--amber)",
    records: southShieldsRecords,
    center: [54.99745, -1.43818],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  newcastle: {
    label: "Newcastle upon Tyne, Tyne and Wear",
    short: "Newcastle",
    county: "Tyne and Wear",
    accent: "var(--amber)",
    records: newcastleRecords,
    center: [54.9753, -1.6039],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  sunderland: {
    label: "Sunderland, Tyne and Wear",
    short: "Sunderland",
    county: "Tyne and Wear",
    accent: "var(--amber)",
    records: sunderlandRecords,
    center: [54.91, -1.3723],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  london: {
    label: "London",
    short: "London",
    county: "Greater London",
    accent: "var(--amber)",
    records: londonRecords,
    center: [51.5074, -0.1278],
    zoom: 11,
    raidNights: 71,
    hasPotential: false
  },
  southampton: {
    label: "Southampton, Hampshire",
    short: "Southampton",
    county: "Hampshire",
    accent: "var(--amber)",
    records: southamptonRecords,
    center: [50.9045, -1.4043],
    zoom: 13,
    raidNights: 57,
    hasPotential: false
  },
  portsmouth: {
    label: "Portsmouth, Hampshire",
    short: "Portsmouth",
    county: "Hampshire",
    accent: "var(--amber)",
    records: portsmouthRecords,
    center: [50.7989, -1.0912],
    zoom: 13,
    raidNights: 67,
    hasPotential: false
  },
  hampshireWider: {
    label: "Wider Hampshire",
    short: "Wider Hampshire",
    county: "Hampshire",
    accent: "var(--amber)",
    records: hampshireWiderRecords,
    center: [51.05, -1.0],
    zoom: 10,
    raidNights: null,
    hasPotential: false
  },
  canterbury: {
    label: "Canterbury, Kent",
    short: "Canterbury",
    county: "Kent",
    accent: "var(--amber)",
    records: canterburyRecords,
    center: [51.2798, 1.083],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  dover: {
    label: "Dover, Kent",
    short: "Dover",
    county: "Kent",
    accent: "var(--amber)",
    records: doverRecords,
    center: [51.1258, 1.3094],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  folkestone: {
    label: "Folkestone, Kent",
    short: "Folkestone",
    county: "Kent",
    accent: "var(--amber)",
    records: folkestoneRecords,
    center: [51.0806, 1.1832],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  ashford: {
    label: "Ashford & Little Chart, Kent",
    short: "Ashford",
    county: "Kent",
    accent: "var(--amber)",
    records: ashfordRecords,
    center: [51.1508, 0.831],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  maidstone: {
    label: "Maidstone, Kent",
    short: "Maidstone",
    county: "Kent",
    accent: "var(--amber)",
    records: maidstoneRecords,
    center: [51.2723, 0.5205],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  ramsgate: {
    label: "Ramsgate, Kent",
    short: "Ramsgate",
    county: "Kent",
    accent: "var(--amber)",
    records: ramsgateRecords,
    center: [51.3339, 1.4183],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  medway: {
    label: "Medway, Kent",
    short: "Medway",
    county: "Kent",
    accent: "var(--amber)",
    records: medwayRecords,
    center: [51.386, 0.55],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  kingsHill: {
    label: "King's Hill, Kent",
    short: "King's Hill",
    county: "Kent",
    accent: "var(--amber)",
    records: kingsHillRecords,
    center: [51.2793, 0.4025],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  brighton: {
    label: "Brighton & Hove, East Sussex",
    short: "Brighton & Hove",
    county: "East Sussex",
    accent: "var(--amber)",
    records: brightonRecords,
    center: [50.8279, -0.1519],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  eastbourne: {
    label: "Eastbourne, East Sussex",
    short: "Eastbourne",
    county: "East Sussex",
    accent: "var(--amber)",
    records: eastbourneRecords,
    center: [50.769, 0.2807],
    zoom: 14,
    raidNights: 96,
    hasPotential: false
  },
  hastings: {
    label: "Hastings, East Sussex",
    short: "Hastings",
    county: "East Sussex",
    accent: "var(--amber)",
    records: hastingsRecords,
    center: [50.8631, 0.5753],
    zoom: 13,
    raidNights: null,
    hasPotential: false
  },
  bexhill: {
    label: "Bexhill & Birling Gap, East Sussex",
    short: "Bexhill",
    county: "East Sussex",
    accent: "var(--amber)",
    records: bexhillRecords,
    center: [50.7915, 0.3355],
    zoom: 11,
    raidNights: null,
    hasPotential: false
  },
  eastGrinstead: {
    label: "East Grinstead, West Sussex",
    short: "East Grinstead",
    county: "West Sussex",
    accent: "var(--amber)",
    records: eastGrinsteadRecords,
    center: [51.1268, -0.0108],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  petworth: {
    label: "Petworth, West Sussex",
    short: "Petworth",
    county: "West Sussex",
    accent: "var(--amber)",
    records: petworthRecords,
    center: [50.9878, -0.61],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  ford: {
    label: "Ford, West Sussex",
    short: "Ford",
    county: "West Sussex",
    accent: "var(--amber)",
    records: fordRecords,
    center: [50.8181, -0.5878],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  shorehamArun: {
    label: "Shoreham, Arundel & West Wittering, West Sussex",
    short: "Shoreham & Arun",
    county: "West Sussex",
    accent: "var(--amber)",
    records: shorehamRecords,
    center: [50.82, -0.58],
    zoom: 10,
    raidNights: null,
    hasPotential: false
  },
  redruth: {
    label: "Redruth, Cornwall",
    short: "Redruth",
    county: "Cornwall",
    accent: "var(--cyan)",
    records: redruthRecords,
    center: [50.233, -5.2274],
    zoom: 15,
    raidNights: null,
    hasPotential: false
  },
  par: {
    label: "Par & St Austell, Cornwall",
    short: "Par & St Austell",
    county: "Cornwall",
    accent: "var(--cyan)",
    records: parRecords,
    center: [50.3462, -4.706],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  hayle: {
    label: "Hayle, Cornwall",
    short: "Hayle",
    county: "Cornwall",
    accent: "var(--cyan)",
    records: hayleRecords,
    center: [50.1875, -5.4145],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  bristol: {
    label: "Bristol",
    short: "Bristol",
    county: "Bristol",
    accent: "var(--amber)",
    records: bristolRecords,
    center: [51.4545, -2.5879],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  bath: {
    label: "Bath, Somerset",
    short: "Bath",
    county: "Somerset",
    accent: "var(--amber)",
    records: bathRecords,
    center: [51.3811, -2.3590],
    zoom: 14,
    raidNights: 2,
    hasPotential: false
  },
  weston: {
    label: "Weston-super-Mare, Somerset",
    short: "Weston-super-Mare",
    county: "Somerset",
    accent: "var(--amber)",
    records: westonRecords,
    center: [51.3400, -2.9400],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
  yeovil: {
    label: "Yeovil, Somerset",
    short: "Yeovil",
    county: "Somerset",
    accent: "var(--amber)",
    records: yeovilRecords,
    center: [50.9412, -2.6415],
    zoom: 14,
    raidNights: 10,
    hasPotential: false
  },
  bridgwater: {
    label: "Bridgwater, Somerset",
    short: "Bridgwater",
    county: "Somerset",
    accent: "var(--amber)",
    records: bridgwaterRecords,
    center: [51.1280, -2.9930],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  taunton: {
    label: "Taunton, Somerset",
    short: "Taunton",
    county: "Somerset",
    accent: "var(--amber)",
    records: tauntonRecords,
    center: [51.0130, -3.1030],
    zoom: 14,
    raidNights: null,
    hasPotential: false
  },
  burnham: {
    label: "Burnham-on-Sea & Brean, Somerset",
    short: "Burnham & Brean",
    county: "Somerset",
    accent: "var(--amber)",
    records: burnhamRecords,
    center: [51.2750, -3.0000],
    zoom: 12,
    raidNights: null,
    hasPotential: false
  },
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

/* "All counties" is a step back to national context rather than a fit to the
   data. Fitting the records themselves just frames the South West, which
   tells a visitor nothing about WHERE the South West is — and as more
   counties are added the frame would keep shifting under them. A fixed UK
   extent gives the selection a stable, recognisable meaning: everywhere.

   The north edge stops at Orkney rather than Shetland. Shetland sits a
   further 100 miles out, and including it stretches the frame so tall that
   everything else shrinks to fit — the whole country ends up smaller on
   screen for the sake of a corner nobody is looking at. West edge clears
   Northern Ireland. */
/* Britain AND Ireland. The west edge used to stop at -8.65, which was
   described as clearing Northern Ireland; it does, but it also cuts off
   most of the Republic, whose west coast runs out past -10.5. Now that
   Belfast and the neutral-Ireland bombings are plotted, the frame has to
   hold both islands or "all counties" quietly excludes some of them.
   North edge still stops at Orkney rather than Shetland, for the same
   reason as before: Shetland is another 100 miles out and including it
   shrinks everything else to fit. */
const UK_BOUNDS = L.latLngBounds([49.85, -10.9], [59.4, 1.78]);

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

/* ============================================================
   PROGRESSIVE DATA LOADING
   ------------------------------------------------------------
   The site started by shipping every dataset in a <script> tag in the
   page head: county outlines, the Plymouth potential-sites layer, the
   V-weapon impacts. That is fine for one city. It does not survive
   national coverage — the outlines alone were already 426 kB for 15
   counties, and every visitor paid for all of them to see one.

   Three things changed:

     1. County outlines are sliced one file per county and fetched when
        that county is selected. See loadCountyBoundary().
     2. The heavy point layers below are fetched the first time the map
        looks at the ground they cover, or the first time their control
        is switched on — whichever happens first.
     3. Markers are created only for records inside the padded viewport,
        so render cost tracks what is on screen rather than how much
        history has been researched. See renderMarkers().

   WHY NOT VECTOR TILES
   Real vector tiles need a tile server, or a build step producing tens
   of thousands of small files, plus a client library. This site is
   static files on GitHub Pages and the whole dataset is a few hundred
   kilobytes. Slicing by county — a unit the site already navigates by,
   and one a visitor picks explicitly — gets the same "only pay for what
   you are looking at" result with no server and no new dependency. If
   the record set ever reaches the tens of thousands, the next step is
   to slice the records themselves the same way (a per-county index of
   id/lat/lng/status, with full detail fetched on click); the loader
   below is deliberately written so that is an addition, not a rewrite.

   Bump DATA_VERSION with the ?v= in index.html on every release, for
   the same cache-busting reason — these files are fetched by script and
   would otherwise be served stale from cache long after a data update.
   ============================================================ */
const DATA_VERSION = "1.14.7";

// Prebuilt county bounding boxes from data/county-index.js. Tiny, always
// loaded, and enough to frame a county before its outline arrives.
const COUNTY_BOX = typeof COUNTY_BOUNDS !== "undefined" && COUNTY_BOUNDS ? COUNTY_BOUNDS : {};

const dataScriptPromises = new Map();

/* <script> injection rather than fetch(), for the same reason the data
   files were script tags to begin with: fetch() of a local file is blocked
   when index.html is opened as file://, and a preview that silently loses
   half its data is a bad way to find that out. */
function loadDataScript(src) {
  if (dataScriptPromises.has(src)) return dataScriptPromises.get(src);
  const promise = new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = `${src}?v=${DATA_VERSION}`;
    el.async = true;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`could not load ${src}`));
    document.head.appendChild(el);
  });
  dataScriptPromises.set(src, promise);
  promise.catch(() => dataScriptPromises.delete(src));
  return promise;
}

/* Does the current view come anywhere near this dataset's ground? Padded
   generously — loading a little early is invisible, loading late shows up
   as points fading in after the pan has stopped. */
function viewNear(box, padDeg = 0.35) {
  if (!box) return false;
  const b = map.getBounds();
  return (
    b.getNorth() + padDeg >= box[0] &&
    b.getSouth() - padDeg <= box[2] &&
    b.getEast() + padDeg >= box[1] &&
    b.getWest() - padDeg <= box[3]
  );
}

/* The potential-sites layer is Plymouth-only *data*, but it is part of the
   same single combined layer as everything else — it stays on the map
   whichever town is selected, rather than vanishing the moment you pick
   Exeter. Availability is therefore a question about the dataset, not about
   the current selection. The data script loads before this one (see the
   <script> order in index.html), so this is safe to read at parse time. */
/* "The dataset exists", not "the dataset is in memory" — those are now two
   different questions, and every consumer below already asks the second one
   separately via potentialSitesData.length. Set false only if the data file
   is genuinely removed from the repo. */
const HAS_POTENTIAL_DATA = true;
const POTENTIAL_DATA_SRC = "data/potential-bomb-sites.js";
// Plymouth and its immediate surroundings — the only ground this layer covers.
const POTENTIAL_DATA_BOX = [50.32, -4.25, 50.47, -4.02];

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
/* ---------- Which county is a record actually in? ----------
   Records are grouped into regions for editorial reasons, and a region's
   county is not always the county the record sits in. The Saltash records
   are the clear case: they are filed under Plymouth, because that is the
   raid they belong to, but Saltash is in Cornwall. Taking the county from
   the region put them in Devon and dropped them out of scope whenever
   Cornwall was selected — visibly wrong, since they are plotted well the
   Cornish side of the Tamar.

   This used to be answered at runtime, by testing every record against
   every county polygon. That worked, but it was the reason the browser had
   to download all 426 kB of county geometry before the map could decide
   what to draw — to answer a question whose answer cannot change between
   page loads, since both the coordinates and the boundaries are fixed.

   So it is now answered at BUILD time by tools/build-county-slices.js, and
   only the DISAGREEMENTS ship: RECORD_COUNTY in data/county-index.js is a
   short id -> county map (five entries at the time of writing, all of them
   Saltash and Torpoint). Everything absent from it takes its region's
   county, which is right by construction.

   Re-run tools/build-county-slices.js after adding or moving records, or a
   new record straddling a county line will quietly take its region's county.
------------------------------------------------------------------- */
const RECORD_COUNTY_OVERRIDES =
  typeof RECORD_COUNTY !== "undefined" && RECORD_COUNTY ? RECORD_COUNTY : {};

function recordCounty(record) {
  return RECORD_COUNTY_OVERRIDES[record.id] || record.regionCounty || "";
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

// Opens on the whole UK, matching the "All counties" selection the map
// starts on. This is a provisional view: it is re-fitted with padding for
// the floating panels once the page has laid out (see the initial fit at the
// end of startup), because none of that furniture exists yet at this point.
const map = L.map("map", {
  // Plain wheel/two-finger scroll belongs to the page — the map is a
  // full-height hero and hijacking the wheel traps the reader in it. Pinch
  // to zoom is wired up separately below, so a trackpad still works.
  scrollWheelZoom: false,
  zoomControl: false,
  /* Leaflet snaps fitBounds to whole zoom levels by default, and a whole
     level is a factor of two. A region that needs zoom 5.9 gets zoom 5 and
     sits at roughly half the size it could — which is why selections looked
     stranded in the middle of an empty frame. Allowing fractional zoom lets
     a fit land exactly against the edges of the space available.

     zoomDelta stays at 1 so the +/- buttons still move in familiar whole
     steps; only automatic fitting uses the in-between values. */
  zoomSnap: 0,
  zoomDelta: 1,
  wheelPxPerZoomLevel: 120
}).fitBounds(UK_BOUNDS);

L.control.zoom({ position: "bottomright" }).addTo(map);

/* ---------- Marker size follows zoom ----------
   The record markers are a fixed 28px, which is right when you are looking at
   one town and far too big when you are looking at the whole country: at
   national zoom a hundred-odd 28px targets merge into one unreadable clot,
   and the map stops showing where things are and starts showing only that
   there were a lot of them.

   Scaling them down as you zoom out keeps the distribution legible without
   changing what is plotted. It is a CSS custom property on the map container
   rather than a re-render, so it costs nothing and every marker — including
   ones added later by a filter change — picks it up for free.

   The anchor stays put because the icon is centred on its point
   (iconAnchor 14,14) and the transform scales from the middle. */
const MARKER_SCALE_MIN = 0.4;
const MARKER_SCALE_MIN_ZOOM = 6;   // national view: smallest
const MARKER_SCALE_FULL_ZOOM = 12; // town view: full size

function updateMarkerScale() {
  const zoom = map.getZoom();
  const span = MARKER_SCALE_FULL_ZOOM - MARKER_SCALE_MIN_ZOOM;
  const progress = Math.max(0, Math.min(1, (zoom - MARKER_SCALE_MIN_ZOOM) / span));
  const scale = MARKER_SCALE_MIN + progress * (1 - MARKER_SCALE_MIN);
  map.getContainer().style.setProperty("--marker-scale", scale.toFixed(3));
}

map.on("zoom zoomend", updateMarkerScale);
updateMarkerScale();

/* ---------- Trackpad pinch-to-zoom ----------
   scrollWheelZoom is off so that two-finger scrolling still scrolls the
   page rather than trapping the reader inside a full-height map. The side
   effect was that a laptop with no mouse had no way to zoom except the +/-
   buttons, which is a poor experience on the device most people are using.

   macOS (and Windows) report a trackpad pinch as a wheel event with
   ctrlKey set — the browser's own convention for "this is a zoom gesture,
   not a scroll". Handling only that case gives pinch-to-zoom back without
   taking the page scroll away. Zooming around the pointer rather than the
   map centre keeps whatever you are pointing at under your fingers. */
map.getContainer().addEventListener(
  "wheel",
  (e) => {
    if (!e.ctrlKey) return; // ordinary scroll — leave it to the page
    e.preventDefault();

    const delta = -e.deltaY / (e.deltaMode === 1 ? 3 : 100);
    const target = map.getZoom() + delta;
    const clamped = Math.max(map.getMinZoom(), Math.min(map.getMaxZoom(), target));
    if (clamped === map.getZoom()) return;

    map.setZoomAround(map.mouseEventToContainerPoint(e), clamped, { animate: false });
  },
  { passive: false }
);

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

/* ============================================================
   BASEMAP, AND WHY THE THEME SWITCH REPLACES THE LAYER
   ------------------------------------------------------------
   The obvious way to change basemap is tileLayer.setUrl(newUrl).
   Do not. On this map it sends the view to Australia.

   Why: setUrl() calls GridLayer.redraw(), and redraw() does

       this._tileZoom = this._clampZoom(this._map.getZoom());

   _clampZoom only clamps to min/max — it does NOT round. Every
   other path into GridLayer goes through _setView(), which sets
   the tile zoom to Math.round(zoom). That difference is invisible
   on a normal map, because the zoom is always a whole number
   anyway. This map sets zoomSnap: 0 so a county can be framed at
   a fractional zoom, so map.getZoom() is something like 5.7854.

   After a setUrl the layer therefore holds _tileZoom = 5.7854 and
   asks for tiles like

       .../dark_all/5.7854681.../26/16.png

   CARTO parses that z as 5 and serves zoom-5 tiles — but the x/y
   were computed on the zoom-5.7854 grid, so they address a
   completely different part of the world. The markers stay
   correctly placed over the UK while the basemap underneath them
   is Western Australia, which is exactly as broken as it sounds.

   Replacing the layer avoids the whole thing: addTo() runs onAdd
   -> _resetView -> _setView, which rounds properly. The outgoing
   layer is held until the new one has painted so the switch does
   not flash grey, with a timeout so two basemaps can never end up
   stacked permanently.

   If you ever need redraw() on a tile layer here, remember this.
   ============================================================ */
const TILE_OPTIONS = {
  maxZoom: 19,
  subdomains: "abcd",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
};

let tileLayer = L.tileLayer(TILE_URLS[resolveTheme()], TILE_OPTIONS).addTo(map);

function setBasemapTheme(resolved) {
  const url = TILE_URLS[resolved] || TILE_URLS.light;
  if (!tileLayer || tileLayer._url === url) return;

  const outgoing = tileLayer;
  const incoming = L.tileLayer(url, TILE_OPTIONS);
  tileLayer = incoming;
  // Appended after the outgoing layer, so it paints over it while loading.
  incoming.addTo(map);

  let dropped = false;
  const dropOutgoing = () => {
    if (dropped) return;
    dropped = true;
    if (map.hasLayer(outgoing)) map.removeLayer(outgoing);
  };
  incoming.once("load", dropOutgoing);
  // A tile server that never answers must not leave both layers on the map.
  setTimeout(dropOutgoing, 2500);
}

const themeToggle = document.getElementById("themeToggle");
const themeOptions = themeToggle ? [...themeToggle.querySelectorAll(".theme-opt")] : [];

function applyTheme() {
  const resolved = resolveTheme();
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-theme-pref", themePref);

  setBasemapTheme(resolved);

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

/* ---------- V-weapon impacts, London ----------
   A second bulk layer, kept separate from the potential-sites layer on
   purpose. The Plymouth points are approximate positions digitised from
   census mapping; these are confirmed V1 and V2 impact sites transcribed
   from the LCC bomb damage maps. Same visual grammar, different meaning and
   a different licence — folding them into one toggle would quietly claim a
   confidence neither dataset has on its own.

   Attribution is required: CC-BY-4.0, Liam Shaw, DOI 10.5281/zenodo.14883986,
   after Laurence Ward's published maps. It is surfaced in the panel, not
   buried in a data file.

   Only ~120 points at present, so unlike the 3,000-point Plymouth layer this
   one needs no zoom gate — it stays legible at county zoom. */
let V_WEAPON_DATA = [];
const HAS_V_WEAPON_DATA = true;
const V_WEAPON_DATA_SRC = "data/v-weapon-impacts.js";
// Greater London and the near approaches — the extent of the impact data.
const V_WEAPON_DATA_BOX = [51.25, -0.55, 51.72, 0.35];

const vWeaponPane = L.canvas({ padding: 0.5 });
const vWeaponColors = { V1: "#ff9f43", V2: "#ff5252" };
const vWeaponLabels = { V1: "V1 flying bomb", V2: "V2 rocket" };

// London-only data, so it follows the same county scoping as everything else.
const V_WEAPON_COUNTY = "Greater London";

let vWeaponLayer = null;

function clearVWeaponLayer() {
  if (vWeaponLayer) { map.removeLayer(vWeaponLayer); vWeaponLayer = null; }
}

function renderVWeaponLayer() {
  clearVWeaponLayer();
  if (!V_WEAPON_DATA.length) return;
  // Out of scope when a county other than London is selected.
  if (isOutsideSelection(V_WEAPON_COUNTY)) return;
  if (heatmapMode) return;

  vWeaponLayer = L.layerGroup(
    V_WEAPON_DATA.map((point) => {
      const colour = vWeaponColors[point.t] || vWeaponColors.V2;
      const place = point.s || "Location not named";
      const page = point.p ? ` (Ward, p${point.p})` : "";
      return L.circleMarker([point.lat, point.lng], {
        renderer: vWeaponPane,
        radius: 3,
        weight: 0,
        fillColor: colour,
        fillOpacity: 0.75
      }).bindTooltip(`${vWeaponLabels[point.t] || point.t} — ${place}${page}`, {
        direction: "top",
        sticky: true
      });
    })
  ).addTo(map);
}

/* No toggle: these are simply drawn, like the record markers. A checkbox for
   a 118-point layer added a control to the panel without adding a decision
   worth making — the points are either relevant to what you are looking at
   (London) or already scoped out. Attribution moved to the Sources list,
   which is where it belongs anyway and where CC-BY needs it to stay. */
function initVWeaponLayer() {
  renderVWeaponLayer();
}

/* Fetched when the map first looks at London, or when London is selected —
   there is no reason for someone reading about Plymouth to carry 118 V-weapon
   impacts they will never see. */
function ensureVWeaponData() {
  if (V_WEAPON_DATA.length) return;
  loadDataScript(V_WEAPON_DATA_SRC)
    .then(() => {
      if (typeof V_WEAPON_IMPACTS === "undefined" || !V_WEAPON_IMPACTS) return;
      V_WEAPON_DATA = V_WEAPON_IMPACTS;
      renderVWeaponLayer();
    })
    .catch(() => { /* layer simply stays absent; nothing else depends on it */ });
}
let potentialLayer = null;
let potentialSitesData = [];
// Declared up here, not beside ensurePotentialData() below, because
// updatePotentialCounts() reads it and runs before that point.
let potentialDataFailed = false;
const potentialToggle = document.getElementById("potentialToggle");
const potentialCount = document.getElementById("potentialCount");
const potentialGroup = document.querySelector(".potential-group");
const potentialZoomNote = document.getElementById("potentialZoomNote");

// Declared here (rather than down with the other filter state) because
// renderPotentialLayer() below reads it and can run as early as page load —
// a `let` declared later in the file would throw a temporal-dead-zone
// ReferenceError at that point and halt the whole script.
let currentWeightBand = "all"; // "all" | "min-max" (kg)

/* ---------- Categories, and why two of them became one ----------
   The layer's own data carries four categories, but only three are worth
   showing. "undifferentiated" is the census map's dots, printed with no
   type at all (2,397 points); "unknown" is the overlay source's pins where
   a type was recorded but could not be read (32 points). That is a
   distinction about PROVENANCE, not about evidence — to anyone looking at
   the map both mean "nobody knows what this one was", and putting them in
   two different colours in the legend just invited the question of what
   the difference was. It came up repeatedly when the site was first shared.

   So they share a colour and a legend entry. The `cat` values are left
   untouched in the data, because they are still true and
   potentialMatchesWeight() reads them — only the display is merged.
------------------------------------------------------------------- */
const POTENTIAL_UNTYPED = "untyped";

function potentialDisplayCat(p) {
  const cat = (p && p.cat) || "undifferentiated";
  return cat === "HE" || cat === "incendiary" ? cat : POTENTIAL_UNTYPED;
}

const potentialColors = {
  HE: "#FF5252",
  incendiary: "#4CAF50",
  [POTENTIAL_UNTYPED]: "#9CA3AF"
};

const potentialLabels = {
  HE: "Potential site — high explosive (approximate, undigitized)",
  incendiary: "Potential site — incendiary (approximate, undigitized)",
  [POTENTIAL_UNTYPED]: "Potential site — type not recorded (approximate, undigitized)"
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
      const cat = potentialDisplayCat(p);
      return L.circleMarker([p.lat, p.lng], {
        renderer: potentialPane,
        radius: 2.5,
        weight: 0,
        fillColor: potentialColors[cat],
        fillOpacity: 0.6
      }).bindTooltip(`${potentialLabels[cat]} — est. ${p.estYear}`, { direction: "top", sticky: true });
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
    /* Three states here, and they are not the same thing:

         failed     the file could not be fetched — "unavailable" is true
         not yet    it loads when the map reaches Plymouth at zoom 11+
         empty      the dataset itself is gone

       Before progressive loading these collapsed into one, because the
       data was always present by the time anything asked. Now the normal
       state on first paint is "not fetched yet", and labelling that
       "unavailable" tells a visitor the layer is broken when it is
       simply waiting for them to zoom in. */
    potentialCount.textContent = potentialDataFailed
      ? "unavailable"
      : potentialZoomAllowed() ? "loading…" : "zoom in";
    if (potentialGroup) potentialGroup.classList.toggle("is-zoom-gated", !potentialZoomAllowed());
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

/* ---------- Potential-sites layer: fetched on demand ----------
   210 kB of digitised Plymouth points that most visitors never see: the
   layer is Plymouth-only, gated behind zoom 11, and behind a checkbox. It
   used to be downloaded and parsed by everyone before the map drew its
   first tile.

   Now it arrives when it is about to matter — the map looking at Plymouth,
   or the checkbox being ticked. Once loaded it behaves exactly as before;
   everything downstream already guarded on potentialSitesData.length, which
   is the "is it in memory yet" question rather than the "does it exist"
   one.

   The timeline's year domain includes this layer's modelled 1940–44 years,
   so it is rebuilt after the load. resetTimelineBounds() would fight a
   visitor who has already scrubbed the slider, so the domain is recomputed
   and the slider's position preserved. */
function ensurePotentialData() {
  if (potentialSitesData.length || potentialDataFailed) return;
  loadDataScript(POTENTIAL_DATA_SRC)
    .then(() => {
      if (typeof POTENTIAL_BOMB_SITES === "undefined" || !POTENTIAL_BOMB_SITES.length) {
        throw new Error("potential-bomb-sites.js loaded but defined nothing");
      }
      potentialSitesData = POTENTIAL_BOMB_SITES;
      assignEstimatedYears(potentialSitesData);

      const atEnd = yearIndex >= sortedYears.length;
      const previousYear = atEnd ? null : sortedYears[yearIndex];
      sortedYears = computeSortedYears();
      const restored = previousYear === null ? sortedYears.length : sortedYears.indexOf(previousYear);
      yearIndex = restored === -1 ? sortedYears.length : restored;
      if (timelineSlider) {
        timelineSlider.max = String(sortedYears.length);
        timelineSlider.value = String(yearIndex);
        updateTimelineLabel();
      }

      updatePotentialCounts();
      renderPotentialLayer();
      renderYearBreakdown();
      refreshHeatLayer();
    })
    .catch(() => {
      potentialDataFailed = true;
      if (potentialCount) potentialCount.textContent = "unavailable";
      if (potentialToggle) potentialToggle.disabled = true;
    });
}

if (potentialToggle) {
  potentialToggle.addEventListener("change", () => {
    if (potentialToggle.checked) ensurePotentialData();
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

/* Names the circles drawn around the selected record, in the same colours
   they appear in. The on-map labels say what each ring is; this says what
   each one means, which is the part a reader actually needs — a cordon is a
   fact about what happened, an accuracy ring is a caveat about the data. */
function detailKeyHtml(record) {
  const rows = [];

  if (record.cordonRadiusM) {
    rows.push({
      variant: "cordon",
      title: `Evacuation cordon · ${record.cordonRadiusM}m`,
      note: "The area actually cleared while the device was dealt with."
    });
  }

  rows.push({
    variant: "accuracy",
    title: `Position accuracy · ±${accuracyRadiusM(record)}m`,
    note: "How closely the source pins the location — the bomb fell somewhere in here, not necessarily at the marker."
  });

  return `
    <div class="detail-section">
      <span class="detail-section-label">On the map</span>
      <ul class="detail-key">
        ${rows
          .map(
            (r) => `
          <li class="detail-key-row">
            <span class="detail-key-swatch detail-key-swatch--${r.variant}" aria-hidden="true"></span>
            <span class="detail-key-text">
              <strong>${r.title}</strong>
              <span>${r.note}</span>
            </span>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  `;
}

/* ============================================================
   PHOTOGRAPHS
   ------------------------------------------------------------
   A record may carry a `photos` array. Every entry MUST have both
   a `credit` and a `licence`; one without either is dropped and
   logged rather than shown. That rule is enforced here, in code,
   on purpose: an uncredited archive photograph on a public site
   is somebody's copyright, and "we'll add the credit later" is
   exactly the promise that never gets kept.

     photos: [{
       src:        "images/york/bar-convent-1942.jpg",
       alt:        "Rubble being cleared from the corner of a stone building",
       caption:    "The clean-up at the Bar Convent, 5 May 1942.",
       credit:     "© IWM (CM 5105)",            // REQUIRED
       licence:    "IWM Non-Commercial Licence", // REQUIRED
       licenceUrl: "https://www.iwm.org.uk/corporate/policies/non-commercial-licence",
       sourceUrl:  "https://www.iwm.org.uk/collections/item/object/205202546"
     }]

   WHERE PHOTOGRAPHS CAN COME FROM
   - IWM, under the IWM Non-Commercial Licence. Note its terms: no
     cropping or alteration, no watermark removal, and NOT for a
     site carrying advertising or running a fundraising appeal.
     The "Buy me a coffee" button in the footer is arguably the
     latter — settle that before relying on this licence.
   - Wikimedia Commons, where the file's own licence template says
     PD-UKGov, PD-old or a CC licence. Check each file; Commons
     hosting is not itself a guarantee.
   - Crown copyright photographs taken before 1 June 1957 — the
     1956 Act's 50-year term was preserved, so a 1942 official
     photograph passed into the public domain at the end of 1992.
     Ministry of Home Security bomb-census extracts and Air
     Ministry reconnaissance are the useful cases.
   - Anything else, only with written permission from the holder.

   WHERE THEY CANNOT
   Not from raidsoveryork.co.uk or its ArcGIS story. That project
   publishes no licence at all, and most of the photographs in it
   are marked "Copyright @YorkCityPress" — the York Press, which
   is Newsquest, which is a commercial picture archive. Others
   belong to Explore York, the National Railway Museum / SSPL, and
   private collectors. None of it was the project's to pass on.
   Linking to their page is not reproduction; copying the image is.
   That is what `photoLink` below is for.
   ============================================================ */
function usablePhotos(record) {
  return (record.photos || []).filter((photo) => {
    if (photo && photo.src && photo.credit && photo.licence) return true;
    console.warn(
      `[photos] "${record.id}" has a photo without a credit or licence — not shown. ` +
        "Both are required; see the PHOTOGRAPHS block in js/app.js."
    );
    return false;
  });
}

function detailPhotosHtml(record) {
  const photos = usablePhotos(record);

  if (photos.length) {
    const figures = photos
      .map((photo) => {
        const rights = photo.licenceUrl
          ? `<a href="${photo.licenceUrl}" target="_blank" rel="noopener">${photo.licence}</a>`
          : photo.licence;
        const img = `<img src="${photo.src}" alt="${photo.alt || photo.caption || record.title}" loading="lazy" decoding="async">`;
        return `
          <figure class="detail-photo">
            ${photo.sourceUrl ? `<a href="${photo.sourceUrl}" target="_blank" rel="noopener">${img}</a>` : img}
            <figcaption>
              ${photo.caption ? `<span class="detail-photo-caption">${photo.caption}</span>` : ""}
              <span class="detail-photo-credit">${photo.credit} · ${rights}</span>
            </figcaption>
          </figure>`;
      })
      .join("");
    return `<div class="detail-section"><span class="detail-section-label">Photographs</span>${figures}</div>`;
  }

  // No image we are entitled to publish — but often there IS one, somewhere
  // we are entitled to point at. Sending someone to the archive that holds it
  // is more use than a greyed-out box saying "coming soon".
  if (record.photoLink && record.photoLink.url) {
    return `
      <div class="detail-section">
        <span class="detail-section-label">Photographs</span>
        <a class="detail-photo-link" href="${record.photoLink.url}" target="_blank" rel="noopener">
          ${record.photoLink.label || "Photographs of this incident"} ↗
        </a>
        <p class="detail-photo-note">${
          record.photoLink.note ||
          "Held by the archive that took or collected them, and not ours to republish — the link goes to where they are."
        }</p>
      </div>`;
  }

  return "";
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
    ${detailKeyHtml(record)}
    ${detailSectionHtml("What happened", record.summary)}
    ${detailSectionHtml("How it was made safe", record.disposal)}
    ${detailSectionHtml("Evacuation", evacuationText)}
    ${detailSectionHtml("Also worth knowing", record.note)}
    ${detailSectionHtml("Casualty note", record.casualtiesNote)}
    ${sourceLinks ? `<div class="detail-section"><span class="detail-section-label">Sources</span><div class="detail-sources">${sourceLinks}</div></div>` : ""}
    ${detailPhotosHtml(record)}
    <div class="detail-section detail-correct">
      <button type="button" class="detail-correct-btn" data-correct-record="${record.id}">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
        Report a correction
      </button>
      <p class="detail-correct-note">Know this street, this night, or this family? Local knowledge is how these records get better.</p>
    </div>
  `;
}

function clearDetailCordon() {
  if (detailCordonCircle) { map.removeLayer(detailCordonCircle); detailCordonCircle = null; }
  if (detailCordonCenter) { map.removeLayer(detailCordonCenter); detailCordonCenter = null; }
  clearMapLabels();
}

/* ---------- Telling the two circles apart ----------
   A selected record can draw two concentric circles, and they mean opposite
   things: the big one is how far people were moved, the small one is how
   unsure we are about where the bomb actually was. Both used to be blue,
   with nothing on the map naming either, so the honest answer to "what am I
   looking at" was "you can't tell".

   Three things separate them now:
     - Colour. The cordon is amber, which is what the rest of the site
       already uses for cordons and UXO warnings; it was previously a blue
       that matched nothing else. Accuracy stays cyan, the site's neutral
       informational accent.
     - Line style. The accuracy ring is dashed, because a dashed edge reads
       as approximate — which is exactly what it is. A cordon was a real
       line on a real street, so it stays solid.
     - A label on each ring, so neither depends on the reader knowing a
       colour convention. */
const CORDON_COLOR = "#ff9f43";
const ACCURACY_COLOR = "#00f2fe";

// Good enough for placing a label on a ring's edge; no projection subtlety
// is warranted for a few hundred metres of label offset.
const METRES_PER_DEG_LAT = 111320;

let detailLabels = [];

function addMapLabel(lat, lng, text, variant, direction, ringCentre, ringRadiusM) {
  const label = L.tooltip({
    permanent: true,
    direction,
    interactive: false,
    className: `map-ring-label map-ring-label--${variant}`
  })
    .setLatLng([lat, lng])
    .setContent(text)
    .addTo(map);
  // Remembered so the label can hide itself when its ring is too small on
  // screen to be worth naming (see updateRingLabelVisibility).
  label._ringCentre = ringCentre;
  label._ringRadiusM = ringRadiusM;
  detailLabels.push(label);
  return label;
}

function clearMapLabels() {
  detailLabels.forEach((label) => map.removeLayer(label));
  detailLabels = [];
}

/* Zoomed far enough out, both rings shrink to a few pixels and their labels
   land on top of each other — which recreates the confusion they exist to
   solve. Below a ring size worth naming, the label steps aside; the panel
   key still explains both. */
const MIN_LABELLED_RING_PX = 34;

function ringRadiusPx(centre, radiusM) {
  const a = map.latLngToLayerPoint(centre);
  const b = map.latLngToLayerPoint([centre[0] + radiusM / METRES_PER_DEG_LAT, centre[1]]);
  return Math.abs(a.y - b.y);
}

function updateRingLabelVisibility() {
  detailLabels.forEach((label) => {
    const el = label.getElement();
    if (!el || !label._ringCentre) return;
    const big = ringRadiusPx(label._ringCentre, label._ringRadiusM) >= MIN_LABELLED_RING_PX;
    el.classList.toggle("is-too-small", !big);
  });
}

map.on("zoomend", updateRingLabelVisibility);

function drawDetailCordon(record) {
  clearDetailCordon();

  const accuracyM = accuracyRadiusM(record);

  // Labels sit on the top edge of the cordon and the bottom edge of the
  // accuracy ring, so the two never stack on top of each other.
  if (record.cordonRadiusM) {
    detailCordonCenter = L.circleMarker([record.lat, record.lng], {
      radius: 5,
      color: CORDON_COLOR,
      fillColor: CORDON_COLOR,
      fillOpacity: 1,
      weight: 2
    }).addTo(map);

    detailCordonCircle = L.circle([record.lat, record.lng], {
      radius: record.cordonRadiusM,
      color: CORDON_COLOR,
      weight: 1.5,
      fillColor: CORDON_COLOR,
      fillOpacity: 0.1,
      className: "detail-cordon-pulse"
    }).addTo(map);

    addMapLabel(
      record.lat + record.cordonRadiusM / METRES_PER_DEG_LAT,
      record.lng,
      `Evacuation cordon · ${record.cordonRadiusM}m`,
      "cordon",
      "top",
      [record.lat, record.lng],
      record.cordonRadiusM
    );
  }

  addMapLabel(
    record.lat - accuracyM / METRES_PER_DEG_LAT,
    record.lng,
    `Position accurate to ±${accuracyM}m`,
    "accuracy",
    "bottom",
    [record.lat, record.lng],
    accuracyM
  );

  updateRingLabelVisibility();
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

  // Put the map back where it was before the record was opened.
  if (viewBeforeDetail) {
    map.flyTo(viewBeforeDetail.center, viewBeforeDetail.zoom, { duration: 0.7 });
    viewBeforeDetail = null;
  }
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

/* Where the map was before a record was opened, so closing the panel can
   put it back. Opening a record flies the map right in; without this, the
   reader has to zoom and pan their way out again to carry on browsing —
   and after a few records they have lost their place entirely.

   Captured only on the FIRST selection: clicking from one record straight
   to another keeps the original view, so "close" always means "back to
   where I was reading", not "back to the last pin I looked at". */
let viewBeforeDetail = null;

function selectRecord(id, pan = true) {
  const active = getActiveRecords();
  const record = active.find((item) => item.id === id) || visibleRecords()[0] || active[0];
  activeId = record.id;

  // Deliberately not gated on markers.get(id): with viewport culling a record
  // that is off-screen has no marker instance yet, and "fly to it" is exactly
  // what a deep link or a search result needs to do in that case.
  if (pan) {
    if (!viewBeforeDetail) {
      viewBeforeDetail = { center: map.getCenter(), zoom: map.getZoom() };
    }
    const recordZoom = Math.max(map.getZoom(), 15);
    map.flyTo(centreForChrome([record.lat, record.lng], recordZoom), recordZoom, { duration: 0.9 });
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
  // The scope set, not the rendered set: this pill answers "how many records
  // are there in what I have selected", which must not change as you pan.
  if (statTotalBombs) statTotalBombs.textContent = String(inScopeIds.size);
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

/* ---------- Marker rendering, culled to the viewport ----------
   This used to tear down every marker and rebuild the whole set on every
   filter, timeline or county change. At a couple of hundred records that is
   free. It is quadratic-feeling misery at national scale, and it is the
   half of "the current loading strategy will fail" that has nothing to do
   with bytes on the wire — a browser asked to hold twenty thousand DOM
   markers will stutter however small the download was.

   So two sets are tracked separately, and the distinction matters:

     inScopeIds    every record passing the county, status, weight and
                   timeline filters. This is the honest answer to "how many
                   bombs are plotted here", so it is what the stats pill
                   counts, and it does not change when you pan.

     renderedIds   the subset actually instantiated on the map: those
                   inside the viewport plus a screen's worth of padding, so
                   a drag reveals markers that are already there rather than
                   markers appearing after it stops.

   Markers are created once and reused. Panning back to somewhere you have
   already been costs nothing.
------------------------------------------------------------------- */
// Padding, as a fraction of the viewport, kept live around the edges.
const MARKER_CULL_PAD = 0.6;

let inScopeIds = new Set();
const renderedIds = new Set();

function markerCullBounds() {
  return map.getBounds().pad(MARKER_CULL_PAD);
}

function addRecordToMap(record) {
  let marker = markers.get(record.id);
  if (!marker) {
    marker = L.marker([record.lat, record.lng], { icon: markerIcon(record) });
    marker.on("click", () => selectRecord(record.id, true));
    markers.set(record.id, marker);
  }
  if (!map.hasLayer(marker)) marker.addTo(map);

  let circle = accuracyCircles.get(record.id);
  if (!circle) {
    circle = L.circle([record.lat, record.lng], {
      radius: accuracyRadiusM(record),
      interactive: false,
      color: ACCURACY_COLOR,
      weight: 1,
      opacity: 0.28,
      // Dashed, so the ring reads as "roughly here" at a glance and can't
      // be mistaken for the solid cordon circle drawn around a selection.
      dashArray: "3 4",
      fillColor: ACCURACY_COLOR,
      fillOpacity: 0.07
    });
    accuracyCircles.set(record.id, circle);
  }
  if (!map.hasLayer(circle)) circle.addTo(map);
}

function removeRecordFromMap(id) {
  const marker = markers.get(id);
  if (marker && map.hasLayer(marker)) marker.remove();
  const circle = accuracyCircles.get(id);
  if (circle && map.hasLayer(circle)) circle.remove();
}

/* Adds and removes only what crossed the edge of the padded viewport since
   last time. Called on every pan and zoom, so it must not do work
   proportional to anything but the difference. */
function syncRenderedMarkers() {
  // In heatmap mode the density surface replaces individual markers, so
  // nothing is instantiated at all — the scope set still drives the stats.
  const wanted = new Set();
  if (!heatmapMode) {
    const box = markerCullBounds();
    ALL_RECORDS.forEach((record) => {
      if (!inScopeIds.has(record.id)) return;
      if (!box.contains([record.lat, record.lng])) return;
      wanted.add(record.id);
      if (!renderedIds.has(record.id)) addRecordToMap(record);
    });
  }

  renderedIds.forEach((id) => {
    if (!wanted.has(id)) removeRecordFromMap(id);
  });
  renderedIds.clear();
  wanted.forEach((id) => renderedIds.add(id));
}

function renderMarkers() {
  const wasOpen = !detailPanel.hidden;
  const previousActiveId = activeId;

  inScopeIds = new Set(visibleRecords().map((r) => r.id));
  syncRenderedMarkers();

  // If a filter/timeline change removes the record currently shown in the
  // detail panel, close the panel rather than leaving stale info on screen.
  // Tested against the scope set, NOT what is currently rendered — panning
  // a selected pin off the edge of the screen must not close its panel.
  if (wasOpen && !inScopeIds.has(previousActiveId)) closeDetailPanel();

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

/* ---------- Fitting around the map's own furniture ----------
   The map is full-bleed, and everything else floats on top of it: the hero
   copy, the control panel, the county selector, the stats pills, the record
   detail panel, the disclaimer. Leaflet knows nothing about any of it, so
   flyToBounds centres a county in the whole container — and a good third of
   that container is behind the sidebar. Somerset ended up shoved right and
   tucked under the stats pills, with dead space where the panel sits.

   These helpers measure whatever chrome is actually on screen at the moment
   of the move and convert it into Leaflet padding. Measuring rather than
   hard-coding matters: the control panel is a left sidebar on desktop and a
   bottom sheet on a phone, and the detail panel is only sometimes open. */
const MAP_CHROME_SELECTORS = [
  ".hero-intro",
  ".control-panel",
  ".location-select",
  ".map-stats",
  ".detail-panel",
  ".map-disclaimer",
  ".cordon-card"
];

const MAP_FIT_GAP = 18;        // breathing room between the county and the chrome
const MAX_INSET_RATIO = 0.42;  // never surrender more than this share of an axis

function isElementShowing(el) {
  if (!el || el.hidden || !el.offsetParent) return false;
  const cs = getComputedStyle(el);
  return cs.display !== "none" && cs.visibility !== "hidden" && Number(cs.opacity) !== 0;
}

function mapViewInsets() {
  const insets = { top: 0, right: 0, bottom: 0, left: 0 };
  const mapRect = map.getContainer().getBoundingClientRect();
  if (!mapRect.width || !mapRect.height) return insets;

  MAP_CHROME_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!isElementShowing(el)) return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;

      /* Only panels that actually sit ON the map can hide any of it. On a
         phone the layout changes shape: the control panel and hero copy stop
         floating over the map and flow underneath it instead. They obscure
         nothing there, but their rectangles are still measurable, and
         counting them was reserving a slab of the map for furniture that had
         already moved out of the way. */
      const overlapsMap =
        r.right > mapRect.left &&
        r.left < mapRect.right &&
        r.bottom > mapRect.top &&
        r.top < mapRect.bottom;
      if (!overlapsMap) return;

      // Clamped to the map, so a panel hanging off an edge claims only the
      // part of the map it actually covers.
      const left = Math.max(0, r.left - mapRect.left);
      const top = Math.max(0, r.top - mapRect.top);
      const right = Math.max(0, mapRect.right - r.right);
      const bottom = Math.max(0, mapRect.bottom - r.bottom);

      // Each panel could be treated as claiming space from any of the four
      // edges. Pick whichever costs the least, measured as a fraction of that
      // axis — that keeps the largest usable area free.
      //
      // Nearest-edge is the obvious rule and it is wrong: the control panel
      // is tall enough to sit closer to the bottom of the map than to the
      // left, so it got treated as a bottom sheet and swallowed 40% of the
      // height instead of 33% of the width. Costing the options fixes that,
      // and still does the right thing on a phone, where the panel really is
      // a bottom sheet — wide and short, so the vertical claim is cheapest.
      const w = Math.min(r.width, mapRect.width);
      const h = Math.min(r.height, mapRect.height);
      const options = [
        { side: "left", size: left + w, frac: (left + w) / mapRect.width },
        { side: "right", size: right + w, frac: (right + w) / mapRect.width },
        { side: "top", size: top + h, frac: (top + h) / mapRect.height },
        { side: "bottom", size: bottom + h, frac: (bottom + h) / mapRect.height }
      ];
      const cheapest = options.reduce((a, b) => (b.frac < a.frac ? b : a));
      insets[cheapest.side] = Math.max(insets[cheapest.side], cheapest.size);
    });
  });

  // Padding that eats the viewport would defeat the point of the fit.
  const maxX = mapRect.width * MAX_INSET_RATIO;
  const maxY = mapRect.height * MAX_INSET_RATIO;
  insets.left = Math.min(insets.left, maxX);
  insets.right = Math.min(insets.right, maxX);
  insets.top = Math.min(insets.top, maxY);
  insets.bottom = Math.min(insets.bottom, maxY);
  return insets;
}

/* ---------- Composing the fit ----------
   mapViewInsets() answers "how much of the map is covered by furniture".
   Feeding that straight to fitBounds answers a subtly different question —
   "centre the target in whatever is left over" — and those are not the
   same picture.

   Measured at 1400x900: the control panel claims 336px on the left and
   nothing balances it on the right, so the free area's centre sat 168px
   right of the map's own centre. The fit was working exactly as written
   and the result still read as "the map isn't centred", because a viewer
   judges centring against the window, not against the leftovers.

   But simply ignoring the chrome is wrong too — a small county fitted
   dead-centre can end up half behind the panel.

   So: aim for the WINDOW centre, then shift only as far as is actually
   needed to keep the fitted box clear of the furniture. On the national
   view Britain is nowhere near the panel once fitted, so it stays centred;
   on a small south-western county the shift kicks in and does the job the
   insets were always meant to do. Nothing is reserved speculatively.

   The small upward rise is taste: a landmass centred exactly sits a little
   low under the title block above it.
------------------------------------------------------------------- */
const MAP_FIT_RISE = 0.05; // share of map height to lift the fit by

function fitOptionsForChrome(extra) {
  // Kept for callers that still want plain Leaflet padding (and as the
  // fallback below). Uses the full insets, deliberately: as a guarantee it
  // is correct, it is only the composition that needed loosening.
  const i = mapViewInsets();
  return Object.assign(
    {
      paddingTopLeft: L.point(i.left + MAP_FIT_GAP, i.top + MAP_FIT_GAP),
      paddingBottomRight: L.point(i.right + MAP_FIT_GAP, i.bottom + MAP_FIT_GAP)
    },
    extra || {}
  );
}

/* Works out the centre and zoom for a bounds fit, rather than handing
   Leaflet a padding and accepting wherever that lands. Returns null if the
   map has no size yet, so callers can fall back. */
function viewForBounds(bounds) {
  const rect = map.getContainer().getBoundingClientRect();
  if (!rect.width || !rect.height) return null;

  const i = mapViewInsets();
  const gap = MAP_FIT_GAP;
  const rise = Math.round(rect.height * MAP_FIT_RISE);

  /* Zoom is chosen against the free area: the target has to FIT beside the
     furniture even if it then gets recentred over it.

     The rise is reserved HERE as well as applied below. Fit the box to
     exactly the free height and it fills it, so the lift has nowhere to go
     and every county comes out pinned at the free-area centre — which is
     what the first attempt did. Costing the rise into the zoom leaves the
     slack the lift then uses. */
  const padTL = L.point(i.left + gap, i.top + gap);
  const padBR = L.point(i.right + gap, i.bottom + gap + rise);
  const zoom = map.getBoundsZoom(bounds, false, padTL.add(padBR));

  const nw = map.project(bounds.getNorthWest(), zoom);
  const se = map.project(bounds.getSouthEast(), zoom);
  const boxW = Math.abs(se.x - nw.x);
  const boxH = Math.abs(se.y - nw.y);
  const boxCentre = L.point((nw.x + se.x) / 2, (nw.y + se.y) / 2);

  // Where we would LIKE the box's centre to sit on screen.
  let px = rect.width / 2;
  let py = rect.height / 2 - rise;

  /* Then push it only as far as it must go to clear the chrome.

     When the box is simply too big to clear the furniture on both sides —
     which is the normal case for the national view, since Britain fills
     the height — the ideal is kept rather than compromised. The panels are
     translucent glass and the map stays readable under them, so a
     centred-and-slightly-high country beats one shunted down to dodge a
     notice it is showing through anyway. */
  const clamp = (value, lo, hi) => (lo > hi ? value : Math.min(Math.max(value, lo), hi));
  px = clamp(px, i.left + gap + boxW / 2, rect.width - i.right - gap - boxW / 2);

  /* Vertically, only the TOP limit is enforced. The chrome below the map is
     the dismissible accuracy notice — a short translucent strip that the
     map is meant to show through, and clamping to clear it drags every fit
     back down to the free-area centre, undoing the lift. The county
     selector across the top is the one thing genuinely worth staying under. */
  py = Math.max(py, i.top + gap + boxH / 2);

  // Screen point P shows the projected point p when the map centre C
  // satisfies P = p - C + size/2, so C = p + size/2 - P.
  const centre = L.point(
    boxCentre.x + rect.width / 2 - px,
    boxCentre.y + rect.height / 2 - py
  );
  return { center: map.unproject(centre, zoom), zoom };
}

function fitBoundsInView(bounds, opts) {
  const view = viewForBounds(bounds);
  if (!view) { map.flyToBounds(bounds, fitOptionsForChrome(opts)); return; }
  map.flyTo(view.center, view.zoom, opts || {});
}

// Same framing, no animation — for the opening view and for restoring a
// saved county, where an animated pan on first paint reads as a glitch.
function setBoundsInView(bounds) {
  const view = viewForBounds(bounds);
  if (!view) { map.fitBounds(bounds, fitOptionsForChrome({ animate: false })); return; }
  map.setView(view.center, view.zoom, { animate: false });
}

/* A town, or a single record, has a centre and a zoom rather than bounds, so
   padding does not apply. The equivalent fix is to shift the centre by half
   the imbalance in the chrome: the target then lands in the middle of the
   visible strip instead of behind the sidebar. */
function centreForChrome(latlng, zoom) {
  const i = mapViewInsets();
  const dx = (i.left - i.right) / 2;
  const dy = (i.top - i.bottom) / 2;
  if (!dx && !dy) return L.latLng(latlng);
  const point = map.project(latlng, zoom).subtract([dx, dy]);
  return map.unproject(point, zoom);
}

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
  const cordonZoom = Math.max(map.getZoom(), 14);
  map.flyTo(centreForChrome([lat, lng], cordonZoom), cordonZoom, { duration: 0.7 });
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

  map.flyTo(centreForChrome([place.lat, place.lng], 15), 15, { duration: 1 });

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

/* ---------- Per-county outline loading ----------
   One file per county under data/counties/, generated by
   tools/build-county-slices.js, fetched the first time that county is
   selected and cached for the session. Only ever one county is drawn, so
   only ever one needs to be in memory.

   <script> injection rather than fetch() so the site still works opened
   straight off disk as file:// — fetch would fail the CORS check there,
   and a local preview that silently loses its boundaries is a bad way to
   find out. Each slice calls registerCountyBoundary() itself, so the
   loader never has to guess a global variable name.

   A failed load is not fatal: drawCountyOutline falls back to the live
   Nominatim lookup below, and failing that simply draws no outline. The
   selection, the marker scope and the stats all still work. */
const countyBoundaryPending = new Map();

window.registerCountyBoundary = function (name, geometry) {
  countyBoundaryCache.set(name, geometry);
};

const countySlug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function loadCountyBoundary(name) {
  if (countyBoundaryCache.has(name)) return Promise.resolve(countyBoundaryCache.get(name));
  if (countyBoundaryPending.has(name)) return countyBoundaryPending.get(name);

  const promise = new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = `data/counties/${countySlug(name)}.js?v=${DATA_VERSION}`;
    el.async = true;
    el.onload = () => {
      const geometry = countyBoundaryCache.get(name);
      geometry ? resolve(geometry) : reject(new Error(`${name} slice loaded but registered nothing`));
    };
    el.onerror = () => reject(new Error(`could not load boundary slice for ${name}`));
    document.head.appendChild(el);
  });

  countyBoundaryPending.set(name, promise);
  // Let a failure be retried on a later selection rather than cached forever.
  promise.catch(() => countyBoundaryPending.delete(name));
  return promise;
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
      geometry = await loadCountyBoundary(name);
    } catch (e) {
      // No generated slice for this county — fall back to asking Nominatim
      // live, which is how counties were outlined before the slices existed.
      try {
        geometry = await fetchCountyBoundary(name);
        countyBoundaryCache.set(name, geometry);
      } catch (e2) {
        return; // no outline available; the rest of the selection still works
      }
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

/* What a county selection should frame is the COUNTY, not the records in
   it. buildCounties() derives its bounds from record positions, which is
   fine for a county whose records are spread through it and wrong for one
   where they are not: every Devon record sits in the south, so fitting them
   pushed the whole northern half of the county off the top of the screen
   while the outline carried on past the edge.

   Fitting the boundary geometry instead guarantees the shape you just
   selected is the shape you can see. Records-derived bounds remain the
   fallback for a county with no boundary in the generated file. */
const countyBoundsCache = new Map();

function countyViewBounds(name) {
  if (name === COUNTY_ALL) return UK_BOUNDS;
  if (countyBoundsCache.has(name)) return countyBoundsCache.get(name);

  /* Read from the prebuilt bounding boxes in data/county-index.js rather
     than measured off the geometry, which may not have arrived yet — the
     county has to be framed the moment it is picked, not once a 60 kB
     outline has come down the wire. The boxes are computed from exactly
     the same polygons, so the framing is identical either way. */
  const box = COUNTY_BOX && COUNTY_BOX[name];
  let bounds = box ? L.latLngBounds([box[0], box[1]], [box[2], box[3]]) : null;

  if (!bounds || !bounds.isValid()) {
    const entry = COUNTIES.get(name);
    bounds = entry ? entry.bounds : UK_BOUNDS;
  } else {
    bounds = bounds.pad(0.02);
  }

  countyBoundsCache.set(name, bounds);
  return bounds;
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
  if (typeof prefetchForCounty === "function") prefetchForCounty(target);
  // Records are not swapped out, but which of them are in scope has changed,
  // so both layers are redrawn to pick up the out-of-county dimming. Cheap:
  // a few dozen markers, and the potential layer is rebuilt on every filter
  // change already.
  renderMarkers();
  renderPotentialLayer();
  renderVWeaponLayer();

  if (!fly) return;
  fitBoundsInView(countyViewBounds(target), { duration: 1 });
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
  if (fly) map.flyTo(centreForChrome(cfg.center, cfg.zoom), cfg.zoom, { duration: 1 });
}

initLocationMenu();
initMapSearch();
switchCounty(COUNTY_ALL, { fly: false }); // paint the trigger, hero and pills

map.on("zoomend", handlePotentialZoomChange);
handlePotentialZoomChange(); // set the initial state to match the opening zoom

/* ---------- Viewport-driven loading ----------
   One handler for both halves of the progressive strategy: pull down a
   dataset when the map first looks at ground it covers, and instantiate
   markers only for the padded viewport. Bound to moveend/zoomend rather
   than move/zoom, so nothing runs mid-drag.
------------------------------------------------------------------- */
function updateViewportData() {
  syncRenderedMarkers();

  if (potentialToggle && potentialToggle.checked && potentialZoomAllowed() && viewNear(POTENTIAL_DATA_BOX)) {
    ensurePotentialData();
  }
  if (viewNear(V_WEAPON_DATA_BOX)) ensureVWeaponData();
}

map.on("moveend zoomend", updateViewportData);

/* Selecting a county flies somewhere new; fetch what that county needs
   without waiting for the flight to land, so the layers are ready when it
   does rather than fading in a second late. */
function prefetchForCounty(county) {
  if (county === V_WEAPON_COUNTY) ensureVWeaponData();
  if (county === POTENTIAL_SITES_COUNTY && potentialToggle && potentialToggle.checked) {
    ensurePotentialData();
  }
}

/* ---------- Header height ----------
   Several sticky offsets keyed off a hard-coded 66px header, which is only
   true on desktop: the nav wraps to two or three rows on a phone, so the
   incident banner used to tuck underneath it and the hero came up short.
   Measuring it once and publishing it as --header-h keeps CSS honest at any
   width, including after an orientation change.
------------------------------------------------------------------- */
(function syncTopStackHeights() {
  const header = document.querySelector(".site-header");
  const warning = document.querySelector(".use-warning");
  if (!header) return;

  function apply() {
    const warningH = warning ? Math.round(warning.getBoundingClientRect().height) : 0;
    const headerH = Math.round(header.getBoundingClientRect().height);
    const root = document.documentElement.style;
    // The header is sticky at top: var(--use-warning-h), so this is what
    // stops it sliding underneath the strip when the strip wraps to two
    // lines on a narrow screen.
    root.setProperty("--use-warning-h", `${warningH}px`);
    // --header-h means "everything sticky above the map", which is what its
    // consumers actually want: the hero's 100svh minus this, and the live
    // incident banner's own sticky offset.
    if (headerH > 0) root.setProperty("--header-h", `${warningH + headerH}px`);
  }

  apply();
  window.addEventListener("resize", apply);
  window.addEventListener("orientationchange", apply);
  // Web fonts land after first paint and can change the nav's height.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(apply);
  if (typeof ResizeObserver === "function") {
    const ro = new ResizeObserver(apply);
    ro.observe(header);
    if (warning) ro.observe(warning);
  }
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
initVWeaponLayer();
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

// Set when saved state has already framed the map, so the national opening
// fit doesn't then yank the view back out to the whole UK.
let restoredView = false;

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
    setBoundsInView(countyViewBounds(savedCounty));
    restoredView = true;
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

/* ---------- Deep links from the static record pages ----------
   Every record now also exists as its own crawlable page under /records/,
   and those pages link back here with ?record=<id>. Honouring that param is
   what makes the link a real one: someone arriving from a search result
   lands on the map with that incident already open, rather than on the
   national view with no idea where to look.

   Read after restoreUiState so an explicit link always beats whatever the
   visitor was last looking at — the URL is the more recent intent. */
(function applyDeepLink() {
  let params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch (e) {
    return;
  }

  const county = params.get("county");
  if (county && COUNTIES.has(county)) switchCounty(county, { fly: false });

  const recordId = params.get("record");
  if (!recordId) return;

  const record = ALL_RECORDS.find((r) => r.id === recordId);
  if (!record) return;

  // Put the map in the right county first, so the record isn't filtered out
  // of scope by a county selection carried over from a previous visit.
  const recordsCounty = recordCounty(record);
  if (recordsCounty && recordsCounty !== activeCounty) {
    switchCounty(recordsCounty, { fly: false });
  }
  selectRecord(record.id, true);
})();

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

/* ============================================================
   GUIDED TOURS
   ------------------------------------------------------------
   A map of two hundred pins is a reference work. It answers a
   question you already had, and it does nothing at all for someone
   who arrives without one — which is most people. A tour turns the
   same data into a route: press play, and the map takes you through
   one night, or one campaign, in the order it happened.

   Every stop is an existing record, referenced by id. Nothing here
   restates a fact that lives on a record — if a caption and a record
   ever disagree, the record is right and the caption is the bug. The
   captions are connective tissue: why this place, next.

   Deliberately NOT opening the detail panel at each stop. The panel
   is a right-hand column on desktop and a bottom sheet on a phone,
   and the tour card is already a bottom sheet; stacking them leaves
   a visitor on a phone with two overlapping panels and no obvious
   way back. Each stop instead offers one link into the full record,
   which ends the tour cleanly.

   County scope is set to "all" for the duration, or a tour crossing
   county lines would mask out half its own stops. Whatever was
   selected before is restored on exit.
   ============================================================ */
const GUIDED_TOURS = [
  {
    id: "plymouth-1941",
    title: "The seven nights",
    subtitle: "Plymouth, March–April 1941",
    blurb:
      "Two pairs of nights in March and April 1941 destroyed most of central Plymouth. The city centre was not rebuilt so much as replaced.",
    stops: [
      { record: "swilly-road-1940", caption: "Plymouth's first bomb, 6 July 1940 — eight months before the raids the city is remembered for." },
      { record: "turnchapel-oil-depot-1940", caption: "November 1940: the oil depot across the Cattewater burns. The dockyard, not the city centre, is what the Luftwaffe is aiming at." },
      { record: "charles-church-1941", caption: "20–21 March 1941. Charles Church burns out and is never rebuilt — it stands today as the city's memorial to its civilian dead." },
      { record: "st-andrews-church-1941", caption: "The same nights. St Andrew's is gutted; someone nails a board reading 'Resurgam' over the door." },
      { record: "city-centre-1941", caption: "Between them, March and April 1941 flattened the shopping centre — Bedford Street, George Street, Old Town Street." },
      { record: "portland-square-1941", caption: "22 April 1941: a public shelter takes a direct hit at Portland Square. The site is now part of the university." },
      { record: "kingstreet-devonport-1941", caption: "The same night in Devonport, where the raids fell heaviest and longest." },
      { record: "saltash-fore-street-1941", caption: "28 April: the bombing crosses the Tamar into Cornwall, at Saltash." },
      { record: "hms-raleigh-1941", caption: "And to Torpoint, where a shelter at HMS Raleigh is hit." },
      { record: "keyham-2024", caption: "February 2024, Keyham: a 500kg bomb comes out of a back garden and 3,250 people leave their homes. The raids are not finished with the city yet." }
    ]
  },
  {
    id: "baedeker-1942",
    title: "The cities in the guidebook",
    subtitle: "The Baedeker raids, April–June 1942",
    blurb:
      "Reprisal raids on historic cities picked, it was said, out of a Baedeker tourist guide — for their cultural value rather than any military one.",
    stops: [
      { record: "exeter-pennsylvania-1942", caption: "Exeter, 25 April 1942. The first of the Baedeker cities to be hit hard." },
      { record: "bath-royal-crescent-1942", caption: "Bath, 25–27 April. The Royal Crescent is hit; the damaged houses are later rebuilt behind the surviving Georgian front." },
      { record: "bath-roseberry-road-shelter-1942", caption: "The same weekend, in the terraced streets rather than the crescents — where the casualties actually were." },
      { record: "york-bar-convent-1942", caption: "York, 29 April, about half past two in the morning. Five women die at the Bar Convent." },
      { record: "york-railway-station-1942", caption: "The station burns. Foreman William Milner goes back inside for medical supplies and does not come out." },
      { record: "york-amberley-street-1942", caption: "And in Holgate, on a street almost nobody writes about, fourteen people die at three addresses. This is the raid's true shape." },
      { record: "york-baedeker-raid-1942", caption: "Ninety-odd dead across the city in a couple of hours. The Minster was never touched." },
      { record: "exeter-bedford-circus-1942", caption: "Exeter again, 3–4 May, and this time the centre goes: Bedford Circus is lost outright." },
      { record: "exeter-cathedral-1942", caption: "The cathedral loses St James' Chapel to a direct hit." },
      { record: "canterbury-baedeker-1942", caption: "Canterbury, 1 June. The last of them — and the cathedral, like York Minster, survives." }
    ]
  },
  {
    id: "v-weapons",
    title: "Vengeance weapons",
    subtitle: "London, June 1944 – March 1945",
    blurb:
      "The V-1 and V-2 brought the bombing back to London long after the Blitz had ended, and there was no warning to give.",
    stops: [
      { record: "grove-road-v1-1944", caption: "13 June 1944, Bow: the first V-1 to reach London. Six dead at a railway bridge." },
      { record: "guards-chapel-1944", caption: "18 June, during Sunday morning service at Wellington Barracks. The worst single V-1 incident of the war." },
      { record: "aldwych-v1-1944", caption: "30 June, lunchtime in the Aldwych, with the streets full." },
      { record: "sloane-court-1944", caption: "3 July, Chelsea — a direct hit on billeted American servicewomen and men." },
      { record: "staveley-road-v2-1944", caption: "8 September 1944, Chiswick: the first V-2 on Britain. Supersonic, so the explosion arrived before the sound of it." },
      { record: "new-cross-woolworths-1944", caption: "25 November, a Saturday lunchtime at a busy Woolworths in Deptford." },
      { record: "smithfield-market-1945", caption: "8 March 1945, Smithfield, with a queue outside for rabbit." },
      { record: "hughes-mansions-1945", caption: "27 March 1945, Stepney: the last V-2 to hit London." },
      { record: "kynaston-road-1945", caption: "The same morning at Orpington — the last person killed by a V-2 in Britain, six weeks before the war in Europe ended." }
    ]
  },
  {
    id: "blitz-1940",
    title: "The first winter",
    subtitle: "Britain, 1940",
    blurb:
      "Before Plymouth, before the Baedeker raids: the autumn and winter that taught British cities what bombing was.",
    stops: [
      { record: "croydon-airport-1940", caption: "15 August 1940, Croydon: the first heavy raid on the London area, still nominally aimed at an airfield." },
      { record: "supermarine-woolston-1940", caption: "26 September, Southampton — the Spitfire factory, and the shelter beside it." },
      { record: "south-hallsville-1940", caption: "10 September, Canning Town. Families waiting for evacuation buses that never came." },
      { record: "coventry-cathedral-1940", caption: "14 November, Coventry. Eleven hours; the cathedral is left a shell and kept that way." },
      { record: "durning-road-1940", caption: "29 November, Edge Hill, Liverpool — a school basement shelter, and one of the war's worst single incidents." },
      { record: "sheaf-street-1940", caption: "Sheffield in August, and again in December." },
      { record: "marples-hotel-1940", caption: "12 December, Fitzalan Square. Very few of those sheltering in the Marples cellars came out." },
      { record: "manchester-cathedral-1940", caption: "22 December: the Christmas Blitz on Manchester." },
      { record: "st-thomas-bath-row-1940", caption: "And Birmingham, whose raids ran on into 1943 with far less attention than they deserved." }
    ]
  },
  {
    id: "still-here",
    title: "Still in the ground",
    subtitle: "Unexploded ordnance, 2010 to now",
    blurb:
      "Roughly one bomb in ten failed to go off. They are still being found — in gardens, on building sites, and on beaches.",
    stops: [
      { record: "notte-street-2010", caption: "Plymouth, 2010: a building site on Notte Street, and two hotels evacuated." },
      { record: "exeter-glenthorne-road-2021", caption: "Exeter, 2021 — 2,600 people out of their homes for a 1,000kg bomb near the university." },
      { record: "keyham-2024", caption: "Keyham, 2024: the largest peacetime evacuation in Britain since the Second World War." },
      { record: "brean-beach-2024", caption: "Brean, on the Somerset coast — the tide uncovers them." },
      { record: "arundel-river-arun-2025", caption: "And the rivers: the Arun in 2025." },
      { record: "millbay-2026", caption: "Plymouth again, January 2026. There is no reason to expect this list to stop." }
    ]
  }
];

/* Stops naming a record that has since been renamed or removed would fail
   silently mid-tour, which reads as the tour being broken rather than the
   data having moved. Drop them at startup instead, and say so in the
   console for whoever is editing. */
const guidedTours = GUIDED_TOURS.map((tour) => {
  const stops = tour.stops.filter((stop) => {
    const found = ALL_RECORDS.some((r) => r.id === stop.record);
    if (!found) console.warn(`[tours] "${tour.id}" references unknown record "${stop.record}" — stop skipped`);
    return found;
  });
  return { ...tour, stops };
}).filter((tour) => tour.stops.length > 1);

const tourLauncher = document.getElementById("tourLauncher");
const tourMenu = document.getElementById("tourMenu");
const tourPlayer = document.getElementById("tourPlayer");
const tourTitle = document.getElementById("tourTitle");
const tourStepLabel = document.getElementById("tourStepLabel");
const tourCaption = document.getElementById("tourCaption");
const tourRecordLink = document.getElementById("tourRecordLink");
const tourProgress = document.getElementById("tourProgress");
const tourPlayPause = document.getElementById("tourPlayPause");
const tourPrev = document.getElementById("tourPrev");
const tourNext = document.getElementById("tourNext");
const tourExit = document.getElementById("tourExit");

const TOUR_STOP_MS = 7000;
const TOUR_STOP_ZOOM = 15;

let activeTour = null;
let tourStopIndex = 0;
let tourTimer = null;
let tourPaused = false;
let tourPreviousCounty = null;
let tourMenuOpen = false;

function tourRecord(stop) {
  return ALL_RECORDS.find((r) => r.id === stop.record) || null;
}

function clearTourTimer() {
  if (tourTimer) { clearTimeout(tourTimer); tourTimer = null; }
}

function scheduleTourAdvance() {
  clearTourTimer();
  if (tourPaused || !activeTour) return;
  tourTimer = setTimeout(() => {
    if (tourStopIndex >= activeTour.stops.length - 1) {
      // Hold on the last stop rather than looping. A tour that silently
      // starts again is disorienting — you look up and you are somewhere
      // you have already been, with no way to tell that you finished.
      setTourPaused(true);
      if (tourStepLabel) tourStepLabel.textContent = "End of tour";
      return;
    }
    goToTourStop(tourStopIndex + 1);
  }, TOUR_STOP_MS);
}

function renderTourProgress() {
  if (!tourProgress || !activeTour) return;
  tourProgress.innerHTML = "";
  activeTour.stops.forEach((stop, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `tour-dot${i === tourStopIndex ? " current" : ""}${i < tourStopIndex ? " done" : ""}`;
    const record = tourRecord(stop);
    dot.setAttribute("aria-label", `Stop ${i + 1}${record ? `: ${record.title}` : ""}`);
    dot.addEventListener("click", () => goToTourStop(i));
    tourProgress.appendChild(dot);
  });
}

function goToTourStop(index) {
  if (!activeTour) return;
  tourStopIndex = Math.max(0, Math.min(index, activeTour.stops.length - 1));
  const stop = activeTour.stops[tourStopIndex];
  const record = tourRecord(stop);
  if (!record) return;

  if (tourStepLabel) tourStepLabel.textContent = `${tourStopIndex + 1} of ${activeTour.stops.length}`;
  if (tourCaption) {
    tourCaption.innerHTML =
      `<strong>${record.title}</strong>` +
      `<span class="tour-date">${record.date || ""}</span>` +
      `<span class="tour-line">${stop.caption}</span>`;
  }
  if (tourRecordLink) {
    tourRecordLink.onclick = () => {
      const id = record.id;
      endTour();
      selectRecord(id, true);
    };
  }
  renderTourProgress();

  const target = centreForChrome([record.lat, record.lng], TOUR_STOP_ZOOM);
  if (prefersReducedMotion) map.setView(target, TOUR_STOP_ZOOM, { animate: false });
  else map.flyTo(target, TOUR_STOP_ZOOM, { duration: 1.5 });

  // Give the flight time to land before the clock on this stop starts, so
  // the caption is readable for its full run rather than half-spent
  // travelling.
  clearTourTimer();
  if (!tourPaused) {
    tourTimer = setTimeout(scheduleTourAdvance, prefersReducedMotion ? 0 : 1500);
  }
}

function setTourPaused(paused) {
  tourPaused = paused;
  if (tourPlayPause) {
    tourPlayPause.textContent = paused ? "▶" : "❚❚";
    tourPlayPause.setAttribute("aria-label", paused ? "Resume tour" : "Pause tour");
  }
  if (paused) clearTourTimer();
  else scheduleTourAdvance();
}

function startTour(id) {
  const tour = guidedTours.find((t) => t.id === id);
  if (!tour) return;
  closeTourMenu();

  activeTour = tour;
  tourStopIndex = 0;
  tourPreviousCounty = activeCounty;

  // Several tours cross county lines; leaving a county selected would mask
  // out their own stops.
  if (activeCounty !== COUNTY_ALL) switchCounty(COUNTY_ALL, { fly: false });

  // The detail panel and the tour card are the same real estate on a phone.
  closeDetailPanel();

  if (tourTitle) tourTitle.textContent = `${tour.title} — ${tour.subtitle}`;
  if (tourPlayer) tourPlayer.hidden = false;
  document.body.classList.add("tour-active");
  setTourPaused(false);
  goToTourStop(0);
}

function endTour() {
  clearTourTimer();
  activeTour = null;
  tourPaused = false;
  if (tourPlayer) tourPlayer.hidden = true;
  document.body.classList.remove("tour-active");
  if (tourPreviousCounty && tourPreviousCounty !== activeCounty) {
    switchCounty(tourPreviousCounty, { fly: true });
  }
  tourPreviousCounty = null;
}

function buildTourMenu() {
  if (!tourMenu) return;
  tourMenu.innerHTML = "";
  guidedTours.forEach((tour) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "tour-option";
    item.setAttribute("role", "option");
    item.innerHTML =
      `<span class="tour-option-title">${tour.title}</span>` +
      `<span class="tour-option-sub">${tour.subtitle} · ${tour.stops.length} stops</span>` +
      `<span class="tour-option-blurb">${tour.blurb}</span>`;
    item.addEventListener("click", () => startTour(tour.id));
    tourMenu.appendChild(item);
  });
}

function openTourMenu() {
  if (!tourMenu || tourMenuOpen) return;
  buildTourMenu();
  tourMenu.hidden = false;
  tourMenuOpen = true;
  if (tourLauncher) tourLauncher.setAttribute("aria-expanded", "true");
}

function closeTourMenu() {
  if (!tourMenu || !tourMenuOpen) return;
  tourMenu.hidden = true;
  tourMenuOpen = false;
  if (tourLauncher) tourLauncher.setAttribute("aria-expanded", "false");
}

if (tourLauncher && guidedTours.length) {
  tourLauncher.hidden = false;
  tourLauncher.addEventListener("click", () => (tourMenuOpen ? closeTourMenu() : openTourMenu()));
  document.addEventListener("click", (e) => {
    if (!tourMenuOpen) return;
    if (e.target.closest("#tourMenu") || e.target.closest("#tourLauncher")) return;
    closeTourMenu();
  });
  if (tourPlayPause) tourPlayPause.addEventListener("click", () => setTourPaused(!tourPaused));
  if (tourPrev) tourPrev.addEventListener("click", () => { setTourPaused(true); goToTourStop(tourStopIndex - 1); });
  if (tourNext) tourNext.addEventListener("click", () => { setTourPaused(true); goToTourStop(tourStopIndex + 1); });
  if (tourExit) tourExit.addEventListener("click", endTour);
  document.addEventListener("keydown", (e) => {
    if (!activeTour) return;
    if (e.key === "Escape") endTour();
    else if (e.key === "ArrowRight") { setTourPaused(true); goToTourStop(tourStopIndex + 1); }
    else if (e.key === "ArrowLeft") { setTourPaused(true); goToTourStop(tourStopIndex - 1); }
  });
}

/* ============================================================
   REPORT A CORRECTION
   ------------------------------------------------------------
   CONFIGURE ME. Three routes, tried in this order. Any one of them
   is enough; having more than one only widens who can use it.

   CORRECTIONS_ENDPOINT
       A form-handler URL that accepts a JSON POST — Formspree,
       Netlify Forms, Basin, a Google Apps Script web app. This is
       the only route that works for someone with no GitHub account
       and no mail client, so it is worth setting up.

   CORRECTIONS_REPO
       "owner/repo" on GitHub. Opens a prefilled issue against it.
       Costs nothing, keeps every correction and its discussion in
       one place next to the data, and needs no third party — but it
       does require the visitor to have a GitHub account.

   CORRECTIONS_EMAIL
       A prefilled mailto:. Left empty by default deliberately: a
       plain address in page markup is scraped for spam within days.
       Use an alias you can throw away if you set it.

   With none of them set the form still works — it formats the report
   and offers to copy it to the clipboard, which is better than a dead
   button, but it does put the last step on the visitor.
   ============================================================ */
const CORRECTIONS_ENDPOINT = "";
const CORRECTIONS_REPO = "StewartPS/Bomb-Maps";
const CORRECTIONS_EMAIL = "";

const correctionModal = document.getElementById("correctionModal");
const correctionForm = document.getElementById("correctionForm");
const correctionKind = document.getElementById("correctionKind");
const correctionDetail = document.getElementById("correctionDetail");
const correctionSource = document.getElementById("correctionSource");
const correctionFrom = document.getElementById("correctionFrom");
const correctionRecordEl = document.getElementById("correctionRecord");
const correctionActions = document.getElementById("correctionActions");
const correctionStatus = document.getElementById("correctionStatus");
const correctionClose = document.getElementById("correctionClose");
const correctionBackdrop = document.getElementById("correctionBackdrop");

let correctionRecord = null;
let correctionLastFocus = null;

/* The report is assembled once and reused by every route, so a correction
   sent by email, by GitHub issue or through a form endpoint arrives in the
   same shape — including the coordinates and the record id, without which
   "the date is wrong" is not actionable. */
function correctionReport() {
  if (!correctionRecord) return { title: "", body: "" };
  const r = correctionRecord;
  const lines = [
    `Record: ${r.title}`,
    `Record ID: ${r.id}`,
    `Location: ${r.regionLabel || r.regionShort || ""}${recordCounty(r) ? `, ${recordCounty(r)}` : ""}`,
    `Currently plotted at: ${r.lat}, ${r.lng}`,
    `Currently dated: ${r.date || "—"}`,
    `Map link: ${location.origin}${location.pathname}?record=${encodeURIComponent(r.id)}`,
    "",
    `What needs correcting: ${correctionKind.value}`,
    "",
    "Details:",
    (correctionDetail.value || "").trim(),
    "",
    "Source given:",
    (correctionSource.value || "").trim() || "(none given)",
    "",
    `From: ${(correctionFrom.value || "").trim() || "(anonymous)"}`
  ];
  return {
    title: `Correction: ${r.title} (${correctionKind.value})`,
    body: lines.join("\n"),
    recordId: r.id
  };
}

function setCorrectionStatus(text, kind) {
  if (!correctionStatus) return;
  correctionStatus.textContent = text || "";
  correctionStatus.dataset.kind = kind || "";
}

function correctionValid() {
  if (!(correctionDetail.value || "").trim()) {
    setCorrectionStatus("Please describe what needs correcting.", "error");
    correctionDetail.focus();
    return false;
  }
  return true;
}

function buildCorrectionActions() {
  if (!correctionActions) return;
  correctionActions.innerHTML = "";

  const button = (label, primary, onClick) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = `correction-btn${primary ? " primary" : ""}`;
    el.textContent = label;
    el.addEventListener("click", onClick);
    correctionActions.appendChild(el);
    return el;
  };

  if (CORRECTIONS_ENDPOINT) {
    button("Send correction", true, async (e) => {
      if (!correctionValid()) return;
      const report = correctionReport();
      e.target.disabled = true;
      setCorrectionStatus("Sending…", "");
      try {
        const res = await fetch(CORRECTIONS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            subject: report.title,
            recordId: report.recordId,
            kind: correctionKind.value,
            detail: correctionDetail.value,
            source: correctionSource.value,
            from: correctionFrom.value,
            message: report.body
          })
        });
        if (!res.ok) throw new Error(`endpoint responded ${res.status}`);
        setCorrectionStatus("Thank you — that has been sent. Every correction is checked against its source before the record changes.", "ok");
        correctionForm.reset();
      } catch (err) {
        // Never lose what someone has typed to a network failure: fall back
        // to the routes that do not need the network to have worked.
        setCorrectionStatus("That did not send. Use “Copy report” below and email or post it instead — nothing you typed has been lost.", "error");
        e.target.disabled = false;
      }
    });
  }

  if (CORRECTIONS_REPO) {
    button("Open a GitHub issue", !CORRECTIONS_ENDPOINT, () => {
      if (!correctionValid()) return;
      const report = correctionReport();
      const url =
        `https://github.com/${CORRECTIONS_REPO}/issues/new` +
        `?title=${encodeURIComponent(report.title)}` +
        `&body=${encodeURIComponent(report.body)}` +
        `&labels=${encodeURIComponent("correction")}`;
      window.open(url, "_blank", "noopener");
      setCorrectionStatus("A prefilled issue has opened in a new tab — press “Submit new issue” there to send it.", "ok");
    });
  }

  if (CORRECTIONS_EMAIL) {
    button("Email it", !CORRECTIONS_ENDPOINT && !CORRECTIONS_REPO, () => {
      if (!correctionValid()) return;
      const report = correctionReport();
      window.location.href =
        `mailto:${CORRECTIONS_EMAIL}?subject=${encodeURIComponent(report.title)}&body=${encodeURIComponent(report.body)}`;
    });
  }

  button("Copy report", !CORRECTIONS_ENDPOINT && !CORRECTIONS_REPO && !CORRECTIONS_EMAIL, async () => {
    if (!correctionValid()) return;
    const report = correctionReport();
    const text = `${report.title}\n\n${report.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCorrectionStatus("Copied. Paste it wherever suits — email, a message, or a GitHub issue.", "ok");
    } catch (e) {
      // Clipboard access is refused outright in some browsers and contexts.
      setCorrectionStatus("Copying was blocked by the browser. Select the text below and copy it manually.", "error");
      const pre = document.createElement("textarea");
      pre.className = "correction-fallback";
      pre.readOnly = true;
      pre.value = text;
      correctionActions.parentNode.appendChild(pre);
      pre.select();
    }
  });
}

function openCorrectionModal(record) {
  if (!correctionModal || !record) return;
  correctionRecord = record;
  correctionLastFocus = document.activeElement;
  if (correctionRecordEl) {
    correctionRecordEl.textContent = `${record.title} — ${record.date || "date not recorded"}`;
  }
  setCorrectionStatus("");
  correctionModal.querySelectorAll(".correction-fallback").forEach((el) => el.remove());
  buildCorrectionActions();
  correctionModal.hidden = false;
  document.body.classList.add("correction-open");
  correctionDetail.focus();
}

function closeCorrectionModal() {
  if (!correctionModal || correctionModal.hidden) return;
  correctionModal.hidden = true;
  document.body.classList.remove("correction-open");
  if (correctionLastFocus && correctionLastFocus.focus) correctionLastFocus.focus();
  correctionLastFocus = null;
}

if (correctionModal) {
  // Delegated, because the detail panel's HTML is rebuilt on every selection.
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-correct-record]");
    if (!trigger) return;
    const record = ALL_RECORDS.find((r) => r.id === trigger.dataset.correctRecord);
    if (record) openCorrectionModal(record);
  });

  correctionForm.addEventListener("submit", (e) => e.preventDefault());
  if (correctionClose) correctionClose.addEventListener("click", closeCorrectionModal);
  if (correctionBackdrop) correctionBackdrop.addEventListener("click", closeCorrectionModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !correctionModal.hidden) closeCorrectionModal();
  });
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

/* The map's opening fitBounds runs while the page is still assembling, before
   the control panel and the pills have a size to measure — so the UK ends up
   centred behind them. This re-runs the same fit once layout has settled and
   the chrome can actually be measured. Two frames rather than one: the first
   lets the panels lay out, the second lets any late-loading webfont reflow
   settle before we take their measurements.

   Skipped when saved state has already framed a county, so a returning
   visitor isn't pulled back out to the national view. */
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    if (restoredView || activeCounty !== COUNTY_ALL) return;
    setBoundsInView(UK_BOUNDS);
  });
});
