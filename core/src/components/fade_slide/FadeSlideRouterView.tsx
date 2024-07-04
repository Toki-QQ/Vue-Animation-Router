import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import FadeSlideRouterViewClass from "./FadeSlideRouterView.module.css";

// 创建淡化滑动动画路由
// define fade slide router view
const FadeSlideRouterView = defineAnimationRouterView({
  name: "FadeSlideRouterView",
  componentClass: FadeSlideRouterViewClass,
});

export { FadeSlideRouterView };
