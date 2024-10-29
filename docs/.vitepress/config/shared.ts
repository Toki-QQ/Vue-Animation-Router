import { defineConfig, HeadConfig } from "vitepress";

export const sharedConfig = defineConfig({
  title: "Vue Animation Router",

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Toki-QQ/Vue-Animation-Router",
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/Toki-QQ/Vue-Animation-Router/blob/master/LICENSE" target="_blank">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/Toki-QQ" target="_blank">Toki</a> and Vue-Animation-Router contributors',
    },
  },
});
