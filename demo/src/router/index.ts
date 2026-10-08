import type { RouteRecordRaw } from "vue-router";
import { createWebHistory } from "vue-router";
import { createAnimationRouter } from "vue-animation-router/es";

import { BaseDemoRoute } from "./demo_routes/Base";
import { FadeDemoRoute } from "./demo_routes/Fade";
import { SlideDemoRoute } from "./demo_routes/Slide";
import { SlideYDemoRoute } from "./demo_routes/SlideY";
import { FadeSlideDemoRoute } from "./demo_routes/FadeSlide";
import { FadeSlideYDemoRoute } from "./demo_routes/FadeSlideY";

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
];

export const router = createAnimationRouter({
  history: createWebHistory(),
  routes,
});
