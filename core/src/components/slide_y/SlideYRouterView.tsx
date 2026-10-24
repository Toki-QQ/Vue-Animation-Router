import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import SlideYRouterViewClass from "./SlideYRouterView.module.css";

// 创建滑动（纵向）动画路由
// define slide y router view
const SlideYRouterView = defineAnimationRouterView({
  name: "SlideYRouterView",
  componentClass: SlideYRouterViewClass,
});

export { SlideYRouterView };
