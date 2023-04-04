import { defineEventHandler } from "#imports";
import { app } from "#fcm";
import { getMessaging } from "firebase-admin/messaging";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { topic, token } = await readBody<{ topic: string; token: string }>(
    event
  );

  const messaging = getMessaging(app);

  const res = await messaging.subscribeToTopic(token, topic);

  return res;
});
