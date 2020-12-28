<template>
  <div class="category" v-if="categoryList">
    <BackTop v-if="showBack" />
    <CategoryTopBar />
    <Scroll :config="scrollConfig" class="ignore scroll-category-list">
      <CategoryListContainer>
        <CategoryListItem
          @current-category-change="currentCategoryChange"
          :currentCategoryIndex="currentCategoryIndex"
          :index="index"
          :categoryItemData="item"
          v-for="(item, index) in categoryList"
          :key="item.miniWallkey + 1"
        />
      </CategoryListContainer>
    </Scroll>

    <Scroll
      class="scroll-category-list-item ignore"
      :config="scrollConfig"
      ref="scrollCPN"
      @scroll="checkScroll"
    >
      <CategoryClassContainer>
        <CategoryClassItem
          @img-load="refresh"
          v-for="item in currentCategoryClassList"
          :key="item.link + 1"
          :item="item"
        ></CategoryClassItem>
      </CategoryClassContainer>
      <TabControl class="tab-control" :tabArr="['推荐']" />
      <GoodsList
        class="goods-list"
        v-if="nowGoodsList"
        :goodsList="nowGoodsList"
      />
    </Scroll>
  </div>
</template>

<script>
import CategoryListContainer from "views/category/childComponents/CategoryListContainer.vue";
import CategoryListItem from "views/category/childComponents/CategoryListItem.vue";
import CategoryTopBar from "views/category/childComponents/CategoryTopBar.vue";
import CategoryClassContainer from "views/category/childComponents/CategoryClassContainer.vue";
import CategoryClassItem from "views/category/childComponents/CategoryClassItem.vue";
import TabControl from "components/common/tabControl/TabControl.vue";
import GoodsList from "components/content/goodsList/GoodsList.vue";
import {
  requestCategoryListData,
  requestCategoryItemData,
  requestCategoryGoodsList,
} from "network/category.js";
import { debounceWrap } from "components/common/utils.js";
import Scroll from "components/common/scroll/Scroll.vue";
import { imgLoadListenerMixin } from "components/common/mixin/imgLoadListenerMixin.js";
import { BackTopMixin } from "components/common/mixin/BackTopMixin.js";

export default {
  name: "category",
  mixins: [BackTopMixin],
  data() {
    return {
      scrollConfig: {
        bounce: { top: false },
        click: true,
        mouseWheel: true,
        probeType: 2,
      },
      categoryList: null,
      currentCategoryIndex: 0,
      categoryDetailDataList: [],
      categoryGoodsList: [],
      nowGoodsList: null,
    };
  },
  computed: {
    currentCategoryClassList() {
      return (
        this.categoryDetailDataList[this.currentCategoryIndex] &&
        this.categoryDetailDataList[this.currentCategoryIndex].list
      );
    },
  },
  async created() {
    this.categoryList = await requestCategoryListData();
    this.requesetCurrentGoodsList();

    await this.requestCategoryCurrentItemData();
  },
  mounted: function mounted() {
    if (this.$refs.scrollCPN) {
      this.refresh = debounceWrap(this.$refs.scrollCPN.refresh, 300, 600);
      this.$bus.$on("img-load", this.refresh);
      this.refresh();
      return;
    }
    setTimeout(() => {
      mounted.call(this);
    }, 200);
  },
  activated() {
    this.refresh();
  },
  methods: {
    async currentCategoryChange(index) {
      this.currentCategoryIndex = index; //先更新坐标，
      this.requestCategoryCurrentItemData(); //获取左侧列表数据
      this.requesetCurrentGoodsList(); //获取商品数据
      this.$refs.scrollCPN.scrollTo(0, 0, 0);
      this.refresh();
    },
    requestCategoryCurrentItemData() {
      //有数据则不再请求
      if (this.categoryDetailDataList[this.currentCategoryIndex]) return;
      return requestCategoryItemData(
        this.categoryList[this.currentCategoryIndex].maitKey
      ).then((resolve) => {
        this.$set(
          this.categoryDetailDataList,
          this.currentCategoryIndex,
          resolve
        );
        return 1;
      });
    },
    checkScroll({ y }) {
      this.checkBackShow(y);
    },
    async requesetCurrentGoodsList() {
      this.nowGoodsList = await requestCategoryGoodsList(
        this.categoryList[this.currentCategoryIndex].miniWallkey
      );
    },
    refresh() {}, //占位在mounted赋值
  },
  components: {
    CategoryListContainer,
    Scroll,
    CategoryListItem,
    CategoryTopBar,
    CategoryClassContainer,
    CategoryClassItem,
    TabControl,
    GoodsList,
  },
};
</script>

<style scoped lang='scss'>
.category {
  position: relative;
  height: 100vh;
  touch-action: none;
  .scroll-category-list {
    width: 30%;
    max-width: 150px;
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    background-color: #f6f6f6;
    z-index: 1;
  }
  .scroll-category-list-item {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    background-color: #fff;
  }
  .tab-control {
    margin-left: 30%;
  }
  .goods-list {
    margin-left: 30%;
  }
}
</style>