# Get started {#getting-started}

## Install {#install}

Select a package manager to install `vue-animation-router` with:

```bash
# Use pnpm
pnpm add vue-animation-router

# Use yarn
yarn add vue-animation-router

# Use npm
npm install vue-animation-router
```

:::warning Tip
If your application uses a Vue version is below 3.0, you need to upgrade Vue to Vue 3.x. (Actually Vue 2.x is also supported, but I haven't tested Vue 2.x.)
:::

## Create router {#create-router}

In the `src/router` directory, add the following content to the `index.ts` file:

```ts {2,15-18}
import { createWebHistory } from "vue-router";
import { createAnimationRouter } from "vue-animation-router/es";

import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  ...
];

export const router = createAnimationRouter({
  history: createWebHistory(),
  routes,
});
```

## Import animation router view {#import-router-view}

Supports three ways to import animation router view, you can choose any of them.

### Full import {#full-import}

In the `src/main.ts` file, add the following content:

```ts {3,10}
import { createApp } from "vue";
import { router } from "@/router";
import VueAnimationRouter from "vue-animation-router/es";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(VueAnimationRouter);

app.mount("#app");
```

### Global import {#global-import}

In the `src/main.ts` file, add the following content:

```ts {3,10}
import { createApp } from "vue";
import { router } from "@/router";
import { VarFadeRouterView } from "vue-animation-router/es";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(VarFadeRouterView);

app.mount("#app");
```

Now you can use the animation router view in any `.vue` file:

```vue {2}
<template>
  <VarFadeRouterView />
</template>

<style scoped></style>
```

### Manual import {#manual-import}

In any `.vue` file, add the following content:

```vue {2,6}
<template>
  <VarFadeRouterView />
</template>

<script setup lang="ts">
import { VarFadeRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
```

If you use non-setup syntax, please register the animation router view as follows:

```vue {2,7,10-12}
<template>
  <VarFadeRouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VarFadeRouterView } from "vue-animation-router/es";

export default defineComponent({
  components: {
    VarFadeRouterView,
  },
  setup() {
    ...
  },
});
</script>
```

## Start use {#start-use}

Now you can start the project. For configuration options of animation router view, please refer to [animation router view configuration](/animation-router-views/)。
For running effect of animation router view, please refer to [animation router view running effect](/animation-router-views/base.html)。
