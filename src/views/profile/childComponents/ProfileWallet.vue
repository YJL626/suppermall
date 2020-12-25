<template>
  <div class="profile-wallet">
    <div>
      <p><span class="light">0.0</span> 元</p>
      <p>我的余额</p>
    </div>
    <div>
      <p><span class="light">0.0</span> 个</p>
      <p>我的优惠</p>
    </div>
    <div>
      <p><span class="light">0.0</span> 分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileWallet",
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
.profile-wallet {
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 12px solid rgba($color: #c7c2c2, $alpha: 0.08);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33.33%;
    text-align: center;
    border-right: 1px solid rgba($color: #c7c2c2, $alpha: 0.6);
    p {
      margin: 1px;
    }
    .light {
      color: $high-text;
      font-weight: 500;
      font-size: $font-size + 6px;
    }
  }
  & > div:nth-last-child(1) {
    border: none;
  }
}
</style>