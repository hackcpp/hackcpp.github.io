  <template>
    <div class="code-box"> 
      <div class="toolbar">
        <span v-if="showTip" ><strong>code has been copied to the clipboard.</strong></span>
        <TipIcon icon="fas fa-copy" tip="copy" @click="handleCopyClick"/>
        <TipIcon icon="fas fa-play" tip="run" @click="handleRunClick"/>
      </div>
      <hr/> 
      <slot name="code"></slot>
    </div>
  </template>
  
  <script>
  import TipIcon from '@TipIcon';
  export default {
    name: 'CodeBox',
    components: {
      TipIcon,
    },
    props: {
      link: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        showTip: false,
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
        console.error('copy failed: ', err);
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

  </style>
  
  