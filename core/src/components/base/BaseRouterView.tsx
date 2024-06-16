import { defineAnimationRouterView } from "@/utils/view";

// 引入CSS
// import CSS
import BaseRouterViewClass from "./BaseRouterView.module.css";

// 创建基础动画路由
// define base router view
const BaseRouterView = defineAnimationRouterView({
  name: "base-router-view",
  componentClass: BaseRouterViewClass,
});

export default BaseRouterView;
