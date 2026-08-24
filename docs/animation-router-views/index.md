# 组件API {#getting-started}

每个动画路由视图组件属性都由三大部分组成，分别是：

- **自定API：** 包括动画效果的配置选项、是否保活、动画进度步长、动画触发事件等
- **路由API：** 来自 Vue Router 的 RouterView API 配置选项
- **Vue API：** 来自 Vue 的 Transition API 和 KeepAlive API 配置选项

## 自定API {#custom-api}

该部分属性主要包括动画效果的配置选项、是否保活、动画进度步长等

### 动画效果配置 — animation {#custom-properties-animation}

- **类型：** `AnimationConfigurations | Object`

- **是否必要：** `否`

- **类型定义：**

```ts
/**
 * 动画速率
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
 */
interface AnimationConfigurations {
  backTotalDuration: number; // 返回操作动画总时长
  backEnterDuration: number; // 返回操作 进入动画时长
  backLeaveDuration: number; // 返回操作 离开动画时长
  backEnterDelay: number; // 返回操作 进入动画延迟时间
  backLeaveDelay: number; // 返回操作 离开动画延迟时间
  backEnterTimingFunction: AnimationTimingFunction; // 返回操作 进入动画速率
  backLeaveTimingFunction: AnimationTimingFunction; // 返回操作 离开动画速率

  forwardTotalDuration: number; // 前进操作动画总时长
  forwardEnterDuration: number; // 前进操作 进入动画时长
  forwardLeaveDuration: number; // 前进操作 离开动画时长
  forwardEnterDelay: number; // 前进操作 进入动画延迟时间
  forwardLeaveDelay: number; // 前进操作 离开动画延迟时间
  forwardEnterTimingFunction: AnimationTimingFunction; // 前进操作 进入动画速率
  forwardLeaveTimingFunction: AnimationTimingFunction; // 前进操作 离开动画速率
}
```

- **默认值：**

```ts
animation: {
    default: {
      // 返回操作动画配置
      // back animation configuration
      backTotalDuration: 1,
      backEnterDuration: undefined,
      backLeaveDuration: undefined,
      backEnterDelay: 0,
      backLeaveDelay: 0,
      backEnterTimingFunction: "linear",
      backLeaveTimingFunction: "linear",

      // 前进操作动画配置
      // forward animation configuration
      forwardTotalDuration: 1,
      forwardEnterDuration: undefined,
      forwardLeaveDuration: undefined,
      forwardEnterDelay: 0,
      forwardLeaveDelay: 0,
      forwardEnterTimingFunction: "linear",
      forwardLeaveTimingFunction: "linear",
    },
    required: false,
},
```

- **使用示例：**

```vue {2,7,9,11-27,30,33}
<template>
  <VarFadeRouterView :animation="animation" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

import type { AnimationConfigurations } from "vue-animation-router/es";

const animation: AnimationConfigurations = {
  backTotalDuration: 1,
  backEnterDuration: undefined,
  backLeaveDuration: undefined,
  backEnterDelay: 0,
  backLeaveDelay: 0,
  backEnterTimingFunction: "linear",
  backLeaveTimingFunction: "linear",

  forwardTotalDuration: 1,
  forwardEnterDuration: undefined,
  forwardLeaveDuration: undefined,
  forwardEnterDelay: 0,
  forwardLeaveDelay: 0,
  forwardEnterTimingFunction: "linear",
  forwardLeaveTimingFunction: "linear",
};

// 或者使用 ref 来定义动画配置
const animation = ref<AnimationConfigurations>({ ... });

// 或者使用 reactive 来定义动画配置
const animation = reactive<AnimationConfigurations>({ ... });
</script>
```

### 是否保活 — keep-alive {#custom-properties-keep-alive}

- **类型：** `boolean`

- **是否必要：** `否`

- **默认值：** `false`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView :keep-alive="true" />

  <!-- 或者使用 ref 来定义是否保活 -->
  <VarFadeRouterView :keep-alive="keepAlive" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义是否保活
const keepAlive = ref<boolean>(true);
</script>
```

### 动画进度步长 — animation-progress-step {#custom-properties-animation-progress-step}

- **类型：** `number`

- **单位：** `秒`

- **是否必要：** `否`

- **默认值：** `0.01`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView :animation-progress-step="0.03" />

  <!-- 或者使用 ref 来定义动画进度步长 -->
  <VarFadeRouterView :animation-progress-step="animationProgressStep" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义动画进度步长
const animationProgressStep = ref<number>(0.03);
</script>
```

### 事件 - events {#custom-events}

- **类型：** `event`

- **使用示例：**

