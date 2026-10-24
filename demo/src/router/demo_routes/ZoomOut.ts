import type { RouteRecordRaw } from "vue-router";

// 缩放缩小demo路由
// zoom out demo route
export const ZoomOutDemoRoute: RouteRecordRaw = {
  path: "/zoom_out_demo",
  component: () => import("@/views/zoom_out_demo/ZoomOutDemoMain.vue"),
  name: "ZoomOutDemo",
  children: [
    {
      path: "demo_1",
      name: "ZoomOutDemo1",
      component: () => import("@/views/zoom_out_demo/ZoomOutDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "ZoomOutDemo2",
      component: () => import("@/views/zoom_out_demo/ZoomOutDemo_2.vue"),
    },
  ],
};
