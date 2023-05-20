import { defineEventHandler } from "#imports";
import { app, handleError, checkPermission } from "#fcm";
import { getMessaging, MessagingPayload } from "firebase-admin/messaging";
import { readBody } from "h3";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    checkPermission(event, "topic", "send");

    const { topic, payload } = await readBody<{
      topic: string;
      payload: MessagingPayload;
    }>(event);

    const schema = z.object({
      topic: z.string().min(1),
    });

    schema.parse({ topic });

    if (!app) {
      throw new Error(
        "App server not initialized, make sure to set service Account"
      );
    }

    const messaging = getMessaging(app);

    const res = await messaging.sendToTopic(topic, payload);

    return res;
  } catch (error) {
    handleError(error);
  }
});
