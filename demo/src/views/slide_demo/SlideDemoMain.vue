<template>
  <VarSlideRouterView
    class="w-full h-full"
    :animation="{
      backEnterDuration: 2,
      backLeaveDuration: 2,
      forwardEnterDuration: 2,
      forwardLeaveDuration: 2,
    }"
  />
</template>

<script setup lang="ts">
import { VarSlideRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
