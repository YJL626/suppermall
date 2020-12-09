<template>
  <li class="tabBarItem" @click="skipPath">
    <div v-if="!isActive"><slot name="img"></slot></div>

    <div v-else><slot name="imgActive"></slot></div>

    <div :class="{active:isActive}"><slot name="itemName"></slot></div>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      
    };
  },
  computed:{
    isActive(){
      
      return this.$route.fullPath.includes(this.path)
    }
  },
  methods: {
    skipPath() {
      if(this.$route.fullPath === '/'+this.path)return
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang='scss'>
@import "assets/css/variable.scss";
.tabBarItem {
  flex: 1 1 0;
  text-align: center;
  font-size: $font-size;
  img {
    text-align: center;
    width: 24px;
    height: 24px;
    margin: 2px 0;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
}
</style>