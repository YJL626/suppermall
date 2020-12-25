<template>
  <div v-if="Object.keys(shopData).length" id="shop-info-page">
    <div class="info-container">
      <div class="title">
        <img :src="shopData.shopLogo" alt="" />
        <span>{{ shopData.name }}</span>
      </div>
      <div class="main">
        <div class="left">
          <div class="c-sells">
            <p>{{ cSells }}</p>
            <p>总销量</p>
          </div>
          <div class="c-goods">
            <p>{{ shopData.cGoods }}</p>
            <p>全部宝贝</p>
          </div>
        </div>

        <div class="socre">
          <div class="name-container">
            <p v-for="{ name } in shopData.score" :key="name">
              {{ name }}
            </p>
          </div>
          <div class="score-container">
            <p
              :class="{ 'light-font': item.isBetter }"
              v-for="item in shopData.score"
              :key="item.name + 'score'"
            >
              {{ item.score }}
            </p>
          </div>
          <div class="is-better-container">
            <p
              :class="{ 'light-background': item.isBetter }"
              v-for="item in shopData.score"
              :key="item.name + 'score'"
            >
              <template v-if="item.isBetter">高</template>
              <template v-else>低</template>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="go-shop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfoPage",
  created() {},
  data() {
    return {};
  },
  props: {
    shopData: {
      default: Object,
    },
  },
  computed: {
    cSells() {
      if (!this.shopData) return;
      return (this.shopData.cSells / 10000).toFixed(1) + "万";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
#shop-info-page {
  .title {
    margin: 20px 0 12px 10px;
    img {
      margin-right: 10px;
      width: 56px;
      border-radius: 50%;
      padding: 2px;
      border: solid 1px rgba(200, 195, 186, 0.28);
    }
  }
  .main {
    display: flex;
    justify-content: space-around;
    font-size: $font-size;
    .left {
      border-right: 1px solid rgba(200, 195, 186, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      * {
        text-align: center;
      }
      & > *:nth-child(1) {
        margin-right: 20px;
      }
      & > * > :nth-child(1) {
        margin-bottom: 6px;
      }
    }
    & > * {
      flex: 1;
    }
    .socre {
      display: flex;
      justify-content: center;
      .name-container {
        margin-right: 5px;
      }
      .score-container {
        color: #80a66e;
        margin-right: 5px;
      }
      .is-better-container {
        color: #fff;
        p {
          background: #80a66e;
        }
        .light-background {
          background: $high-text;
        }
      }
      p {
        padding: 1px;
        margin-bottom: 4px;
      }
      .light-font {
        color: $high-text;
      }
      .light-background {
        background: $high-text;
      }
    }
  }
  .go-shop {
    text-align: center;
    padding: 20px 0 28px 0;
    border-bottom: 3px solid rgba(200, 195, 186, 0.28);
    span {
      font-size: $font-size;
      border-radius: 5px;
      padding: 6px 25px;
      background: #f2f4fe;
    }
  }
}
</style>