import { defineProps, Transition, defineComponent } from "vue";

import type { BaseTransitionProps } from "vue";
import type { RouterViewProps } from "vue-router";

/**
 * 动画路由视图属性
 * animation router view props
 */
export type AnimationRouterViewPorps = AnimationRouterViewOptions &
  RouterViewProps &
  BaseTransitionProps;

/**
 * 创建动画路由视图属性
 * create animation router view props
 *
 * @returns 动画路由视图属性
 * @returns animation router view props
 */
export const defineAnimationRouterViewPorps = () =>
  defineProps<AnimationRouterViewPorps>();
