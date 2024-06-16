import * as components from "./components";

import type { App, ComponentOptionsWithObjectProps } from "vue";
import type { SFCWithInstall } from "@/types";

export * from "./utils";
export * from "./components";
export type * from "./types";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(
        (
          components as {
            [key: string]: SFCWithInstall<ComponentOptionsWithObjectProps>;
          }
        )[c],
      );
    }
  },
};
