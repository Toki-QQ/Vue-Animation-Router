<template>
  <div class="">
    <button @click="navToDemo1">跳转</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navToDemo1() {
  router.push({
    name: "BaseDemo1",
  });
}
</script>

<style scoped></style>
