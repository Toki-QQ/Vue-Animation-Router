/**
 * 动画速率函数
 * animation timing function
 */
type AnimationTimingFunction =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "step-start"
  | "step-end"
  | "steps"
  | "cubic-bezier";

/**
 * 动画路由视图的动画配置
 * animation options of view
 */
export interface AnimationConfigurations {
  // 返回操作动画总时长
  // back operation animation total duration
  backTotalDuration: number;

  // 返回操作 进入动画时长
  // enter animation duration of back operation
  backEnterDuration: number;

  // 返回操作 离开动画时长
  // leave animation duration of back operation
  backLeaveDuration: number;

  // 返回操作 进入动画延迟时间
  // enter animation delay time of back operation
  backEnterDelay: number;

  // 返回操作 离开动画延迟时间
  // leave animation delay time of back operation
  backLeaveDelay: number;

  // 返回操作 进入动画速率
  // enter animation timing function of back operation
  backEnterTimingFunction: AnimationTimingFunction;

  // 返回操作 离开动画速率
  // leave animation timing function of back operation
  backLeaveTimingFunction: AnimationTimingFunction;

  // 前进操作动画总时长
  // forward operation animation total duration
  forwardTotalDuration: number;

  // 前进操作 进入动画时长
  // enter animation duration of forward operation
  forwardEnterDuration: number;

  // 前进操作 离开动画时长
  // leave animation duration of forward operation
  forwardLeaveDuration: number;

  // 前进操作 进入动画延迟时间
  // enter animation delay time of forward operation
  forwardEnterDelay: number;

  // 前进操作 离开动画延迟时间
  // leave animation delay time of forward operation
  forwardLeaveDelay: number;

  // 前进操作 进入动画速率
  // enter animation timing function of forward operation
  forwardEnterTimingFunction: AnimationTimingFunction;

  // 前进操作 离开动画速率
  // leave animation timing function of forward operation
  forwardLeaveTimingFunction: AnimationTimingFunction;
}
