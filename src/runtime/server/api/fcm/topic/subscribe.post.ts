import { defineEventHandler } from "#imports";
import { app, handleError, checkPermission } from "#fcm";
import { getMessaging } from "firebase-admin/messaging";
import { readBody } from "h3";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    checkPermission(event, "topic", "subscribe");

    const { topic, token } = await readBody<{ topic: string; token: string }>(
      event
    );

    const schema = z.object({
      topic: z.string().min(1),
      token: z.string().min(1),
    });

    schema.parse({ topic, token });

    if (!app) {
      throw new Error(
        "App server not initialized, make sure to set service Account"
      );
    }

    const messaging = getMessaging(app);

    const res = await messaging.subscribeToTopic(token, topic);

    return res;
  } catch (error) {
    handleError(error);
  }
});
