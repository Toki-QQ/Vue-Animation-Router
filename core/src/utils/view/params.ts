import type { ComponentObjectPropsOptions, Ref } from "vue";
import type { AnimationConfigurations } from "@/types";

// 创建动画路由视图函数参数
// params of define animation router view function
export interface DefineAnimationRouterViewParams {
  name: string;
  componentClass?: string | Array<string> | CSSModuleClasses;
  componentProps?: ComponentObjectPropsOptions;
}

/**
 * 提取参数内的class
 * extract component class in params
 * @param config DefineAnimationRouterViewParams
 * @returns void
 */
export function getComponentClass(config: DefineAnimationRouterViewParams) {
  return [
    typeof config.componentClass == "string" ? config.componentClass : "",
    Array.isArray(config.componentClass) ? [...config.componentClass] : "",
    typeof config.componentClass == "object"
      ? [
          ...Object.keys(config.componentClass).map((item) => {
            return (config.componentClass as CSSModuleClasses)[item];
          }),
        ]
      : "",
  ];
}

/**
 * 根据动画配置生成动画样式
 * set animation style by animation config
 * @param animationConfig Ref<AnimationConfigurations | undefined>
 * @returns Object
 */
export function getStyle(
  animationConfig: Ref<AnimationConfigurations | undefined>,
): Record<string, string> {
  return animationConfig && animationConfig.value
    ? {
        // 返回操作动画样式配置
        // back operation animation style
        "--back-enter-animation-duration": `${getDuration(animationConfig.value, "back", "Enter")}s`,
        "--back-enter-animation-delay": `${getDelay(animationConfig.value, "back", "Enter")}s`,
        "--back-leave-animation-duration": `${getDuration(animationConfig.value, "back", "Leave")}s`,
        "--back-leave-animation-delay": `${getDelay(animationConfig.value, "back", "Leave")}s`,
        "--back-enter-animation-timing-function":
          animationConfig.value?.backEnterTimingFunction,
        "--back-leave-animation-timing-function":
          animationConfig.value?.backLeaveTimingFunction,

        // 前进操作动画样式配置
        // forward operation animation style
        "--forward-enter-animation-duration": `${getDuration(animationConfig.value, "forward", "Enter")}s`,
        "--forward-enter-animation-delay": `${getDelay(animationConfig.value, "forward", "Enter")}s`,
        "--forward-leave-animation-duration": `${getDuration(animationConfig.value, "forward", "Leave")}s`,
        "--forward-leave-animation-delay": `${getDelay(animationConfig.value, "forward", "Leave")}s`,
        "--forward-enter-animation-timing-function":
          animationConfig.value?.forwardEnterTimingFunction,
        "--forward-leave-animation-timing-function":
          animationConfig.value?.forwardLeaveTimingFunction,
      }
    : {};
}

/**
 * 从动画配置中获取动画时间
 * get animation duration from animation config
 * @param animationConfig AnimationConfigurations
 * @param operation "back" | "forward"
 * @param active "Enter" | "Leave"
 * @returns number
 */
function getDuration(
  animationConfig: AnimationConfigurations,
  operation: "back" | "forward",
  active: "Enter" | "Leave",
): number {
  if (
    `${operation}${active}Duration` in animationConfig &&
    animationConfig[`${operation}${active}Duration`] != undefined
  ) {
    return animationConfig[`${operation}${active}Duration`];
  } else if (
    `${operation}TotalDuration` in animationConfig &&
    animationConfig[`${operation}TotalDuration`] != undefined
  ) {
    return animationConfig[`${operation}TotalDuration`] / 2;
  }

  return 0.5;
}

/**
 * 获取动画延迟时间
 * get animation delay
 * @param animationConfig AnimationConfigurations
 * @param operation "back" | "forward"
 * @param active "Enter" | "Leave"
 * @returns number
 */
function getDelay(
  animationConfig: AnimationConfigurations,
  operation: "back" | "forward",
  active: "Enter" | "Leave",
) {
  if (
    `${operation}${active}Delay` in animationConfig &&
    animationConfig[`${operation}${active}Delay`] != undefined
  ) {
    return animationConfig[`${operation}${active}Delay`];
  }

  return 0;
}
