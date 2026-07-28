/**
 * Sample WW2 Plymouth Blitz incident data.
 * Placeholder dataset — replace with verified archive records
 * (e.g. Plymouth & West Devon Record Office / CWGC-linked sources).
 * Structure kept deliberately simple so real data can be dropped in
 * as GeoJSON features with the same property keys.
 */
const BOMB_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1427, 50.3714] },
      "properties": {
        "id": "raid-1941-03-20-001",
        "date": "1941-03-20",
        "raidName": "First Plymouth Blitz",
        "street": "Bedford Street, City Centre",
        "type": "HE",
        "context": "High explosive strike during the opening night of the sustained March 1941 raids, which devastated Plymouth's civic and commercial centre.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1502, 50.3755] },
      "properties": {
        "id": "raid-1941-03-21-002",
        "date": "1941-03-21",
        "raidName": "First Plymouth Blitz",
        "street": "Union Street",
        "type": "INC",
        "context": "Incendiary bombs ignited fires across Union Street, contributing to widespread destruction of shops and housing.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1358, 50.3689] },
      "properties": {
        "id": "raid-1941-04-21-003",
        "date": "1941-04-21",
        "raidName": "Second Plymouth Blitz",
        "street": "Notte Street",
        "type": "HE",
        "context": "Part of the April 1941 raids that further devastated the city, striking near the Hoe.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1289, 50.3801] },
      "properties": {
        "id": "raid-1941-04-22-004",
        "date": "1941-04-22",
        "raidName": "Second Plymouth Blitz",
        "street": "Mutley Plain",
        "type": "MINE",
        "context": "Parachute mine causing severe blast damage across a wide radius of residential Mutley.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1180, 50.3650] },
      "properties": {
        "id": "raid-1941-04-23-005",
        "date": "1941-04-23",
        "raidName": "Second Plymouth Blitz",
        "street": "Laira Bridge Road",
        "type": "UXO",
        "context": "Unexploded device reported near Laira, requiring evacuation and disposal by bomb disposal units.",
        "casualtyLink": ""
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1465, 50.3672] },
      "properties": {
        "id": "raid-1941-03-22-006",
        "date": "1941-03-22",
        "raidName": "First Plymouth Blitz",
        "street": "Millbay Road",
        "type": "HE",
        "context": "Strike near the docks area, disrupting transport infrastructure critical to the war effort.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    },
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [-4.1103, 50.3728] },
      "properties": {
        "id": "raid-1941-04-29-007",
        "date": "1941-04-29",
        "raidName": "Second Plymouth Blitz",
        "street": "St Judes",
        "type": "INC",
        "context": "Fires from incendiaries spread through terraced housing in St Judes during the final major raid of April 1941.",
        "casualtyLink": "https://www.cwgc.org/find-records/find-war-dead/search-results/?Surname=&Forename=&Initials=&WarSelected=1939-1945&ServedIn=&DateDeathFromYear=1941&DateDeathToYear=1941"
      }
    }
  ]
};
