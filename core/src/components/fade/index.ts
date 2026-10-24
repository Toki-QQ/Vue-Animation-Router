import { withInstall } from "@/utils/view/component";

import { FadeRouterView } from "./FadeRouterView";

// 注册FadeRouterView组件
// install FadeRouterView
export const VarFadeRouterView = withInstall(FadeRouterView);

export default VarFadeRouterView;
export * from "./FadeRouterView";
