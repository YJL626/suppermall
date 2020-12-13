<template>
  <div>
    <DetailNavBar />
    <DetailCarousel :topImageArr="topImageArr" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComponents/DetailNavBar";
import { getDetailData } from "network/detail.js";
import DetailCarousel from "views/detail/childComponents/DetailCarousel";
export default {
  name: "Detail",
  created() {
    getDetailData(this.iid).then((data) => {
      this.topImageArr.push(...data.itemInfo.topImages); //获取轮播图Arr并保存
      console.log(data);
    });
  },
  data() {
    return {
      iid: this.$route.params.iid,
      topImageArr: [],
    };
  },
  props: {},
  methods: {},
  components: {
    DetailNavBar,
    DetailCarousel,
  },
};
</script>

<style lang="scss" scoped></style>