# Changelog


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

