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
