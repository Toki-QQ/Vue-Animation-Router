import type { ComponentObjectPropsOptions, ComponentPropsOptions } from "vue";
import type { AnimationRouterViewProps } from "@/types";

// 动画路由视图默认属性
// default props of animation router view
const ANIMATION_ROUTER_VIEW_DEFAULT_PROPS:
  | ComponentObjectPropsOptions<AnimationRouterViewProps>
  | ComponentPropsOptions<AnimationRouterViewProps> = {
  mode: {
    default: "out-in",
    required: false,
  },
  keepAlive: {
    default: false,
    required: false,
  },
  totalDuration: {
    default: 1000,
    required: false,
  },
  inDuration: {
    default: 500,
    required: false,
  },
  outDuration: {
    default: 500,
    required: false,
  },
  inDelay: {
    default: 0,
    required: false,
  },
  outDelay: {
    default: 0,
    required: false,
  },
  name: {
    default: undefined,
    required: false,
  },
  route: {
    default: undefined,
    required: false,
  },
  include: {
    default: undefined,
    required: false,
  },
  exclude: {
    default: undefined,
    required: false,
  },
};

// 创建动画路由视图属性
// create props of animation router view
export const createProps = ():
  | ComponentObjectPropsOptions
  | ComponentPropsOptions => {
  const props = { ...ANIMATION_ROUTER_VIEW_DEFAULT_PROPS };

  return props;
};
