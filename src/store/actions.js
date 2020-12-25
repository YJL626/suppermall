export const actions = {
  receiveGoods({ state, commit }, goods) {
    if (state.cart.hasOwnProperty(goods.id)) {
      commit("countChange", goods);
      return Promise.resolve("count-change");
    } else {
      commit("addGoods", goods);
      return Promise.resolve("add-goods");
    }
  },
  cartCountChange({ state, commit }, goods) {
    commit("countChange", goods);
  },
};
