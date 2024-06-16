import type { BaseTransitionProps, KeepAliveProps } from "vue";
import type { RouterViewProps } from "vue-router";
import type { AnimationRouterViewOptions } from "./AnimationRouterViewOptions";

/**
 * 动画路由视图属性
 * animation router view props
 */
export type AnimationRouterViewProps = Partial<
  AnimationRouterViewOptions &
    RouterViewProps &
    KeepAliveProps &
    Pick<BaseTransitionProps, "mode" | "appear" | "persisted"> & {
      [key: string]: unknown;
    }
>;
