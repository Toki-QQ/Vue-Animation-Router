/**
 * 动画路由视图配置
 * animation router view options
 */
declare interface AnimationRouterViewOptions {
  // 动画总时长
  // animation total duration
  totalDuration?: number;

  // 动画进入时长
  // animation in duration
  inDuration?: number;

  // 动画退出时长
  // animation out duration
  outDuration?: number;

  // 动画进入延迟时间
  // in animation delay time
  inDelay?: number;

  // 动画延迟时间
  // out animation delay time
  outDelay?: number;

  // 动画开始回调
  // animation start callback
  onStart?: () => void;

  // 动画进度回调
  // animation progress callback
  onProgress?: (progress: number) => void;

  // 动画结束回调
  // animation end callback
  onFinish?: () => void;
}
