<template>
  <div class="category-class-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryClass",
  created() {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.category-class-container {
  box-sizing: border-box;
  margin-left: 30%;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
}
</style>