import { defineConfig } from "vitepress";
import { github } from "./meta";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ishangsf Blog",
  description: "My VitePress Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "读书笔记", link: "/markdown-examples" },
    ],
    logo: "./logo.svg",
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "返回顶部",
    outlineTitle: "导航栏",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "归档",
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: "在 GitHub 上编辑此页",
    },
    lastUpdatedText: "最后一次更新于",
    footer: {
      message: `欢迎 <a target="_blank" style="color: var(--vp-c-brand)" ">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" >MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" >ishangsf Blog</a>`,
    },
    sidebar: [
      {
        text: "读书笔记",
        items: [{ text: "你不知道的JavaScript", link: "/markdown-examples" }],
      },
    ],

    socialLinks: [{ icon: "github", link: github }],
  },
});
