import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import SlideRouterViewClass from "./SlideRouterView.module.css";

// 创建淡化滑动动画路由
// define slide router view
const SlideRouterView = defineAnimationRouterView({
  name: "SlideRouterView",
  componentClass: SlideRouterViewClass,
});

export { SlideRouterView };
