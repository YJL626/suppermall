<template>
  <nav id="navBar">
    <div class="navBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["background"],
  mounted() {
    document.querySelector(
      "#navBar>.navBar"
    ).style.background = this.background;
  },
};
</script>

<style lang='scss'>
#navBar{
  height: 44px;
  .navBar {
  position: relative;
  z-index: 9;
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px rgba($color: #5e5959, $alpha: 0.08);
  .left,
  .right {
    min-width: 33px;
    width: 18vw;
  }
  .center {
    flex: 1 1 0;
    text-align: center;
  }
}
}
</style>