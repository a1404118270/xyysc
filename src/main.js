// 项目入口文件

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

import {Button} from 'vant';
Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
