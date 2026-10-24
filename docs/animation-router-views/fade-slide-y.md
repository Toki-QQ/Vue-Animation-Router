# 淡化滑动（纵向） {#fade-slide-y-router-view}

淡入淡出的同时叠加Y轴平移滑动的动画效果。前进时，当前视图向上滑动退出，目标视图向上滑动进入。后退时，当前视图向下滑动退出，目标视图向下滑动进入。

## 基础用法 {#fade-slide-y-router-view-basic}

```vue
<template>
  <div>
    <VarFadeSlideYRouterView />
  </div>
</template>

<script setup lang="ts">
import { VarFadeSlideYRouterView } from "vue-animation-router/es";
```

## 运行效果 {#fade-slide-y-router-view-demo}

![fade-slide-y-router-view-demo](../assets/pic_preview_fade_slide_y.gif)
