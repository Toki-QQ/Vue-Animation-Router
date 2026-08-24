# Component API {#getting-started}

The properties of each animation router view component consist of three main parts:

- **Custom API:** Includes animation effect configuration options, keep-alive, animation progress step, animation trigger events, etc.
- **Router API:** RouterView API configuration options from Vue Router
- **Vue API:** Transition API and KeepAlive API configuration options from Vue

## Custom API {#custom-api}

This section's properties mainly include animation effect configuration options, keep-alive, animation progress step, etc.

### Animation Configuration — animation {#custom-properties-animation}

- **Type:** `AnimationConfigurations | Object`

- **Required:** `No`

- **Type Definition:**

```ts
/**
 * Animation timing function
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
 * Animation configuration for the animation router view
 */
interface AnimationConfigurations {
  backTotalDuration: number; // Back operation total animation duration
  backEnterDuration: number; // Back operation enter animation duration
  backLeaveDuration: number; // Back operation leave animation duration
  backEnterDelay: number; // Back operation enter animation delay
  backLeaveDelay: number; // Back operation leave animation delay
  backEnterTimingFunction: AnimationTimingFunction; // Back operation enter animation timing function
  backLeaveTimingFunction: AnimationTimingFunction; // Back operation leave animation timing function

  forwardTotalDuration: number; // Forward operation total animation duration
  forwardEnterDuration: number; // Forward operation enter animation duration
  forwardLeaveDuration: number; // Forward operation leave animation duration
  forwardEnterDelay: number; // Forward operation enter animation delay
  forwardLeaveDelay: number; // Forward operation leave animation delay
  forwardEnterTimingFunction: AnimationTimingFunction; // Forward operation enter animation timing function
  forwardLeaveTimingFunction: AnimationTimingFunction; // Forward operation leave animation timing function
}
```

- **Default Value:**

```ts
animation: {
    default: {
      // Back animation configuration
      backTotalDuration: 1,
      backEnterDuration: undefined,
      backLeaveDuration: undefined,
      backEnterDelay: 0,
      backLeaveDelay: 0,
      backEnterTimingFunction: "linear",
      backLeaveTimingFunction: "linear",

      // Forward animation configuration
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

- **Usage Example:**

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

// Alternatively, use ref to define the animation configuration
const animation = ref<AnimationConfigurations>({ ... });

// Alternatively, use reactive to define the animation configuration
const animation = reactive<AnimationConfigurations>({ ... });
</script>
```

### Keep Alive — keep-alive {#custom-properties-keep-alive}

- **Type:** `boolean`

- **Required:** `No`

- **Default Value:** `false`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView :keep-alive="true" />

  <!-- Alternatively, use ref to define keep-alive -->
  <VarFadeRouterView :keep-alive="keepAlive" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define keep-alive
const keepAlive = ref<boolean>(true);
</script>
```

### Animation Progress Step — animation-progress-step {#custom-properties-animation-progress-step}

- **Type:** `number`

- **Unit:** `seconds`

- **Required:** `No`

- **Default Value:** `0.01`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView :animation-progress-step="0.03" />

  <!-- Alternatively, use ref to define the animation progress step -->
  <VarFadeRouterView :animation-progress-step="animationProgressStep" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the animation progress step
const animationProgressStep = ref<number>(0.03);
</script>
```

### Events - events {#custom-events}

- **Type:** `event`

- **Usage Example:**

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
 * Animation start event
 * @param {object} value - Event parameters
 * @param {string} value.operation - Operation type, "back" indicates back operation, "forward" indicates forward operation
 * @param {string} value.active - Animation state, "enter" indicates enter animation, "leave" indicates leave animation, "appear" indicates first enter animation
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
 * Animation in progress event
 * @param {object} value - Event parameters
 * @param {string} value.operation - Operation type, "back" indicates back operation, "forward" indicates forward operation
 * @param {string} value.active - Animation state, "enter" indicates enter animation, "leave" indicates leave animation, "appear" indicates first enter animation
 * @param {number} value.progress - Animation progress, 0 indicates animation start, 1 indicates animation end
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
 * Animation end event
 * @param {object} value - Event parameters
 * @param {string} value.operation - Operation type, "back" indicates back operation, "forward" indicates forward operation
 * @param {string} value.active - Animation state, "enter" indicates enter animation, "leave" indicates leave animation, "appear" indicates first enter animation
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

