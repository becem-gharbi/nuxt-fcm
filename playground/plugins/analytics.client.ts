import { getAnalytics } from "firebase/analytics";
import { getApp } from "firebase/app";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
  const app = getApp();

  getAnalytics(app);
});
