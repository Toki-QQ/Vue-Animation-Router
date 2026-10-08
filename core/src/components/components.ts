import { Plugin } from "vue";

import { VarBaseRouterView } from "./base";
import { VarFadeRouterView } from "./fade";
import { VarSlideRouterView } from "./slide";
import { VarSlideYRouterView } from "./slide_y";
import { VarFadeSlideRouterView } from "./fade_slide";
import { VarFadeSlideYRouterView } from "./fade_slide_y";

export default [
  VarBaseRouterView,
  VarFadeRouterView,
  VarSlideRouterView,
  VarSlideYRouterView,
  VarFadeSlideRouterView,
  VarFadeSlideYRouterView,
] as Array<Plugin>;
