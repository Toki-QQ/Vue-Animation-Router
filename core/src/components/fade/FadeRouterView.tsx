import { defineAnimationRouterView } from "../../utils/view";

// 引入CSS
// import CSS
import FadeRouterViewClass from "./FadeRouterView.module.css";

export const FadeRouterView = defineAnimationRouterView({
  name: "fade-router-view",
  componentClass: FadeRouterViewClass,
});
