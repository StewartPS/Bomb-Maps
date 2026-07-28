/**
 * Plymouth Blitz Digital Archive — application logic
 * Modular structure: initMap, loadGeoJSON, applyFilters, toggleCordonMode
 */

const TYPE_META = {
  HE:   { label: 'High Explosive',   color: '#00F2FE' },
  INC:  { label: 'Incendiary',       color: '#FF9F43' },
  MINE: { label: 'Parachute Mine',   color: '#B388FF' },
  UXO:  { label: 'UXO / Unexploded', color: '#FF5252' }
};

const PLYMOUTH_CENTER = [50.3714, -4.1427];
const CORDON_RADIUS_M = 300;

let map;
let markerLayer;
let allFeatures = [];
let activeTypes = new Set(Object.keys(TYPE_META));
let dateList = [];
let selectedDateIndex = 0;
let liveMode = false;
let cordonCircle = null;
let cordonMarker = null;

/* ---------------- initMap ---------------- */
function initMap() {
  map = L.map('map', {
    zoomControl: false,
    center: PLYMOUTH_CENTER,
    zoom: 13,
    preferCanvas: true
  });

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);

  map.on('click', onMapClick);
}

/* ---------------- loadGeoJSON ---------------- */
function loadGeoJSON(collection) {
  allFeatures = collection.features.slice();

  dateList = [...new Set(allFeatures.map(f => f.properties.date))].sort();
  const slider = document.getElementById('dateSlider');
  slider.max = dateList.length; // 0 = all raids, 1..n = individual dates
  slider.value = 0;
  updateSliderLabel();

  updateStats();
  applyFilters();
}

function updateStats() {
  document.getElementById('statTotalBombs').textContent = allFeatures.length;
  document.getElementById('statActiveRaids').textContent = dateList.length;
}

/* ---------------- applyFilters ---------------- */
function applyFilters() {
  markerLayer.clearLayers();

  const dateFilter = selectedDateIndex === 0 ? null : dateList[selectedDateIndex - 1];

  const visible = allFeatures.filter(f => {
    if (!activeTypes.has(f.properties.type)) return false;
    if (dateFilter && f.properties.date !== dateFilter) return false;
    return true;
  });

  visible.forEach(feature => {
    const [lng, lat] = feature.geometry.coordinates;
    const meta = TYPE_META[feature.properties.type] || TYPE_META.HE;

    const marker = L.circleMarker([lat, lng], {
      radius: 7,
      color: meta.color,
      weight: 2,
      fillColor: meta.color,
      fillOpacity: 0.55,
      opacity: 0.95
    });

    marker.on('click', () => openRaidDrawer(feature.properties));
    marker.bindTooltip(feature.properties.street, {
      direction: 'top',
      offset: [0, -6],
      className: 'raid-tooltip'
    });

    markerLayer.addLayer(marker);
  });
}

function updateSliderLabel() {
  const label = document.getElementById('dateSliderLabel');
  if (selectedDateIndex === 0) {
    label.textContent = 'All raids';
  } else {
    const d = dateList[selectedDateIndex - 1];
    label.textContent = formatDate(d);
  }
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ---------------- Raid Info Drawer ---------------- */
function openRaidDrawer(props) {
  const meta = TYPE_META[props.type] || TYPE_META.HE;
  const drawer = document.getElementById('raidDrawer');
  const content = document.getElementById('raidDrawerContent');

  content.innerHTML = `
    <span class="raid-type-badge" style="background:${meta.color}22; color:${meta.color}; border:1px solid ${meta.color}55;">
      <span class="dot" style="background:${meta.color}; box-shadow:0 0 6px ${meta.color};"></span>
      ${meta.label}
    </span>
    <h3 class="raid-title">${escapeHtml(props.street)}</h3>
    <p class="raid-meta">${formatDate(props.date)} &middot; ${escapeHtml(props.raidName || '')}</p>

    <div class="raid-field">
      <span class="raid-field-label">Historical Context</span>
      <span class="raid-field-value">${escapeHtml(props.context || 'No further details recorded.')}</span>
    </div>

    ${props.casualtyLink ? `
    <a class="raid-link" href="${props.casualtyLink}" target="_blank" rel="noopener noreferrer">
      View CWGC casualty records
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>` : ''}
  `;

  drawer.classList.remove('hidden');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- Filters UI ---------------- */
function setupFilterPills() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      if (activeTypes.has(type)) {
        activeTypes.delete(type);
        btn.classList.remove('active');
      } else {
        activeTypes.add(type);
        btn.classList.add('active');
      }
      applyFilters();
    });
  });
}

