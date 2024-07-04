import type { AnimationConfigurations } from "./AnimationConfigurations";
/**
 * 动画路由视图配置
 * animation router view options
 */
export interface AnimationRouterViewOptions {
  // 动画配置
  // animation configurations
  animation: AnimationConfigurations;

  // 是否保活
  // is keeping alive
  keepAlive: boolean;

  // 动画进度步长，用于emit onProgress
  // animation progress step for emit onProgress
  animationProgressStep: number;
}
