<template>
  <DemoView
    type="to"
    title="ZOOM IN DEMO 2"
    sub-title="Hello, I am zoom in demo 2."
    button-label="Back To Zoom In Demo 1"
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
