<template>
  <div id="tab-bar-item" @click="skipPath">
    <div v-if="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img-active"></slot>
    </div>

    <div :style="fontColorStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    fontColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return{}
  },
  computed: { 
    isActive(){
     return this.$route.fullPath.includes(this.path)
    },
    fontColorStyle(){
      return this.isActive ? {'color' : this.fontColor} : {}
    }
  },
  methods: {
    //跳转路径
    skipPath() {
      if (this.$route.path === this.path) return;
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang="scss">
#tab-bar-item {
  flex: 1 1 0;
  height: 49px;
  font-size: 14px;
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    margin: 2px 0;
    vertical-align: middle;
  }
  .red {
    color: red;
  }
}
</style>