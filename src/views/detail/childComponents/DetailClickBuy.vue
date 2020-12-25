<template>
  <div class="click-buy" v-if="goods" @click="hideClickBuy">
    <div class="container" ref="container">
      <div class="title">
        <div class="img">
          <img :src="goods.image" alt="" />
        </div>
        <div class="price-container">
          <p class="price"><small>¥</small> {{ goods.price }}</p>
          <p class="id">编号：{{ goods.id }}</p>
        </div>
      </div>
      <div class="input-container">
        <p>数量</p>
        <div class="input">
          <button desab @click="count--" :disabled="count < 2">-</button>
          <input
            type="number"
            name="count"
            step="1"
            autofocus
            v-model="count"
            placeholder="1"
            max="999"
            min="1"
          />
          <button @click="count++">+</button>
        </div>
      </div>
      <div class="add-to-cart" @click="clickAddCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailClickBuy",
  created() {},
  data() {
    return {
      count: 1,
      showTip: null,
    };
  },
  props: ["goods"],
  methods: {
    hideClickBuy() {
      if (this.$refs.container && this.$refs.container.contains(event.target)) {
        return;
      }
      this.$emit("hide-click-buy");
    },
    clickAddCart() {
      this.goods.count = this.count;
      const goods = JSON.stringify(this.goods);
      this.$store
        .dispatch("receiveGoods", JSON.parse(goods))
        .then((result) =>
          result === "add-goods"
            ? this.$toast.show("商品添加成功")
            : this.$toast.show(`添加了${this.count}件`)
        )
        .finally((a) => this.$emit("hide-click-buy"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.click-buy {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: rgba(36, 30, 30, 0.2);
  .container {
    background-color: #fff;
    box-sizing: border-box;
    position: absolute;
    height: 50vh;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 25px;
    border-radius: 18px 18px 0 0;
    .title {
      display: flex;
      img {
        width: 30vw;
        flex: 1;
      }
      .price-container {
        flex: 1;
        font-size: $font-size + 8px;
        color: red;
        vertical-align: -50px;
        padding-left: 20px;
        align-self: bottom;
        .price {
          margin-top: 120px;
        }
        .id {
          color: rgba(131, 112, 112, 0.4);
          font-size: 10px;
          padding: 2px 0 15px 20px;
        }
      }
    }
    .input-container {
      display: flex;
      justify-content: space-between;
      font-size: $font-size + 2 px;
      line-height: 30px;
      p {
        font-weight: 600;
      }
      .input {
        * {
          box-sizing: border-box;
          padding: 2px;
          margin: 0 2px;
          text-align: center;
        }
        button {
          font-size: $font-size + 5px px;
          width: 30px;
        }
      }
    }
    .add-to-cart {
      position: absolute;
      background: $tint;
      line-height: 45px;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: $font-size + 2px;
      border-radius: 40px;
      margin: 8px;
    }
  }
}
</style>