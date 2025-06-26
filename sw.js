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
      body: 'Click to open your wallet and collect your daily key. You can now boost your wallet with valuable TIFFY tokens!',
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
