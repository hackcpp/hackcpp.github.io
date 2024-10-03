<template>
    <div class="icon-wrapper" @mouseover="showTooltip" @mouseleave="hideTooltip">
      <HopeIcon :icon="icon" class="icon" @click="hideTooltip"/>
      <span v-if="isTooltipVisible" class="tooltip">{{ tip }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TipIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      tip: {
        type: String,
      },
    },
    data() {
      return {
        isTooltipVisible: false,
      };
    },
    methods: {
      showTooltip() {
        this.isTooltipVisible = true;
        // setTimeout(() => {
        //   this.isTooltipVisible = false;
        // }, 2000);
      },
      hideTooltip() {
        this.isTooltipVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-wrapper {
    position: relative;
    display: inline-block;
  }
  
  .icon {
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .tooltip {
    visibility: visible;
    background-color:lightgray;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: -130%; /* 调整提示框的位置 */
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .icon-wrapper:hover .tooltip {
    opacity: 1;
  }
  .icon:hover {
    background-color: gray;
  }
  </style>