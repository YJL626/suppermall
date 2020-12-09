<template>
  <div class="GoodsListItem">
    <img :src="goods.show.img" alt="" />
    <div class="details">
      <p class="title">{{ goods.title }}</p>
      <!--     <img src="~assets/img/common/collect.svg" alt=""> -->
      <span class="price">{{ goods.price }}</span>
      <span class="cfav">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  created() {},
  data() {
    return {};
  },
  props: {
    goods: {
      reqiured: true,
    },
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";

.GoodsListItem {
  width: 47%;
  padding-bottom: 12px;
  img {
    border-radius: 5px;
  }
  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .price {
    color: $color-price;
  }
  .details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p {
      width: 100%;
    }
    .cfav {
      position: relative;
      display: inline-block;
      box-sizing: content-box;
      padding-left: 20px;
      &::before {
        content: "";
        position: absolute;
        left: 5px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg");
        background-size: contain;
      }
    }
  }
}

/* .price {
  
   */
</style>
