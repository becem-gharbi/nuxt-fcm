import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  MessagePayload,
} from "firebase/messaging";

export default defineNuxtPlugin(async () => {
  const publicConfig = useRuntimeConfig().public.fcm;

  const app = initializeApp(publicConfig.firebaseConfig);
  const messaging = getMessaging(app);

  const registrationToken = await getToken(messaging, {
    vapidKey: publicConfig.vapidKey,
  });

  return {
    provide: {
      fcm: {
        registrationToken,
        onMessage: (cb: (payload: MessagePayload) => void) => {
          onMessage(messaging, cb);
        },
      },
    },
  };
});
