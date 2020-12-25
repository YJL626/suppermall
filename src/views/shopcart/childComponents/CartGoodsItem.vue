<template>
  <div class="cart-goods-item-container" v-if="goods.title">
    <div class="selected-img-container left">
      <div>
        <Selected
          @click.native="$store.commit('checkedChange', goods)"
          class="checked-img"
          :checked="goods.checked"
        />
      </div>
    </div>
    <div class="right">
      <div v-if="shopInfo" class="shop-info title">
        <img class="logo" :src="shopInfo.shopLogo" alt="" />
        <span>{{ shopInfo.name }} ></span>
      </div>

      <div class="left main">
        <div class="main-left goods-img">
          <div class="cut-container"><img :src="goods.image" alt="" /></div>
        </div>
        <div class="main-right" v-if="goods.title">
          <p>{{ goods.title }}</p>
          <div class="main-bottom">
            <p class="price">￥{{ goods.price }}</p>
            <div class="count-control">
              <button :disabled="goods.count < 2" @click="countChange(-1)">
                -
              </button>
              <span @click="$emit('show-modal-box', goods)" class="count">{{
                goods.count
              }}</span>
              <button @click="countChange(1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Selected from "components/common/selected/Selected";

export default {
  name: "CartGoodsItem",
  created() {},
  data() {
    return {
      isShowCountSetter: false,
    };
  },
  props: {
    goods: {
      type: Object,
    },
  },
  computed: {
    shopInfo() {
      if (!Object.keys(this.goods).length) return;
      return this.goods.shopInfo;
    },
  },
  methods: {
    countChange(value) {
      const newCount = this.$store.dispatch("cartCountChange", {
        id: this.goods.id,
        count: value,
      });
    },
    showModle() {},
  },
  components: {
    Selected,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.cart-goods-item-container {
  display: flex;
  background: #fff;
  margin: 15px 0;
  padding: 15px 5px 15px 5px;
  border-radius: 25px;
  .left {
    flex: 0 1 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    .checked-img {
      width: 10px;
      height: 10px;
    }
  }
  .right {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    .shop-info {
      line-height: 26px;
      .logo {
        border-radius: 50%;
        width: 26px;
      }
    }
    .left {
      display: flex;
      justify-content: center;
      .main-left {
        width: 100px;
        height: 80px;
        margin: 5px 5px 0 0;
        .cut-container {
          width: 100px;
          height: 80px;
          overflow: hidden;
          border-radius: 15px;

          img {
            width: 100px;
          }
        }
      }
      .main-right {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .main-bottom {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: $font-size + 5px;
            color: $color-price;
          }
          .count-control {
            margin-right: 15px;
            font-size: $font-size + 2px;
            & > button {
              font-size: $font-size + 5px;
              margin: 1px 5px;
              padding: 2px;
              width: 20px;
              line-height: 15px;
            }
            .count {
              display: inline-block;
              width: 20px;
              text-align: center;
              padding: 2px 5px;
            }
          }
        }
      }
    }
  }
}
</style>