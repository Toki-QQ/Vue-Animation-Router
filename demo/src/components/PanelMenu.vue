<template>
  <div>
    <MegaMenu>
      <template #start>
        <img src="@public/favicon.svg" alt="logo" class="size-8" />

        <span class="ml-3 text-lg font-semibold">
          {{
            deviceStore.getDevice === "PHONE" ? "VAR" : "Vue Animation Router"
          }}
          Demo
        </span>
      </template>

      <template #end>
        <div class="flex items-center gap-4">
          <Button
            :icon="`pi ${appStore.getTheme === 'light' ? 'pi-moon' : 'pi-sun'}`"
            aria-label="Theme"
            @click="onThemeClick"
          />

          <Button
            icon="pi pi-github"
            label="Star"
            aria-label="Github"
            @click="onGithubClick"
          />
        </div>
      </template>
    </MegaMenu>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/App";
import { useDeviceStore } from "@/store/Device";

const appStore = useAppStore();
const deviceStore = useDeviceStore();

/**
 * 跳转到文档
 * to docs
 */
function onDocsClick() {
  window.open("https://toki-qq.github.io/Vue-Animation-Router/", "_blank");
}

/**
 * 切换主题
 * toggle theme
 */
function onThemeClick() {
  appStore.switchTheme();
}

/**
 * 跳转到github
 * to github
 */
function onGithubClick() {
  window.open("https://github.com/Toki-QQ/Vue-Animation-Router", "_blank");
}
</script>
