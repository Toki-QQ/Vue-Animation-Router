<template>
  <DemoView
    type="from"
    title="ZOOM IN DEMO 1"
    sub-title="Hello, I am zoom in demo 1."
    button-label="Navigate To Zoom In Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "ZoomInDemo2",
  });
}
</script>

<style scoped></style>
