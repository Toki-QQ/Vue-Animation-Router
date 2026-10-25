import path from "path";

import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";

import { OUTPUT_DIR_DIST } from "./build/constant";

/**
 * 获取文件真实路径
 * get the real path of the file
 */
export function pathResolve(dir: string) {
  return path.resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  build: {
    target: "es2015",
    outDir: OUTPUT_DIR_DIST,
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
    sourcemap: true,
    lib: {
      entry: pathResolve("src/index.ts"),
      name: "VAR_Components",
      formats: ["umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "mitt", "vue-router"],
      output: [
        {
          format: "umd",
          entryFileNames: "vue-animation-router.umd.js",
          name: "VAR_Components",
          globals: { vue: "Vue", mitt: "mitt", "vue-router": "VueRouter" },
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] || "";
            if (name.endsWith(".css")) {
              return "vue-animation-router.umd.css";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
        {
          format: "iife",
          entryFileNames: "vue-animation-router.iife.js",
          name: "VAR_Components",
          globals: { vue: "Vue", mitt: "mitt", "vue-router": "VueRouter" },
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] || "";
            if (name.endsWith(".css")) {
              return "vue-animation-router.iife.css";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      ],
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
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
  plugins: [Vue(), VueJsx()],
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
});
