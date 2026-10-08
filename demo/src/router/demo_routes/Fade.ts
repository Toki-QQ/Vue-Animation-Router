import type { RouteRecordRaw } from "vue-router";

// 淡化demo路由
// fade demo route
export const FadeDemoRoute: RouteRecordRaw = {
  path: "/fade_demo",
  component: () => import("@/views/fade_demo/FadeDemoMain.vue"),
  name: "FadeDemo",
  children: [
    {
      path: "demo_1",
      name: "FadeDemo1",
      component: () => import("@/views/fade_demo/FadeDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "FadeDemo2",
      component: () => import("@/views/fade_demo/FadeDemo_2.vue"),
    },
  ],
};
