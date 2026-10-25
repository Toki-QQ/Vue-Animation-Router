import type { RouteRecordRaw } from "vue-router";
import { createWebHashHistory } from "vue-router";
import { createAnimationRouter } from "vue-animation-router/es";

import { BaseDemoRoute } from "./demo_routes/Base";
import { FadeDemoRoute } from "./demo_routes/Fade";
import { SlideDemoRoute } from "./demo_routes/Slide";
import { SlideYDemoRoute } from "./demo_routes/SlideY";
import { FadeSlideDemoRoute } from "./demo_routes/FadeSlide";
import { FadeSlideYDemoRoute } from "./demo_routes/FadeSlideY";
import { ZoomInDemoRoute } from "./demo_routes/ZoomIn";
import { ZoomOutDemoRoute } from "./demo_routes/ZoomOut";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  BaseDemoRoute,
  FadeDemoRoute,
  SlideDemoRoute,
  SlideYDemoRoute,
  FadeSlideDemoRoute,
  FadeSlideYDemoRoute,
  ZoomInDemoRoute,
  ZoomOutDemoRoute,
];

export const router = createAnimationRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL || "/"),
  routes,
});
