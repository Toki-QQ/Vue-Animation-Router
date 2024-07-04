import type { ComponentObjectPropsOptions, ComponentPropsOptions } from "vue";
import type { AnimationRouterViewProps } from "@/types";

// 动画路由视图默认属性
// default props of animation router view
const ANIMATION_ROUTER_VIEW_DEFAULT_PROPS:
  | ComponentObjectPropsOptions<AnimationRouterViewProps>
  | ComponentPropsOptions<AnimationRouterViewProps> = {
  // 路由视图默认动画配置
  // router view's default animation configuration
  animation: {
    default: {
      // 返回操作动画配置
      // back animation configuration
      backTotalDuration: 1,
      backEnterDuration: undefined,
      backLeaveDuration: undefined,
      backEnterDelay: 0,
      backLeaveDelay: 0,
      backEnterTimingFunction: "linear",
      backLeaveTimingFunction: "linear",

      // 前进操作动画配置
      // forward animation configuration
      forwardTotalDuration: 1,
      forwardEnterDuration: undefined,
      forwardLeaveDuration: undefined,
      forwardEnterDelay: 0,
      forwardLeaveDelay: 0,
      forwardEnterTimingFunction: "linear",
      forwardLeaveTimingFunction: "linear",
    },
    required: false,
  },

  // 动画路由视图的切换模式
  // router view's default transition mode
  mode: {
    default: "out-in",
    required: false,
  },

  // 是否默认显示动画路由视图
  // router view's default appear
  appear: {
    default: false,
    required: false,
  },

  // 是否开启路由视图的 keep alive
  // router view's default keep alive
  keepAlive: {
    default: false,
    required: false,
  },

  // 路由名称
  // route's name
  name: {
    default: undefined,
    required: false,
  },

  // 路由对象
  // route
  route: {
    default: undefined,
    required: false,
  },

  // keep alive状态下的缓存列表
  // keep alive include
  include: {
    default: undefined,
    required: false,
  },

  // keep alive状态下的缓存排除列表
  // keep alive exclude
  exclude: {
    default: undefined,
    required: false,
  },

  // 动画进度步长，单位秒，用于emit onProgress
  // animation progress step, unit second, used to emit onProgress
  animationProgressStep: {
    default: 0.01,
    required: false,
  },
};

// 创建动画路由视图属性
// create props of animation router view
export const defineAnimationRouterViewProps = (
  componentProps: ComponentObjectPropsOptions | ComponentPropsOptions = {},
):
  | ComponentObjectPropsOptions<AnimationRouterViewProps>
  | ComponentPropsOptions<AnimationRouterViewProps> => {
  const props = { ...ANIMATION_ROUTER_VIEW_DEFAULT_PROPS, ...componentProps };

  return props;
};
