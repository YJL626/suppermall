<template>
  <div class="GoodsList">
    <GoodsListItem
      :goods="item"
      v-for="item in goodsList"
      :key="item + Math.random()"
    ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  created() {},
  data() {
    return {};
  },
  props: {
    goodsList: {
      type: Array,
    },
  },
  methods: {},
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.GoodsList {
  box-sizing: border-box;
  width: 100%;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  font-size: $font-size;
  justify-content: center;
}
</style>
