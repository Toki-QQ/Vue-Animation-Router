<template>
  <DemoView
    type="from"
    title="FADE DEMO 1"
    sub-title="Hello, I am fade demo 1."
    button-label="Navigate To Fade Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "FadeDemo2",
  });
}
</script>

<style scoped></style>
