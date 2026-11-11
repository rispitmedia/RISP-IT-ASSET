
const CACHE_NAME = 'risp-it-asset-v7-6-21-sw-fix';

const CORE = [
  './',
  './index.html',
  './asset/index.html',
  './styles.css?v=7620',
  './app.js?v=7620',
  './photo-tools.js?v=7620',
  './manifest.webmanifest?v=772',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key =>
            key.startsWith('risp-it-asset-') &&
            key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (url.origin !== self.location.origin) return;

  // Always try the latest app files first.
  const isAppFile =
    req.mode === 'navigate' ||
    /\.(js|css)$/i.test(url.pathname);

  if (isAppFile) {
    event.respondWith(
      fetch(req)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_NAME)
                .then(cache => cache.put(req, copy))
            );
          }
          return response;
        })
        .catch(() => caches.match(req).then(cached => {
          return cached || caches.match('./index.html');
        }))
    );
    return;
  }

  // Cache-first for other static assets.
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then(cache => cache.put(req, copy))
          );
        }
        return response;
      });
    })
  );
});
