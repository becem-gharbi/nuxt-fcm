import { defineEventHandler } from "#imports";
import { app } from "#fcm";
import { getMessaging } from "firebase-admin/messaging";
import { readBody } from "h3";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const { topic, token } = await readBody<{ topic: string; token: string }>(
      event
    );

    const schema = z.object({
      topic: z.string().min(1),
      token: z.string().min(1),
    });

    schema.parse({ topic, token });

    const messaging = getMessaging(app);

    const res = await messaging.subscribeToTopic(token, topic);

    return res;
  } catch (error) {}
});
