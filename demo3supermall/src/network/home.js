import { requestDefault } from 'network/request'
export function getHomeData() {

  return requestDefault({
    url: '/home/multidata'
  })
    .then(resolve => {
      if (resolve.status > 199 && resolve.status < 300) {
        return resolve.data.data
      } else {
        console.log('home.js////getHomeData')
      }
    })
    .catch(err => {
      throw err
    })
}
export function getHomePopNewSell(type, page) {
  return requestDefault({
    url: 'home/data',
    params: {
      type,
      page
    }
  }).then(resolve => {
    if (resolve.status > 199 && resolve.status < 300) {
      return resolve.data.data
    } else {
      console.log('home.js////getHomePopNewCell')
    }
  })
    .catch(err => {
      throw err
    })
}
