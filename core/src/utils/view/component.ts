import type { App, Plugin } from "vue";

import type { AnimationRouterView } from "@/types";

/**
 * 注册组件
 * install component
 */
export const withInstall = (
  component: AnimationRouterView,
): AnimationRouterView & Plugin => {
  (component as AnimationRouterView & Plugin).install = (app: App) => {
    app.component(component.name as any, component);
  };

  return component as AnimationRouterView & Plugin;
};
