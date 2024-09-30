<template>
  <div class="main-container">
    <div class="left-container">
      <slot name="left"></slot>
    </div>
    <div class="right-container">
      <slot name="right"></slot>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'LeftRightLayout',
  };
</script>
  
<style scoped>
  /* 设置主容器为flex布局 */
.main-container {
  display: flex;
  flex-direction: row; /* 主体左右布局 */
}
/* 可以根据需要添加一些样式 */
.left-container, .right-container {
  border-radius:8px;
  flex: 1; 
  background-color:white;
  padding: 5px;
}
/* 设置右侧容器 */
.right-container {
  margin-left: 5px;
}

</style>
  