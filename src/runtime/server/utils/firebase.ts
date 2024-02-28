import { initializeApp, cert } from "firebase-admin/app";
import { useRuntimeConfig } from '#imports'
import type { PrivateConfig} from '../../types'
 
const privateConfig = useRuntimeConfig().fcm as PrivateConfig;
  
const app = privateConfig.serviceAccount && initializeApp({
  //@ts-ignore
    credential: cert(privateConfig.serviceAccount),
  });

export { app };
