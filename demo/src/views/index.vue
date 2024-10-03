<template>
  <Card>
    <template #title>Welcome to Use</template>
    <template #content>
      <p class="m-0">Click the demos to see a simple example of how to use</p>
      <div class="flex justify-center">
        <Button
          icon="pi pi-arrow-right"
          label="To See Demos"
          aria-label="to see demos"
          @click="toBaseDemo"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
const router = useRouter();

/**
 * 跳转到BaseDemo
 * nav to base demo
 */
function toBaseDemo() {
  router.push({ name: "BaseDemo1" });
}
</script>

<style scoped></style>
