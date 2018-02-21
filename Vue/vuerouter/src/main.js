// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock'
import './assets/styles/citys.css'
import store from './store'
Vue.config.productionTip = false
Vue.config.baseUrl = 'http://www.baidu.com'
if (process.env.NODE_ENV === 'development') {
  Vue.config.baseUrl = ''
  mock.booStrap()
}
console.log(store.state.num)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