```vue {2-6,10,18-25,34-42,50-57}
<template>
  <VarFadeRouterView
    @on-start="onStart"
    @on-progress="onProgress"
    @on-finish="onFinish"
  />
</template>

<script setup lang="ts">
import { VarFadeRouterView } from "vue-animation-router/es";

/**
 * 动画开始事件
 * @param {object} value - 事件参数
 * @param {string} value.operation - 操作类型，back 表示返回操作，forward 表示前进操作
 * @param {string} value.active - 动画状态，enter 表示进入动画，leave 表示离开动画，appear 表示首次进入动画
 */
function onStart(
  value: {
    operation:"back" | "forward",
    active: "enter" | "leave" | "appear"
  }
) {
  ...
}

/**
 * 动画进行中事件
 * @param {object} value - 事件参数
 * @param {string} value.operation - 操作类型，back 表示返回操作，forward 表示前进操作
 * @param {string} value.active - 动画状态，enter 表示进入动画，leave 表示离开动画，appear 表示首次进入动画
 * @param {number} value.progress - 动画进度，0 表示动画开始，1 表示动画结束
 */
function onProgress(
  value: {
    operation:"back" | "forward",
    active: "enter" | "leave" | "appear",
    progress: number
  }
) {
 ...
}

/**
 * 动画结束事件
 * @param {object} value - 事件参数
 * @param {string} value.operation - 操作类型，back 表示返回操作，forward 表示前进操作
 * @param {string} value.active - 动画状态，enter 表示进入动画，leave 表示离开动画，appear 表示首次进入动画
 */
function onFinish(
  value: {
    operation:"back" | "forward",
    active: "enter" | "leave" | "appear"
  }
) {
...
}
</script>
```

## 路由API {#vue-router-view-api}

该部分属性主要包括来自 Vue Router 的 RouterView API 配置选项

### name {#vue-router-view-name}

- **详情参考：** [Vue-Router-RouterViewProps](https://router.vuejs.org/zh/api/interfaces/RouterViewProps.html)

- **类型：** `string`

- **是否必要：** `否`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView name="customName" />

  <!-- 或者使用 ref 来定义路由名称 -->
  <VarFadeRouterView :name="name" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义路由名称
const name = ref<string>("customName");
</script>
```

### route {#vue-router-view-route}

- **详情参考：** [Vue-Router-RouterViewProps](https://router.vuejs.org/zh/api/interfaces/RouterViewProps.html)

- **类型：** `RouteLocationNormalized`

- **是否必要：** `否`

- **使用示例：**

```vue {2,7,11}
<template>
  <VarFadeRouterView :route="route" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";
import { RouteLocationNormalized } from "vue-router";

// 使用 ref 来定义路由对象
const route = ref<RouteLocationNormalized>({ ... });
</script>
```

## Vue API {#vue-api}

该部分属性主要包括来自 Vue 的 Transition API 和 KeepAlive API 配置选项

### mode {#vue-transition-mode}

- **详情参考：** [Vue-Transition](https://cn.vuejs.org/api/built-in-components.html#transition)

- **类型：** `'in-out' | 'out-in' | 'default'`

- **是否必要：** `否`

- **默认值：** `'out-in'`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView mode="out-in" />

  <!-- 或者使用 ref 来定义过渡模式 -->
  <VarFadeRouterView :mode="mode" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义过渡模式
const mode = ref<"in-out" | "out-in" | "default">("out-in");
</script>
```

### appear {#vue-transition-appear}

- **详情参考：** [Vue-Transition](https://cn.vuejs.org/api/built-in-components#transition)

- **类型：** `boolean`

- **是否必要：** `否`

- **默认值：** `false`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView appear />

  <!-- 或者使用 ref 来定义是否首次出现 -->
  <VarFadeRouterView :appear="appear" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义是否首次出现
const appear = ref<boolean>(true);
</script>
```

### persisted {#vue-keep-alive-persisted}

- **详情参考：** [Vue-Transition](https://cn.vuejs.org/api/built-in-components.html#keepalive)

- **类型：** `boolean`

- **是否必要：** `否`

- **默认值：** `false`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView persisted />

  <!-- 或者使用 ref 来定义节点是否持久化 -->
  <VarFadeRouterView :persisted="persisted" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义节点是否持久化
const persisted = ref<boolean>(true);
</script>
```

::: warning 注意
以下属性仅在 `keep-alive` 为 `true` 时有效，因为只有在 `keep-alive` 为 `true` 时，才会在 `Transition API` 中使用 `KeepAlive API` 。
:::

### include {#vue-keep-alive-include}

- **详情参考：** [Vue-KeepAlive](https://cn.vuejs.org/api/built-in-components.html#keepalive)

- **类型：** `MatchPattern`

- **是否必要：** `否`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView include="['YourRouteName']" />

  <!-- 或者使用 ref 来定义包含的组件名称 -->
  <VarFadeRouterView :include="include" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义包含的组件名称
const include = ref<Array<string>>(["YourRouteName"]);
</script>
```

### exclude {#vue-keep-alive-exclude}

- **详情参考：** [Vue-KeepAlive](https://cn.vuejs.org/api/built-in-components.html#keepalive)

- **类型：** `MatchPattern`

- **是否必要：** `否`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView exclude="['YourRouteName']" />

  <!-- 或者使用 ref 来定义排除的组件名称 -->
  <VarFadeRouterView :exclude="exclude" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义排除的组件名称
const exclude = ref<Array<string>>(["YourRouteName"]);
</script>
```

### max {#vue-keep-alive-max}

- **详情参考：** [Vue-KeepAlive](https://cn.vuejs.org/api/built-in-components.html#keepalive)

- **类型：** `number | string`

- **是否必要：** `否`

- **使用示例：**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView max="10" />

  <!-- 或者使用 ref 来定义最大缓存数量 -->
  <VarFadeRouterView :max="max" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// 使用 ref 来定义最大缓存数量
const max = ref<number>(10);
</script>
```

## 其他属性和事件 {#other-properties-and-events}

将来可能会兼容更多的属性和事件，敬请期待！
