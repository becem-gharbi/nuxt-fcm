export default defineNuxtConfig({
  ssr: false,

  modules: ['../src/module'],

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

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },

  compatibilityDate: '2024-07-22',
  future: {
    compatibilityVersion: 4,
  },
})
