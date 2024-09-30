<template>
  <div class="main-container">
    <div class="left-container">
      <div class="upper-part">
        <slot name="left-top"></slot>
      </div>
      <div class="lower-part">
        <slot name="left-bottom"></slot>
      </div>
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
}
/* 设置左侧容器为flex布局 */
.left-container {
  display: flex;
  flex-direction: column; /* 左侧上下布局 */
  flex: 1; /* 左侧部分占据一定比例的空间 */
}
/* 设置右侧容器 */
.right-container {
  flex: 1; 
  margin-left: 5px;
  background-color:white;
  padding: 5px;
}

/* 设置左侧上部和下部 */
.upper-part, .lower-part {
  flex: 1; /* 上下部分平分左侧容器的空间 */
  padding: 5px;
}
.upper-part {
  background-color:white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.lower-part {
  flex: auto;
  background-color:antiquewhite;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

</style>
  