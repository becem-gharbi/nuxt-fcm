import { MessagePayload, getToken as _getToken } from "firebase/messaging";
import { useNuxtApp } from "#imports";
import { onMessage as _onMessage } from "firebase/messaging";

export default function () {
  const { $fcm } = useNuxtApp();

  async function getToken(): Promise<string> {
    return _getToken($fcm.messaging).catch(() => "");
  }

  function onMessage(cb: (payload: MessagePayload) => void) {
    _onMessage($fcm.messaging, cb);
  }

  return { getToken, onMessage };
}
