<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length">
    <h1 class="tittle">{{ baseInfo.title }}</h1>
    <div class="price-container" ref="priceContainer">
      <span class="price">{{ priceData.price }}</span>
      <span class="old-price">{{ priceData.oldPrice }}</span>
      <span class="discount-desc" v-if="priceData.discountDesc">{{
        priceData.discountDesc
      }}</span>
    </div>
    <!-- 促销信息 -->
    <div v-if="baseInfo.promotions" class="promotions">
      <span v-for="promotion in baseInfo.promotions.list" :key="promotion">
        {{ promotion }}
      </span>
    </div>
    <ul class="base-columns">
      <li v-for="item in baseInfo.baseColumns" :key="item">{{ item }}</li>
    </ul>
    <ul class="services">
      <li class="item" v-for="service in services" :key="service.name">
        <img :src="service.icon" alt="" />
        <span>{{ service.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  created() {},
  data() {
    return {};
  },
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    priceData() {
      if (!this.baseInfo.priceData) return;
      return this.baseInfo.priceData;
    },
    services() {
      if (!this.baseInfo.priceData) return;
      this.baseInfo.services.length = 3;
      return this.baseInfo.services;
    },
  },
  methods: {
    priceSetFontColor() {
      if (this.$refs.priceContainer) {
        const container = this.$refs.priceContainer;
        const price = container.querySelector(".price");
        if (price) price.style.color = this.priceData.discountBgColor;

        const discountDesc = container.querySelector(".discount-desc");
        if (discountDesc)
          discountDesc.style.background = this.priceData.discountBgColor;

        return;
      }
      setTimeout(this.priceSetFontColor, 500);
    },
  },
  mounted() {
    this.priceSetFontColor();
  },
};
</script>

<style lang="scss" scoped>
.base-info {
  h1 {
    font-size: 18px;
    padding: 0 5px;
    font-weight: 500;
  }
  .price-container {
    span {
      padding: 0 2px;
    }
    .price {
      font-size: 22px;
    }
    .old-price {
      font-size: 12px;
      text-decoration-line: line-through;
    }
    .discount-desc {
      vertical-align: 36%;
      border-radius: 15px;
      font-size: 10px;
      color: white;
      padding: 1px 3px;
    }
  }
  .promotions {
    margin: 5px auto 0 5px;
    span {
      padding: 0 5px;
    }
  }
  .base-columns {
    display: flex;
    justify-content: space-between;
    padding: 15px 5px 6px 5px;
    margin: 0 2px;
    font-size: 12px;
    color: #c2c0c2;
    border-bottom: 1px solid rgba(223, 216, 216, 0.28);
  }
  .services {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 15px 4px;
    border-bottom: 2px solid rgba(223, 216, 216, 0.28);
    .item {
      display: flex;
      img {
        display: block;
        margin: auto;
        width: 10px;
      }
    }
  }
}
</style>