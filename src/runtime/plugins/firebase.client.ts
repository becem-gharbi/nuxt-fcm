import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

export default defineNuxtPlugin(() => {
  const publicConfig = useRuntimeConfig().public.fcm;

  if (!(navigator && navigator.serviceWorker)) {
    return {
      provide: {
        fcm: { messaging: null },
      },
    };
  }

  const app = initializeApp(publicConfig.firebaseConfig);

  const messaging = getMessaging(app);

  getToken(messaging).catch(console.warn);

  return {
    provide: {
      fcm: { messaging },
    },
  };
});
