<script>
  if ('serviceWorker' in navigator) {
    // استخدام './sw.js' بدلاً من المسار الكامل يضمن العثور على الملف داخل مجلد المشروع
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("Service Worker Failed", err));
  }
</script>
