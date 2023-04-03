export type PublicConfig = {
  firebaseConfig: Record<string, string>;
  vapidKey: string;
};

export type PrivateConfig = {
  serviceAccount: Record<string, string>;
};
