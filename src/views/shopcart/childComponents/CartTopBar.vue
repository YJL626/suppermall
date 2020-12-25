<template>
  <NavBar class="top-bar">
    <template #center>
      <div>
        <span>购物车</span>
        <span v-if="goodsArrLength">({{ goodsArrLength }})</span>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "cartTopBar",
  created() {},

  data() {
    return {};
  },

  props: {
    goodsArrLength: {
      type: Number,
    },
  },
  methods: {},
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.top-bar {
  background: $tint;
  color: #fff;
  font-size: $font-size + 2px;
  span {
    padding: 2px;
  }
}
</style>