/* ---------------- Search ---------------- */
function setupSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      results.classList.add('hidden');
      results.innerHTML = '';
      return;
    }

    const matches = allFeatures.filter(f =>
      f.properties.street.toLowerCase().includes(q)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-result-item">No matches found</div>';
    } else {
      results.innerHTML = matches.map(f => `
        <div class="search-result-item" data-id="${f.properties.id}">
          <div>${escapeHtml(f.properties.street)}</div>
          <span class="sr-type">${TYPE_META[f.properties.type]?.label || f.properties.type} &middot; ${formatDate(f.properties.date)}</span>
        </div>
      `).join('');
    }
    results.classList.remove('hidden');
  });

  results.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (!item || !item.dataset.id) return;
    const feature = allFeatures.find(f => f.properties.id === item.dataset.id);
    if (!feature) return;
    const [lng, lat] = feature.geometry.coordinates;
    map.setView([lat, lng], 16, { animate: true });
    openRaidDrawer(feature.properties);
    results.classList.add('hidden');
    input.value = feature.properties.street;
    closeSidebarMobile();
  });
}

/* ---------------- Timeline ---------------- */
function setupTimeline() {
  const slider = document.getElementById('dateSlider');
  slider.addEventListener('input', () => {
    selectedDateIndex = parseInt(slider.value, 10);
    updateSliderLabel();
    applyFilters();
  });
}

/* ---------------- Live Incident / Cordon Mode ---------------- */
function toggleCordonMode(forceState) {
  liveMode = typeof forceState === 'boolean' ? forceState : !liveMode;

  const toggle = document.getElementById('liveModeToggle');
  const topBar = document.getElementById('topBar');
  const badge = document.getElementById('cordonBadge');
  const card = document.getElementById('cordonCard');

  toggle.setAttribute('aria-checked', String(liveMode));
  topBar.classList.toggle('cordon-live', liveMode);
  badge.classList.toggle('hidden', !liveMode);

  if (liveMode) {
    card.classList.remove('hidden');
  } else {
    card.classList.add('hidden');
    clearCordon();
  }
}

function clearCordon() {
  if (cordonCircle) { map.removeLayer(cordonCircle); cordonCircle = null; }
  if (cordonMarker) { map.removeLayer(cordonMarker); cordonMarker = null; }
  document.getElementById('cordonResult').textContent = '';
  document.getElementById('cordonResult').className = 'cordon-result';
}

function dropCordon(lat, lng) {
  clearCordon();

  cordonMarker = L.marker([lat, lng], {
    icon: L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;border-radius:50%;background:#FF5252;box-shadow:0 0 10px #FF5252;border:2px solid #0B0F17;"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    })
  }).addTo(map);

  cordonCircle = L.circle([lat, lng], {
    radius: CORDON_RADIUS_M,
    color: '#FF5252',
    weight: 2,
    fillColor: '#FF5252',
    fillOpacity: 0.15
  }).addTo(map);

  map.setView([lat, lng], Math.max(map.getZoom(), 15), { animate: true });
}

function onMapClick(e) {
  if (!liveMode) return;
  dropCordon(e.latlng.lat, e.latlng.lng);
  showCordonResult(0);
}

function showCordonResult(distanceM) {
  const el = document.getElementById('cordonResult');
  const inside = distanceM <= CORDON_RADIUS_M;
  el.textContent = inside
    ? `⚠ Inside evacuation radius (${Math.round(distanceM)}m from centre)`
    : `Outside evacuation radius (${Math.round(distanceM)}m from centre)`;
  el.className = 'cordon-result ' + (inside ? 'inside' : 'outside');
}

function setupCordonUI() {
  document.getElementById('liveModeToggle').addEventListener('click', () => toggleCordonMode());
  document.getElementById('cordonCardClose').addEventListener('click', () => toggleCordonMode(false));

  document.getElementById('cordonAddressInput').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const q = e.target.value.trim().toLowerCase();
    if (!q) return;

    // Simple local lookup against known streets (placeholder geocoding).
    const match = allFeatures.find(f => f.properties.street.toLowerCase().includes(q));
    if (match) {
      const [lng, lat] = match.geometry.coordinates;
      dropCordon(lat, lng);
      showCordonResult(0);
    } else {
      const el = document.getElementById('cordonResult');
      el.textContent = 'Location not recognised — try clicking the map instead.';
      el.className = 'cordon-result';
    }
  });
}

/* ---------------- Sidebar (mobile) ---------------- */
function setupSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('sidebarScrim');
  const btn = document.getElementById('sidebarToggle');

  btn.addEventListener('click', () => {
    sidebar.classList.add('open');
    scrim.classList.remove('hidden');
  });
  scrim.addEventListener('click', closeSidebarMobile);
}

function closeSidebarMobile() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarScrim').classList.add('hidden');
}

/* ---------------- Raid drawer close ---------------- */
function setupRaidDrawerClose() {
  document.getElementById('raidDrawerClose').addEventListener('click', () => {
    document.getElementById('raidDrawer').classList.add('hidden');
  });
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  loadGeoJSON(BOMB_DATA);
  setupFilterPills();
  setupSearch();
  setupTimeline();
  setupCordonUI();
  setupSidebarToggle();
  setupRaidDrawerClose();
});
