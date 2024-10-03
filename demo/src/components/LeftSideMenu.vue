<template>
  <Menu :model="items">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
// 左侧菜单项
// left side menu items
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Demos",
    items: [
      {
        label: "Base",
        icon: "pi pi-arrow-right",
        route: "/base_demo/demo_1",
      },
      {
        label: "Fade",
        icon: "pi pi-arrow-right",
        route: "/fade_demo/demo_1",
      },
      {
        label: "Slide",
        icon: "pi pi-arrow-right",
        route: "/slide_demo/demo_1",
      },
      {
        label: "FadeSlide",
        icon: "pi pi-arrow-right",
        route: "/fade_slide_demo/demo_1",
      },
    ],
  },
]);
</script>

<style scoped></style>
