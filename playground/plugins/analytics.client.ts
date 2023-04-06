import { defineNuxtPlugin, useNuxtApp } from "#imports";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const { $fcm } = useNuxtApp();

  const analytics = getAnalytics($fcm.messaging.app);

  return {
    provide: {
      analytics,
    },
  };
});
