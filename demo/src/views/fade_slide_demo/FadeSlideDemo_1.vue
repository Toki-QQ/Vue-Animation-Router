<template>
  <DemoView
    type="from"
    title="FADE SLIDE DEMO 1"
    sub-title="Hello, I am fade slide demo 1."
    button-label="Navigate To Fade Slide Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "FadeSlideDemo2",
  });
}
</script>

<style scoped></style>
