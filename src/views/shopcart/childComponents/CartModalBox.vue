<template>
  <div class="count-setter">
    <transition>
      <div class="modal-box" v-if="1">
        <p>修改购买数量</p>
        <div class="input-section">
          <button @click="inputNumber--" :disabled="inputNumber < 2">-</button>
          <input type="number" v-model="inputNumber" />
          <button @click="inputNumber++">+</button>
        </div>
        <div class="ack-cancel-container">
          <button class="cancel" @click="$emit('hide')">取消</button>
          <button class="ack" @click="setNumberChange">确认</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CartModalBox",
  created() {},
  data() {
    return {
      inputNumber: null,
    };
  },
  mounted() {
    this.inputNumber = this.goods.count;
  },
  props: {
    goods: {
      default: Object,
    },
  },
  methods: {
    setNumberChange() {
      this.$store.commit("setCountChange", {
        id: this.goods.id,
        count: this.inputNumber,
      });
      this.$emit("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";

.count-setter {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba($color: #0a0a0a, $alpha: 0.2);
  .modal-box {
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    width: 70%;
    text-align: center;
    .input-section {
      margin: 15px auto;
      font-size: $font-size + 2px;
      display: flex;
      justify-content: center;
      width: 50%;
      border: 1px solid rgba($color: #0a0a0a, $alpha: 0.2);
      * {
        border: none;
        text-align: center;
        box-sizing: content-box;
        font-size: $font-size + 5px;
        height: 30px;
        width: 20px;
      }
      button {
        flex: 1 1 0;
      }
      input {
        flex: 1 1 30px;
      }
    }
    .ack-cancel-container {
      display: flex;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      & > button {
        flex: 1;
        border: 1px solid $tint;
        margin: 2px 5px;
        border-radius: 10px;
        padding: 2.8px;
      }
      .ack{
        background: $tint;
        color: #fff;
      }
      .cancel{
        background:#fff;
        color: $tint;

      }
    }
  }
}
</style>