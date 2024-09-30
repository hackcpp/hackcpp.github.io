import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "程序员的白粥馆",
  description: "编程知识库, 记录一些编程相关的知识, 如: 算法数据结构, 计算机网络, 数据库, 操作系统, 编程语言等.",
  // editLink: false,
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  // 自定义 component
  alias: {
    "@ToolBox": path.resolve(__dirname, "components/ToolBox.vue"),
    "@ToggleContent": path.resolve(__dirname, "components/ToggleContent.vue"),
    "@TopToggleContent": path.resolve(__dirname, "components/TopToggleContent.vue"),
    //"@RowLayout": path.resolve(__dirname, "components/RowLayout.vue"),
    //"@TopBottomLayout": path.resolve(__dirname, "components/TopBottomLayout.vue"),
    "@LeftRightLayout": path.resolve(__dirname, "components/LeftRightLayout.vue"),
    //"@CommentSpan": path.resolve(__dirname, "components/CommentSpan.vue"),
    //"@CodeBox": path.resolve(__dirname, "components/CodeBox.vue"),
    "@ColorSpan": path.resolve(__dirname, "components/ColorSpan.vue"),

  },
});
