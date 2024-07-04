import components from "./components/components";

import type { App, Plugin } from "vue";

export * from "./utils";
export * from "./components";
export type * from "./types";

export default {
  install: (app: App) => {
    (components as Array<Plugin>).forEach((c) => app.use(c));
  },
};
