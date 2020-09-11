import axios from 'axios'
import GLOBAL from '../api/global_variable'

const request = axios.create({
  baseURL: GLOBAL.baseURL, // api的base_url
  timeout: 10000 // 请求超时时间
  // transformRequest: data => qs.stringify(data) //
})
request.defaults.headers['Content-Type'] = 'application/json'
request.defaults.headers['multi-type'] = 'H5'
// request拦截器
request.interceptors.request.use(
  config => {
    // set 默认值
    return config
  },
  error => ({ status: 0, msg: error.message })
)
// respone拦截器
request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default request
