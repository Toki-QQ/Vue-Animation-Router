<template>
  <DemoView
    type="from"
    title="SLIDE Y DEMO 1"
    sub-title="Hello, I am slide y demo 1."
    button-label="Navigate To Slide Y Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "SlideYDemo2",
  });
}
</script>

<style scoped></style>
