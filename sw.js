// sw.js — Service Worker for TIFFYAI Reminder

self.addEventListener('install', (event) => {
  console.log('[TIFFY SW] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[TIFFY SW] Activated');
  return self.clients.claim();
});

// Handle push event (if you later implement real push notifications)
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'Claim your TIFFY now!';
  const options = {
    body: data,
    icon: 'https://tiffyai.github.io/On-boarding-/TiffyAI-Token.png',
    badge: 'https://tiffyai.github.io/On-boarding-/TiffyAI-Token.png'
  };

  event.waitUntil(
    self.registration.showNotification('🔔 TIFFY Reminder', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/Dream-Menu')
  );
});
