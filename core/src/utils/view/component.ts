import type { App, DefineComponent } from "vue";

import type { SFCWithInstall } from "@/types";

/**
 * 注册组件
 * install component
 */
export const withInstall = <T>(component: DefineComponent<T>) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name as any, component);
  };

  return component as SFCWithInstall<T>;
};
