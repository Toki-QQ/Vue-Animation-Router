import rollupTypescript from "@rollup/plugin-typescript";
import rollupNodeResolve from "@rollup/plugin-node-resolve";
import rollupCommonJS from "@rollup/plugin-commonjs";
import rollupBabel from "@rollup/plugin-babel";
import rollupVue from "rollup-plugin-vue";
import rollupPostCss from "rollup-plugin-postcss";
import rollupTerser from "@rollup/plugin-terser";

import { resolve } from "path";

/** @type {import('rollup').RollupOptions} */
export default {
  input: `./src/index.ts`,
  output: [
    {
      format: "umd",
      name: "vue-animation-router",
      dir: "./dist",
      exports: "named",
      entryFileNames: "[name].js",
      globals: {
        vue: "Vue",
        mitt: "mitt",
        "vue-router": "vue-router",
      },
    },
    {
      format: "umd",
      name: "vue-animation-router",
      dir: "./dist",
      exports: "named",
      entryFileNames: "[name].min.js",
      globals: {
        vue: "Vue",
        mitt: "mitt",
        "vue-router": "vue-router",
      },
      plugins: [rollupTerser()],
    },
  ],
  plugins: [
    rollupTypescript({
      tsconfig: resolve(process.cwd(), "tsconfig.json"),
    }),
    rollupCommonJS(),
    rollupNodeResolve({
      browser: true,
    }),
    rollupVue(),
    rollupBabel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      plugins: ["@vue/babel-plugin-jsx"],
      exclude: "node_modules/**",
    }),
    rollupPostCss({
      dir: "./dist",
      extensions: [".css"],
      modules: true,
    }),
  ],
  external: ["vue", "mitt", "vue-router"],
};
