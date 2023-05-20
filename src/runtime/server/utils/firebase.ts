import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { privateConfig } from "./config";

const serviceAccount = privateConfig.serviceAccount as ServiceAccount;

const app =
  serviceAccount &&
  initializeApp({
    credential: cert(serviceAccount),
  });

export { app };
