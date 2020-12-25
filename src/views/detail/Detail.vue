<template>
  <div id="detail">
    <BackTop v-show="showBack" @click.native="back" />
    <DetailNavBar
      @nav-bar-click="navClick"
      :navBarCurrentIndex="navBarCurrentIndex"
      ref="detailNavBar"
    />
    <Scroll
      @scroll="checkScroll"
      class="scroll"
      ref="scrollCPN"
      :config="scrollConfig"
    >
      <DetailCarousel :topImageArr="topImageArr" ref="topCarousel" />
      <DetailBaseInfo :baseInfo="baseInfo" />
      <DetailShopInfoPage :shopData="shopInfo" />
      <DetailInfo :detailInfoData="detailInfoData" ref="params" />
      <DetailParam :itemParams="itemParams" />
      <DetailRate :detailRate="detailRate" ref="rate" />
      <GoodsList :goodsList="recommendArr" ref="recommend" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Scroll>

    <transition name="fade">
      <DetailClickBuy
        v-if="isShowAddToCart"
        @hide-click-buy="isShowAddToCart = false"
        :goods="goods"
      />
    </transition>

    <DetailBottomBar @add-to-cart="isShowAddToCart = true" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComponents/DetailNavBar";
import DetailCarousel from "views/detail/childComponents/DetailCarousel";
import DetailBaseInfo from "views/detail/childComponents/DetailBaseInfo";
import DetailShopInfoPage from "views/detail/childComponents/DetailShopInfoPage";
import DetailInfo from "views/detail/childComponents/DetailInfo";
import DetailParam from "views/detail/childComponents/DetailParam";
import DetailRate from "views/detail/childComponents/DetailRate";
import DetailBottomBar from "views/detail/childComponents/DetailBottomBar";
import DetailClickBuy from "views/detail/childComponents/DetailClickBuy";

import GoodsList from "components/content/goodsList/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll";

import { imgLoadListenerMixin } from "components/common/mixin/imgLoadListenerMixin.js";
import { BackTopMixin } from "components/common/mixin/BackTopMixin.js";
import {
  getDetailData,
  getRecommend,
  DetailBaseInfoData,
  ShopInfo,
} from "network/detail.js";
import { debounceWrap } from "components/common/utils.js";

export default {
  name: "Detail",
  mixins: [imgLoadListenerMixin, BackTopMixin],
  data() {
    return {
      scrollConfig: {
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
        bounce: { top: false },
        click: true,
        probeType: 3,
      },
      isShowAddToCart: null,
      recommendArr: [],
      iid: this.$route.params.iid,
      topImageArr: [],
      baseInfo: {},
      shopInfo: {},
      detailInfoData: {},
      itemParams: {},
      detailRate: {},
      relativeScrollOffset: {
        params: null,
        rate: null,
        recommend: null,
      },
      getRelativeScrollOffset: null,
      navBarCurrentIndex: 1,
      allDetailDate: null,
    };
  },
  computed: {
    goods() {
      if (!this.allDetailDate) return null;
      const goods = {};
      goods.title = this.baseInfo.title;
      goods.shopInfo = this.shopInfo;
      goods.image = this.topImageArr[0];
      goods.price = this.allDetailDate.itemInfo.highNowPrice;
      goods.id = this.iid;
      goods.checked = true;
      return goods;
    },
  },
  props: {},
  methods: {
    navClick(index) {
      const scroll = this.$refs.scrollCPN;
      let target = null;
      switch (index) {
        case 0:
          target = this.$refs.topCarousel.$el;
          break;
        case 1:
          target = this.$refs.params.$el;
          break;
        case 2:
          target = this.$refs.rate.$el;
          break;
        case 3:
          target = this.$refs.recommend.$el;
          break;
      }
      if (!target) return;
      scroll.scrollToElement(target, 600);
    },
    //发生滚动时的回调
    checkScroll({ y }) {
      this.checkBackShow(y); //检查是否显示backTop
      this.$refs.detailNavBar.currentIndex = this.getCurrentSection(y);
    },
    //获取现在在Detail的那一部分
    getCurrentSection(y) {
      y = Math.abs(y);
      //获取现在在那一部分用currentSection接受
      //遍历其中的value，如果符合条件就放到accumulator
      let { key: currentSection } = Object.entries(
        this.relativeScrollOffset
      ).reduce(
        (acc, [key, value]) =>
          y >= value && value > acc.value ? { key, value } : acc,
        { key: "goods", value: 0 }
      );
      //转化为对应的index
      return ["goods", "params", "rate", "recommend"].reduce(
        (acc, value, index) => (value === currentSection ? index : acc),
        0
      );
    },
    imgLoadGetOffset() {
      //设置一个获取的方法
      this.getRelativeScrollOffset = () => {
        Object.keys(this.relativeScrollOffset).forEach((key) => {
          if (!this.$refs[key]) return; //访问不到元素直接忽略
          this.relativeScrollOffset[key] = this.$refs[key].$el.offsetTop;
        });
      };
      //防抖处理
      this.getRelativeScrollOffset = debounceWrap(
        this.getRelativeScrollOffset,
        500,
        2000
      );
      this.$bus.$on("img-load", this.getRelativeScrollOffset);
    },
  },
  mounted() {
    this.imgLoadGetOffset();
  },
  beforeDestroy() {
    this.$bus.$off("img-load", this.getRelativeScrollOffset);
  },

  async created() {
    const detailData = await getDetailData(this.iid);
    this.allDetailDate = detailData;
    this.recommendArr = await getRecommend();
    this.topImageArr.push(...detailData.itemInfo.topImages); //获取轮播图数据；
    this.baseInfo = new DetailBaseInfoData(detailData); //获取基础信息的数据数据
    this.shopInfo = new ShopInfo(detailData); //获取商铺基础信息
    this.detailInfoData = detailData.detailInfo; //商品详情
    this.itemParams = detailData.itemParams; //商品参数
    this.detailRate = detailData.rate; //商品评论
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailCarousel,
    DetailBaseInfo,
    DetailShopInfoPage,
    DetailInfo,
    DetailParam,
    DetailRate,
    GoodsList,
    DetailBottomBar,
    DetailClickBuy,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";

#detail {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 3;
  background: white;
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
}
</style>