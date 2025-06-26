// sw.js — Service Worker for TIFFYAI Reminder

self.addEventListener('install', (event) => {
  console.log('[TIFFY SW] ✅ Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[TIFFY SW] ✅ Activated');
  return self.clients.claim();
});

// 📢 Allow background-triggered notification from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification('⏰ Time to Claim Your TIFFY!', {
      body: 'Click to collect your daily key and boost your bag!',
      icon: 'https://tiffyai.github.io/On-boarding-/TiffyAI-Token.png',
      badge: 'https://tiffyai.github.io/On-boarding-/TiffyAI-Token.png'
    });
  }
});

// 🖱️ Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/Dream-Menu')
  );
});
