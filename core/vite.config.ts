import path from "path";
import { fileURLToPath } from "node:url";

import { defineConfig, loadEnv } from "vite";
import { glob } from "glob";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import { OUTPUT_DIR_ES, OUTPUT_DIR_CJS } from "./build/constant";
import { wrapperEnv } from "./build/util";

// 动态生成入口对象
// dynamic generate entry object
const entries = Object.fromEntries(
  glob
    .sync("src/**/*.{ts,tsx}")
    .map((file) => [
      path.relative(
        "src",
        file.slice(0, file.length - path.extname(file).length),
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
);

/**
 * 获取文件真实路径
 * get the real path of the file
 */
export function pathResolve(dir: string) {
  return path.resolve(process.cwd(), ".", dir);
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
    build: {
      target: "es2015",
      lib: {
        entry: entries,
      },
      cssCodeSplit: true,
      sourcemap: true,
      rollupOptions: {
        external: ["vue", "mitt", "vue-router"],
        preserveEntrySignatures: "strict",
        output: [
          {
            format: "esm",
            entryFileNames: "[name].mjs",
            chunkFileNames: "[name].mjs",
            assetFileNames: (assetInfo) => {
              const originalPath = (assetInfo.names?.[0] || "").replace(
                /\\/g,
                "/",
              );

              return originalPath
                .replace(/^src\//, "")
                .replace(/\.module\.css$/, ".css");
            },
            preserveModules: true,
            preserveModulesRoot: "src",
            exports: "named",
            dir: OUTPUT_DIR_ES,
          },
          {
            format: "cjs",
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: (assetInfo) => {
              const originalPath = (assetInfo.names?.[0] || "").replace(
                /\\/g,
                "/",
              );

              return originalPath
                .replace(/^src\//, "")
                .replace(/\.module\.css$/, ".css");
            },
            preserveModules: true,
            preserveModulesRoot: "src",
            exports: "named",
            dir: OUTPUT_DIR_CJS,
          },
        ],
      },
      terserOptions: {},
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
      libInjectCss(),
      Vue(),
      VueJsx(),
      Dts({
        entryRoot: "./src",
        outDir: [pathResolve(OUTPUT_DIR_ES), pathResolve(OUTPUT_DIR_CJS)],
        tsconfigPath: "./tsconfig.json",
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      modules: {
        generateScopedName: "[name]__[local]",
      },
    },
    optimizeDeps: {
      include: [],
      exclude: ["vue-demi"],
    },
  };
});
