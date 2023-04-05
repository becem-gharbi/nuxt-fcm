import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
import { Fcm } from "./types";

export default defineNuxtPlugin(() => {
  const publicConfig = useRuntimeConfig().public.fcm;

  if (!publicConfig.firebaseConfig || !publicConfig.vapidKey) {
    return;
  }

  const app = initializeApp(publicConfig.firebaseConfig);

  const analytics = publicConfig.analytics ? getAnalytics(app) : undefined;

  const messaging = getMessaging(app);

  const fcm: Fcm = {
    messaging,
    analytics,
  };

  return {
    provide: {
      fcm,
    },
  };
});
