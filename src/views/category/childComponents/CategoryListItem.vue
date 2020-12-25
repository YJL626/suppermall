<template>
  <div
    @click="changeCurrentCategory"
    class="category-list-item"
    :class="{
      isActive: index === currentCategoryIndex,
      borderRoundBottom: index === currentCategoryIndex + 1,
      borderRoundTop: index === currentCategoryIndex - 1,
    }"
  >
    {{ categoryItemData.title }}
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  created() {
  },
  data() {
    return {};
  },
  props: {
    categoryItemData: {
      type: Object,
    },
    index: {
      type: Number,
    },
    currentCategoryIndex: {
      type: Number,
    },
  },
  methods: {
    changeCurrentCategory() {
      this.$emit("current-category-change", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-list-item {
  width: 100%;
  line-height: 50px;
  text-align: center;
}
.isActive {
  background-color: #fff;
  border-radius: 10px 0 0 10px;
}

.borderRoundBottom {
  border-radius: 0 15px 0 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background: #fff;
  }
  &::before {
    content: "";
    border-top-right-radius: 50%;
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    z-index: 10;
    background: #f6f6f6;
  }
}

.borderRoundTop {
  border-radius: 0 15px 0 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: #fff;
  }
  &::before {
    content: "";
    border-bottom-right-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    z-index: 10;
    background: #f6f6f6;
  }
}
</style>