import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { loadEnv } from "vite";
import { wrapperEnv } from "./build/util";
import { OUTPUT_DIR } from "./build/constant";

//获取文件真实路径
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// vite配置 参考文档：https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_DROP_CONSOLE } = wrapperEnv(env);
  return {
    resolve: {
      alias: [
        /* {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        }, */
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
      modules: {},
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
  };
});
