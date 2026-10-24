import type { RouteRecordRaw } from "vue-router";

// 滑动Y轴demo路由
// slide y demo route
export const SlideYDemoRoute: RouteRecordRaw = {
  path: "/slide_y_demo",
  component: () => import("@/views/slide_y_demo/SlideYDemoMain.vue"),
  name: "SlideYDemo",
  children: [
    {
      path: "demo_1",
      name: "SlideYDemo1",
      component: () => import("@/views/slide_y_demo/SlideYDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "SlideYDemo2",
      component: () => import("@/views/slide_y_demo/SlideYDemo_2.vue"),
    },
  ],
};
