import type { Plugin } from "vue";

// 带有install方法的组件
// setup function component with install
export type SFCWithInstall<T> = T & Plugin;
