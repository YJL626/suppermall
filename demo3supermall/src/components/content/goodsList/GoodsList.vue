<template>
  <div class="GoodsList">
    <GoodsListItem
      :goods="item"
      v-for="item in goodsList.list"
      :key=" Math.random() "
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
      type: Object,
    },
  },
  methods: {},
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/css/variable.scss';
.GoodsList {
  width: 99%;
  padding: 0.5%;
  display: flex;
  flex-wrap: wrap;
  font-size: $font-size ;
  justify-content: space-around;
}
</style>
