import { setPermissions } from "#fcm";
import { defineEventHandler } from "#imports";

export default defineEventHandler((event) => {
  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  });
});
