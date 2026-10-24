<template>
  <div
    v-if="deviceStore.getDevice === 'PHONE'"
    class="w-full h-ful flex items-center justify-center border rounded-md"
  >
    <Button
      class="w-full"
      icon="pi pi-bars"
      label="Menu"
      aria-label="menu"
      severity="secondary"
      variant="text"
      iconOnly
      @click="toggleMenu"
    />
  </div>

  <Menu ref="menu" :model="items" :popup="deviceStore.getDevice === 'PHONE'">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon"></span>
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { useDeviceStore } from "@/store/Device";
import { sideMenuItems } from "@/data/MenuItems";

const deviceStore = useDeviceStore();

const menu = ref();

// 左侧菜单项
// left side menu items
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Documentation",
    icon: "pi pi-book",
    url: "https://toki-qq.github.io/Vue-Animation-Router/",
    target: "_blank",
  },
  {
    label: "Demos",
    items: sideMenuItems,
  },
]);

/**
 * 切换侧边菜单显示状态
 * toggle left side menu display status
 */
function toggleMenu(event: MouseEvent | TouchEvent) {
  event.stopPropagation();
  menu.value.toggle(event);
}
</script>

<style scoped></style>
