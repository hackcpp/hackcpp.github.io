import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/coding/",
  "/improve/",
  "/algo/",
  "/design/",
  {
    text: "基础教程",
    icon: "book",
    children: [
      {
        text: "C++ 基础教程",
        link: "https://hackingcpp.com/cpp/hello_world.html",
      },
      {
        text: "Python 基础教程",
        link: "https://pythonexamples.org/python-hello-world/",
      },
      {
        text: "推荐书籍",
        link: "/books/share_books",
      },
    ]
  },
  {
    text: "在线工具",
    icon: "screwdriver-wrench",
    children: [
      {
        text: "Compiler Explorer",
        link: "https://godbolt.org/",
      },
      {
        text: "Cpp Insight",
        link: "https://cppinsights.io/",
      },
      {
        text: "Visualize Code",
        link: "https://pythontutor.com/render.html#mode=display",
      },
      {
        text: "Cpp Reference",
        link: "https://en.cppreference.com/w/",
      },
    ]
  },
  // "/sideline/",
]);
