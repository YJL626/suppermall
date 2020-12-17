<template>
  <div class="detail-info">
    <div class="title">
      <div class="pointer top"></div>
      <div class="pointer bottom"></div>
      {{ detailInfoData.desc }}
    </div>
    <div class="detail-img-container">
      <div v-for="list in detailImageArr" :key="list.key">
        <p class="list-key">{{ list.key }}</p>
        <div v-for="img in list.list" :key="img" class="img-list">
          <img @load="$bus.$emit('img-load')" :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  created() {},
  data() {
    return {};
  },
  props: {
    detailInfoData: {
      default() {
        return {};
      },
    },
  },
  computed: {
    detailImageArr() {
      if (!Object.keys(this.detailInfoData).length) return;
      return this.detailInfoData.detailImage;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.detail-info {
  width: 100vw;
}
.title {
  border-top: 1px solid rgba($color: #afa9a9, $alpha: 0.5);
  border-bottom: 1px solid rgba($color: #b4a9a9, $alpha: 0.5);
  position: relative;
  margin: 25px 15px;
  padding: 15px 1px;

  .pointer {
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 1px;
  }
  .top {
    top: -5px;
    left: 0;
  }
  .bottom {
    right: 0;
    bottom: 0;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 9;
    top: -1px;
    right: 0;
    width: 70%;
    height: 1px;
    background: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 9;
    bottom: -2px;
    left: 0;
    width: 70%;
    height: 2px;
    background: #fff;
  }
}
.list-key {
  margin: 10px;
}
</style>