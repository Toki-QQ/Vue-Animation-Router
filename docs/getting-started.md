# 开始 {#getting-started}

## 安装 {#install}

选择一款你常用的包管理器来安装 `vue-animation-router`：

```bash
# 使用 pnpm
pnpm add vue-animation-router

# 或者使用 yarn
yarn add vue-animation-router

# 或者使用 npm
npm install vue-animation-router
```

:::warning 提示
如果你的应用使用的 Vue 版本低于 3.0，你需要将 Vue 版本升级到 3.x 后，才能使用。（其实按理 Vue 2.x 也是支持的，但我没使用过 Vue 2.x 进行测试。）
:::

## 创建路由 {#create-router}

在 `src/router` 目录下的 `index.ts` 文件，添加如下内容：

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

## 引入动画路由视图 {#import-router-view}

支持通过三种方式来引入动画路由视图，你可以选择以下任意一种你喜欢的引入方式。

### 完整引入 {#full-import}

在 `src/main.ts` 文件，添加如下内容：

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

### 全局按需引入 {#global-import}

在 `src/main.ts` 文件，添加如下内容：

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

然后就可以在任意需要使用到路由视图 `<RouterView />` 的 `.vue` 文件中使用了：

```vue {2}
<template>
  <VarFadeRouterView />
</template>

<style scoped></style>
```

### 手动按需引入 {#manual-import}

在任意需要使用到路由视图 `<RouterView />` 的 `.vue` 文件，添加如下内容：

```vue {2,6}
<template>
  <VarFadeRouterView />
</template>

<script setup lang="ts">
import { VarFadeRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
```

如果你使用的是非setup语法，请使用如下方式注册动画路由视图：

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

## 开始使用​ {#start-use}

现在你可以启动项目了。对于动画路由视图的配置选项，请查阅[动画路由组件—配置选项](/animation-router-views/)。
对于动画路由视图的运行效果，请查阅[对应的独立文档](/animation-router-views/base.html)。
