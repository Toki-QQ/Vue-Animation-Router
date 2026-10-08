import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_DESCRIPTION = "让路由切换“动”起来";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
      { text: "指南", link: "/getting-started" },
      { text: "演示样例", link: "/markdown-examples" },
    ],

    sidebar: {
      "/": [
        {
          text: "介绍",
          items: [
            {
              text: "这是什么？",
              link: "/introduction.html",
            },
            {
              text: "开始",
              link: "/getting-started.html",
            },
          ],
        },
        {
          text: "动画路由视图组件",
          items: [
            { text: "组件API", link: "/animation-router-views/" },
            {
              text: "基础（无动画）",
              link: "/animation-router-views/base.html",
            },
            { text: "淡化", link: "/animation-router-views/fade.html" },
            { text: "滑动", link: "/animation-router-views/slide.html" },
            {
              text: "滑动（纵向）",
              link: "/animation-router-views/slide-y.html",
            },
            {
              text: "淡化滑动",
              link: "/animation-router-views/fade-slide.html",
            },
            {
              text: "淡化滑动（纵向）",
              link: "/animation-router-views/fade-slide-y.html",
            },
          ],
        },
      ],
    },
  },
};

export const zhSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {};
