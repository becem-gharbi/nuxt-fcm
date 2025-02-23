import { initializeApp, cert } from 'firebase-admin/app'
import type { PrivateConfig } from '../../types'
import { useRuntimeConfig } from '#imports'

const privateConfig = useRuntimeConfig().fcm as PrivateConfig

const app = privateConfig.serviceAccount && initializeApp({
  credential: cert({
    projectId: privateConfig.serviceAccount.project_id,
    clientEmail: privateConfig.serviceAccount.client_email,
    privateKey: privateConfig.serviceAccount.private_key,
  }),

})

export { app }
