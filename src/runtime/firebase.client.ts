import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export default defineNuxtPlugin(async () => {
  const publicConfig = useRuntimeConfig().public.fcm;

  const app = initializeApp(publicConfig.firebaseConfig);
  const messaging = getMessaging(app);

  const registrationToken = await getToken(messaging, {
    vapidKey: publicConfig.vapidKey,
  });

  console.log({ registrationToken });

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
  });
});
