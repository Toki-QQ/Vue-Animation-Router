import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import FadeSlideYRouterViewClass from "./FadeSlideYRouterView.module.css";

// 创建淡化滑动动画路由
// define fade slide y router view
const FadeSlideYRouterView = defineAnimationRouterView({
  name: "FadeSlideYRouterView",
  componentClass: FadeSlideYRouterViewClass,
});

export { FadeSlideYRouterView };
