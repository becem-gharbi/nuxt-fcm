import { defineEventHandler, readBody, createError } from 'h3'
import { getMessaging } from 'firebase-admin/messaging'
import { app, checkPermission } from '../../../utils'

export default defineEventHandler(async (event) => {
  checkPermission(event, 'topic', 'unsubscribe')

  const { topic, token } = await readBody<{ topic: string, token: string }>(event)

  if (!topic) {
    throw createError({ message: 'Topic is required', statusCode: 400 })
  }

  if (!token) {
    throw createError({ message: 'Token is required', statusCode: 400 })
  }

  return getMessaging(app).unsubscribeFromTopic(token, topic)
})
