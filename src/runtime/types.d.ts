import type { Messaging } from "firebase/messaging";

export type PublicConfig = {
  firebaseConfig: Record<string, string>;
  vapidKey: string;
};

export type PrivateConfig = {
  serviceAccount?: Record<string, string>;
};

export type Fcm = {
  messaging: Messaging;
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
