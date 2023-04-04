import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addServerHandler,
  addTemplate,
  addImportsDir,
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

  defaults: {
    firebaseConfig: {},
    vapidKey: "",
    serviceAccount: {},
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    addPlugin(resolve(runtimeDir, "firebase.client"));

    addImportsDir(resolve(runtimeDir, "composables"));

    addServerHandler({
      route: "/api/fcm/topic/send",
      handler: resolve(runtimeDir, "server/api/fcm/topic/send.post"),
    });

    addServerHandler({
      route: "/api/fcm/topic/subscribe",
      handler: resolve(runtimeDir, "server/api/fcm/topic/subscribe.post"),
    });

    addServerHandler({
      route: "/api/fcm/topic/unsubscribe",
      handler: resolve(runtimeDir, "server/api/fcm/topic/unsubscribe.post"),
    });

    nuxt.hook("nitro:config", (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {};

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
          `const handleError: typeof import('${resolve(
            runtimeDir,
            "server/utils"
          )}').handleError`,
          "}",
        ].join("\n"),
    });

    nuxt.hook("prepare:types", (options) => {
      options.references.push({
        path: resolve(nuxt.options.buildDir, "types/fcm.d.ts"),
      });
    });

    nuxt.options.runtimeConfig = defu(nuxt.options.runtimeConfig, {
      app: {},

      fcm: {
        serviceAccount: options.serviceAccount,
      },

      public: {
        fcm: {
          firebaseConfig: options.firebaseConfig,
          vapidKey: options.vapidKey,
        },
      },
    });
  },
});
