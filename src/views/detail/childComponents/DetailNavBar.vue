<template>
  <NavBar>
    <template #left>
      <div class="back" @click="$router.go(-1)">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template #center>
      <ul class="title-list">
        <li
          @click="setCurrentIndex(index)"
          v-for="(item, index) in titleArr"
          :key="item"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  created() {},
  data() {
    return {
      titleArr: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  props: {},
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index;
      this.$emit("nav-bar-click", index);
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.title-list {
  display: flex;
  justify-content: space-around;
  font: $font-size;
  .active {
    color: $high-text;
  }
}
.back {
  display: flex;
  height: 100%;
  align-items: center;
  img {
    display: block;
    height: 55%;
    padding-top: 2px;
  }
}
</style>