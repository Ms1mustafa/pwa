// Service worker for caching and offline support

const CACHE_NAME = "simple-pwa-cache";
const urlsToCache = ["/pwa", "index.html", "styles.css", "app.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
