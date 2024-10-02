import { withInstall } from "@/utils/view/component";

import { FadeSlideRouterView } from "./FadeSlideRouterView";

// 注册FadeSlideRouterView组件
// install FadeSlideRouterView
export const VarFadeSlideRouterView = withInstall(FadeSlideRouterView);

export default VarFadeSlideRouterView;
export * from "./FadeSlideRouterView";
