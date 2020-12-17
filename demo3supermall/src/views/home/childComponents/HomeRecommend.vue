<template>
  <div class="recommend">
    <div v-for="item in recommendArr" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendArr: {
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "assets/css/variable.scss";
.recommend {
  display: flex;
  width: 100vw;

  border-bottom: 15px solid #eeedef;
  div {
    flex: 1 1 0;
    padding-bottom: 28px;
    img {
      display: block;
      width: 90%;
      margin: 15px auto 5px auto;
    }
    p {
      text-align: center;
    }
  }
}
</style>
