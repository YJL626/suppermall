import { requestDefault } from "network/request";
export function getDetailData(iid) {
  return requestDefault({
    url: "/detail",
    params: {
      iid,
    },
  })
    .then((resolve) => {
      if (resolve.status > 199 && resolve.status < 300) {
        return resolve.data.result;
      } else {
        console.log(9999);
        console.log("detail.js////erro");
      }
    })
    .catch((err) => {
      console.log(6666);
      throw err;
    });
}
export class DetailBaseInfoData {
  constructor(data) {
    this.title = data.itemInfo.title; //标题
    this.priceData = {};
    this.priceData.price = data.itemInfo.price; //现价
    this.priceData.discountDesc = data.itemInfo.discountDesc; //详情折扣
    this.priceData.oldPrice = data.itemInfo.oldPrice; //原价
    this.priceData.discountBgColor = data.itemInfo.discountBgColor; //整体色调

    this.baseColumns = [...data.columns]; //销量收藏
    this.baseColumns.pop();
    this.services = data.shopInfo.services; //退货补运费之类的服务
    this.baseColumns.push(this.services[0].name);

    if (data.promotions) {
      //检查是否存在促销信息
      this.promotions = data.promotions;
    }
  }
}
export class ShopInfo {
  constructor(data) {
    const shopInfo = data.shopInfo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
  }
}
export function getRecommend() {
  return requestDefault({
    url: "/recommend",
  })
    .then((resolve) => {
      if (resolve.status > 199 && resolve.status < 300) {
        return resolve.data.data.list;
      } else {
        console.log("detail.js////erro");
      }
    })
    .catch((err) => {
      throw err;
    });
}
