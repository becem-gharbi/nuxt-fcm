import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'
import type { PublicConfig } from '../types'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(() => {
  const publicConfig = useRuntimeConfig().public.fcm as PublicConfig

  const app = initializeApp(publicConfig.firebaseConfig)

  const messaging = navigator?.serviceWorker && getMessaging(app)

  getToken(messaging).catch(console.warn)

  return {
    provide: {
      fcm: { messaging },
    },
  }
})
