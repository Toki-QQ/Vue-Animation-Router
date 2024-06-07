<template>
  <div>
    <div>I am Demo 1.</div>
    <button @click="navToDemo2">to Demo2</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navToDemo2() {
  router.push({
    name: "BaseDemo2",
  });
}
</script>

<style scoped></style>
