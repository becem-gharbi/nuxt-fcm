import { defineEventHandler, readBody, createError } from 'h3'
import { getMessaging } from 'firebase-admin/messaging'
import type { Message } from 'firebase-admin/messaging'
import { app, checkPermission } from '../../../utils'

export default defineEventHandler(async (event) => {
  checkPermission(event, 'topic', 'send')

  const { topic, payload } = await readBody<{
    topic: string
    payload: Message['data']
  }>(event)

  if (!topic) {
    throw createError({ message: 'Topic is required', statusCode: 400 })
  }

  return getMessaging(app).send({ topic, data: payload })
})
