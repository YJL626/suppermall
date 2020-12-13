<template>
  <div>
    {{ iid }}
  </div>
</template>

<script>
export default {
  name: "Details",
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      iid: this.$route.params.iid,
    };
  },

  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>