const CACHE_NAME = 'ossama-tv';
const ASSETS = [
  './',
  './index.html',
  'https://i.ibb.co/zh1ky6SN/logo2.png'
];

// تثبيت الـ Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تفعيل الـ Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

// الاستجابة للطلبات (ضروري لظهور أيقونة التثبيت)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
