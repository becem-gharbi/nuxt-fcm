import type { Messaging } from "firebase/messaging";
import type { Analytics } from "firebase/analytics";

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
