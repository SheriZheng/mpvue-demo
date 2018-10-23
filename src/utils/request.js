import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()
const host = 'http://lartest.testwarehouse.info'
// 请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(request)
  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json'
  }

  let authParams = {
    'appid': 'wxbe3cc31b730f1235',
    'timestamp': new Date().getTime(),
    'sign': 'string'
  }
  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    };
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  return request
})
// 添加相应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data
  },
  (err) => {
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失效'
    };
  }
)
fly.config.baseURL = host
export default fly
