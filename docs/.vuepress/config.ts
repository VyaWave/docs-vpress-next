import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  theme: '@vuepress/theme-default',
  plugins: ['vuepress-plugin-smooth-scroll', "@vuepress/active-header-links",],
  themeConfig: {
    logo: "/icon.png",
    navbar: [
      { text: "Home", link: "/" },
      { text: "⭐️ Star Me", link: "https://github.com/RVya" },
    ],
    sidebar: [
      '/Readme.md',
      '/javascript.md',
      "/source.md",
      // "/optimization.md",
      // "/template.md",
      "/browser.md",
      "/html.md",
      "/function.md",
      "/css.md",
      "/object.md",
      "/design-patterns.md",
      "/algorithm.md",
      "/interview.md",
      "/node.md",
      "/nginx.md",
      // "/common-sense.md",
      // "/changelog.md",
      "/webpack.md",
      "/about-me.md",
    ],
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: 'Updated at',
    themePlugins: {
      backToTop: true,
      nprogress: true
    },
    externalLinkIcon: true,
  },

  head: [["link", { rel: "icon", href: "/icon.png" }]],

  source: 'docs',
  base: "/",

  dest: "deploy",
  temp: '.temp',
  cache: '.cache',

  // markdown: {
  //   // anchor: {
  //   //   level: 2
  //   // },
  //   toc: { level: [2, 3] },
  //   extractHeaders: {
  //     level:[2,3]
  //   }
  // },
})
