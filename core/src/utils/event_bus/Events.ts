/**
 * 路由事件名
 * router events
 */
enum RouterEvents {
  // 路由替换事件
  // router replace event
  ROUTER_REPLACE = "__VAR_RouterReplace",

  // 路由跳转事件
  // router push event
  ROUTER_PUSH = "__VAR_RouterPush",

  // 路由返回事件
  // router back event
  ROUTER_BACK = "__VAR_RouterBack",

  // 路由前进事件
  // router forward event
  ROUTER_FORWARD = "__VAR_RouterForward",
}

/**
 * 导出
 * export
 */
export { RouterEvents };
