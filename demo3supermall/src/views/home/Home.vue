<template>
  <div id="home">
    <BackTop v-show="isBackTopShow" @click.native="goTop" />
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
      <GoodsList :goodsList="goodsData[currentTab]" />
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
import BackTop from "components/common/backTop/BackTop";
import { GoodsList } from "components/content/goodsList/index";
import LoadingTip from "components/common/loadingTip/LoadingTip";

import { debounceWrap } from "components/common/utils.js";
import {
  getHomeData as getData,
  getHomePopNewSell as getPopNewSell,
} from "network/home";

export default {
  name: "home",
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
      isBackTopShow: false,
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
    BackTop,
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
      this.isBackTopShow = -y > this.$el.offsetHeight * 1.368;
      //获取到阈值后,检查坐标达到阈值显示隐藏的tabcontrl
      if (this.tabControlOffsetTop) {
        this.isShowtopTabControl = -y > this.tabControlOffsetTop;
      }
    },
    //返回最上级
    goTop() {
      this.$refs.scrollCPN.scrollTo();
    },
    //加载完成之后给scrollcpm，一个回调
    async loadMore() {
      await this.getPopNewSellWrap(this.currentTab);
      //数据加载完成后，2秒后才允许下次请求
      setTimeout(() => {
        this.$refs.scrollCPN.finishPullUp();
      }, 1500);
    },
    //img加载完成刷新卷轴高度
    refreshScroll() {
      let refresh = debounceWrap(this.$refs.scrollCPN.refresh, 100, 3000); //vue的方法已经被bind绑定过this，直接包装就可以
      this.$bus.$on("img-load", refresh);
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
    this.refreshScroll();
    //初始化this.tabControlOffsetTop
    this.$bus.$once(
      "carousel-load",
      () => (this.tabControlOffsetTop = this.$refs.HomeTabControl.$el.offsetTop)
    );
  },
  activated() {
    this.$refs.scrollCPN.scrollTo(0, this.scrollY, 0);
    this.$refs.scrollCPN.refresh();
  },
  deactivated() {
    this.scrollY = this.getScrollY();
  },
};
</script>

<style scoped lang="scss">
#home {
  height: 100vh;
  position: relative;
}
.tab-control {
  position: relative;
  z-index: 9;
  background: white;
}
</style>
