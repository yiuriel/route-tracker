// This tells TypeScript that `self` refers to the ServiceWorkerGlobalScope
declare let self: ServiceWorkerGlobalScope;

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open("route-tracker-cache-v1").then((cache) => {
      return cache.addAll([
        "/", // Cache root URL
        "/index.html", // Main page
        "/styles.css", // Your main CSS file
        "/script.js", // Any main JavaScript files
        "/icons/icon-192x192.png", // PWA icons
        "/icons/icon-512x512.png",
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
