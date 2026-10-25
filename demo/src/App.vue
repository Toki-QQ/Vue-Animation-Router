<template>
  <div
    class="w-screen h-screen p-4 flex flex-col gap-4 dark:bg-gray-800"
    :class="{ dark: appStore.getTheme === 'dark' }"
  >
    <!-- 顶部菜单 -->
    <!-- panel menu -->
    <PanelMenu />

    <!-- 主体内容 -->
    <!-- content -->
    <div class="flex-1 flex flex-col sm:flex-row sm:items-stretch gap-4">
      <!-- 菜单 -->
      <!-- side menu -->
      <SideMenu />

      <!-- 路由内容 -->
      <!-- router view -->
      <div class="flex-1 sm:h-full overflow-hidden">
        <VarFadeRouterView class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup="setup">
import PanelMenu from "@/components/PanelMenu.vue";
import SideMenu from "@/components/SideMenu.vue";

import { VarFadeRouterView } from "vue-animation-router/es";

import { useAppStore } from "@/store/App";
import { useDeviceStore } from "@/store/Device";

const appStore = useAppStore();
const deviceStore = useDeviceStore();

// 初始化设备类型
// initialize device type
deviceStore.setDevice();

// 初始化当前主题
// initialize current theme
initCurrentTheme();

/**
 * 初始化当前主题
 * init current theme
 */
function initCurrentTheme() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  if (media.matches) {
    appStore.setTheme("dark");
  } else {
    appStore.setTheme("light");
  }

  media.addEventListener("change", (e) => {
    if (e.matches) {
      appStore.setTheme("dark");
    } else {
      appStore.setTheme("light");
    }
  });
}
</script>

<style scoped></style>
