import * as components from "../components";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VarBaseRouterView: typeof components.BaseRouterView;
    VarFadeRouterView: typeof components.FadeRouterView;
    VarFadeSlideRouterView: typeof components.FadeSlideRouterView;
    VarSlideRouterView: typeof components.SlideRouterView;
  }
}

export {};
