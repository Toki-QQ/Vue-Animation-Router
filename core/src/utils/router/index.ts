import { createRouter } from "vue-router";
import { RouterEvents, eventBus } from "@/utils/event_bus";

import type { RouterOptions, Router } from "vue-router";

/**
 * 创建代理路由
 * create router proxy
 *
 * @param routerOptions 路由配置项
 * @param routerOptions router options
 *
 * @return Router 代理路由
 * @return Router proxy router
 */
const createAnimationRouter = (routerOptions: RouterOptions): Router => {
  // 当前路由记录的位置
  // current history position
  let currentPosition = history.state?.position ?? 0;

  // 创建源路由
  // create raw router
  const router = createRouter(routerOptions);

  // 代理路由的get处理函数
  // proxy router's get function handler
  /* const proxyRouterHandler = {
    get(target: Router, key: keyof Router) {
      // 监听对应的router的get调用
      switch (key) {
        case "back":
          // eventBus.emit(RouterEvents.ROUTER_BACK);
          break;
        case "push":
          // eventBus.emit(RouterEvents.ROUTER_FORWARD);
          break;
        case "replace":
          // eventBus.emit(RouterEvents.ROUTER_BACK);
          break;
        case "forward":
          // eventBus.emit(RouterEvents.ROUTER_FORWARD);
          break;
      }

      return target[key];
    },
  }; */

  // 通过proxy代理源router
  // proxy raw router
  // const router = new Proxy(rawRouter, proxyRouterHandler);

  // 创建用于监听路由变化的守卫
  // create guard to listen route change
  router.beforeEach((to, from) => {
    let emitName = RouterEvents.ROUTER_FORWARD;

    // 判断当前位置是否小于历史记录的位置，如果是则说明是后退操作
    // if current position is less than history position, it means back operation
    if (history.state?.position < currentPosition) {
      emitName = RouterEvents.ROUTER_BACK;
    }

    eventBus.emit(emitName);
  });

  router.afterEach(() => {
    // 更新当前位置
    currentPosition = history.state?.position ?? 0;
  });

  return router;
};

export { createAnimationRouter };