## Router API {#vue-router-view-api}

This section's properties mainly include RouterView API configuration options from Vue Router

### name {#vue-router-view-name}

- **For details, refer to:** [Vue-Router-RouterViewProps](https://router.vuejs.org/api/interfaces/RouterViewProps.html)

- **Type:** `string`

- **Required:** `No`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView name="customName" />

  <!-- Alternatively, use ref to define the route name -->
  <VarFadeRouterView :name="name" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the route name
const name = ref<string>("customName");
</script>
```

### route {#vue-router-view-route}

- **For details, refer to:** [Vue-Router-RouterViewProps](https://router.vuejs.org/api/interfaces/RouterViewProps.html)

- **Type:** `RouteLocationNormalized`

- **Required:** `No`

- **Usage Example:**

```vue {2,7,11}
<template>
  <VarFadeRouterView :route="route" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";
import { RouteLocationNormalized } from "vue-router";

// Use ref to define the route object
const route = ref<RouteLocationNormalized>({ ... });
</script>
```

## Vue API {#vue-api}

This section's properties mainly include Transition API and KeepAlive API configuration options from Vue

### mode {#vue-transition-mode}

- **For details, refer to:** [Vue-Transition](https://vuejs.org/api/built-in-components.html#transition)

- **Type:** `'in-out' | 'out-in' | 'default'`

- **Required:** `No`

- **Default Value:** `'out-in'`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView mode="out-in" />

  <!-- Alternatively, use ref to define the transition mode -->
  <VarFadeRouterView :mode="mode" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the transition mode
const mode = ref<"in-out" | "out-in" | "default">("out-in");
</script>
```

### appear {#vue-transition-appear}

- **For details, refer to:** [Vue-Transition](https://vuejs.org/api/built-in-components#transition)

- **Type:** `boolean`

- **Required:** `No`

- **Default Value:** `false`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView appear />

  <!-- Alternatively, use ref to define whether to appear on first render -->
  <VarFadeRouterView :appear="appear" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define whether to appear on first render
const appear = ref<boolean>(true);
</script>
```

### persisted {#vue-keep-alive-persisted}

- **For details, refer to:** [Vue-Transition](https://vuejs.org/api/built-in-components.html#keepalive)

- **Type:** `boolean`

- **Required:** `No`

- **Default Value:** `false`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView persisted />

  <!-- Alternatively, use ref to define whether the node is persisted -->
  <VarFadeRouterView :persisted="persisted" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define whether the node is persisted
const persisted = ref<boolean>(true);
</script>
```

::: warning Note
The following properties are only effective when `keep-alive` is `true`, because the `KeepAlive API` is only used within the `Transition API` when `keep-alive` is `true`.
:::

### include {#vue-keep-alive-include}

- **For details, refer to:** [Vue-KeepAlive](https://vuejs.org/api/built-in-components.html#keepalive)

- **Type:** `MatchPattern`

- **Required:** `No`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView include="['YourRouteName']" />

  <!-- Alternatively, use ref to define the included component names -->
  <VarFadeRouterView :include="include" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the included component names
const include = ref<Array<string>>(["YourRouteName"]);
</script>
```

### exclude {#vue-keep-alive-exclude}

- **For details, refer to:** [Vue-KeepAlive](https://vuejs.org/api/built-in-components.html#keepalive)

- **Type:** `MatchPattern`

- **Required:** `No`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView exclude="['YourRouteName']" />

  <!-- Alternatively, use ref to define the excluded component names -->
  <VarFadeRouterView :exclude="exclude" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the excluded component names
const exclude = ref<Array<string>>(["YourRouteName"]);
</script>
```

### max {#vue-keep-alive-max}

- **For details, refer to:** [Vue-KeepAlive](https://vuejs.org/api/built-in-components.html#keepalive)

- **Type:** `number | string`

- **Required:** `No`

- **Usage Example:**

```vue {2,5,10,13}
<template>
  <VarFadeRouterView max="10" />

  <!-- Alternatively, use ref to define the maximum cache count -->
  <VarFadeRouterView :max="max" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

// Use ref to define the maximum cache count
const max = ref<number>(10);
</script>
```

## Other Properties and Events {#other-properties-and-events}

More properties and events may be supported in the future, stay tuned!
