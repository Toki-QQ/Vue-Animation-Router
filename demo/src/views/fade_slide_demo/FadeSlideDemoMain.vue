<template>
  <VarFadeSlideRouterView
    class="w-full h-full"
    :animation="{ backTotalDuration: 3, forwardTotalDuration: 3 }"
  />
</template>

<script setup lang="ts">
import { VarFadeSlideRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
