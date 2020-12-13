<template>
  <div
    id="carousel"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div class="slider">
      <slot></slot>
    </div>

    <div class="indicator">
      <div
        @touchstart.stop
        @click="goToItem(index + 1)"
        :class="{ hightLight: index + 1 === currentIMG }"
        v-for="(item, index) in Array.from({ length: bannerCount })"
      ></div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";

export default {
  props: {
    animationTime: {
      //动画时间
      type: Number,
      default: 300,
    },
    onceFrameTime: {
      //帧率
      type: Number,
      default: 16.66,
    },
    animationInterval: {
      //动画间隔
      type: Number,
      default: 3000,
    },
    moveRatio: {
      //滚动的多少会自动补全
      type: Number,
      default: 0.2,
    },
  },
  data() {
    return {
      init: false,
      initInterval: 1000,

      initTimer: null,
      autoMoveTimer: null,
      moveTimer: false,

      bannerCount: 0,
      imgWidth: null,

      currentOffset: 0,
      currentIMG: 1,

      touchStartX: null,
      touchEndX: null,
    };
  },
  components: {
    CarouselItem,
  },
  mounted() {
    //等待异步加载完成取消定时器，并初始化
    this.initTimer = setTimeout(() => {
      this.carouselInit();
    }, 200);
  },
  activated() {
    //设置为首屏
    if (!this.init) return;
    console.log("activated");
    //更新并设置坐标
    this.currentOffset = -this.imgWidth;
    this.setChange(this.currentOffset);
    this.currentIMG = 1;
    //启动
    this.autoMoveTimer = setTimeout(() => {
      this.nextPage();
    }, 1000);
  },
  deactivated() {
    clearTimeout(this.autoMoveTimer);
    clearTimeout(this.moveTimer);
    this.moveTimer = null;
    this.autoMoveTimer = null;
  },
  methods: {
    carouselInit() {
      //设置一个不断自动执行的定时器，直到执行成功后为止
      this.initTimer = setTimeout(() => {
        this.carouselInit();
      }, (this.initInterval += 3000));
      const slider = document.querySelector("#carousel > .slider");
      const first =
        document.querySelector("#carousel > .slider > div:first-child") &&
        document
          .querySelector("#carousel > .slider > div:first-child")
          .cloneNode(true);
      const last =
        document.querySelector("#carousel > .slider > div:last-child") &&
        document
          .querySelector("#carousel > .slider > div:last-child")
          .cloneNode(true);
      const slides = document.getElementsByClassName("slide");
      //获取banner数量，宽度
      this.bannerCount = slides.length;
      this.imgWidth =
        document.querySelector("#carousel>.slider img") &&
        document.querySelector("#carousel>.slider img").offsetWidth;
      //获取数据，有一项为null则return
      if (!first || !last || !this.imgWidth) return;
      //发送事件，img已加载完成
      if (this.$bus) this.$bus.$emit("carousel-load");
      //获取成功取消定时器
      clearTimeout(this.initTimer);

      //插入数据
      slider.prepend(last);
      slider.append(first);

      this.currentOffset = -this.imgWidth;
      this.setChange(this.currentOffset);

      //启动定时器
      this.autoMoveTimer = setTimeout(() => {
        this.nextPage(true);
      }, this.animationInterval - 800);
      console.log("carousel,init");
      this.init = true; //标记初始化完成
    },
    nextPage(isNext = true, target) {
      if (this.moveTimer) return;
      const slider = document.querySelector("#carousel>.slider");
      const img = document.querySelector("#carousel>.slider img");
      const offset = isNext ? -this.imgWidth : this.imgWidth;
      const animationCount = this.animationTime / this.onceFrameTime;
      const frameOffset = offset / animationCount; //需偏移的值除以偏移的次数
      if (!target) {
        target = this.currentOffset + (isNext ? -this.imgWidth : this.imgWidth);
      }

      //启动定时器，进行移动
      this.moveTimer = setTimeout(
        () => this.move.call(this, isNext, frameOffset, target),
        0
      );
    },
    move(isNext, frameOffset, target) {
      this.autoMoveTimer = null;
      const limit = isNext ? -(this.bannerCount + 1) * this.imgWidth : 0;
      this.currentOffset += frameOffset;
      if (isNext) {
        //向下翻页时值不可小于target
        this.currentOffset = Math.max(target, this.currentOffset);
        //达到边界值则跳转；
        if (this.currentOffset <= limit) {
          this.currentOffset = target = -this.imgWidth;
        }
      }
      if (!isNext) {
        //向上翻页时值不可大于target
        this.currentOffset = Math.min(target, this.currentOffset);
        if (this.currentOffset >= 0) {
          this.currentOffset = target = -this.bannerCount * this.imgWidth;
        }
      }
      this.setChange(this.currentOffset);

      if (this.currentOffset === target) {
        this.moveTimer = null;
        //更新现有img坐标
        this.currentIMG = -this.currentOffset / this.imgWidth; //
        //达到目的地设置下次。
        this.autoMoveTimer = setTimeout(
          () => this.nextPage(),
          this.animationInterval
        );
        return;
      }
      this.moveTimer = setTimeout(
        () => this.move.call(this, isNext, frameOffset, target),
        this.onceFrameTime
      );
    },
    setChange(value) {
      const slider = document.querySelector("#carousel>.slider");
      if (!slider) {
        clearTimeout(this.moveTimer);
        this.moveTimer = null;
        return;
      }
      slider.style.transform = `translateX(${value}px)`;
    },
    goToItem(index) {
      //清除正在运行的定时器，
      clearTimeout(this.moveTimer);
      clearTimeout(this.autoMoveTimer);
      this.moveTimer = null;
      this.autoMoveTimer = null;
      //设置坐标
      this.currentOffset = -index * this.imgWidth;
      this.setChange(this.currentOffset);
      this.currentIMG = index;
      //启动定时器
      this.autoMoveTimer = setTimeout(
        () => this.nextPage(),
        this.animationInterval
      );
    },
    touchstart(event) {
      if (this.moveTimer && !this.init) return;
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
      this.touchStartX = event.touches[0].clientX;
    },
    touchmove(event) {
      //没有记录起始坐标直接跳过
      if (!this.touchStartX) return;
      clearTimeout(this.autoMoveTimer);
      this.autoMoveTimer = null;
      this.touchEndX = event.touches[0].clientX;
      const offset = this.touchEndX - this.touchStartX;
      this.setChange(this.currentOffset + offset);
    },
    touchend(event) {
      //移动的值
      const offset = this.touchEndX - this.touchStartX;
      //保存触摸之前的坐标
      const beforeMoveCoord = this.currentOffset;
      //更新坐标
      this.currentOffset += offset;
      //小于0true，为向前
      const isNext = offset < 0 ? true : false;
      //比例小于于预设值，则返回触摸之前的位置
      if (Math.abs(offset) < this.imgWidth * this.moveRatio) {
        this.nextPage(isNext, beforeMoveCoord);
      } else {
        //大于预设值则，为触摸之前的位置 + 一个图片的宽度
        this.nextPage(
          isNext,
          beforeMoveCoord + (offset > 0 ? this.imgWidth : -this.imgWidth)
        );
      }
    },
  },
};
</script>

<style lang="scss">
@import "assets/css/variable.scss";
#carousel {
  display: flex;
  position: relative;
  overflow: hidden;
  .slider {
    display: flex;
  }

  div {
    width: 100%;
    flex-shrink: 0;
  }
  .indicator {
    position: absolute;
    display: flex;
    right: 0;
    left: 0;
    bottom: 6px;
    width: 25vw;
    margin: 0 auto;
    .hightLight {
      background: red;
    }
    div {
      margin: 0 auto;
      width: 15px;
      height: 15px;
      border: 1px solid $tint;
      background: #f3f3f3;
      border-radius: 50%;
    }
  }
}
</style>
