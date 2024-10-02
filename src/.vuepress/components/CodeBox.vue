  <template>
    <div class="code-box"> 
      <div class="toolbar">
        <HopeIcon icon="fas fa-play" @click="handleClick" class="icon"/> 
      </div>
      <hr/> 
      <slot name="code"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CodeBox',
    props: {
      link: {
        type: String,
        default: '',
      },
    },
    methods: {
      handleClick() {
        window.open(this.link, '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .code-box {
    background-color:#f8f8f5;
  }
  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .icon {
    font-size: 20px;
    border-radius: 4px;
  }
  .icon:hover {
    background-color: gray;
  }

  </style>
  
  