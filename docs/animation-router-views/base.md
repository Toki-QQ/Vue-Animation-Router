# 基础（无动画） {#base-router-view}

::: warning 注意
`VarBaseRouterView` 是一个基础的路由视图组件，仅用于展示路由对应的组件内容。它没有任何动画效果，只是简单地渲染出对应的组件。非必要情况下，不建议使用此组件。建议优先使用 来自Vue Router 的 `RouterView` API 来代替 `VarBaseRouterView`。
:::

## 基础用法 {#base-router-view-basic}

```vue
<template>
  <div>
    <VarBaseRouterView />
  </div>
</template>

<script lang="ts">
import { VarBaseRouterView } from "vue-animation-router/es";

export default defineComponent({
  components: {
    VarBaseRouterView,
  },
});
```

```vue
<template>
  <div>
    <VarBaseRouterView />
  </div>
</template>

<script setup lang="ts">
import { VarBaseRouterView } from "vue-animation-router/es";
```

## 运行效果 {#base-router-view-demo}

![base-router-view-demo](../assets/pic_preview_base.gif)
