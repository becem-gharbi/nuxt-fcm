import type { FirebaseOptions } from "firebase/app";

export type PublicConfig = {
  firebaseOptions: FirebaseOptions;
  vapidKey: string;
};

export type PrivateConfig = {
  serviceAccount: Record<string, string>;
};
