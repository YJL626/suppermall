<template>
  <ul class="tabBar">
    <slot></slot>
  </ul>
</template>

<script>
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name:'TabBar',
  components: {
    TabBarItem,
  },
};
</script>

<style lang='scss'>
@import "assets/css/variable.scss";

.tabBar {
  width: 100vw;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  color: $color-test;
  justify-content: space-around;
  box-shadow: 0 -2px rgba($color: #a39f9f, $alpha: 0.08);
}
</style>