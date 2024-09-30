<template>
    <div class="container">
      <div class="box left">
        <slot name="left"></slot> <!-- 左侧内容 -->
      </div>
      <div class="box right">
        <slot name="right"></slot> <!-- 右侧内容 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RowLayout',
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between; /* 两个块左右对齐 */
  }
  .box {
    flex: 1; /* 每个块平分可用空间 */
    border: 1px solid #ccc;
    box-sizing: border-box; /* 确保内边距不会影响块的大小 */
    border-radius: 8px;
  }
  </style>
  