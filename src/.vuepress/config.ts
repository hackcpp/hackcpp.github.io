import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "程序员的白粥馆",
  description: "编程知识库, 记录一些编程相关的知识, 如: 算法, 数据结构, 计算机网络, 数据库, 操作系统, 编程语言等.",
  // editLink: false,
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
