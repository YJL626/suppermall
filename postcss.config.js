module.exports = {
  plugins: {
    // ...
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      selectorBlackList: ["ignore"],
      exclude: [/tabBar/i, /Category.vue$/i, /CategoryTopBar/, /NavBar/,/Home/],
    },
  },
};
