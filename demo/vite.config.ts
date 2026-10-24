import { resolve } from "path";
import { loadEnv, defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import { createHtmlPlugin } from "vite-plugin-html";

import { wrapperEnv } from "./build/util";
import { OUTPUT_DIR } from "./build/constant";

/**
 * 获取文件真实路径
 * get the real path of the file
 */
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

/**
 * Vite配置
 * Vite configuration
 * Reference: https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_DROP_CONSOLE } = wrapperEnv(env);

  return {
    base: "./",
    resolve: {
      alias: [
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
        {
          find: "@public",
          replacement: pathResolve("public") + "/",
        },
      ],
      dedupe: ["vue"],
    },
    plugins: [
      Vue(),
      VueJsx(),
      Components({
        dts: "src/components.d.ts",
        resolvers: [PrimeVueResolver()],
      }),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
        dts: "src/auto-imports.d.ts",
        vueTemplate: true,
      }),
      createHtmlPlugin({
        inject: {
          data: {
            isUMD: mode === "build-umd",
          },
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      include: [],
      exclude: ["vue-demi"],
    },
    build: {
      target: "es2015",
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  };
});
