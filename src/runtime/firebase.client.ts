import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { Fcm } from "./types";

export default defineNuxtPlugin(async () => {
  const publicConfig = useRuntimeConfig().public.fcm;

  if (!publicConfig.firebaseConfig || !publicConfig.vapidKey) {
    return {
      provide: {
        fcm: {},
      },
    };
  }

  const app = initializeApp(publicConfig.firebaseConfig);

  const messaging = getMessaging(app);

  let registrationToken = "";

  await getToken(messaging, {
    vapidKey: publicConfig.vapidKey,
  })
    .then((token) => (registrationToken = token))
    .catch(console.log);

  const fcm: Fcm = {
    app,
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
