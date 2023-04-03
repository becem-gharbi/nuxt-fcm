import { defineEventHandler } from "#imports";
import { readBody } from "h3";
import { app } from "#fcm";
import { getMessaging } from "firebase-admin/messaging";

export default defineEventHandler(async (event) => {
  const body = await readBody<NotificationPayload>(event);

  const messaging = getMessaging(app);

  await messaging.send({
    token:
      "fWWLZRZtPd8R7-lomwBCtA:APA91bEcWTKxtAOocc9zl1qvHyD1T_vXaAQGF1JD_ClEDekMssXkfuoyO9hIBsH033cuwQPc7VDafE7N9Cu3o0MMFdnR9w8Ei_QT0miMKXSpyL-2QhggKSD3vnnq9tDA2ytoyyf-Cy17",
    notification: {
      title: "From Admin SDK",
      body: "hey there",
    },
  });

  return {};
});
