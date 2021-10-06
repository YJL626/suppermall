import axios from 'axios'
/* 联系coder-why老师获取最新接口 */
import urlConfig from './urlConfig.json'
export function requestDefault(config) {
  const getDefaultUrl = axios.create({
    baseURL: urlConfig.baseUrl,
  })
  getDefaultUrl.interceptors.request.use(
    (config) => {
      console.log('request,success')
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  return getDefaultUrl(config)
}
