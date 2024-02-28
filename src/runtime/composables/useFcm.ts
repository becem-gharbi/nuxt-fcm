import {
  getToken as _getToken,
  onMessage as _onMessage,
} from "firebase/messaging";
import { useNuxtApp } from "#imports";
import type { MessagePayload } from "firebase/messaging";

export function useFcm() {
  const { $fcm } = useNuxtApp();

  async function getToken(): Promise<string> {
    return $fcm?.messaging && _getToken($fcm.messaging).catch(console.warn);
  }

  function onMessage(cb: (payload: MessagePayload) => void) {
    $fcm?.messaging && _onMessage($fcm.messaging, cb);
  }

  return { getToken, onMessage };
}
