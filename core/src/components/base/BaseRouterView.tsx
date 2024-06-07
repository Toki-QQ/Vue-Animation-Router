import { defineAnimationRouterView } from "../../utils/view";

// 引入CSS
// import CSS
import BaseRouterViewClass from "./BaseRouterView.module.css";

// 创建基础动画路由
// define base router view
export const BaseRouterView = defineAnimationRouterView({
  name: "base-router-view",
  componentClass: BaseRouterViewClass,
});
