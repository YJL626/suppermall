<template>
  <div class="GoodsListItem" @click="skipToDetail(goods.iid)">
    <img
      :src="goods.show.img"
      alt=""
      ref="img"
      @load="$bus.$emit('img-load')"
    />
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
  computed: {},
  methods: {
    skipToDetail(iid) {
      this.$router.push("detail/" + iid);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";

.GoodsListItem {
  width: 47%;
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
