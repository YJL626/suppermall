import BackTop from "components/common/backTop/BackTop.vue";
export const BackTopMixin = {
  data() {
    return {
      showBack: false,
    };
  },
  components: {
    BackTop,
  },
  methods: {
    back() {
      //返回最上级
      this.$refs.scrollCPN.scrollTo();
    },
    //根据传入的值来决定back-show的值.
    checkBackShow(currentOffset, showOffset = this.$el.offsetHeight * 1.368) {
      this.showBack = Math.abs(currentOffset) > showOffset;
    },
  },
};
