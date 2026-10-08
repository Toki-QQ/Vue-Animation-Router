<template>
  <VarFadeSlideYRouterView
    class="w-full h-full"
    :animation="{ backTotalDuration: 2, forwardTotalDuration: 2 }"
  />
</template>

<script setup lang="ts">
import { VarFadeSlideYRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
