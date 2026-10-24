<template>
  <VarFadeSlideRouterView
    class="w-full h-full"
    :animation="{ backTotalDuration: 2, forwardTotalDuration: 2 }"
  />
</template>

<script setup lang="ts">
import { VarFadeSlideRouterView } from "vue-animation-router/dist/es";
</script>

<style scoped></style>
