import { debounceWrap } from "components/common/utils.js";
export const imgLoadListenerMixin = {
  data() {
    return {
      imgLoadListener: null,
    };
  },

  mounted() {
    //img加载完成刷新卷轴高度
    //vue的方法已经被bind绑定过this，直接包装就可以
    this.imgLoadListener = debounceWrap(
      this.$refs.scrollCPN.refresh,
      100,
      3000
    );
    this.$bus.$on("img-load", this.imgLoadListener);
  },
  activated() {
    this.$bus.$off("img-load", this.imgLoadListener);
    this.$bus.$on("img-load", this.imgLoadListener);
  },
  deactivated() {
    this.$bus.$off("img-load", this.imgLoadListener);
    console.log("deactivated");
  },
  beforeDestroy() {
    this.$bus.$off("img-load", this.imgLoadListener);
    console.log("销毁");
  },
};
