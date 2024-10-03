import type { RouteRecordRaw } from "vue-router";

// demo路由
// fade slide y demo route
export const FadeSlideYDemoRoute: RouteRecordRaw = {
  path: "/fade_slide_y_demo",
  component: () => import("@/views/fade_slide_y_demo/FadeSlideYDemoMain.vue"),
  name: "FadeSlideYDemo",
  children: [
    {
      path: "demo_1",
      name: "FadeSlideYDemo1",
      component: () => import("@/views/fade_slide_y_demo/FadeSlideYDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "FadeSlideYDemo2",
      component: () => import("@/views/fade_slide_y_demo/FadeSlideYDemo_2.vue"),
    },
  ],
};
