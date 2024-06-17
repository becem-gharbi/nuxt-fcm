import { setResponseHeader, defineEventHandler } from 'h3'
import type { PublicConfig } from '../../types'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler((event) => {
  const publicConfig = useRuntimeConfig().public.fcm as PublicConfig

  setResponseHeader(event, 'Content-Type', 'text/javascript')

  const firebaseConfigString = JSON.stringify(publicConfig.firebaseConfig)

  return `
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    
    const firebaseConfig = ${firebaseConfigString};

    const app = firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log("[firebase-messaging-sw.js] Received background message ", payload);

        self.registration.showNotification(
        payload.notification.title,
        payload.notification);
    });
  `
})
