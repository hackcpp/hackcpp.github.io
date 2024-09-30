  <template>
    <div class="toggle-container">
      <div class="toggle-title-box" @click="toggleVisibility">
        <div class="toggle-title">
          <span> {{title}} </span> 
        </div>
        <HopeIcon :icon="icon"/>
      </div>
      <div v-if="!isHidden" class="toggle-view">
        <slot name="toggle"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToggleContent',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isHidden: false,
        icon: 'fas fa-chevron-down',
      };
    },
    methods: {
      toggleVisibility() {
        this.isHidden = !this.isHidden;
        this.icon = this.isHidden ? 'fas fa-chevron-right' : 'fas fa-chevron-down';
      }
    }
  };
  </script>
  
  <style scoped>
  .toggle-container {
    background-color: lightgray;
    border-radius: 8px;
  }
  .toggle-title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 30px;
  }
  .toggle-title {
    font-size: 30px;
    padding: 5px;
  }
  .toggle-view {
    border-radius: 4px;
    padding: 5px;
  }
  </style>
  
  