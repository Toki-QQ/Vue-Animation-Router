import type { RouteRecordRaw } from "vue-router";

// 缩放放大demo路由
// zoom in demo route
export const ZoomInDemoRoute: RouteRecordRaw = {
  path: "/zoom_in_demo",
  component: () => import("@/views/zoom_in_demo/ZoomInDemoMain.vue"),
  name: "ZoomInDemo",
  children: [
    {
      path: "demo_1",
      name: "ZoomInDemo1",
      component: () => import("@/views/zoom_in_demo/ZoomInDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "ZoomInDemo2",
      component: () => import("@/views/zoom_in_demo/ZoomInDemo_2.vue"),
    },
  ],
};
