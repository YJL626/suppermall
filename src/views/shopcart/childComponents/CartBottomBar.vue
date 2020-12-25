<template>
  <div class="bottom-bar">
    <div class="img-container">
      <Selected
        @click.native="$store.commit('cartCheckedAllChange')"
        class="selected-img"
        :checked="isAllChecked"
      />
      <span>全选</span>
    </div>
    <div class="totle-price-container">
      <span>合计:</span>
      <span class="price">￥{{ cartCheckedTotalPrice }}</span>
    </div>
    <div class="settlement">
      <button @click="settlement">
        去结算({{ cartCheckedGoodsArr.length }})
      </button>
    </div>
  </div>
</template>

<script>
import Selected from "components/common/selected/Selected.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isAllChecked",
      "cartCheckedTotalPrice",
      "cartCheckedGoodsArr",
    ]),
  },
  props: {},
  methods: {
    settlement() {
      const tip =
        +this.cartCheckedTotalPrice > 0
          ? `结算完成${this.cartCheckedTotalPrice}元`
          : "请添加商品";
      this.$toast.show(tip, 2000);
      this.$emit("show-tip", this.cartCheckedTotalPrice);
      this.$store.commit("cartCheckGoodsRemove");
    },
  },
  components: {
    Selected,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.bottom-bar {
  display: flex;
  position: absolute;
  height: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  background: #f6f6f6;
  box-shadow: 0 -1px rgba($color: #bdbdbd, $alpha: 0.08);

  .img-container {
    margin: auto 2.8%;
    display: flex;
    justify-content: center;
    align-items: center;
    .selected-img {
      width: 9px;
      height: 9px;
    }
    span {
      font-size: $font-size + 1px;
      padding-left: 10px;
    }
  }
  .totle-price-container {
    display: flex;
    height: 100%;
    align-items: center;
    span {
      font-size: $font-size + 2px;
      font-weight: 500;
    }
    .price {
      font-weight: 600;
    }
  }

  .settlement {
    margin-left: auto;
    margin-right: 2%;
    display: flex;
    button {
      font-size: $font-size -2px;
      margin: auto;
      padding: 8px 15px;
      box-shadow: none;
      border: none;
      border-radius: 10px;
      outline: none;
      background-color: red;
      border: none;
      color: #fff;
    }
  }
}
</style>