import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "store/mutations.js";
import { actions } from "store/actions.js";
import { getters } from "store/getters.js";
Vue.use(Vuex);
let cartData = null;
try {
  cartData = JSON.parse(localStorage.getItem("cart"));
  if (typeof cartData !== "object") {
    cartData = null;
  }
} catch (err) {
  console.log("err");
  cartData = null;
}
const state = {
  cart: cartData || {},
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
