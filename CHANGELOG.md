# Changelog


## v0.2.14

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.13...v0.2.14)

### 🚀 Enhancements

- Upgrade `firebase` to v11 and `firebase-admin` to v13 ([9a6bf7b](https://github.com/becem-gharbi/nuxt-fcm/commit/9a6bf7b))

### 🔥 Performance

- Generate service worker at build time ([669e6b8](https://github.com/becem-gharbi/nuxt-fcm/commit/669e6b8))

### 🏡 Chore

- **lint:** Fix ([4e30451](https://github.com/becem-gharbi/nuxt-fcm/commit/4e30451))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.2.13

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.12...v0.2.13)

### 🚀 Enhancements

- Support listen to notification click on background ([#20](https://github.com/becem-gharbi/nuxt-fcm/pull/20))

### 💅 Refactors

- No significant change ([95a42fa](https://github.com/becem-gharbi/nuxt-fcm/commit/95a42fa))

### 🏡 Chore

- **playground:** Update default options ([15a6c26](https://github.com/becem-gharbi/nuxt-fcm/commit/15a6c26))

### ❤️ Contributors

- Becem <becem.gharbi@live.com>
- Becem-gharbi <becem.gharbi@live.com>

## v0.2.12

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.11...v0.2.12)

### 🩹 Fixes

- Upgrade deprecated `sendToTopic` to `send` ([075ccce](https://github.com/becem-gharbi/nuxt-fcm/commit/075ccce))

### 🏡 Chore

- **playground:** Update FcmTest ([7db8d42](https://github.com/becem-gharbi/nuxt-fcm/commit/7db8d42))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.2.11

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.10...v0.2.11)

### 🚀 Enhancements

- Allow extending service worker ([1215541](https://github.com/becem-gharbi/nuxt-fcm/commit/1215541))

### 🩹 Fixes

- Avoid duplicate background notifications ([f7566af](https://github.com/becem-gharbi/nuxt-fcm/commit/f7566af))

### 📖 Documentation

- Update README ([9dcd2b5](https://github.com/becem-gharbi/nuxt-fcm/commit/9dcd2b5))

### 🏡 Chore

- Allow compatibility with `nuxt` v4 ([1ab8462](https://github.com/becem-gharbi/nuxt-fcm/commit/1ab8462))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.2.10

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.9...v0.2.10)

### 💅 Refactors

- Change server validation errors ([2bc3ae8](https://github.com/becem-gharbi/nuxt-fcm/commit/2bc3ae8))

### 🏡 Chore

- **sw:** Sync firebase version ([d764035](https://github.com/becem-gharbi/nuxt-fcm/commit/d764035))
- **lint:** Migrate to `@nuxt/eslint-config` ([868800b](https://github.com/becem-gharbi/nuxt-fcm/commit/868800b))
- **playground:** Fix `import.meta` not allowed ([e33040a](https://github.com/becem-gharbi/nuxt-fcm/commit/e33040a))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.2.9

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.8...v0.2.9)

### 🩹 Fixes

- Undefined navigator.serviceWorker in incognito mode ([#12](https://github.com/becem-gharbi/nuxt-fcm/pull/12))

### 💅 Refactors

- Handle potential cases where messaging instance undefined ([cdd06d2](https://github.com/becem-gharbi/nuxt-fcm/commit/cdd06d2))
- Check navigator before `getMessaging` ([3474b09](https://github.com/becem-gharbi/nuxt-fcm/commit/3474b09))

### 🌊 Types

- Solve typecheck issues ([088fb66](https://github.com/becem-gharbi/nuxt-fcm/commit/088fb66))

### 🏡 Chore

- Use `@nuxtjs/eslint-config-typescript` for linting ([04298eb](https://github.com/becem-gharbi/nuxt-fcm/commit/04298eb))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))
- Marc

## v0.2.8

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.7...v0.2.8)

### 🔥 Performance

- Avoid endpoints registration if serviceAccount is not set ([0508ae8](https://github.com/becem-gharbi/nuxt-fcm/commit/0508ae8))

### 💅 Refactors

- Remove serviceAccount not set warning ([a3735f3](https://github.com/becem-gharbi/nuxt-fcm/commit/a3735f3))
- No significant change ([5817ffe](https://github.com/becem-gharbi/nuxt-fcm/commit/5817ffe))

### 🏡 Chore

- **deps-dev:** Bump postcss from 8.4.28 to 8.4.31 ([dc66737](https://github.com/becem-gharbi/nuxt-fcm/commit/dc66737))
- **deps-dev:** Bump undici from 5.23.0 to 5.27.0 ([75a56ed](https://github.com/becem-gharbi/nuxt-fcm/commit/75a56ed))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.2.7

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.6...v0.2.7)

### 🚀 Enhancements

- Dynamically serve firebase-messaging service worker ([90d1263](https://github.com/becem-gharbi/nuxt-fcm/commit/90d1263))

### 🩹 Fixes

- Set status code to 500 on server errors ([77cfee1](https://github.com/becem-gharbi/nuxt-fcm/commit/77cfee1))

### 📖 Documentation

- Add enable `Cloud Messaging` note ([537d2af](https://github.com/becem-gharbi/nuxt-fcm/commit/537d2af))
- Remove service worker setup ([15fc80b](https://github.com/becem-gharbi/nuxt-fcm/commit/15fc80b))

### 🏡 Chore

- **deps-dev:** Bump protobufjs from 6.11.3 to 6.11.4 ([7189f82](https://github.com/becem-gharbi/nuxt-fcm/commit/7189f82))
- Upgrade dependencies ([a62da6f](https://github.com/becem-gharbi/nuxt-fcm/commit/a62da6f))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>
- Becem <becem.gharbi@live.com>

## v0.2.6

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.5...v0.2.6)


### 🩹 Fixes

  - Handle undefined `messaging` on ssr ([a81395c](https://github.com/becem-gharbi/nuxt-fcm/commit/a81395c))

### 🏡 Chore

  - Upgrade dependencies ([0d2c6f9](https://github.com/becem-gharbi/nuxt-fcm/commit/0d2c6f9))

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v0.2.5

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.4...v0.2.5)


### 🩹 Fixes

  - Check serviceAccount before firebase admin init ([54511e8](https://github.com/becem-gharbi/nuxt-fcm/commit/54511e8))

### 🏡 Chore

  - Upgrade dependencies ([127912a](https://github.com/becem-gharbi/nuxt-fcm/commit/127912a))

### ❤️  Contributors

- Becem-gharbi

## v0.2.4

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.3...v0.2.4)


### 📖 Documentation

  - Update readme ([e57f14d](https://github.com/becem-gharbi/nuxt-fcm/commit/e57f14d))

### ❤️  Contributors

- Becem-gharbi

## v0.2.3

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.2...v0.2.3)


### 🩹 Fixes

  - Set firebase-admin as peer dep ([40d48f2](https://github.com/becem-gharbi/nuxt-fcm/commit/40d48f2))

### 💅 Refactors

  - Remove analytics, can be implemented externally ([d51038e](https://github.com/becem-gharbi/nuxt-fcm/commit/d51038e))
  - Rename onMessageReceived to onMessage & getRegistrationToken to getToken ([9b2096e](https://github.com/becem-gharbi/nuxt-fcm/commit/9b2096e))
  - Code refactor ([ab5e4b4](https://github.com/becem-gharbi/nuxt-fcm/commit/ab5e4b4))

### 📖 Documentation

  - Add module extension section ([038e171](https://github.com/becem-gharbi/nuxt-fcm/commit/038e171))
  - Update readme ([47d4ed5](https://github.com/becem-gharbi/nuxt-fcm/commit/47d4ed5))

### ❤️  Contributors

- Becem-gharbi

## v0.2.2

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.1...v0.2.2)


### 🩹 Fixes

  - Ask notification permission on page load ([dc5ae7f](https://github.com/becem-gharbi/nuxt-fcm/commit/dc5ae7f))

### ❤️  Contributors

- Becem-gharbi

## v0.2.1

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.2.0...v0.2.1)


### 🩹 Fixes

  - Add firebase as peer dependency ([8cd7976](https://github.com/becem-gharbi/nuxt-fcm/commit/8cd7976))

### ❤️  Contributors

- Becem-gharbi

## v0.2.0

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.1.4...v0.2.0)


### 💅 Refactors

  - ⚠️  Add useFcm composable in favor of fcm helper ([efda111](https://github.com/becem-gharbi/nuxt-fcm/commit/efda111))

#### ⚠️  Breaking Changes

  - ⚠️  Add useFcm composable in favor of fcm helper ([efda111](https://github.com/becem-gharbi/nuxt-fcm/commit/efda111))

### ❤️  Contributors

- Becem-gharbi

## v0.1.4

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.1.3...v0.1.4)


### 💅 Refactors

  - Set firebase as peer dep ([28c5fdc](https://github.com/becem-gharbi/nuxt-fcm/commit/28c5fdc))

### ❤️  Contributors

- Becem-gharbi

## v0.1.3

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.1.2...v0.1.3)


### 🩹 Fixes

  - Catch getToken errors ([0a71f7b](https://github.com/becem-gharbi/nuxt-fcm/commit/0a71f7b))

### ❤️  Contributors

- Becem-gharbi

## v0.1.2

[compare changes](https://github.com/becem-gharbi/nuxt-fcm/compare/v0.1.1...v0.1.2)


### 🚀 Enhancements

  - Expose firebase instance via app property of $fcm ([8f7903e](https://github.com/becem-gharbi/nuxt-fcm/commit/8f7903e))
  - Disable server app optionally ([3f081e1](https://github.com/becem-gharbi/nuxt-fcm/commit/3f081e1))

### 🩹 Fixes

  - Import only used deps in firebase server utility ([b99f168](https://github.com/becem-gharbi/nuxt-fcm/commit/b99f168))

### 💅 Refactors

  - Add warning on unfound required module options ([b76cce4](https://github.com/becem-gharbi/nuxt-fcm/commit/b76cce4))

### 📖 Documentation

  - Update readme ([70846cc](https://github.com/becem-gharbi/nuxt-fcm/commit/70846cc))

### 🏡 Chore

  - Set module access to public ([785eecd](https://github.com/becem-gharbi/nuxt-fcm/commit/785eecd))

### ❤️  Contributors

- Becem-gharbi

## v0.1.1


### 🚀 Enhancements

  - Add firebase plugin & messaging service worker ([4977bd7](https://github.com/becem-gharbi/nuxt-fcm/commit/4977bd7))
  - Add firebase admin utility ([333a54b](https://github.com/becem-gharbi/nuxt-fcm/commit/333a54b))
  - Provide registrationToken & onMessage listener ([eb3240b](https://github.com/becem-gharbi/nuxt-fcm/commit/eb3240b))
  - Add topic send/subscribe/unsubscribe ([6893803](https://github.com/becem-gharbi/nuxt-fcm/commit/6893803))

### 🩹 Fixes

  - Set fcm helper types ([5112510](https://github.com/becem-gharbi/nuxt-fcm/commit/5112510))
  - Add authorization params to useFcmTopic methods ([54df2b3](https://github.com/becem-gharbi/nuxt-fcm/commit/54df2b3))

### 💅 Refactors

  - Rename firebaseOptions to firebaseConfig ([153ac98](https://github.com/becem-gharbi/nuxt-fcm/commit/153ac98))
  - Create client only FcmTest component ([dbf3c98](https://github.com/becem-gharbi/nuxt-fcm/commit/dbf3c98))
  - Add server side validation ([158a6f0](https://github.com/becem-gharbi/nuxt-fcm/commit/158a6f0))
  - Add server side error handling ([7e493e4](https://github.com/becem-gharbi/nuxt-fcm/commit/7e493e4))
  - Add permission management ([c5549b8](https://github.com/becem-gharbi/nuxt-fcm/commit/c5549b8))

### 📖 Documentation

  - Update Readme ([5c0f4f3](https://github.com/becem-gharbi/nuxt-fcm/commit/5c0f4f3))

### 🏡 Chore

  - Update package.json ([e910eb4](https://github.com/becem-gharbi/nuxt-fcm/commit/e910eb4))
  - Add playground/public to gitignore ([faf68ce](https://github.com/becem-gharbi/nuxt-fcm/commit/faf68ce))
  - Remove linting & test from release script ([35b9ab4](https://github.com/becem-gharbi/nuxt-fcm/commit/35b9ab4))

### ❤️  Contributors

- Becem-gharbi

