self.addEventListener('fetch', (event) => {
  // هذا السطر يضمن أن التطبيق سيحاول جلب القنوات من الإنترنت أولاً
  event.respondWith(fetch(event.request));
});
