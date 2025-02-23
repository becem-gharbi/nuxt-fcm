export default defineNuxtConfig({

  modules: ['../src/module'],
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-22',

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },

  fcm: {
    firebaseConfig: {},
    vapidKey: '*',
    serviceAccount: {},
    serviceWorkerScript: `
      messaging.onBackgroundMessage((payload) => {
        console.log("[firebase-messaging-sw.js] Received background message ", payload);
      })

      function onNotificationClick(event) {
        console.log('[firebase-messaging-sw.js] Notification clicked', event)
        event.notification.close();
      }
    `,
  },
})
