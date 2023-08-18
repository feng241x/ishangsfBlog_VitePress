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
      { text: "读书笔记", link: "/YouDontKnowJavaScript/1" },
      { text: "JavaScript", link: "/markdown-examples" },
      { text: "React", link: "/markdown-examples" },
      { text: "Vue", link: "/markdown-examples" },
      { text: "CSS", link: "/markdown-examples" },
      { text: "算法", link: "/markdown-examples" },
      { text: "设计模式", link: "/markdown-examples" },
      { text: "工程化", link: "/markdown-examples" },
      { text: "mxGraph中文文档", link: "/chineseDocument/mxGraph/" },
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
        items: [
          { text: "你不知道的JavaScript(上)", items: [
            { text: "第一章. 作用域和闭包", items: [
              { text: "1. 作用域是什么", link: "/YouDontKnowJavaScript/1/1.1" },
              { text: "2. 词法作用域", link: "/YouDontKnowJavaScript/1" }
            ]}
          ]},
          { text: "你不知道的JavaScript(中)", link: "/YouDontKnowJavaScript/2" },
          { text: "你不知道的JavaScript(下)", link: "/YouDontKnowJavaScript/3" },
          { text: "JavaScript语言精粹", link: "/JavaScriptLanguageEssentials/index" },
        ],
      },
      {
        text: "JavaScript",
        items: [],
      },
      {
        text: "CSS",
        items: [],
      },
      {
        text: "mxGraph中文文档",
        items: [
          { text: "Editor", items: [
            { text: "mxDefaultKeyHandler", link: "/chineseDocument/mxGraph/Editor/mxDefaultKeyHandler" },
            { text: "mxDefaultPopupMenu", link: "/chineseDocument/mxGraph/Editor/mxDefaultPopupMenu" },
            { text: "mxDefaultToolbar", link: "/chineseDocument/mxGraph/Editor/mxDefaultToolbar" },
            { text: "mxEditor", link: "/chineseDocument/mxGraph/Editor/mxEditor" },
          ] },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: github }],
  },
});
