import type {
  MessagingPayload,
  MessagingTopicManagementResponse,
} from 'firebase-admin/messaging'
import { useFcm } from './useFcm'

export default function () {
  function send(args: {
    topic: string
    payload: MessagingPayload
    authorization?: string
  }): Promise<string> {
    return $fetch<string>('/api/fcm/topic/send', {
      method: 'POST',
      body: {
        topic: args.topic,
        payload: args.payload,
      },
      headers: {
        Authorization: args.authorization ?? '',
      },
    })
  }

  async function subscribe(args: {
    topic: string
    authorization?: string
  }): Promise<MessagingTopicManagementResponse> {
    const token = await useFcm().getToken()

    return $fetch<MessagingTopicManagementResponse>(
      '/api/fcm/topic/subscribe',
      {
        method: 'POST',
        body: {
          token,
          topic: args.topic,
        },
        headers: {
          Authorization: args.authorization ?? '',
        },
      },
    )
  }

  async function unsubscribe(args: {
    topic: string
    authorization?: string
  }): Promise<MessagingTopicManagementResponse> {
    const token = await useFcm().getToken()

    return $fetch<MessagingTopicManagementResponse>(
      '/api/fcm/topic/unsubscribe',
      {
        method: 'POST',
        body: {
          token,
          topic: args.topic,
        },
        headers: {
          Authorization: args.authorization ?? '',
        },
      },
    )
  }

  return { send, subscribe, unsubscribe }
}
