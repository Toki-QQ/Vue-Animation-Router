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
          text: "动画路由组件",
          items: [
            { text: "简介", link: "/animation-router-views/" },
            {
              text: "基础（无动画）",
              link: "/animation-router-views/base.html",
            },
            { text: "淡化", link: "/animation-router-views/fade.html" },
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

export const zhSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索供应商",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
