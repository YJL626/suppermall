<template>
  <div class="container">
    <table>
      <tr>
        <td>
          <img src="~assets/img/profile/message.svg" alt="" />
          <span>我的消息</span>
        </td>
      </tr>
      <tr>
        <td>
          <img src="~assets/img/profile/cart.svg" alt="" />
          <span>我的购物车</span>
        </td>
      </tr>
      <tr>
        <td>
          <img src="~assets/img/profile/pointer.svg" alt="" />
          <span>积分商城</span>
        </td>
      </tr>
      <tr>
        <td>
          <img src="~assets/img/profile/vip.svg" alt="" />
          <span>关于</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProfileBottom",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 3.68%;
  table {
    box-sizing: border-box;
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    img {
      width: 20px;
      height: 20px;
      margin: 5px;
    }
    tr {
      border-bottom: 1px solid rgba($color: #afa9a9, $alpha: 0.6);
      td {
        padding: 15px 10px;
      }
    }
  }
}
</style>