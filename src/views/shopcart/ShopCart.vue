<template>
  <div class="shop-cart">
    <CartTopBar :goodsArrLength="cartGoodsArr.length" />
    <transition>
      <CartModalBox
        v-if="isShowCountSetter"
        @hide="isShowCountSetter = false"
        :goods="modalBoxData"
      />
    </transition>
    <Scroll :config="scrollConfig" class="scroll" ref="scrollCPN">
      <CartGoodsContainer :cartGoodsArr="cartGoodsArr">
        <template v-if="cartGoodsArr">
          <CartGoodsItem
            :goods="goods"
            v-for="(goods, index) in cartGoodsArr"
            :key="index"
            @show-modal-box="showCountSetter(goods)"
          />
        </template>
      </CartGoodsContainer>
    </Scroll>
    <CartBottomBar />
  </div>
</template>

<script>
import CartTopBar from "views/shopcart/childComponents/CartTopBar.vue";
import CartGoodsContainer from "views/shopcart/childComponents/CartGoodsContainer";
import CartGoodsItem from "views/shopcart/childComponents/CartGoodsItem.vue";
import CartModalBox from "views/shopcart/childComponents/CartModalBox.vue";
import CartBottomBar from "views/shopcart/childComponents/CartBottomBar.vue";

import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      scrollConfig: {
        click: true,
        mouseWheel: {},
      },
      isShowCountSetter: false,
      modalBoxData: null,
    };
  },
  methods: {
    showCountSetter(goods) {
      this.modalBoxData = goods;
      this.isShowCountSetter = true;
    },
  },
  components: {
    CartTopBar,
    CartGoodsContainer,
    Scroll,
    CartGoodsItem,
    CartModalBox,
    CartGoodsItem,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartGoodsArr"]),
  },
  mounted() {},
  activated() {
    this.$refs.scrollCPN.refresh();
  },
  updated() {
    this.$refs.scrollCPN.refresh();
  },
};
</script>

<style lang="scss" scoped>
.shop-cart {
  height: 100vh;
  background: rgba($color: #8d8c8c, $alpha: 0.08);
  position: relative;
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px +46px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>