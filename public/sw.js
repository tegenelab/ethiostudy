const CACHE = 'ethiostudy-v2';
const IMG_CACHE = 'ethiostudy-imgs-v2';

const PRECACHE = [
  '/',
  '/books',
  '/books/grade8',
  '/books/grade9',
  '/books/grade10',
  '/books/grade11',
  '/books/grade12',
  '/books/exam',
  '/books/natural',
  '/books/social',
  '/og-image.png',
  '/exam-prep-card.svg',
  '/exam-prep.webp',
  '/grade-8.svg',
  '/grade-9.svg',
  '/grade-10.svg',
  '/grade-11.svg',
  '/grade-12.svg',
  '/natural-stream.svg',
  '/social-stream.svg',
  '/hero-main.webp',
  '/hero-main-400.webp',
  '/hero-main-600.webp',
  '/hero-main-700.webp',
  '/hero-main-900.webp',
  '/hero-students-2.webp',
  '/hero-students-2-400.webp',
  '/hero-students-2-600.webp',
  '/hero-students-2-700.webp',
  '/hero-students-2-900.webp',
  '/popular-maths.webp',
  '/popular-english.webp',
  '/popular-physics.webp',
  '/popular-chemistry.webp',
  '/icons.svg',
  '/favicon.svg',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE && k !== IMG_CACHE)
            .map((k) => caches.delete(k))
        )
      ),
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.destination === 'image' || /\.(webp|png|jpg|jpeg|svg|ico)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request, IMG_CACHE));
    return;
  }

  if (url.origin === location.origin && request.method === 'GET') {
    const isStatic = /\.(js|css|woff2?)$/i.test(url.pathname);
    if (isStatic || url.pathname.startsWith('/_next/static')) {
      event.respondWith(cacheFirst(request, CACHE));
      return;
    }
  }

  event.respondWith(networkFirst(request));
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return cached || new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}
