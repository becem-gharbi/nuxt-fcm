import { defineEventHandler } from 'h3'
import { setPermissions } from '#fcm'

export default defineEventHandler((event) => {
  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  })
})
