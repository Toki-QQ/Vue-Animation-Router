import type { RouteRecordRaw } from "vue-router";

// 滑动demo路由
// slide demo route
export const SlideDemoRoute: RouteRecordRaw = {
  path: "/slide_demo",
  component: () => import("@/views/slide_demo/SlideDemoMain.vue"),
  name: "SlideDemo",
  children: [
    {
      path: "demo_1",
      name: "SlideDemo1",
      component: () => import("@/views/slide_demo/SlideDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "SlideDemo2",
      component: () => import("@/views/slide_demo/SlideDemo_2.vue"),
    },
  ],
};
