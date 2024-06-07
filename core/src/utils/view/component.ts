import type {
  App,
  DefineComponent,
  ComponentOptionsWithObjectProps,
} from "vue";

/**
 * 注册组件
 * install component
 */
export const withInstall = (
  component: DefineComponent<ComponentOptionsWithObjectProps>,
) => {
  component.install = (app: App) => {
    if (component.name) {
      app.component(component.name, component);
    }
  };
};
