import axios from 'axios'
import baseURL from 'assets/baseURL'

export function request(config) {
  const get = axios.create({
    baseURL,
    timeout:5000
  })
  get.interceptors.request.use(config=>{
    console.log(config);
    return config
  },error=>console.log(1,error))
  return get(config)
}