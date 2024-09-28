<template>
    <div >
      <div class="card-container">
        <div
          v-for="(tool, index) in tools"
          :key="index"
          class="card"
          @click="openLink(tool.link)"
        >
          <div>
            <span class="card-icon"> <img :src="tool.logo" height="32px"/> </span>
            <span class="card-title"> {{ tool.title }} </span>
          </div>
          <div class="card-content">
            <p class="description">{{ tool.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToolBox',
    data() {
      return {
        tools: [
          {
            title: 'Compiler Explorer',
            desc: '查看和分析不同语言编译后的汇编',
            logo: 'https://godbolt.org/favicon.ico',
            link: 'https://godbolt.org/',
          },
          {
            title: 'Cpp Insight',
            desc: '展示和解释代码背后的机制和转换',
            logo: 'https://cppinsights.io/favicon.ico',
            link: 'https://cppinsights.io/',
          },
        {
            title: 'Visualize Code',
            desc: '代码可视化调试和执行的在线工具',
            logo: 'https://pythontutor.com/favicon.ico',
            link: 'https://pythontutor.com/',   
        },
        {
            title: 'Draw.io',
            desc: '在线画图工具，支持流程图、UML等',
            logo: 'https://app.diagrams.net/favicon.ico',
            link: 'https://app.diagrams.net/',
         },
        ]
      };
    },
    methods: {
      openLink(link) {
        window.open(link, '_blank'); // 打开链接在新窗口
      }
    }
  };
  </script>
  
  <style scoped>
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 定义2列布局 */
    grid-gap: 20px; /* 卡片间距 */
    padding: 20px;
  }
  
  /* 卡片样式 */
  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: left;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* 图标区域样式 */
  .card-icon {
    margin-bottom: 10px;
  }
  .card-title {
    font-size: 30px;
    margin-left: 10px;
  }
  
  /* 内容区域样式 */
  .card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-content h3 {
    margin: 0;
    font-size: 20px;
    color: #333;
  }
  
  .card-content .description {
    margin-top: 10px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 使用Webkit浏览器的多行截断 */
    -webkit-line-clamp: 3; /* 限制3行 */
    -webkit-box-orient: vertical;
    line-height: 1.5; /* 设置行高 */
    height: 4.5em; /* 根据行数限制高度 */
  }
  
  /* 在屏幕宽度小于768px时，每行显示1个卡片 */
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
  
  