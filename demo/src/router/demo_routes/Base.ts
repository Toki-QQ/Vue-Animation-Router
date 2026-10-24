import type { RouteRecordRaw } from "vue-router";

// 基础demo路由
// base demo route
export const BaseDemoRoute: RouteRecordRaw = {
  path: "/base_demo",
  component: () => import("@/views/base_demo/BaseDemoMain.vue"),
  name: "BaseDemo",
  children: [
    {
      path: "demo_1",
      name: "BaseDemo1",
      component: () => import("@/views/base_demo/BaseDemo_1.vue"),
    },
    {
      path: "demo_2",
      name: "BaseDemo2",
      component: () => import("@/views/base_demo/BaseDemo_2.vue"),
    },
  ],
};
