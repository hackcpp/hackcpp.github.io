  <template>
    <div class="code"> 
      <slot name="code"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CodeBox',
  };
  </script>
  
  <style scoped>
  .code {
    background-color:dimgray;
  }

  </style>
  
  