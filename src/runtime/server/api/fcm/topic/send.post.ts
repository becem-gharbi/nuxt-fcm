import { defineEventHandler } from "#imports";
import { app, handleError } from "#fcm";
import { getMessaging, MessagingPayload } from "firebase-admin/messaging";
import { readBody } from "h3";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const { topic, payload } = await readBody<{
      topic: string;
      payload: MessagingPayload;
    }>(event);

    const schema = z.object({
      topic: z.string().min(1),
    });

    schema.parse({ topic });

    const messaging = getMessaging(app);

    const res = await messaging.sendToTopic(topic, payload);

    return res;
  } catch (error) {
    handleError(error);
  }
});
