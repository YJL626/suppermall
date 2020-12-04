<template>
  <tab-bar>
    <!-- item1 -->
    <tabBarItem path="/home">
      <template #img> <img src="~assets/img/tabbar/home.svg" /> </template>
      <template #img-active>
        <img src="~assets/img/tabbar/home_active.svg"
      /></template>
      <template #item-name> <div>首页</div> </template>
    </tabBarItem>
    <!-- item2 -->
    <tabBarItem path="/category">
      <template #img> <img src="~assets/img/tabbar/category.svg" /> </template>
      <template #img-active>
        <img src="~assets/img/tabbar/category_active.svg"
      /></template>
      <template #item-name> <div>分类</div> </template>
    </tabBarItem>
    <!-- item3 -->
    <tabBarItem path="/shopcart">
      <template #img> <img src="~assets/img/tabbar/shopcart.svg" /></template>
      <template #img-active>
        <img src="~assets/img/tabbar/shopcart_active.svg"/>
      </template>
      <template #item-name> <div>购物车</div> </template>
    </tabBarItem>
    <!-- item4 -->
    <tabBarItem path="/profile">
      <template #img>
        <img src="~assets/img/tabbar/profile.svg" />
      </template>
      <template #img-active>
        <img src="~assets/img/tabbar/profile_active.svg"
      /></template>
      <template #item-name> <div>我的</div> </template>
    </tabBarItem>
  </tab-bar>
</template>

<script>
import tabBar from "./tabbar/TabBar";
import tabBarItem from "./tabbar/TabBarItem";
export default {
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style>
</style>