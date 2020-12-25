<template>
  <Carousel class="detail-carousel">
    <CarouselItem v-for="imgLink in topImageArr" :key="imgLink">
      <img @load="$bus.$emit('img-load')" :src="imgLink" class="slider-img"
    /></CarouselItem>
  </Carousel>
</template>

<script>
import { Carousel, CarouselItem } from "components/common/carousel/index.js";
export default {
  name: "DetailCarousel",
  created() {},
  data() {
    return {};
  },
  props: {
    topImageArr: {
      type: Array,
      required: true,
    },
  },
  methods: {},
  components: {
    Carousel,
    CarouselItem,
  },
};
</script>

<style lang="scss" scoped>
.detail-carousel {
  height: 40vh;
  min-height: 200px;
  overflow: hidden;
}
</style>