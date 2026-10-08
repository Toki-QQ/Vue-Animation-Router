<template>
  <DemoView
    type="from"
    title="SLIDE DEMO 1"
    sub-title="Hello, I am slide demo 1."
    button-label="Navigate To Slide Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "SlideDemo2",
  });
}
</script>

<style scoped></style>
