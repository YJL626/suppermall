<template>
  <div
    class="carousel"
    ref="carousel"
    @pointerdown="pointerDown"
    @pointermove="pointerMove"
    @pointerup="pointerUp"
    @dragstart.prevent
  >
    <div class="slider-container" ref="container">
      <slot />
    </div>
    <div class="pointerContainer" v-if="imgCount > 1">
      <div
        v-for="(value, index) in Array.from({
          length: imgCount,
        })"
        class="pointer"
        :class="{ active: currentIndex === index + 1 }"
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
    dragRatio: {
      default: 0.3,
    },
    /*     pointerChangeRatio: {
      default: 0.28,
    }, */
    /*  dragRatio: 0.3, */
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
      autoNextPageTimer: null,
      isMovingTimer: null,

      nextInitInterval: 300,
      imgWidth: null,
      imgCount: null,
      currentOffset: null,
      currentIndex: 1,

      /*  */

      /* event */
      poninterDownEvent: null,
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
      if (!carousel) return;//没有元素直接return
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
      this.initTimer = "success";

      this.carouselAutoNextPage(); //开始轮播
    },
    move(target) {
      if (this.isMovingTimer) return;
      const isNext = target < this.currentOffset;
      const offset = target - this.currentOffset;
      const oneMove = offset / this.moveCount;
      this.isMovingTimer = setTimeout(
        () => oneFrameMove.call(this),
        this.frameInterval
      );

      function oneFrameMove() {
        this.currentOffset += oneMove;

        this.currentOffset = isNext //不要让currentOffset超出预期
          ? Math.max(target, this.currentOffset)
          : Math.min(target, this.currentOffset);
        //达到边界值跳转
        if (
          this.currentOffset === 0 ||
          this.currentOffset === -this.imgWidth * (this.imgCount + 1)
        ) {
          this.currentOffset = target = isNext
            ? -this.imgWidth
            : -this.imgCount * this.imgWidth;
        }
        this.setOffset();
        this.freshIndex();
        if (target === this.currentOffset) {
          //move-ending
          this.carouselAutoNextPage();
          this.isMovingTimer = null;
          return;
        }
        this.isMovingTimer = setTimeout(
          () => oneFrameMove.call(this),
          this.frameInterval
        );
      }
    },
    setOffset(value = this.currentOffset) {
      if (!this.$refs.container) return;
      this.$refs.container.style.transform = `translateX(${value}px)`;
    },
    freshIndex() {
      let index = this.currentOffset / -this.imgWidth + this.dragRatio;
      index = Math.floor(index);
      if (index < 1) index = this.imgCount;
      if (index > this.imgCount) index = 1;
      this.currentIndex = index;
    },
    carouselAutoNextPage() {
      if (this.autoNextPageTimer) return;
      this.autoNextPageTimer = setTimeout(() => {
        let target = this.currentOffset + -this.imgWidth;
        this.move(target);
        this.autoNextPageTimer = null;
      }, this.carouselInterval);
    },
    pointerDown(event) {
      if (
        this.isMovingTimer ||
        this.poninterDownEvent ||
        this.initTimer !== "success"
      )
        return;
      clearInterval(this.autoNextPageTimer); //清除将自动播放的timer
      this.autoNextPageTimer = null; //标记为null
      event.currentOffset = this.currentOffset;
      this.poninterDownEvent = event;
    },
    pointerMove() {
      if (!this.poninterDownEvent) return;
      const {
        x: downX,
        pointerId: downId,
        currentOffset: downOffset,
      } = this.poninterDownEvent;
      const { x: moveX, pointerId: moveId } = event;

      const isNext = downOffset > this.currentOffset;

      if (downId !== moveId) return;
      let moveLength = moveX - downX;
      //超出阈值
      if (Math.abs(moveLength) > this.imgWidth) {
        //-1避免进行取余时得到0识别为没有移动。
        moveLength = isNext ? -this.imgWidth + 1 : this.imgWidth - 1;
      }
      this.currentOffset = downOffset + moveLength;
      this.setOffset();
      this.freshIndex();
    },
    pointerUp() {
      if (!this.poninterDownEvent) return;
      const { currentOffset: downOffset } = this.poninterDownEvent;
      const dragLength = downOffset - this.currentOffset;
      if (
        Math.abs(dragLength % this.imgWidth) <
        this.dragRatio * this.imgWidth
      ) {
        this.move(downOffset); //移动的范围过小返回原来的值；
      } else {
        //达到预期进位
        const target =
          downOffset < this.currentOffset
            ? downOffset + this.imgWidth
            : downOffset - this.imgWidth;
        this.move(target);
      }
      this.poninterDownEvent = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.carousel {
  touch-action: none; //避免触发dragstart事件造成拖动已成
  position: relative;
  overflow: hidden;
  .slider-container {
    display: flex;
    width: 100%;
  }
  .pointerContainer {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    bottom: 8px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    .pointer {
      width: 8px;
      height: 8px;
      background: $background;
      border-radius: 50%;
      border: 1px solid #ff8198;
      margin: 0 5px;
    }
    .active {
      background: #ff5777;
    }
  }
}
</style>