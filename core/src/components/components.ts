import { Plugin } from "vue";

import { VarBaseRouterView } from "./base";
import { VarFadeRouterView } from "./fade";
import { VarFadeSlideRouterView } from "./fade_slide";

export default [
  VarBaseRouterView,
  VarFadeRouterView,
  VarFadeSlideRouterView,
] as Array<Plugin>;
