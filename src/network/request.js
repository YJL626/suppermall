import axios from 'axios'

export function requestDefault(config) {
  const getDefaultUrl = axios.create({
    /* 联系coder-why老师获取最新接口 */
    baseURL:'null'
  })
  getDefaultUrl.interceptors.request.use(
    config=>{
      console.log('request,success');
      return config
    },
    err=>{
      console.log(err);
    }
  )


  return getDefaultUrl(config)
}