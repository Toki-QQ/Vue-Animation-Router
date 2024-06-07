import { defineAnimationRouterView } from "../../utils/view";

// 引入CSS
// import CSS
import FadeSlideRouterViewClass from "./FadeSlideRouterView.module.css";

export const FadeSlideRouterView = defineAnimationRouterView({
  name: "fade-slide-router-view",
  componentClass: FadeSlideRouterViewClass,
});
