  <template>
    <span :style="style"> {{data}} </span>
  </template>
  
  <script>
  export default {
    name: 'ColorSpan',
    props: {
      data: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: 'blue',
      },
    },
    computed: {
      style() {
        return {
          color: this.color,
        }
      }
    },
  }
  </script>
  
  <style scoped>
  </style>
  
  