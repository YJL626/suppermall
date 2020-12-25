<template>
  <NavBar class="nav-bar">
    <template v-slot:center>
      <div>商品分类</div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.nav-bar {
  background-color: $tint;
  color: #fff;
  font-size: $font-size + 2px;
  font-weight: 500;
}
</style>