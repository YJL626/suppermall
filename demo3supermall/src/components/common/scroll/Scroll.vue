<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      control: null,
      imgFreshDebounce: null,
    };
  },
  computed: {},
  mounted() {
    this.control = new BScroll(this.$refs.wrapper, this.config);
    if (this.config.probeType) {
      this.control.on("scroll", (positon) => this.$emit("scroll", positon));
    }
    //传出滚轮滚动时的坐标
    if (this.config.mouseWheel) {
      this.control.on("mousewheelMove", (positon) =>
        this.$emit("scroll", positon)
      );
    }

    

    if (this.config.pullUpLoad) {
      this.control.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x = 0, y = 0, moveTime = 300) {
      this.control.scrollTo(x, y, moveTime);
    },
    //告诉控制器上拉结束
    finishPullUp() {
      this.control.finishPullUp();
    },
    //滚动至指定坐标
    scrollTo(x = 0, y = 0, ms = 300) {
      this.control.scrollTo(x, y, ms);
    },
    //刷新宽高
    refresh() {
      this.control.refresh();
    },
    scrollToElement(...arg) {
      this.control.scrollToElement(...arg);
    },
    getScrollY() {
      return this.control.y;
    },
    scrollToElement(...arg) {
      this.control.scrollToElement(...arg);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>