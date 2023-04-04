# Nuxt FCM

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 module for integrating Firebase Cloud messaging. Based on Firebase JS SDK for client side and Firebase Admin SDK for server side.

## Features

- ✔️ Listen to messages via `$fcm` helper
- ✔️ Topic related operations via `useFcmTopic` composable
  - Send messages to a topic
  - Subscribe to a topic
  - Unsubscribe from a topic

## Quick Setup

1. Add `@bg-dev/nuxt-fcm` dependency to your project

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

3. Set `fcm` module config options

- `firebaseConfig` Firebase project configuration
- `vapidKey` Web push credentials [link](https://firebase.google.com/docs/cloud-messaging/js/client?authuser=0#configure_web_credentials_with)
- `serviceAccount` Firebase admin credentials [link](https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk_in_non-google_environments)

4. Add firebase messaging service worker by creating `firebase-messaging-sw.js` file under `public` folder

```js
// /public/firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  // Paste your firebase project configuration
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
```

That's it! You can now use Nuxt Firebase Messaging in your Nuxt app ✨

## Usage

### Authorization

By default all the module's features are inaccessible. Add a server side middleware in order to check the user's role and set the permissions accordingly.

```js
// /server/middleware/fcm.ts

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
When a push message is received and the user is currently on a page for your origin, the message is passed to the page and an onMessage() event is dispatched with the payload of the push message. 
```js
// Note that $fcm is available client side only.

const { $fcm } = useNuxtApp();

$fcm.onMessage(console.log);
```


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
[npm-downloads-src]: https://img.shields.io/npm/dm/@bg-dev/nuxt-fcm.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bg-dev/nuxt-fcm
[license-src]: https://img.shields.io/npm/l/@bg-dev/nuxt-fcm.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bg-dev/nuxt-fcm
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
