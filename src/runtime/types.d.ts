import type { MessagePayload } from "firebase/messaging";

export type PublicConfig = {
  firebaseConfig: Record<string, string>;
  vapidKey: string;
};

export type PrivateConfig = {
  serviceAccount: Record<string, string>;
};

export type Fcm = {
  registrationToken: string;
  onMessage: (cb: (payload: MessagePayload) => void) => void;
};

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
