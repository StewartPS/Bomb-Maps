# Plymouth Blitz Digital Archive

Interactive dark-theme map of WW2 bomb raid incidents in Plymouth, with a Live Incident / evacuation cordon tool.

## Stack
- Vanilla HTML/CSS/JS (ES6+)
- Leaflet.js + CartoDB Dark Matter tiles
- Tailwind CSS (CDN)

## Structure
- `index.html` — page shell / layout
- `css/style.css` — tactical-noir design system
- `js/data.js` — placeholder incident dataset (GeoJSON) — replace with verified archive records
- `js/app.js` — map logic: filters, search, timeline, live cordon mode

## Running locally
Any static server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Data
`js/data.js` currently contains a small sample of illustrative incidents for the March/April 1941 raids. Replace with sourced records (Plymouth & West Devon Record Office, CWGC) before publishing as a factual archive.
