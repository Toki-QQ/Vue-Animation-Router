<template>
  <DemoView
    type="to"
    title="BASE DEMO 2"
    sub-title="Hello, I am base demo 2."
    button-label="Back To Base Demo 1"
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
