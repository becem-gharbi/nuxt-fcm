import {
  getToken as _getToken,
  onMessage as _onMessage
} from 'firebase/messaging'
import type { MessagePayload } from 'firebase/messaging'
import { useNuxtApp } from '#imports'

export function useFcm () {
  const { $fcm } = useNuxtApp()

  async function getToken (): Promise<string | void> {
    if ($fcm?.messaging) {
      /* eslint-disable no-console */
      return await _getToken($fcm.messaging).catch(console.warn)
    }
  }

  function onMessage (cb: (payload: MessagePayload) => void) {
    if ($fcm?.messaging) {
      _onMessage($fcm.messaging, cb)
    }
  }

  return { getToken, onMessage }
}
