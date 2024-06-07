import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { createAnimationRouter } from "vue-animation-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/base_demo",
    component: () => import("@/views/base_demo/index.vue"),
    name: "BaseDemo",
    children: [
      {
        path: "/demo1",
        name: "BaseDemo1",
        component: () => import("@/views/base_demo/Demo1.vue"),
      },
      {
        path: "/demo2",
        name: "BaseDemo2",
        component: () => import("@/views/base_demo/Demo2.vue"),
      },
    ],
  },
];

export const router = createAnimationRouter({
  history: createWebHistory(),
  routes,
});
