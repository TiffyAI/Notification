self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  // Optional: Cache logic here
});
