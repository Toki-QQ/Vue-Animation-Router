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
      { text: "Guide", link: "/getting-started" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/en": [
        {
          text: "Introduction",
          items: [
            {
              text: "What is it?",
              link: "/en/introduction.html",
            },
            {
              text: "Get started",
              link: "/en/getting-started.html",
            },
          ],
        },
        {
          text: "Animation Router Views",
          items: [
            { text: "Component API", link: "/en/animation-router-views/" },
            {
              text: "Basic (No animation)",
              link: "/en/animation-router-views/base.html",
            },
            { text: "Fade", link: "/en/animation-router-views/fade.html" },
            { text: "Slide", link: "/en/animation-router-views/slide.html" },
            {
              text: "Slide (Vertical)",
              link: "/en/animation-router-views/slide-y.html",
            },
            {
              text: "Fade Slide",
              link: "/en/animation-router-views/fade-slide.html",
            },
            {
              text: "Fade Slide (Vertical)",
              link: "/en/animation-router-views/fade-slide-y.html",
            },
          ],
        },
      ],
    },
  },
};

export const enSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {};
