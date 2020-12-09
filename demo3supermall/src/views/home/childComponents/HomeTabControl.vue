<template>
  <div class="HomeTabControl">
    <TabControl :tabArr="['流行', '新款', '精选']" @tabchange="tabChange" />
  </div>
</template>

<script>
import TabControl from "components/common/tabControl/TabControl";

export default {
  components: {
    TabControl,
  },
  data() {
    return {
      suspendLocation: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.keepShow.bind(this));
  },

  methods: {
    keepShow(event) {
      const homeTabControl = document.querySelector(".HomeTabControl");
      const relativeClientY = homeTabControl.getBoundingClientRect().y;
      if (relativeClientY < 44) {
        homeTabControl.classList.add("suspend");
        this.suspend = window.pageYOffset;
      }
      if (this.suspend > window.pageYOffset) {
        homeTabControl.classList.remove("suspend");
      }
    },
    tabChange(index) {
      this.$emit("tabchange", index);
    },
  },
};
</script>

<style lang="scss">
.suspend {
  position: fixed;
  top: 44px;
  background-color: white;
  width: 100%;
}
</style>
