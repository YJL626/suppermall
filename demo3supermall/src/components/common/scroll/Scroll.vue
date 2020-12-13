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
      default: () => {},
    },
  },
  data() {
    return {
      control: null,
      imgFreshDebounce: null,
    };
  },
  methods: {
    scrollTo(x = 0, y = 0, moveTime = 300) {
      this.control.scrollTo(x, y, moveTime);
    },
  },
  mounted() {
    this.control = new BScroll(this.$refs.wrapper, this.config);

    this.control.on("scroll", (positon) => {
      //传出滑动坐标
      this.$emit("scroll", positon);
    });
    this.control.on("mousewheelMove", (positon) => {
      //传出滚轮滚动时的坐标
      this.$emit("scroll", positon);
    });
    this.control.on("pullingUp", () => {
      this.$emit("pullingUp");
    });

    //如果bus存在，
    //内部img load完成向bus提交可冒泡的事件，接收到事件则刷新
  },
  methods: {
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
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>