<template>
  <div class="w-screen h-screen p-4 flex flex-col gap-4">
    <!-- 顶部菜单 -->
    <!-- panel menu -->
    <PanelMenu />

    <!-- 主体内容 -->
    <!-- content -->
    <div class="flex-1 flex gap-4">
      <!-- 侧边菜单 -->
      <!-- left side menu -->
      <LeftSideMenu />

      <!-- 路由内容 -->
      <!-- router view -->
      <div class="flex-1 h-full overflow-hidden">
        <VarFadeRouterView class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup="setup">
import PanelMenu from "@/components/PanelMenu.vue";
import LeftSideMenu from "@/components/LeftSideMenu.vue";
import { VarFadeRouterView } from "vue-animation-router/es";
</script>

<style scoped></style>
