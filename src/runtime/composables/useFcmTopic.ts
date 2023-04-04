import { useNuxtApp } from "#imports";
import type {
  MessagingPayload,
  MessagingTopicResponse,
  MessagingTopicManagementResponse,
} from "firebase-admin/messaging";

export default function () {
  const { $fcm } = useNuxtApp();

  function send(args: {
    topic: string;
    payload: MessagingPayload;
    authorization?: string;
  }): Promise<MessagingTopicResponse> {
    return $fetch<MessagingTopicResponse>("/api/fcm/topic/send", {
      method: "POST",
      body: {
        topic: args.topic,
        payload: args.payload,
      },
      headers: {
        Authorization: args.authorization || "",
      },
    });
  }

  function subscribe(args: {
    topic: string;
    authorization?: string;
  }): Promise<MessagingTopicManagementResponse> {
    return $fetch<MessagingTopicManagementResponse>(
      "/api/fcm/topic/subscribe",
      {
        method: "POST",
        body: {
          token: $fcm.registrationToken,
          topic: args.topic,
        },
        headers: {
          Authorization: args.authorization || "",
        },
      }
    );
  }

  function unsubscribe(args: {
    topic: string;
    authorization?: string;
  }): Promise<MessagingTopicManagementResponse> {
    return $fetch<MessagingTopicManagementResponse>(
      "/api/fcm/topic/unsubscribe",
      {
        method: "POST",
        body: {
          token: $fcm.registrationToken,
          topic: args.topic,
        },
        headers: {
          Authorization: args.authorization || "",
        },
      }
    );
  }

  return { send, subscribe, unsubscribe };
}
