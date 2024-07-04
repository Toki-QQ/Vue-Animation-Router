<template>
  <div>
    <div>I am Demo 2.</div>
    <button @click="navToDemo1">back</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

function navToDemo1() {
  router.back();

  // console.log(route);
}
</script>

<style scoped></style>
