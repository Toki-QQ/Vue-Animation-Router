import { withInstall } from "@/utils/view/component";

import { ZoomInRouterView } from "./ZoomInRouterView";

// 注册ZoomInRouterView组件
// install ZoomInRouterView
export const VarZoomInRouterView = withInstall(ZoomInRouterView);

export default VarZoomInRouterView;
export * from "./ZoomInRouterView";
