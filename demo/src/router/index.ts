import type { RouteRecordRaw } from "vue-router";
import { createWebHistory } from "vue-router";
import { createAnimationRouter } from "vue-animation-router/es";

import { BaseDemoRoute } from "./Base";
import { FadeDemoRoute } from "./Fade";
import { SlideDemoRoute } from "./Slide";
import { FadeSlideDemoRoute } from "./FadeSlide";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  BaseDemoRoute,
  FadeDemoRoute,
  SlideDemoRoute,
  FadeSlideDemoRoute,
];

export const router = createAnimationRouter({
  history: createWebHistory(),
  routes,
});
