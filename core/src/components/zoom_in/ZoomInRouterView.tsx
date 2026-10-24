import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import ZoomInRouterViewClass from "./ZoomInRouterView.module.css";

// 创建缩放放大动画路由
// define zoom in router view
const ZoomInRouterView = defineAnimationRouterView({
  name: "ZoomInRouterView",
  componentClass: ZoomInRouterViewClass,
});

export { ZoomInRouterView };
