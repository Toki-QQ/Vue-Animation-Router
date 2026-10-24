import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_DESCRIPTION = "Make router views switch lively.";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,

  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "Vue Animation Router",

    editLink: {
      pattern: "https://github.com/Toki-QQ/Vue-Animation-Router/docs/:path",
      text: "Submit a pull request",
    },

    outline: {
      label: "Page content",
    },

    docFooter: {
      prev: "Previous",
      next: "Next",
    },

    nav: [
      { text: "Guide", link: "/en/introduction" },
      {
        text: "Demo",
        link: "https://toki-qq.github.io/Vue-Animation-Router-Demo/",
      },
    ],

    sidebar: {
      "/en": [
        {
          text: "Introduction",
          items: [
            {
              text: "What is it?",
              link: "/en/introduction",
            },
            {
              text: "Get started",
              link: "/en/getting-started",
            },
          ],
        },
        {
          text: "Animation Router Views",
          items: [
            { text: "Component API", link: "/en/animation-router-views/" },
            {
              text: "Basic (No animation)",
              link: "/en/animation-router-views/base",
            },
            { text: "Fade", link: "/en/animation-router-views/fade" },
            { text: "Slide", link: "/en/animation-router-views/slide" },
            {
              text: "Slide (Vertical)",
              link: "/en/animation-router-views/slide-y",
            },
            {
              text: "Fade Slide",
              link: "/en/animation-router-views/fade-slide",
            },
            {
              text: "Fade Slide (Vertical)",
              link: "/en/animation-router-views/fade-slide-y",
            },
            {
              text: "Zoom In",
              link: "/en/animation-router-views/zoom-in",
            },
            {
              text: "Zoom Out",
              link: "/en/animation-router-views/zoom-out",
            },
          ],
        },
      ],
    },
  },
};

export const enSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {};
