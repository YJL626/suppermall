<template>
  <div id="app">
    <keep-alive :exclude="['Detail']">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>

import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style lang="scss">
@import "assets/css/base.scss";
</style>
