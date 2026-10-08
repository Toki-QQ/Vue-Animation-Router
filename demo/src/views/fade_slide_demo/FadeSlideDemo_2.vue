<template>
  <DemoView
    type="to"
    title="FADE SLIDE DEMO 2"
    sub-title="Hello, I am fade slide demo 2."
    button-label="Back To Fade Slide Demo 1"
    :button-click-event="backTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function backTo() {
  router.back();
}
</script>

<style scoped></style>
