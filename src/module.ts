import { fileURLToPath } from 'node:url'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addServerHandler,
  addTemplate,
  addImportsDir,
  logger,
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'
import type { PublicConfig, PrivateConfig } from './runtime/types'

export interface ModuleOptions extends PrivateConfig, PublicConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'fcm',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    if (!options.firebaseConfig) {
      logger.warn('[nuxt-fcm] Please make sure to set firebaseConfig')
    }

    if (!options.vapidKey) {
      logger.warn('[nuxt-fcm] Please make sure to set vapidKey')
    }

    nuxt.options.runtimeConfig = defu(nuxt.options.runtimeConfig, {
      app: {},

      fcm: {
        serviceAccount: options.serviceAccount,
        serviceWorkerScript: options.serviceWorkerScript,
      },

      public: {
        fcm: {
          firebaseConfig: options.firebaseConfig,
          vapidKey: options.vapidKey,
        },
      },
    })

    addPlugin(resolve(runtimeDir, 'plugins/firebase.client'))

    addImportsDir(resolve(runtimeDir, 'composables'))

    if (options.serviceAccount) {
      addServerHandler({
        route: '/api/fcm/topic/send',
        handler: resolve(runtimeDir, 'server/api/fcm/topic/send.post'),
      })

      addServerHandler({
        route: '/api/fcm/topic/subscribe',
        handler: resolve(runtimeDir, 'server/api/fcm/topic/subscribe.post'),
      })

      addServerHandler({
        route: '/api/fcm/topic/unsubscribe',
        handler: resolve(runtimeDir, 'server/api/fcm/topic/unsubscribe.post'),
      })
    }

    addServerHandler({
      route: '/firebase-messaging-sw.js',
      handler: resolve(runtimeDir, 'server/routes/firebase-messaging-sw.get'),
    })

    nuxt.options.nitro = defu(
      {
        alias: {
          '#fcm': resolve('./runtime/server/utils'),
        },
      },
      nuxt.options.nitro,
    )

    addTemplate({
      filename: 'types/fcm.d.ts',
      getContents: () =>
        [
          'declare module \'#fcm\' {',
          `const app: typeof import('${resolve(runtimeDir, 'server/utils')}').app`,
          `const setPermissions: typeof import('${resolve(runtimeDir, 'server/utils')}').setPermissions`,
          `const checkPermission: typeof import('${resolve(runtimeDir, 'server/utils')}').checkPermission`,
          '}',
        ].join('\n'),
    })

    nuxt.hook('prepare:types', (options) => {
      options.references.push({
        path: resolve(nuxt.options.buildDir, 'types/fcm.d.ts'),
      })
    })
  },
})
