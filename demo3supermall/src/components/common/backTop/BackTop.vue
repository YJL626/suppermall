<template>
  <div class="backTop">
    <img class="img" src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.backTop {
  position: fixed;
  bottom: 16vh;
  right: 0.8vw;
  z-index: 9999999;
  img {
    width: 43px;
  }
}
</style>