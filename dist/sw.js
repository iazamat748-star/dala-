"use strict";
// Дала мұрасы · service worker. Бұл файлды tools/build_sw.py жасайды, қолмен өзгертпе.
const VERSION = "dala-51303e9f4b";
const CORE = ["./", "app.js", "assistant.js", "camp-upgrade.css", "cinematic.css", "cinematic.js", "culture-data.js", "dala3d.js", "encyclopedia-data.js", "exploration.js", "explore.css", "explore.js", "favicon.ico", "features.css", "fonts/fonts.css", "fonts/literata-cyrillic-ext-wght-italic.woff2", "fonts/literata-cyrillic-ext-wght-normal.woff2", "fonts/literata-cyrillic-wght-italic.woff2", "fonts/literata-cyrillic-wght-normal.woff2", "fonts/literata-latin-wght-italic.woff2", "fonts/literata-latin-wght-normal.woff2", "fonts/philosopher-cyrillic-400-normal.woff2", "fonts/philosopher-cyrillic-700-normal.woff2", "fonts/philosopher-cyrillic-ext-400-normal.woff2", "fonts/philosopher-cyrillic-ext-700-normal.woff2", "fonts/philosopher-latin-400-normal.woff2", "fonts/philosopher-latin-700-normal.woff2", "game-extras.js", "game-page.css", "games2.js", "guide.js", "history-data.js", "home.css", "i18n.js", "icons/favicon.svg", "index.html", "karatau/episode.js", "karatau/index.html", "lesson.js", "manifest.webmanifest", "map-data.js", "mapgame.js", "museum.js", "orbulak/battle.css", "orbulak/defense.js", "orbulak/episode.js", "orbulak/index.html", "oyu.js", "portal3.js", "pwa.js", "qozybasy/index.html", "search.js", "settings.js", "story.js", "style.css", "today.js", "v3.css", "qozybasy/", "orbulak/", "karatau/"];
const FULL = ["./", "qozybasy/", "orbulak/", "karatau/", "app.js", "assets/cinema/camp.jpg", "assets/cinema/karatau.jpg", "assets/cinema/objects.jpg", "assets/cinema/orbulak.jpg", "assets/cinema/portraits.jpg", "assets/cinema/small/camp.jpg", "assets/cinema/small/karatau.jpg", "assets/cinema/small/orbulak.jpg", "assets/hero-shanyrak-800.jpg", "assets/hero-shanyrak.jpg", "assets/steppe-reconstruction-1000.jpg", "assets/steppe-reconstruction-640.jpg", "assets/steppe-reconstruction.jpg", "assistant.js", "camp-upgrade.css", "cinematic.css", "cinematic.js", "culture-data.js", "dala3d.js", "encyclopedia-data.js", "exploration.js", "explore.css", "explore.js", "favicon.ico", "features.css", "fonts/fonts.css", "fonts/literata-cyrillic-ext-wght-italic.woff2", "fonts/literata-cyrillic-ext-wght-normal.woff2", "fonts/literata-cyrillic-wght-italic.woff2", "fonts/literata-cyrillic-wght-normal.woff2", "fonts/literata-latin-wght-italic.woff2", "fonts/literata-latin-wght-normal.woff2", "fonts/philosopher-cyrillic-400-normal.woff2", "fonts/philosopher-cyrillic-700-normal.woff2", "fonts/philosopher-cyrillic-ext-400-normal.woff2", "fonts/philosopher-cyrillic-ext-700-normal.woff2", "fonts/philosopher-latin-400-normal.woff2", "fonts/philosopher-latin-700-normal.woff2", "game-extras.js", "game-page.css", "games2.js", "guide.js", "history-data.js", "home.css", "i18n.js", "icons/apple-touch-icon.png", "icons/favicon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "index.html", "karatau/dala-mesh.bin", "karatau/episode.js", "karatau/index.html", "karatau/karatau.jpg", "lesson.js", "manifest.webmanifest", "map-data.js", "mapgame.js", "museum.js", "orbulak/battle.css", "orbulak/dala-mesh.bin", "orbulak/defense.js", "orbulak/episode.js", "orbulak/index.html", "orbulak/orbulak.jpg", "oyu.js", "portal3.js", "pwa.js", "qozybasy/dala-mesh.bin", "qozybasy/index.html", "qozybasy/qozybasy.jpg", "search.js", "settings.js", "story.js", "style.css", "today.js", "v3.css", "vendor/THREE-LICENSE.txt"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const old = keys.filter((k) => k.startsWith("dala-") && k !== VERSION);
    for (const k of old) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        const cache = await caches.open(VERSION);
        cache.put(request, response.clone());
        return response;
      } catch {
        return (await caches.match(request, {ignoreSearch: true})) ||
          (await caches.match(new URL("./", self.registration.scope).href)) ||
          new Response("Офлайн нұсқа әлі сақталмаған.", {status: 503, headers: {"Content-Type": "text/plain; charset=utf-8"}});
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(request, {ignoreSearch: true});
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      const cache = await caches.open(VERSION);
      cache.put(request, response.clone());
    }
    return response;
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "cache-all") return;
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    let done = 0, failed = 0;
    const report = (type) => event.source?.postMessage({type, done, total: FULL.length, failed});
    for (const path of FULL) {
      try {
        if (!(await cache.match(path, {ignoreSearch: true}))) {
          const response = await fetch(path, {cache: "no-cache"});
          if (!response.ok) throw Error(path);
          await cache.put(path, response);
        }
      } catch { failed++; }
      done++;
      if (done % 5 === 0 || done === FULL.length) report("cache-progress");
    }
    report("cache-done");
  })());
});
