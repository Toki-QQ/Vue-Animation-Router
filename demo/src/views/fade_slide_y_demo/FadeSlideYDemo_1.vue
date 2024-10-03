<template>
  <div class="w-full h-full">
    <div
      class="h-full flex flex-col justify-center items-center gap-10 border rounded-md"
    >
      <div class="text-2xl text-gray-300">Hello, I am fade slide y demo 1</div>

      <div class="text-5xl font-extrabold text-gray-500">
        FADE SLIDE Y DEMO 1
      </div>

      <Button
        icon="pi pi-arrow-down"
        label="Navigate To Fade Slide Y Demo 2"
        @click="navToDemo2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navToDemo2() {
  router.push({
    name: "FadeSlideYDemo2",
  });
}
</script>

<style scoped></style>
