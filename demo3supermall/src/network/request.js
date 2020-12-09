import axios from 'axios'

export function requestDefault(config) {
  const getDefaultUrl = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5'
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