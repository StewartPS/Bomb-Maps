/* ============================================================
   COUNTY BOUNDARIES — generated file, safe to regenerate
   ------------------------------------------------------------
   Simplified outlines for each county the site covers, used to
   draw the red dashed boundary when a county is selected.

   Rebuild with:
       node tools/fetch-county-boundaries.js

   Empty is fine. When a county is missing from here the app
   falls back to fetching its outline from OpenStreetMap at
   runtime, so the map still works — it just depends on someone
   else's server, and is slower the first time.

   Boundaries are modern ceremonial counties. They are NOT
   identical to wartime administrative boundaries; see the
   comment above buildCounties() in js/app.js.
   ============================================================ */
const COUNTY_BOUNDARIES = {};
