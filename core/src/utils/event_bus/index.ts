import mitt from "mitt";

// 实例化mitt并导出
// instantiate and export mitt
export const eventBus = mitt();

// 导出路由事件名
// export router events
export { RouterEvents } from "./Events";
