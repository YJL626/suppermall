<template>
  <div class="category-class-item">
    <a :href="item.link"
      ><img @load="$emit('img-load')" v-lazy="item.image" alt="" />
      <p>{{ item.title }}</p></a
    >
  </div>
</template>

<script>
export default {
  name: "CategoryClassItem",
  created() {},
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.category-class-item {
  box-sizing: border-box;
  flex: 0 1 33.333%;
  padding: 1%;
  text-align: center;
  p {
    margin: 5% 5%;
  }
}
</style>