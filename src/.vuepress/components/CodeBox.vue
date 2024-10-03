  <template>
    <div class="code-box"> 
      <div class="toolbar">
         <span v-if="showTip" >{{tip}}</span>
        <HopeIcon icon="fas fa-copy" @click="handleCopyClick" class="icon"/> 
        <HopeIcon icon="fas fa-play" @click="handleRunClick" class="icon"/> 
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
    data() {
      return {
        showTip: false,
        tip: 'code has been copied to the clipboard.',
      };
    },
    methods: {
      handleRunClick() {
        window.open(this.link, '_blank');
        navigator.clipboard.writeText(this.code);
      },
      handleCopyClick() {
        navigator.clipboard.writeText(this.code).then(() => {
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 1000); 
      }).catch(err => {
        console.error('复制失败: ', err);
      });
      },
    },
    computed: {
      code() {
        let code = this.$props.link;
        let start = code.indexOf('=') + 1;
        let end = code.indexOf('&');
        let codeStr = code.substring(start, end);
        return decodeURIComponent(codeStr);
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
    align-items: center;
    gap: 8px;
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
  
  