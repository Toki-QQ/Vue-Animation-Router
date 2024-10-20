<template>
  <DemoView
    type="to"
    title="SLIDE DEMO 2"
    sub-title="Hello, I am slide y demo 2."
    button-label="Back To Slide Y Demo 1"
    :button-click-event="backTo"
  />
</template>

<script setup lang="ts">
const router = useRouter();

function backTo() {
  router.back();
}
</script>

<style scoped></style>
