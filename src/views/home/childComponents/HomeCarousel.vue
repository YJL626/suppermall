<template>
  <div id="HomeCarousel">
    <Carousel>
      <CarouselItem v-for="item in bannerArr" :key="item.link">
        <a :href="item.link">
          <img
            :src="item.image"
            @load.once="$bus.$emit('home-carousel-load')"
          />
        </a>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "components/common/carousel";

export default {
  props: {
    bannerArr: {
      type: Array,
    },
  },
  components: {
    Carousel,
    CarouselItem,
  },
};
</script>

<style></style>
