import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { Fcm } from "./types";

export default defineNuxtPlugin(async () => {
  const publicConfig = useRuntimeConfig().public.fcm;

  const app = initializeApp(publicConfig.firebaseConfig);
  const messaging = getMessaging(app);

  const registrationToken = await getToken(messaging, {
    vapidKey: publicConfig.vapidKey,
  });

  const fcm: Fcm = {
    registrationToken,
    onMessage: (cb) => {
      onMessage(messaging, cb);
    },
  };

  return {
    provide: {
      fcm,
    },
  };
});
