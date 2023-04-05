export default defineNuxtConfig({
  modules: ["../src/module"],
  fcm: {
    analytics: true,
    firebaseConfig: JSON.parse(process.env.FCM_FIREBASE_CONFIG!),
    vapidKey: process.env.FCM_VAPID_KEY,
    serviceAccount: JSON.parse(process.env.FCM_SERVICE_ACCOUNT!),
  },
});
