import { requestDefault } from 'network/request'
export function getDetailData(iid) {

  return requestDefault({
    url: '/detail',
    params: {
      iid
    }
  })
    .then(resolve => {
      if (resolve.status > 199 && resolve.status < 300) {
        return resolve.data.result
      } else {
        console.log('detail.js////erro')
      }
    })
    .catch(err => {
      throw err
    })
}