import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "书籍推荐",
      icon: "book",
      link: "/books/share_books",
    },
    {
      collapsible: true,
      text: "面试集锦",
      icon: "laptop-code",
      prefix: "interview/",
      link: "interview/",
      children: [
        "1 c++basic.md",
        "2 process.md",
        "3 thread.md",
        "4 c++11.md",
      ],
    },
    {
      collapsible: true,
      text: "数据结构",
      icon: "database",
      prefix: "algo/",
      link: "algo/",
      children: [
        "1 array_and_list.md",
        "2 queue_and_stack.md",
        "3 hash_map.md",
        "4 tree.md",
      ],
    },
    {
      collapsible: true,
      text: "架构设计",
      icon: "network-wired",
      prefix: "design/",
      link: "design/",
      children: [
        "1 design_patterns.md",
        "2 observer_pattern.md",
        "3 strategy_pattern.md",
        "4 decorator_pattern.md",
        "5 bridge_pattern.md",
        "6 factory_pattern.md",
        "7 chain_of_responsibility_pattern.md",
        "8 mvvm.md",
        "9 model_view_in_qt.md",
      ],
    },
    {
      collapsible: true,
      text: "其他",
      icon: "folder",
      prefix: "other/",
      link: "other/",
      // children: [
      //   "1 linux_commands.md",
      //   "2 encrypt_string.md",
      // ],
    },
  ],
});
