<template>
  <div id="home">
    <BackTop v-show="showBack" @click.native="back" />
    <HomeNavBar />
    <TabControl
      :tabArr="['流行', '新款', '精选']"
      ref="HomeTabControlTop"
      @tab-change="tabChange"
      class="tab-control"
      v-show="isShowtopTabControl"
    />

    <Scroll
      :config="scrollConfig"
      ref="scrollCPN"
      @scroll="checkScroll"
      @pullingUp="loadMore"
      class="scroll"
    >
      <HomeCarousel :bannerArr="bannerArr" />
      <HomeRecommend :recommendArr="recommendArr" />
      <HomeFeature />
      <TabControl
        :tabArr="['流行', '新款', '精选']"
        ref="HomeTabControl"
        @tab-change="tabChange"
        class="tab-control"
      />
      <GoodsList :goodsList="goodsData[currentTab].list" />
      <LoadingTip v-cloak v-show="tabControlOffsetTop" />
    </Scroll>
  </div>
</template>

<script>
import HomeNavBar from "views/home/childComponents/HomeNavBar";
import HomeCarousel from "views/home/childComponents/HomeCarousel";
import HomeRecommend from "views/home/childComponents/HomeRecommend";
import HomeFeature from "views/home/childComponents/HomeFeature";

import TabControl from "components/common/tabControl/TabControl";

import Scroll from "components/common/scroll/Scroll";
import { GoodsList } from "components/content/goodsList/index";
import LoadingTip from "components/common/loadingTip/LoadingTip";

import {
  getHomeData as getData,
  getHomePopNewSell as getPopNewSell,
} from "network/home";

import { imgLoadListenerMixin } from "components/common/mixin/imgLoadListenerMixin.js";
import { BackTopMixin } from "components/common/mixin/BackTopMixin.js";

console.log(imgLoadListenerMixin);
export default {
  name: "home",
  mixins: [imgLoadListenerMixin, BackTopMixin],
  data() {
    return {
      /* 滚动配置 */
      scrollConfig: {
        bounce: {
          top: false,
        },
        pullUpLoad: true,
        probeType: 2,
        //tap:'click',
        click: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
        scrollY: true,
        scrollbar: true,
        interactive: true,
      },
      /*  */
      showBack: false,
      isShowtopTabControl: false,
      tabControlOffsetTop: null,

      imgFreshDebounce: null,
      scrollY: null,

      bannerArr: null,
      recommendArr: null,
      goodsData: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTab: "pop",
    };
  },
  components: {
    HomeNavBar,
    Scroll,
    HomeCarousel,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    LoadingTip,
  },

  methods: {
    //检查坐标达到阈值
    checkScroll({ y }) {
      //检查坐标达到阈值显示backtop按钮
      this.checkBackShow(y, this.$el.offsetHeight * 1.368);
      //获取到阈值后,检查坐标达到阈值显示隐藏的tabcontrl
      if (this.tabControlOffsetTop) {
        this.isShowtopTabControl = -y > this.tabControlOffsetTop;
      }
    },

    //加载完成之后给scrollcpm，一个回调
    async loadMore() {
      await this.getPopNewSellWrap(this.currentTab);
      //数据加载完成后，0.5秒后才允许下次请求
      setTimeout(() => {
        this.$refs.scrollCPN.finishPullUp();
      }, 500);
    },

    getScrollY() {
      return this.$refs.scrollCPN.getScrollY();
    },
    //用户点击tabcontrol，加载对应列表
    tabChange(index) {
      const oldCurrentTab = this.currentTab;
      switch (index) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
          break;
      }
      //topTabControl展示的时候，tab发生变化scrollTo(HomeTabControl)
      if (this.isShowtopTabControl && oldCurrentTab !== this.currentTab) {
        const target = this.$refs.HomeTabControl.$el;
        this.$refs.scrollCPN.scrollToElement(target);
      }
      //同步两个tabBar的状态
      this.$refs.HomeTabControlTop.currentIndex = this.$refs.HomeTabControl.currentIndex = index;
    },

    /* 网络请求 */
    getDataWrap() {
      getData().then((resolve) => {
        this.bannerArr = resolve.banner.list;

        this.recommendArr = resolve.recommend.list;
      });
    },
    getPopNewSellWrap(type) {
      //每次请求数据page都+1
      const page = ++this.goodsData[type].page;
      //请求到数据后解构获取到list
      return getPopNewSell(type, page).then(({ list }) => {
        //再次解构list，而后push到goodsData中
        this.goodsData[type].list.push(...list);
      });
    },
  },
  created() {
    this.getDataWrap();
    this.getPopNewSellWrap("pop");
    this.getPopNewSellWrap("new");
    this.getPopNewSellWrap("sell");
  },
  mounted() {
    //初始化this.tabControlOffsetTop
    this.$bus.$once("home-carousel-load", () => {
      this.tabControlOffsetTop = this.$refs.HomeTabControl.$el.offsetTop;
    });
  },
  activated() {
    this.$refs.scrollCPN.refresh(); //scroll组件重新获取高度
    this.$refs.scrollCPN.scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.getScrollY();
  },
};
</script>

<style scoped lang="scss">
#home {
  height: 100vh;
  width: 100vw;
  position: relative;
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}

.tab-control {
  position: relative;
  z-index: 9;
  background: white;
}
</style>
