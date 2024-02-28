import { defineEventHandler, readBody } from 'h3'
import { getMessaging } from 'firebase-admin/messaging'
import { z } from 'zod'
import { app, handleError, checkPermission } from '../../../utils'

export default defineEventHandler(async (event) => {
  try {
    checkPermission(event, 'topic', 'unsubscribe')

    const { topic, token } = await readBody<{ topic: string; token: string }>(
      event
    )

    const schema = z.object({
      topic: z.string().min(1),
      token: z.string().min(1)
    })

    schema.parse({ topic, token })

    return getMessaging(app).unsubscribeFromTopic(token, topic)
  } catch (error) {
    handleError(error)
  }
})
