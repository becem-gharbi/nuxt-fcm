import { MessagePayload, getToken } from "firebase/messaging";
import { useNuxtApp } from "#imports";
import { onMessage } from "firebase/messaging";

export default function () {
  const { $fcm } = useNuxtApp();

  function getRegistrationToken(): Promise<string> {
    return getToken($fcm.messaging).catch(() => "");
  }

  function onMessageReceived(cb: (payload: MessagePayload) => void) {
    onMessage($fcm.messaging, cb);
  }

  return { getRegistrationToken, onMessageReceived };
}
