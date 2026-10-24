# Fade Slide {#fade-slide-router-view}

A combination of fade-in/fade-out and X-axis sliding animation effect. When navigating forward, the current view slides left to exit and the target view slides left to enter. When navigating backward, the current view slides right to exit and the target view slides right to enter.

## Basic Usage {#fade-slide-router-view-basic}

```vue
<template>
  <div>
    <VarFadeSlideRouterView />
  </div>
</template>

<script setup lang="ts">
import { VarFadeSlideRouterView } from "vue-animation-router/es";
```

## Preview {#fade-slide-router-view-demo}

![fade-slide-router-view-demo](../../assets/pic_preview_fade_slide.gif)
