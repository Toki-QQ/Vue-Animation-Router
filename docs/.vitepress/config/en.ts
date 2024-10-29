import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_DESCRIPTION = "Make router views switch lively.";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,

  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "Vue Animation Router",

    editLink: {
      pattern: "https://github.com/Toki-QQ/Vue-Animation-Router/docs/:path",
      text: "对本页提出修改建议",
    },

    outline: {
      label: "本页内容",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    nav: [
      { text: "Guide", link: "/" },
      { text: "Demo", link: "/markdown-examples" },
    ],

    sidebar: {
      "/zh/api/": [
        {
          text: "packages",
          items: [
            { text: "pinia", link: "/zh/api/modules/pinia.html" },
            { text: "@pinia/nuxt", link: "/zh/api/modules/pinia_nuxt.html" },
            {
              text: "@pinia/testing",
              link: "/zh/api/modules/pinia_testing.html",
            },
          ],
        },
      ],
      "/zh/": [
        {
          text: "介绍",
          items: [
            {
              text: "Pinia 是什么？",
              link: "/zh/introduction.html",
            },
            {
              text: "开始",
              link: "/zh/getting-started.html",
            },
          ],
        },
        {
          text: "核心概念",
          items: [
            { text: "定义 Store", link: "/zh/core-concepts/" },
            { text: "State", link: "/zh/core-concepts/state.html" },
            { text: "Getter", link: "/zh/core-concepts/getters.html" },
            { text: "Action", link: "/zh/core-concepts/actions.html" },
            { text: "插件", link: "/zh/core-concepts/plugins.html" },
            {
              text: "组件外的 Store",
              link: "/zh/core-concepts/outside-component-usage.html",
            },
          ],
        },
        {
          text: "服务端渲染 (SSR)",
          items: [
            {
              text: "Vue 与 Vite",
              link: "/zh/ssr/",
            },
            {
              text: "Nuxt.js",
              link: "/zh/ssr/nuxt.html",
            },
          ],
        },
        {
          text: "手册",
          collapsed: false,
          items: [
            {
              text: "目录",
              link: "/zh/cookbook/",
            },
            {
              text: "从 Vuex ≤4 迁移",
              link: "/zh/cookbook/migration-vuex.html",
            },
            {
              text: "热更新",
              link: "/zh/cookbook/hot-module-replacement.html",
            },
            {
              text: "测试",
              link: "/zh/cookbook/testing.html",
            },
            {
              text: "不使用 setup() 的用法",
              link: "/zh/cookbook/options-api.html",
            },
            {
              text: "组合式 Stores",
              link: "/zh/cookbook/composing-stores.html",
            },
            {
              text: "VSCode 代码片段",
              link: "/zh/cookbook/vscode-snippets.html",
            },
            {
              text: "从 v0/v1 迁移至 v2",
              link: "/zh/cookbook/migration-v1-v2.html",
            },
            {
              text: "处理组合式函数",
              link: "/zh/cookbook/composables.html",
            },
          ],
        },
      ],
    },
  },
};
