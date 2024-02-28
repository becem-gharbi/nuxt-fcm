import { setPermissions } from "#fcm";
import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  });
});
