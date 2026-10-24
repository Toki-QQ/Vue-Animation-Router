import { withInstall } from "@/utils/view/component";

import { BaseRouterView } from "./BaseRouterView";

// 注册BaseRouterView组件
// install BaseRouterView
export const VarBaseRouterView = withInstall(BaseRouterView);

export default VarBaseRouterView;
export * from "./BaseRouterView";
