import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import FadeRouterViewClass from "./FadeRouterView.module.css";

// 创建淡化动画路由
// define fade router view
const FadeRouterView = defineAnimationRouterView({
  name: "fade-router-view",
  componentClass: FadeRouterViewClass,
});

export default FadeRouterView;
