import Vue from "vue";
import App from "@/App";
import router from "router/index";
import store from "store/index";
import FastClick from "fastclick";
import Tip from "@/toast";
import VueLazyLoad from "vue-lazyload";

Vue.config.devtools = true

if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}
Vue.use(Tip);
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/loading.png"),
});
Vue.prototype.$bus = new Vue({});
new Vue({
  render: (h) => h(App),
  router,
  store,
  methods: {
    getRandom() {
      return Math.random();
    },
  },
}).$mount("#app");
let a = function() {
  console.log(this);
};
