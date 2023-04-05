import type { MessagePayload, Messaging } from "firebase/messaging";
import type { MessagePayload, Analytics } from "firebase/analytics";
import type { FirebaseApp } from "firebase/app";

export type PublicConfig = {
  firebaseConfig: Record<string, string>;
  vapidKey: string;
  analytics: boolean;
};

export type PrivateConfig = {
  serviceAccount?: Record<string, string>;
};

export type Fcm = {
  messaging: Messaging;
  analytics?: Analytics;
};

export type Entity = "topic";

export type Permission = "send" | "subscribe" | "unsubscribe";

export interface FcmContext {
  permissions: {
    topic: {
      send: boolean;
      subscribe: boolean;
      unsubscribe: boolean;
    };
  };
}

declare module "#app" {
  interface NuxtApp {
    $fcm: Fcm;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $fcm: Fcm;
  }
}

export {};
