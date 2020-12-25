<template>
  <footer id="MainTabBar">
    <TabBar>
      <TabBarItem path="home">
        <template #img>
          <img src="~assets/img/tabbar/home.svg" />
        </template>
        <template #imgActive>
          <img src="~assets/img/tabbar/home_active.svg" />
        </template>
        <template #itemName>
          <span>主页</span>
        </template>
      </TabBarItem>

      <TabBarItem path="category">
        <template #img>
          <img src="~assets/img/tabbar/category.svg" />
        </template>
        <template #imgActive>
          <img src="~assets/img/tabbar/category_active.svg" />
        </template>
        <template #itemName>
          <span>分类</span>
        </template>
      </TabBarItem>

      <TabBarItem path="shopcart">
        <template #img>
          <img src="~assets/img/tabbar/shopcart.svg" />
        </template>
        <template #imgActive>
          <img src="~assets/img/tabbar/shopcart_active.svg" />
        </template>
        <template #itemName>
          <span>购物车</span>
        </template>
      </TabBarItem>

      <TabBarItem path="profile">
        <template #img>
          <img src="~assets/img/tabbar/profile.svg" />
        </template>
        <template #imgActive>
          <img src="~assets/img/tabbar/profile_active.svg" />
        </template>
        <template #itemName>
          <span>我的</span>
        </template>
      </TabBarItem>
    </TabBar>
  </footer>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
