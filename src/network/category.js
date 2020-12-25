import { requestDefault } from "network/request.js";

export function requestCategoryListData() {
  return requestDefault({
    url: "/category",
  }).then((resolve) => {
    if (resolve.status > 199 && resolve.status < 300) {
      console.log(resolve.data.data);
      return resolve.data.data.category.list;
    }
  });
}
export function requestCategoryItemData(maitKey) {
  return requestDefault({
    url: `/subcategory?maitKey=${maitKey}`,
  }).then((result) => {
    if (result.status > 199 && result.status < 300) {
      return result.data.data;
    }
  });
}

export function requestCategoryGoodsList(miniWallkey) {
  return requestDefault({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
    },
  }).then((result) => {
    if (result.status > 199 && result.status < 300) {
      return result.data;
    }
  });
}

/* export function getCategory() {
  return axios({
    url: "/category"
  }).catch(err => err);
}

export function getSubcategory(maitKey) {
  return axios({
    url: "/subcategory",
    params: {
      maitKey
    }
  }).catch(err => err);
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err);
}
 */
