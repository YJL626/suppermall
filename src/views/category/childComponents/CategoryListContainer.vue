<template>
  <div class="category-list-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CategoryListContainer",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.category-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
}
</style>