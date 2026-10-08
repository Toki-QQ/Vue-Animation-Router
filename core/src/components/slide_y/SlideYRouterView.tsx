import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import SlideYRouterViewClass from "./SlideYRouterView.module.css";

// 创建淡化滑动动画路由
// define slide y router view
const SlideYRouterView = defineAnimationRouterView({
  name: "SlideYRouterView",
  componentClass: SlideYRouterViewClass,
});

export { SlideYRouterView };
