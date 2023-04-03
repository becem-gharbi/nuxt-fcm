import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addServerHandler,
  addTemplate,
} from "@nuxt/kit";
import { name, version } from "../package.json";
import { defu } from "defu";
import type { PublicConfig, PrivateConfig } from "./runtime/types";

export interface ModuleOptions extends PrivateConfig, PublicConfig {}

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
    serviceAccount: {},
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    addPlugin(resolve(runtimeDir, "firebase.client"));

    addServerHandler({
      route: "/api/fcm/send",
      handler: resolve(runtimeDir, "server/api/fcm/send.post"),
    });

    //Create virtual imports for server-side
    nuxt.hook("nitro:config", (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {};

      // Inline module runtime in Nitro bundle
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === "object" ? nitroConfig.externals : {},
        {
          inline: [resolve(runtimeDir)],
        }
      );
      nitroConfig.alias["#fcm"] = resolve(runtimeDir, "server/utils");
    });

    addTemplate({
      filename: "types/fcm.d.ts",
      getContents: () =>
        [
          "declare module '#fcm' {",
          `const app: typeof import('${resolve(
            runtimeDir,
            "server/utils"
          )}').app`,
          "}",
        ].join("\n"),
    });

    // Register #fcm types
    nuxt.hook("prepare:types", (options) => {
      options.references.push({
        path: resolve(nuxt.options.buildDir, "types/fcm.d.ts"),
      });
    });

    //Initialize the module options
    nuxt.options.runtimeConfig = defu(nuxt.options.runtimeConfig, {
      app: {},

      fcm: {
        serviceAccount: options.serviceAccount,
      },

      public: {
        fcm: {
          firebaseOptions: options.firebaseOptions,
          vapidKey: options.vapidKey,
        },
      },
    });
  },
});
