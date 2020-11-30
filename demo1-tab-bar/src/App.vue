<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/MainTabBar.vue'
export default {
  components: {
    mainTabBar
  },
};
</script>

    MainTabBar
<style>
@import url("./assets/css/base.scss");
</style>

