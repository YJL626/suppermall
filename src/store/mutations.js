import Vue from "vue";

export const mutations = {
  countChange(state, goods) {
    state.cart[goods.id].count += +goods.count;
    addToLocalStorage("cart", state.cart);
  },
  setCountChange(state, goods) {
    state.cart[goods.id].count = +goods.count;
    addToLocalStorage("cart", state.cart);
  },
  addGoods(state, goods) {
    goods.cTime = Date.now(); //添加的时间
    Vue.set(state.cart, goods.id, goods);
    addToLocalStorage("cart", state.cart); //添加到LocalStorage
  },
  removeGoods(state, goods) {
    Vue.delete(state.cart, cart[goods.id]);
    addToLocalStorage("cart", state.cart);
  },
  checkedChange(state, goods) {
    state.cart[goods.id].checked = !state.cart[goods.id].checked;
    addToLocalStorage("cart", state.cart);
  },
  cartCheckedAllChange({ cart }) {
    let isAllChecked = this.getters.isAllChecked;
    Object.values(cart).forEach((value) => (value.checked = !isAllChecked));
    addToLocalStorage("cart", cart);
  },
  cartCheckGoodsRemove({ cart }) {
    Object.entries(cart).forEach(([key, value]) =>
      value.checked ? Vue.delete(cart, key) : null
    );

    addToLocalStorage("cart", cart);
  },
};
function addToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
