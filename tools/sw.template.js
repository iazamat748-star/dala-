"use strict";
// Дала мұрасы · service worker. Бұл файлды tools/build_sw.py жасайды, қолмен өзгертпе.
const VERSION = "dala-__VERSION__";
const CORE = __CORE__;
const FULL = __FULL__;

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
