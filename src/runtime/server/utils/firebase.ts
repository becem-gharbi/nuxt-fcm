import { initializeApp, cert } from 'firebase-admin/app'
import type { PrivateConfig } from '../../types'
import { useRuntimeConfig } from '#imports'

const privateConfig = useRuntimeConfig().fcm as PrivateConfig

const app = privateConfig.serviceAccount && initializeApp({
  // @ts-ignore
  credential: cert(privateConfig.serviceAccount)
})

export { app }
