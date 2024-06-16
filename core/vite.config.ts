import { defineConfig, loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Dts from "vite-plugin-dts";
import { resolve } from "path";

import { OUTPUT_DIR_ES, OUTPUT_DIR_LIB } from "./build/constant";
import { wrapperEnv } from "./build/util";

//获取文件真实路径
export function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}

// vite配置 参考文档：https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_DROP_CONSOLE } = wrapperEnv(env);
  return {
    build: {
      lib: {
        entry: pathResolve("src/index.ts"),
        name: "VUE_ANIMATION_ROUTER",
        fileName: "index",
      },
      target: "es2015",
      sourcemap: true,
      rollupOptions: {
        external: ["vue", "mitt", "vue-router", /\.css/],
        output: [
          {
            format: "esm",
            entryFileNames: "[name].mjs",
            preserveModules: true,
            exports: "named",
            dir: OUTPUT_DIR_ES,
          },
          {
            format: "cjs",
            entryFileNames: "[name].js",
            preserveModules: true,
            exports: "named",
            dir: OUTPUT_DIR_LIB,
          },
        ],
      },
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE as boolean,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
      ],
      dedupe: ["vue"],
    },
    plugins: [
      Vue(),
      VueJsx(),
      Dts({
        entryRoot: "./src",
        outDir: [pathResolve("lib"), pathResolve("es")],
        tsconfigPath: "./tsconfig.json",
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      modules: {},
    },
    optimizeDeps: {
      include: [],
      exclude: ["vue-demi"],
    },
  };
});
