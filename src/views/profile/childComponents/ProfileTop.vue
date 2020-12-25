<template>
  <div class="top">
    <img class="left" src="~assets/img/profile/avatar.svg" alt="" />
    <div class="center">
      <p class="login">登录/注册</p>
      <p>暂未绑定手机号</p>
    </div>
    <div class="right">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.top {
  height: 30vw;
  background: $tint;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  .left {
    width: 20vw;
    margin: 0 20px;
  }
  .center {
    .login {
      margin: 5px 0;
      font-size: $font-size + 1px;
    }
  }
  .right {
    margin-left: auto;
    margin-right: 20px;
    .arrow {
      width: 15px;
      height: 15px;
      border-right: 3px solid rgba($color: #ffffff, $alpha: 0.8);
      border-top: 3px solid rgba($color: #ffffff, $alpha: 0.8);
      transform: rotate(45deg);
    }
  }
}
</style>