import * as components from "../components";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VarBaseRouterView: typeof components.BaseRouterView;
    VarFadeRouterView: typeof components.FadeRouterView;
    VarSlideRouterView: typeof components.SlideRouterView;
    VarSlideYRouterView: typeof components.SlideYRouterView;
    VarFadeSlideRouterView: typeof components.FadeSlideRouterView;
    VarFadeSlideYRouterView: typeof components.FadeSlideYRouterView;
  }
}

export {};
