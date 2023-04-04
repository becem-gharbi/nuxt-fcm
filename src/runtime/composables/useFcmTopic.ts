import { useNuxtApp } from "#imports";
import type {
  MessagingPayload,
  MessagingTopicResponse,
  MessagingTopicManagementResponse,
} from "firebase-admin/messaging";

export default function () {
  const { $fcm } = useNuxtApp();

  function send(
    topic: string,
    payload: MessagingPayload
  ): Promise<MessagingTopicResponse> {
    return $fetch<MessagingTopicResponse>("/api/fcm/topic/send", {
      method: "POST",
      body: {
        topic,
        payload,
      },
    });
  }

  function subscribe(topic: string): Promise<MessagingTopicManagementResponse> {
    return $fetch<MessagingTopicManagementResponse>(
      "/api/fcm/topic/subscribe",
      {
        method: "POST",
        body: {
          token: $fcm.registrationToken,
          topic,
        },
      }
    );
  }

  function unsubscribe(
    topic: string
  ): Promise<MessagingTopicManagementResponse> {
    return $fetch<MessagingTopicManagementResponse>(
      "/api/fcm/topic/unsubscribe",
      {
        method: "POST",
        body: {
          token: $fcm.registrationToken,
          topic,
        },
      }
    );
  }

  return { send, subscribe, unsubscribe };
}
