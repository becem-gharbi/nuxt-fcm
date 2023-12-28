import { initializeApp, cert } from "firebase-admin/app";
import { useRuntimeConfig } from '#imports'
 
const privateConfig = useRuntimeConfig().fcm;
  
const app = privateConfig.serviceAccount && initializeApp({
  //@ts-ignore
    credential: cert(privateConfig.serviceAccount),
  });

export { app };
