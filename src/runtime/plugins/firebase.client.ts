import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

export default defineNuxtPlugin(() => {
  const publicConfig = useRuntimeConfig().public.fcm;

  const app = initializeApp(publicConfig.firebaseConfig);

  const messaging = navigator.serviceWorker && getMessaging(app);

  getToken(messaging).catch(console.warn);

  return {
    provide: {
      fcm: { messaging },
    },
  };
});
