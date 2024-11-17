# Nuxt FCM

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module for integrating Firebase Cloud messaging. This module is based on Firebase JS SDK on the client side and Firebase Admin SDK on the server side.

## Features

- ✔️ Listen to messages via `useFcm` composable
- ✔️ Send, subscribe & unsubscribe from topics via `useFcmTopic` composable

## Quick Setup

1. Add dependencies to your project

```bash
# Using npm
npm install --save-dev @bg-dev/nuxt-fcm

# Using yarn
yarn add --dev @bg-dev/nuxt-fcm
```

2. Add `@bg-dev/nuxt-fcm` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@bg-dev/nuxt-fcm"],
});
```

3. Set `fcm` config object

- `firebaseConfig` Firebase project configuration.
- `vapidKey` Public server key provided to push services [docs](https://firebase.google.com/docs/cloud-messaging/js/client?authuser=0#configure_web_credentials_with).
- `serviceAccount` Firebase admin credentials [docs](https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk_in_non-google_environments). You can ignore this property in case the app server is not needed.

4. If you are using an app server, make sure to enable `Cloud messaging API` [docs](https://firebase.google.com/docs/cloud-messaging/server#firebase-admin-sdk-for-fcm).

That's it! You can now use Nuxt FCM in your Nuxt app ✨

## Usage

### Authorization

By default all the topic's related features are inaccessible. Add a server-side middleware to check the user's role and set the permissions accordingly.

```js
// server/middleware/fcm.ts

import { setPermissions } from "#fcm";

export default defineEventHandler((event) => {
  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  });
});
```

### Listen to messages

In the foreground, when a message is received it's passed to the page and the `onMessage` event is dispatched with the payload.

```js
const { onMessage } = useFcm();

onMessage(console.log);
```

In the background, notifications are automatically shown when a message is received. To add custom logic, the service worker can be extended via the `serviceWorkerScript` config option ([source](https://github.com/becem-gharbi/nuxt-fcm/blob/main/src/runtime/server/routes/firebase-messaging-sw.get.ts)).

```js
  // nuxt.config.ts
  fcm: {
    serviceWorkerScript: `
      messaging.onBackgroundMessage((payload) => {
        console.log("Received background message ", payload);
      })

      function onNotificationClick(event) {
        console.log('[firebase-messaging-sw.js] Notification clicked', event)
        event.notification.close();
      }
    `,
  },
```

### Add other Firebase services

You can integrate other Firebase services such as Google Analytics to provide insights into user behavior and engagement stats.

```js
// nuxt.config.ts
// Exclude package from vite optimization

  vite: {
    optimizeDeps: {
      exclude: ["firebase/analytics"],
    },
  },
```

```js
// plugins/analytics.client.ts
// Define a client-side plugin to expose the service's instance

import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const analytics = getAnalytics();

  return {
    provide: {
      analytics,
    },
  };
});
```

## Appendix

- FCM architecture [docs](https://firebase.google.com/docs/cloud-messaging/fcm-architecture)
- Message types [docs](https://firebase.google.com/docs/cloud-messaging/concept-options)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@bg-dev/nuxt-fcm/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bg-dev/nuxt-fcm
[npm-downloads-src]: https://img.shields.io/npm/dt/@bg-dev/nuxt-fcm.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bg-dev/nuxt-fcm
[license-src]: https://img.shields.io/npm/l/@bg-dev/nuxt-fcm.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bg-dev/nuxt-fcm
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
