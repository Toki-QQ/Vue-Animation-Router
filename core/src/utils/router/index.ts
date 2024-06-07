import { createRouter } from "vue-router";
import { RouterEvents, eventBus } from "../event_bus";

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
  // 获取原始路由表
  // get raw routes
  const rawRoute = routerOptions.routes;

  // 创建源路由
  // create raw router
  const rawRouter = createRouter(routerOptions);

  // 代理路由的get处理函数
  // proxy router's get function handler
  const proxyRouterHandler = {
    get(target: Router, key: keyof Router) {
      // 监听对应的router的get调用
      switch (key) {
        case "back":
          eventBus.emit(RouterEvents.ROUTER_BACK);
          break;
        case "push":
          eventBus.emit(RouterEvents.ROUTER_PUSH);
          break;
        case "replace":
          eventBus.emit(RouterEvents.ROUTER_REPLACE);
        case "forward":
          eventBus.emit(RouterEvents.ROUTER_FORWARD);
      }

      return target[key];
    },
  };

  // 监听浏览器前进和后退按钮
  // handlers of browser's back and forward events

  // 通过proxy代理源router
  // proxy raw router
  const router = new Proxy(rawRouter, proxyRouterHandler);

  return router;
};

export { createAnimationRouter };
