<template>
  <div>
    <div>I am Demo 2.</div>
    <button @click="navToDemo1">back</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navToDemo1() {
  router.back();
}
</script>

<style scoped></style>
