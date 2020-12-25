<template>
  <div class="detail-bottom-bar">
    <div class="service">
      <span class="icon service"></span>
      <p>客服</p>
    </div>
    <div class="shop">
      <span class="icon shop"></span>
      <p>店铺</p>
    </div>
    <div class="collect">
      <span class="icon collect"></span>
      <p>收藏</p>
    </div>
    <p class="add-shop-cart" @click="$emit('add-to-cart')">加入购物车</p>
    <p class="buy">购买</p>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  created() {},
  data() {
    return {};
  },
  components: {},
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.detail-bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  display: flex;
  box-shadow: 0 -1px rgba($color: #a19d9d, $alpha: 0.08);
  justify-content: center;
  text-align: center;

  & > div {
    flex: 1 1 6%;
    p {
      padding: 1px;
    }
    .icon {
      display: inline-block;
      width: 22px;
      height: 24px;
      background: url(~assets/img/detail/detail_bottom.png);
      background-size: 22px;
    }

    .service {
      background-position: 0 -50px;
    }

    .shop {
      background-position: 0 -95px;
    }
    .collect {
      background-position: 0 5px;
    }
  }

  & > p {
    line-height: 49px;
    flex: 1 1 18%;
  }
  .add-shop-cart {
    background: #f7d70f;
    flex: 1 1 25%;
  }
  .buy {
    background: #ff779b;
  }
}
</style>