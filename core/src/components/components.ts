import { Plugin } from "vue";

import { VarBaseRouterView } from "./base";
import { VarFadeRouterView } from "./fade";
import { VarSlideRouterView } from "./slide";
import { VarFadeSlideRouterView } from "./fade_slide";

export default [
  VarBaseRouterView,
  VarFadeRouterView,
  VarSlideRouterView,
  VarFadeSlideRouterView,
] as Array<Plugin>;
