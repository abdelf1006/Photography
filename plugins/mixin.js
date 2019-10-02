import Vue from 'vue'
import SideBarMobile from '@/components/SideBarMobile'
Vue.mixin({
  components: {
    SideBarMobile
  },
  created() {
    if (process.client) {
      const listener = e => {
        if (
          this.$el.contains(e.target) || e.target.classList.contains("icon-menu")
        ) {
          return;
        }
        document.body.classList.remove("offcanvas-menu");
      };
      document.addEventListener("click", listener);
      this.$once("hook:beforeDestroy", () => {
        document.body.classList.remove("offcanvas-menu");
      });
    }
  }
})
