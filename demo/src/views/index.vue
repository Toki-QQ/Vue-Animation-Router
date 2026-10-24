<template>
  <div class="w-full h-full">
    <div
      class="h-full p-4 flex flex-col justify-center items-center gap-10 border rounded-md bg-gray-100 dark:bg-gray-950 overflow-hidden"
    >
      <div class="text-center text-2xl text-gray-300">
        Click the demo to preview the component's operation effect.
      </div>

      <div class="text-center text-5xl font-extrabold text-gray-500">
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
