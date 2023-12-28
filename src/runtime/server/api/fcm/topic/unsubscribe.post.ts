import { defineEventHandler } from "#imports";
import { app, handleError, checkPermission } from "../../../utils";
import { getMessaging } from "firebase-admin/messaging";
import { readBody } from "h3";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    checkPermission(event, "topic", "unsubscribe");

    const { topic, token } = await readBody<{ topic: string; token: string }>(
      event
    );

    const schema = z.object({
      topic: z.string().min(1),
      token: z.string().min(1),
    });

    schema.parse({ topic, token });

    return getMessaging(app).unsubscribeFromTopic(token, topic);
  } catch (error) {
    handleError(error);
  }
});
