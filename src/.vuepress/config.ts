import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "程序员的白粥馆",
  description: "c++ 编程知识库",
  // editLink: false,
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
