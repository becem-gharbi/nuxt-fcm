export default defineNuxtConfig({
  modules: ["../src/module"],
  fcm: {
    firebaseOptions: {
      apiKey: process.env.FCM_FIREBASE_OPTIONS_API_KEY,
      authDomain: process.env.FCM_FIREBASE_OPTIONS_AUTH_DOMAIN,
      projectId: process.env.FCM_FIREBASE_OPTIONS_PROJECT_ID,
      messagingSenderId: process.env.FCM_FIREBASE_OPTIONS_MESSAGING_SENDER_ID,
      appId: process.env.FCM_FIREBASE_OPTIONS_APP_ID,
    },
    vapidKey: process.env.FCM_VAPID_KEY,
  },
});
