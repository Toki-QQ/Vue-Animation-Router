import type { RouteRecordRaw } from "vue-router";

// 淡化滑动demo路由
// fade slide demo route
export const FadeSlideDemoRoute: RouteRecordRaw = {
  path: "/fade_slide_demo",
  component: () => import("@/views/fade_slide_demo/FadeSlideDemoMain.vue"),
  name: "FadeSlideDemo",
  children: [
    {
      path: "demo_1",
      name: "FadeSlideDemo1",
      component: () => import("@/views/fade_slide_demo/FadeSlideDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "FadeSlideDemo2",
      component: () => import("@/views/fade_slide_demo/FadeSlideDemo_2.vue"),
    },
  ],
};
