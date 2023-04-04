import { defineEventHandler } from "#imports";
import { app } from "#fcm";
import { getMessaging, MessagingPayload } from "firebase-admin/messaging";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { topic, payload } = await readBody<{
    topic: string;
    payload: MessagingPayload;
  }>(event);

  const messaging = getMessaging(app);

  const res = await messaging.sendToTopic(topic, payload);

  return res;
});
