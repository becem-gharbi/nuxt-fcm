import { getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin, useNuxtApp } from "#imports";

export default defineNuxtPlugin(() => {
  const { $fcm } = useNuxtApp();

  getAnalytics($fcm.app);
});
