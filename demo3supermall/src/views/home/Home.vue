<template>
  <div>
    <HomeNavBar />
    <HomeCarousel :bannerArr="bannerArr" />
    <HomeRecommend :recommendArr="recommendArr" />
    <HomeFeature />
    <HomeTabControl @tabchange="tabChange" />
    <GoodsList :goodsList="goodsData[currentTab]" />
  </div>
</template>

<script>
import HomeNavBar from "views/home/childComponents/HomeNavBar";
import HomeCarousel from "views/home/childComponents/HomeCarousel";
import HomeRecommend from "views/home/childComponents/HomeRecommend";
import HomeFeature from "views/home/childComponents/HomeFeature";
import HomeTabControl from "views/home/childComponents/HomeTabControl";

import { GoodsList} from "components/content/goodsList/index";

import {
  getHomeData as getData,
  getHomePopNewSell as getPopNewSell,
} from "network/home";

export default {
  name: "home",
  data() {
    return {
      bannerArr: null,
      recommendArr: null,
      goodsData: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTab: 'pop',
    };
  },
  components: {
    HomeNavBar,
    HomeCarousel,
    HomeRecommend,
    HomeFeature,
    HomeTabControl,
    GoodsList,
  },
  created() {
    this.getDataWrap();
    this.getPopNewSellWrap("pop");
    this.getPopNewSellWrap("new");
    this.getPopNewSellWrap("sell");
  },
  methods: {
    tabChange(index) {
      switch(index){
        case 0 :
          this.currentTab = 'pop'
        break;
        case 1 :
          this.currentTab = 'new'
        break;
        case 2 :
          this.currentTab = 'sell'
        break;
      }
    },

    /* 网络请求 */
    getDataWrap() {
      getData().then((resolve) => {
        this.bannerArr = resolve.banner.list;

        this.recommendArr = resolve.recommend.list;
        console.log(this.recommendArr);
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
};
</script>

<style scoped lang="scss"></style>
