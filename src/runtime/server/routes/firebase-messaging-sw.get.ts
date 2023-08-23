import { defineEventHandler } from "#imports";
import { setResponseHeader } from "h3";
import { publicConfig } from "#fcm";

export default defineEventHandler((event) => {
  setResponseHeader(event, "Content-Type", "text/javascript");

  const firebaseConfigString = JSON.stringify(publicConfig.firebaseConfig);

  return `
    importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js");
    
    const firebaseConfig = ${firebaseConfigString};

    const app = firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log("[firebase-messaging-sw.js] Received background message ", payload);

        self.registration.showNotification(
        payload.notification.title,
        payload.notification);
    });
  `;
});
