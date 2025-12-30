// sw.js
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // في حال فشل الاتصال، لا يفعل شيئاً أو يمكنك توجيهه لصفحة أوفلاين
            return caches.match(event.request);
        })
    );
});
