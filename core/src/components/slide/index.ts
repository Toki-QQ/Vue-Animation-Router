import { withInstall } from "@/utils/view/component";

import { SlideRouterView } from "./SlideRouterView";

// 注册SlideRouterView组件
// install SlideRouterView
export const VarSlideRouterView = withInstall(SlideRouterView);

export default VarSlideRouterView;
export * from "./SlideRouterView";
