<template>
  <DemoView
    type="from"
    title="BASE DEMO 1"
    sub-title="Hello, I am base demo 1."
    button-label="Navigate To Base Demo 2"
    :button-click-event="navTo"
  />
</template>

<script setup lang="ts">
import DemoView from "@/components/DemoView.vue";

const router = useRouter();

function navTo() {
  router.push({
    name: "BaseDemo2",
  });
}
</script>

<style scoped></style>
