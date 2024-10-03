<template>
  <div class="w-full h-full">
    <div
      class="h-full flex flex-col justify-center items-center gap-10 border rounded-md"
    >
      <div class="text-2xl text-gray-300">Hello, I am fade demo 2</div>

      <div class="text-5xl font-extrabold text-gray-500">Fade Demo 2</div>

      <Button
        icon="pi pi-arrow-left"
        label="back to fade demo 1"
        @click="backToDemo1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function backToDemo1() {
  router.back();
}
</script>

<style scoped></style>
