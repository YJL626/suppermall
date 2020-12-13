<template>
  <div class="tabControl">
    <p
      :class="{ active: index === currentIndex }"
      @click="changeCurrentIndex(index)"
      v-for="(item, index) in tabArr"
      :key="item"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tabArr: {
      type: Array,
      required: true,
    },
  },
  mounted() {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
      this.$emit("tab-change", index);
    },
  },
};
</script>

<style lang="scss">
@import "assets/css/variable.scss";

.tabControl {
  display: flex;
  justify-content: space-around;
  height: 45px;

  color: $color-test;
  align-items: center;
  p {
    padding-bottom: 8px;
  }
  .active {
    color: $high-text;

    border-bottom: 2px solid $high-text;
  }
}
</style>
