<template>
  <div class="GoodsListItem" @click="skipToDetail(goodsId)">
    <img :src="imgSrc" alt="" ref="img" @load="$bus.$emit('img-load')" />
    <div class="detail">
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
  created() {},
  props: {
    goods: {
      reqiured: true,
    },
  },
  computed: {
    imgSrc() {
      return this.goods.image || this.goods.show.img;
    },
    goodsId() {
      return this.goods.iid || this.goods.item_id;
    },
  },
  methods: {
    skipToDetail(goodsId) {
      if (this.goods.item_id) return;
      this.$router.push("/detail/" + goodsId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";

.GoodsListItem {
  box-sizing: border-box;
  width: 50%;
  padding: 1%;
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
  .detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 8px auto 10px auto;
    p {
      width: 100%;
      padding-bottom: 3px;
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
</style>
