export const getters = {
  cartGoodsArr(state) {
    return Object.values(state.cart).sort(
      ({ cTime: a }, { cTime: b }) => a > b
    );
  },
  isAllChecked({ cart }) {
    return Object.entries(cart).every(([key, value]) => value.checked);
  },
  cartCheckedTotalPrice({ cart }) {
    return Object.values(cart)
      .reduce(
        (acc, { count, price, checked }) =>
          checked ? acc + count * price : acc,
        0
      )
      .toFixed(2);
  },
  cartCheckedGoodsArr({ cart }) {
    return Object.values(cart).filter((goods) => goods.checked);
  },
};
