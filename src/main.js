import Vue from 'vue'
import App from './App'
import './style/weui.css'
import './style/iconfont.css'
import store from './store'
import fly from './utils/request'

Vue.prototype.$fly = fly

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/account/main', '^pages/index/main', 'pages/cart/main', 'pages/category/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#09BB07',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: 'static/img/home0.png',
          selectedIconPath: 'static/img/home1.png',
          text: '主页'
        },
        {
          pagePath: 'pages/category/main',
          iconPath: 'static/img/categ0.png',
          selectedIconPath: 'static/img/categ1.png',
          text: '分类'
        },
        {
          pagePath: 'pages/cart/main',
          iconPath: 'static/img/cart0.png',
          selectedIconPath: 'static/img/cart1.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/account/main',
          iconPath: 'static/img/me0.png',
          selectedIconPath: 'static/img/me1.png',
          text: '个人中心'
        }
      ]
    }
  }
}
