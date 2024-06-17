import { defineEventHandler, readBody } from 'h3'
import { getMessaging } from 'firebase-admin/messaging'
import { z } from 'zod'
import type { MessagingPayload } from 'firebase-admin/messaging'
import { app, handleError, checkPermission } from '../../../utils'

export default defineEventHandler(async (event) => {
  try {
    checkPermission(event, 'topic', 'send')

    const { topic, payload } = await readBody<{
      topic: string
      payload: MessagingPayload
    }>(event)

    const schema = z.object({
      topic: z.string().min(1),
    })

    schema.parse({ topic })

    return getMessaging(app).sendToTopic(topic, payload)
  }
  catch (error) {
    handleError(error)
  }
})
