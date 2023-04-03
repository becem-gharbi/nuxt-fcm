import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { privateConfig } from "./config";

const app = initializeApp({
  credential: admin.credential.cert(privateConfig.serviceAccount),
});

export { app };
