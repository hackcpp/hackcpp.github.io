import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "面试集锦",
      icon: "laptop-code",
      prefix: "interview/",
      link: "interview/",
      children: "structure",
    },
    {
      text: "数据结构与算法",
      icon: "book",
      prefix: "algo/",
      children: "structure",
    },
  ],
});
