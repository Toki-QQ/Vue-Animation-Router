<template>
  <div>
    <MegaMenu :model="items">
      <template #start>
        <!-- <svg
        width="35"
        height="40"
        viewBox="0 0 35 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8"
      >
        <path d="..." fill="var(--p-primary-color)" />
        <path d="..." fill="var(--p-text-color)" />
      </svg> -->
      </template>
      <template #item="{ item }">
        <a
          class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase"
          style="border-radius: 2rem"
        >
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <Button
          icon="pi pi-github"
          label="Star"
          aria-label="Github"
          @click="onGithubClick"
        />
      </template>
    </MegaMenu>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

// 顶部菜单项
// Menu items
const items = ref([
  {
    label: "DEMO",
    command: onDemoClick,
  },
  {
    label: "DOCUMENTATION",
    command: onDocsClick,
  },
]);

/**
 * 跳转到首页
 * to index
 */
function onDemoClick() {
  router.push({ name: "Index" });
}

/**
 * 跳转到文档
 * to docs
 */
function onDocsClick() {
  console.log("onDocsClick");
}

/**
 * 跳转到github
 * to github
 */
function onGithubClick() {
  window.open("https://github.com/Toki-QQ/Vue-Animation-Router", "_blank");
}
</script>
