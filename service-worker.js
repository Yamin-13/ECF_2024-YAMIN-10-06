self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('my-pwa-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/asset/css/startPage.css',
          '/asset/js/index-redirection.js',
          '/asset/img/logoLaMetropole.png',
          '/asset/img/logoMetropoleAix.png',
          '/asset/img/dinosaur-hors-ligne.png',
          '/manifest.json',
          '/service-worker.js'
        ]);
      })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
});
