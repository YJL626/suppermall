<template>
  <div class="carousel" ref="carousel">
    <div class="slider-container" ref="container">
      <slot />
    </div>
    <div class="pointerContainer">
      <div
        v-for="(value, index) in Array.from({ length: imgCount })"
        class="pointer"
        :class="{ active: currentIndex===index }"
        :key="'pointer' + index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  mounted() {
    setTimeout(this.carouselInit, 100);
  },
  props: {
    pointerChangeRatio: {
      default: 0.28,
    },
    frameInterval: {
      default: 1000 / 60,
    },
    animationTime: {
      default: 500,
    },
    carouselInterval: {
      default: 3000,
    },
  },
  data() {
    return {
      initTimer: null,
      nextInitInterval: 300,
      imgWidth: null,
      imgCount: null,
      currentOffset: null,
      currentIndex: 1,
      /*  */
      autoCrouselControl: null,
    };
  },
  computed: {
    moveCount() {
      return this.animationTime / this.frameInterval;
    },
  },
  methods: {
    carouselInit() {
      this.initTimer = setTimeout(
        this.carouselInit,
        (this.nextInitInterval += 1000)
      );
      const carousel = this.$refs.carousel;
      const sliderArr = carousel.querySelectorAll(".slider");
      if (!sliderArr[0]) return; //没有元素直接return
      this.imgWidth = sliderArr[0].offsetWidth || 0;
      this.imgCount = sliderArr.length;

      if (!this.imgWidth) return; //数据获取成功
      clearTimeout(this.initTimer); //清除循环运行的定时器
      if (this.imgCount === 1) return; //数量为1，放弃初始化
      this.$refs.container.append(sliderArr[0].cloneNode(true)); //前后各插入一张
      this.$refs.container.prepend(
        sliderArr[sliderArr.length - 1].cloneNode(true)
      );
      //ready
      this.currentOffset = -this.imgWidth;
      this.freshIndex();
      this.setOffset(this.currentOffset);
      /*  */
      this.carouselStart(); //开始轮播
    },
    move(target) {
      const isNext = target < this.currentOffset;
      const offset = target - this.currentOffset;
      const oneMove = offset / this.moveCount;
      setTimeout(() => oneFrameMove.call(this), this.frameInterval);

      function oneFrameMove() {
        this.currentOffset += oneMove;

        this.currentOffset = isNext
          ? Math.max(target, this.currentOffset)
          : Math.min(target, this.currentOffset);
        //达到边界值跳转
        if (
          this.currentOffset === 0 ||
          this.currentOffset === -this.imgWidth * (this.imgCount + 1)
        ) {
          this.currentOffset = target = isNext
            ? -this.imgWidth
            : -this.imgWidth * this.imgWidth;
        }
        this.setOffset();
        if (target === this.currentOffset) {
          //本次结束
          this.carouselStart();
          return;
        }
        setTimeout(() => oneFrameMove.call(this), this.frameInterval);
      }
    },
    setOffset(value = this.currentOffset) {
      this.$refs.container.style.transform = `translateX(${value}px)`;
    },
    freshIndex() {
      const index =
        this.currentOffset / -this.imgWidth + this.pointerChangeRatio;
      this.currentIndex = Math.floor(index);
    },
    carouselStart() {
      this.autoCrouselControl = setTimeout(() => {
        let target = this.currentOffset + -this.imgWidth;
        this.move(target);
      }, this.carouselInterval);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.carousel {
  position: relative;
  overflow: hidden;
  .slider-container {
    display: flex;
    width: 100%;
  }
  .pointerContainer {
    position: absolute;
    margin: 0 auto;
    width: 40%;
    bottom: 12px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    .pointer {
      width: 12px;
      height: 12px;
      background: $background;
      border-radius: 50%;
      border: 1px solid #ff8198;
      margin:0 5px;

    }
    .active{
      background: #ff5777;
    }
  }
}
</style>