"use strict";
// Дала мұрасы · service worker. Бұл файлды tools/build_sw.py жасайды, қолмен өзгертпе.
const VERSION = "dala-c45ed6b76d";
const CORE = ["./", "a11y.css", "achievements.js", "app.js", "assistant.js", "bookmarks.css", "bookmarks.js", "camp-upgrade.css", "cinematic.css", "cinematic.js", "classroom.css", "classroom.js", "compact.css", "compact.js", "encyclopedia-data.js", "exploration.js", "explore.css", "explore.js", "favicon.ico", "features.css", "flashcards.js", "game-extras.js", "history-data.js", "history.js", "icons/favicon.svg", "index.html", "intro.vtt", "journey.css", "journey.js", "karatau/episode.js", "karatau/index.html", "learning-path.css", "learning-path.js", "lesson.js", "manifest.webmanifest", "map-data.js", "mapgame.js", "museum.js", "orbulak/battle.css", "orbulak/defense.js", "orbulak/episode.js", "orbulak/index.html", "photo-world.css", "photo-world.js", "portal.css", "portal.js", "pwa.js", "settings.js", "site.css", "story.js", "style.css", "teacher.css", "teacher.html", "teacher.js", "orbulak/", "karatau/"];
const FULL = ["./", "orbulak/", "karatau/", "a11y.css", "achievements.js", "app.js", "assets/cinema/camp.jpg", "assets/cinema/karatau.jpg", "assets/cinema/objects.jpg", "assets/cinema/orbulak.jpg", "assets/cinema/portraits.jpg", "assets/cinema/small/camp.jpg", "assets/cinema/small/karatau.jpg", "assets/cinema/small/orbulak.jpg", "assets/steppe-reconstruction-1000.jpg", "assets/steppe-reconstruction-640.jpg", "assets/steppe-reconstruction.jpg", "assistant.js", "bookmarks.css", "bookmarks.js", "camp-upgrade.css", "cinematic.css", "cinematic.js", "classroom.css", "classroom.js", "compact.css", "compact.js", "dala-mesh.bin", "encyclopedia-data.js", "exploration.js", "explore.css", "explore.js", "favicon.ico", "features.css", "flashcards.js", "game-extras.js", "history-data.js", "history.js", "icons/apple-touch-icon.png", "icons/favicon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "index.html", "intro.mp4", "intro.vtt", "journey.css", "journey.js", "karatau/dala-mesh.bin", "karatau/episode.js", "karatau/index.html", "karatau/karatau.jpg", "learning-path.css", "learning-path.js", "lesson.js", "manifest.webmanifest", "map-data.js", "mapgame.js", "museum.js", "orbulak/battle.css", "orbulak/dala-mesh.bin", "orbulak/defense.js", "orbulak/episode.js", "orbulak/index.html", "orbulak/orbulak.jpg", "photo-world.css", "photo-world.js", "portal.css", "portal.js", "pwa.js", "qozybasy.jpg", "settings.js", "site.css", "story.js", "style.css", "teacher.css", "teacher.html", "teacher.js"];

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
