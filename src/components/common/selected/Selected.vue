<template>
  <div class="container" :class="{ checked: checked }">
    <div class="mark"></div>
  </div>
</template>

<script>
export default {
  name: "Selected",
  created() {},
  data() {
    return {};
  },
  props: {
    checked: {
      default: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.container {
  background: #fff;
  position: relative;
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid rgba($color: #626161, $alpha: 0.3);
}
.mark {
  position: absolute;
  top: 15%;
  bottom: 15%;
  left: 15%;
  right: 15%;
  background-image: url("~assets/img/cart/tick.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.checked {
  background-color: $tint;
}
</style>