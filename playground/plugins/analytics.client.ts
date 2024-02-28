import { getAnalytics } from 'firebase/analytics'
import { defineNuxtPlugin, useNuxtApp } from '#imports'

export default defineNuxtPlugin(() => {
  const { $fcm } = useNuxtApp()

  const analytics = getAnalytics($fcm.messaging?.app)

  return {
    provide: {
      analytics
    }
  }
})
