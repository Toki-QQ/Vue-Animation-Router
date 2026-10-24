<template>
  <DemoView
    type="from"
    title="ZOOM OUT DEMO 1"
    sub-title="Hello, I am zoom out demo 1."
    button-label="Navigate To Zoom Out Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "ZoomOutDemo2",
  });
}
</script>

<style scoped></style>
