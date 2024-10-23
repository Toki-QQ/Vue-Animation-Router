import { defineConfig } from "vitepress";
import { root } from "../../demo/.eslintrc";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Animation Router",
  description: "Make router views switch lively.",
  // srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",
    siteTitle: "Vue Animation Router",
    nav: [
      { text: "指南", link: "/" },
      { text: "演示样例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Toki-QQ/Vue-Animation-Router",
      },
    ],
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
    },
    en: {
      label: "English",
      lang: "en",
      dir: "en/",
    },
  },
});
