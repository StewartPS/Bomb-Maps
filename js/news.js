/* ============================================================
   News / live updates page
   ------------------------------------------------------------
   Renders data/incident.json — the same file that drives the alert banner
   and cordon on the map page. Nothing here is hard-coded: to publish an
   update, edit that file on github.com and commit.

   Three states, all of them deliberate:
     ACTIVE   an incident is running — headline, cordon details, update log
     QUIET    no incident — an explicit "nothing happening" message, so the
              page never looks broken or abandoned
     ERROR    the feed couldn't be read — say so plainly and point at the
              official sources rather than pretending all is well
   ============================================================ */
(function () {
  "use strict";

  var FEED = "data/incident.json";
  var shell = document.getElementById("newsShell");
  if (!shell) return;

  /* ---------- Helpers ---------- */

  // Everything user-facing goes through here. The feed is hand-edited on
  // GitHub, so treat it as untrusted input and never inject it as HTML.
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function parseDate(iso) {
    if (!iso) return null;
    var d = new Date(iso);
    return isNaN(d.getTime()) ? null : d;
  }

  function absoluteTime(d) {
    return d.toLocaleString("en-GB", {
      day: "numeric", month: "long", hour: "2-digit", minute: "2-digit"
    });
  }

  function relativeTime(d) {
    var mins = Math.round((Date.now() - d.getTime()) / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return mins + " min ago";
    var hrs = Math.round(mins / 60);
    if (hrs < 24) return hrs + " hour" + (hrs === 1 ? "" : "s") + " ago";
    var days = Math.round(hrs / 24);
    return days + " day" + (days === 1 ? "" : "s") + " ago";
  }

  function isSafeHttpUrl(raw) {
    try {
      var u = new URL(raw, location.href);
      return u.protocol === "https:" || u.protocol === "http:";
    } catch (e) {
      return false;
    }
  }

  /* ---------- Renderers ---------- */

  function renderActive(data) {
    var wrap = el("article", "news-live");

    var flag = el("p", "news-flag");
    flag.appendChild(el("span", "news-flag-pulse"));
    flag.appendChild(el("span", null, "Live incident"));
    wrap.appendChild(flag);

    wrap.appendChild(el("h1", "news-headline", data.headline || "Live incident"));

    var meta = el("p", "news-meta");
    var bits = [];
    if (data.place) bits.push(data.place);
    if (data.status) bits.push(data.status);
    var updatedDate = parseDate(data.updated);
    if (updatedDate) bits.push("updated " + relativeTime(updatedDate));
    meta.textContent = bits.join("  ·  ");
    wrap.appendChild(meta);

    if (data.summary) wrap.appendChild(el("p", "news-summary", data.summary));

    // Safety framing. This map is a guide; the police and council are the
    // authority during a live incident, and that must be unambiguous.
    var advice = el("div", "news-advice");
    advice.appendChild(el("p", null,
      "If you are near the cordon, follow instructions from the police and the council. " +
      "This page is a summary for context — it is not an official emergency source."));
    wrap.appendChild(advice);

    var facts = el("dl", "news-facts");
    function addFact(label, value) {
      if (!value) return;
      facts.appendChild(el("dt", null, label));
      facts.appendChild(el("dd", null, value));
    }
    addFact("Cordon radius", data.cordonRadiusM ? data.cordonRadiusM + "m" : "");
    addFact("Location", (typeof data.lat === "number" && typeof data.lng === "number")
      ? data.lat.toFixed(5) + ", " + data.lng.toFixed(5) : "");
    if (updatedDate) addFact("Last updated", absoluteTime(updatedDate));
    if (facts.children.length) wrap.appendChild(facts);

    var mapLink = el("a", "news-map-link", "View the cordon on the map");
    mapLink.href = "index.html#map-section";
    wrap.appendChild(mapLink);

    // Update log, newest first regardless of the order in the file.
    var updates = Array.isArray(data.updates) ? data.updates.slice() : [];
    updates.sort(function (a, b) {
      var da = parseDate(a && a.time), db = parseDate(b && b.time);
      if (!da || !db) return 0;
      return db - da;
    });

    if (updates.length) {
      wrap.appendChild(el("h2", "news-log-title", "Updates"));
      var list = el("ol", "news-log");
      updates.forEach(function (u) {
        if (!u || !u.text) return;
        var item = el("li", "news-log-item");
        var d = parseDate(u.time);
        var stamp = el("time", "news-log-time", d ? absoluteTime(d) : (u.time || ""));
        if (d) stamp.dateTime = d.toISOString();
        item.appendChild(stamp);
        item.appendChild(el("p", "news-log-text", u.text));
        list.appendChild(item);
      });
      wrap.appendChild(list);
    }

    var links = Array.isArray(data.officialLinks) ? data.officialLinks : [];
    if (links.length) {
      wrap.appendChild(el("h2", "news-log-title", "Official sources"));
      var ul = el("ul", "news-links");
      links.forEach(function (link) {
        if (!link || !link.url || !isSafeHttpUrl(link.url)) return;
        var li = el("li");
        var a = el("a", null, link.label || link.url);
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        ul.appendChild(li);
      });
      if (ul.children.length) wrap.appendChild(ul);
    }

    return wrap;
  }

  function renderQuiet() {
    var wrap = el("div", "news-empty");
    wrap.appendChild(el("h1", null, "Latest updates"));
    wrap.appendChild(el("p", "news-empty-lead", "No live incident is running at the moment."));
    wrap.appendChild(el("p", null,
      "When unexploded ordnance is found in Plymouth, this page carries a running log of " +
      "updates and the map shows the cordon. Between incidents it stays quiet."));

    var links = el("ul", "news-links");
    [
      { label: "Plymouth City Council — incident updates", url: "https://www.plymouth.gov.uk/news/major-incident-updates" },
      { label: "Devon & Cornwall Police — news", url: "https://www.devon-cornwall.police.uk/news/" }
    ].forEach(function (link) {
      var li = el("li");
      var a = el("a", null, link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      links.appendChild(li);
    });
    wrap.appendChild(el("h2", "news-log-title", "Official sources"));
    wrap.appendChild(links);

    var mapLink = el("a", "news-map-link", "Explore the bombing map");
    mapLink.href = "index.html#map-section";
    wrap.appendChild(mapLink);

    return wrap;
  }

  function renderError() {
    var wrap = el("div", "news-empty");
    wrap.appendChild(el("h1", null, "Latest updates"));
    wrap.appendChild(el("p", "news-empty-lead", "The updates feed could not be loaded."));
    wrap.appendChild(el("p", null,
      "This is a problem with this page, not necessarily a sign that anything is happening. " +
      "For official information, check the sources below."));

    var links = el("ul", "news-links");
    [
      { label: "Plymouth City Council — incident updates", url: "https://www.plymouth.gov.uk/news/major-incident-updates" },
      { label: "Devon & Cornwall Police — news", url: "https://www.devon-cornwall.police.uk/news/" }
    ].forEach(function (link) {
      var li = el("li");
      var a = el("a", null, link.label);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      links.appendChild(li);
    });
    wrap.appendChild(links);
    return wrap;
  }

  /* ---------- Load ---------- */

  function paint(node) {
    shell.innerHTML = "";
    shell.appendChild(node);
  }

  function load() {
    fetch(FEED + "?t=" + Date.now(), { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        paint(data && data.active === true ? renderActive(data) : renderQuiet());
      })
      .catch(function () {
        paint(renderError());
      });
  }

  load();
  // Keep a page left open on a phone reasonably fresh during an incident.
  setInterval(load, 5 * 60 * 1000);
})();
