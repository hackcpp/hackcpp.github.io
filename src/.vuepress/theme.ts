import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://hackcpp.github.io/",

  blog: {
    avatar: "/avatar.png",
    name: "Mr.Hackcpp",
    description: "90后 C++ 程序猿, 学习记录, 技术分享, 编程笔记, 数据结构与算法, 程序架构设计",
    intro: "/portfolio.html",
    medias: {
      github: "https://github.com/hackcpp",
      // // 知识星球
      // zsxq: {
      //     // 图标地址
      //   icon: "https://hackcpp.github.io/zsxq.ico",
      //   // 链接
      //   link: "https://t.zsxq.com/JUsFY",
      // },
      // gzh: {
      //   // 图标地址
      //   icon: "https://hackcpp.github.io/gzh.ico",
      //   // 链接
      //   link: "https://t.zsxq.com/JUsFY",
      // },
    },
  },

  author: {
    name: "Mr.Hackcpp",
    url: "/portfolio.html",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.jpeg",

  repo: "https://github.com/hackcpp/hackcpp.github.io",

  docsDir: "src",
  editLink: false,
  contributors: false,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  //footer: "默认页脚",
  //displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
     // "/demo/encrypt.html": ["1234"],
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: {
      // 博客摘要配置
      excerptLength: 0,
    },
    sitemap: true,
    searchPro: true,
    seo: true,
    // watermark: true,
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      //支持类图，状态图等
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // 支持流程图
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex 支持Tex 语法
      katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // 状态图等
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // 代码语法高亮
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
      // 在启用之前安装 markmap-lib markmap-toolbar markmap-view 支持思维导图
      markmap: true,
      // 在启用之前安装 vuepress-plugin-zooming
      // zooming: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
