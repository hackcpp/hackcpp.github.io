<template>
    <span v-if="!isWrong" style="color:green;"> &#10004; </span>
    <span v-if="isWrong" style="color:red;"> &#10006; </span>
  </template>
  
  <script>
  export default {
    name: 'RightSpan',
    props: {
      type: {
        type: String,
        default: 'right',
      },
    },
    computed: {
        isWrong() {
            return this.type !== 'right';
        },
    },
  }
  </script>
  
  <style scoped>
  </style>
  
  