self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("marimba-cache-v1").then((cache) => {
            return cache.addAll([
                "./",
                "./index.html",
                "./style.css",
                "./script.js",     // 如果有 JS 就加進來
                "./icon-192.png",
                "./icon-512.png"
            ]);
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});