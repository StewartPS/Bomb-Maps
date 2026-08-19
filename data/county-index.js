/* ============================================================
   COUNTY INDEX — GENERATED FILE, DO NOT EDIT BY HAND
   ------------------------------------------------------------
   Rebuild with: node tools/build-county-slices.js
   Generated:    2026-08-19T15:01:01.216Z

   Small enough to load on every page. Two things:

   COUNTY_BOUNDS   [minLat, minLng, maxLat, maxLng] per county, so a
                   county can be framed the instant it is selected,
                   before its outline geometry has been fetched.

   RECORD_COUNTY   Records whose real, geographic county is NOT the
                   county of the region they are filed under. Only the
                   disagreements are listed; everything absent takes its
                   region's county. Computed by testing each record's
                   coordinates against the same polygons the map draws.

                   Saltash is the reason this exists: filed under
                   Plymouth because that is the raid it belongs to, but
                   physically the Cornish side of the Tamar, so taking
                   the county from the region hid it whenever Cornwall
                   was selected.

   256 records tested, 5 disagreed with their region,
   35 claimed by no polygon (offshore, or a county not built yet).
   ============================================================ */
const COUNTY_BOUNDS = {"Devon":[50.20187,-4.6806,51.24639,-2.88664],"Cornwall":[49.86479,-6.41856,50.93127,-4.16638],"Somerset":[50.82084,-3.8398,51.50268,-2.24443],"Bristol":[51.39728,-2.71835,51.54443,-2.51046],"Greater London":[51.28676,-0.5103,51.69187,0.334],"Hampshire":[50.70607,-1.95723,51.38392,-0.72941],"Kent":[50.91098,0.03356,51.48716,1.44956],"East Sussex":[50.73498,-0.245,51.14746,0.86786],"West Sussex":[50.72254,-0.9576,51.1673,0.04453],"Merseyside":[53.29684,-3.22902,53.69832,-2.57674],"Greater Manchester":[53.3273,-2.73052,53.68572,-1.90962],"West Midlands":[52.34772,-2.20688,52.66272,-1.42415],"South Yorkshire":[53.30163,-1.82259,53.66117,-0.86533],"East Riding of Yorkshire":[53.57145,-1.10357,54.1765,0.14758],"Tyne and Wear":[54.79905,-1.85271,55.07938,-1.34743],"North Yorkshire":[53.62109,-2.56474,54.64757,-0.21253]};
const RECORD_COUNTY = {"saltash-fore-street-1941":"Cornwall","saltash-station-1941":"Cornwall","saltash-glebe-bellevue-1941":"Cornwall","hms-raleigh-1941":"Cornwall","mount-edgcumbe-1941":"Cornwall"};
