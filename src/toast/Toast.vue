<template>
  <div class="container">
    <transition name="toast">
      <div class="toast" v-if="isShow">
        {{ tipData }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Toast",
  created() {},
  data() {
    return {
      isShow: false,
      tipData: "???",
    };
  },
  props: {},
  methods: {
    show(tipData, duration = 1500) {
      this.tipData = tipData;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.container {
  position: relative;
  z-index: 99999;
  .toast {
    position: fixed;
    bottom: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    line-height: 50px;
    text-align: center;
    z-index: 9;
    color: #fff;
    background: $tint;
    border-radius: 5px;
  }
}

.toast-enter-active {
  animation-name: toast;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
}
@keyframes toast {
  0% {
    width: 0;
  }
  50% {
    width: 25%;
  }
  100% {
    width: 50%;
  }
}
</style>