import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import ZoomOutRouterViewClass from "./ZoomOutRouterView.module.css";

// 创建缩放缩小动画路由
// define zoom out router view
const ZoomOutRouterView = defineAnimationRouterView({
  name: "ZoomOutRouterView",
  componentClass: ZoomOutRouterViewClass,
});

export { ZoomOutRouterView };
