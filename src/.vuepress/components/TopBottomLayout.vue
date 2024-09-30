<template>
  <div class="main-container">
    <div class="upper-part">
      <slot name="top"></slot>
    </div>
    <div class="lower-part">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'TopBottomLayout',
  };
</script>
  
<style scoped>
  /* 设置主容器为flex布局 */
.main-container {
  display: flex;
  flex-direction: column; /* 主体上下布局 */
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
  border-top: 1px solid gray;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

</style>
  