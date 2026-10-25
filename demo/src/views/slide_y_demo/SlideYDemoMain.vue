<template>
  <VarSlideYRouterView
    class="w-full h-full"
    :animation="{
      backEnterDuration: 1,
      backLeaveDuration: 1,
      forwardEnterDuration: 1,
      forwardLeaveDuration: 1,
    }"
  />
</template>

<script setup lang="ts">
import { VarSlideYRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
