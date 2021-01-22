const path = require("path");
function resolve(src) {
  return path.resolve(__dirname, src);
}

module.exports = {
  publicPath: "",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"));
  },
};
