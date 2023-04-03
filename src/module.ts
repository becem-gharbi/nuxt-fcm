import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { name, version } from "../package.json";
import type { FirebaseOptions } from "firebase/app";
// Module options TypeScript interface definition
export interface ModuleOptions {
  firebaseOptions: FirebaseOptions;
  vapidKey: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "fcm",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    firebaseOptions: {},
    vapidKey: "",
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/firebase.client"));

    nuxt.options.runtimeConfig.public.fcm = options;
  },
});
