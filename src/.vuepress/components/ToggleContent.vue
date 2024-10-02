  <template>
    <div class="toggle-container">
      <div class="display-view" @click="toggleVisibility">
        <div v-if="needToggle" class="display-title-box">
          <div class="display-title">
            <span> {{title}} </span>
          </div> 
          <HopeIcon :icon="icon"/>
        </div>
        <div class="display-conten">
          <slot name="display"></slot>
        </div>
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
        Required: true,
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
    },
    computed: {
      needToggle() {
        return this.$props.title !== '';
      },
    },
  };
  </script>
  
  <style scoped>
  .toggle-container {
    background-color: white;
    border-radius: 8px;
  }
  .display-view, .toggle-view {
    padding: 10px;
  }
  .display-title-box {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
  }
  .display-title {
    font-size: 25px;
  }
  .display-conten {
    padding-left: 2px;
    padding-top: 5px;
  }
  .toggle-view {
    background-color:#f8f8f5;
    border-top: 1px solid gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    padding-left: 10px;
  }
  </style>
  
  