import type { Messaging } from 'firebase/messaging'
import type { FirebaseOptions } from 'firebase/app'

export type PublicConfig = {
  firebaseConfig: FirebaseOptions
  vapidKey: string
}

export type PrivateConfig = {
  serviceAccount?: {
    project_id?: string
    client_email?: string
    private_key?: string
  }
  serviceWorkerScript?: string
}

export type Fcm = {
  messaging?: Messaging
}

export type Entity = 'topic'

export type Permission = 'send' | 'subscribe' | 'unsubscribe'

export interface FcmContext {
  permissions: {
    topic: {
      send: boolean
      subscribe: boolean
      unsubscribe: boolean
    }
  }
}

declare module '#app' {
  interface NuxtApp {
    $fcm: Fcm
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $fcm: Fcm
  }
}
