<template>
  <div class="w-full h-full">
    <div
      class="h-full flex flex-col justify-center items-center gap-10 border rounded-md"
    >
      <div class="text-2xl text-gray-300">
        Click the demo to preview the component's operation effect.
      </div>

      <div class="text-5xl font-extrabold text-gray-500">
        THANK YOU FOR YOUR USING
      </div>

      <Button
        icon="pi pi-eye"
        label="To See Demos"
        aria-label="to see demos"
        @click="toBaseDemo"
      />
    </div>
  </div>
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
