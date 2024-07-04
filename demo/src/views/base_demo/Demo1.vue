<template>
  <div>
    <div>I am Demo 1.</div>
    <button @click="navToDemo2">to Demo2</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

function navToDemo2() {
  router.push({
    name: "BaseDemo2",
  });

  // console.log(route);
}
</script>

<style scoped></style>
