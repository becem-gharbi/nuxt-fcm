import type { MessagePayload } from "firebase/messaging";
import type { FirebaseApp } from "firebase/app";

export type PublicConfig = {
  firebaseConfig: Record<string, string>;
  vapidKey: string;
};

export type PrivateConfig = {
  serviceAccount?: Record<string, string>;
};

export type Fcm = {
  app: FirebaseApp;
  registrationToken: string;
  onMessage: (cb: (payload: MessagePayload) => void) => void;
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
