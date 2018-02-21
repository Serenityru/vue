import Vue from 'vue'
import VueRouter from 'vue-router'
import appView from '../components/App/view.vue'
import userView from '../components/App/user.vue'
import tuijianView from '../components/App/tuijian.vue'
import shoppingView from '../components/App/shopping.vue'
import zhanghuView from '../components/App/zhanghu.vue'
import profileViewFirst from '../components/App/Profile/profile.vue'
import profileView from '../components/App/Profile/profileList.vue'
import oneView from '../components/Home/main/one.vue'
import twoView from '../components/Home/main/two.vue'
import thereView from '../components/Home/main/there.vue'
import fourView from '../components/Home/main/four.vue'
import fiveView from '../components/Home/main/five.vue'
import searchGo from '../components/Home/main/two/bigsearch/searchgo.vue'
import productPage from '../components/Home/main/two/bigsearch/productPage.vue'

import other from '../other/index.vue'
console.log(productPage)
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      name: 'App',
      path: '/',
      component: appView,
      children: [
        {
          name: 'AppProfile',
          path: '/',
          component: profileViewFirst,
          children: [
            {
              name: 'proMain',
              path: '/',
              component: oneView
            },
            {
              name: 'proMain2',
              path: '/proMain2',
              component: twoView
            },
            {
              name: 'proMain3',
              path: '/proMain3',
              component: thereView
            },
            {
              name: 'proMain4',
              path: '/proMain4',
              component: fourView
            },
            {
              name: 'proMain5',
              path: '/proMain5',
              component: fiveView
            }
          ]
        },
        {
          name: 'AppListInfo',
          path: '/profileList/:id',
          component: profileView
        }
      ]
    },
    {
      name: 'User', // 当前路由上可以访问到的信息
      path: '/user',
      component: userView
    },
    {
      name: 'Tuijian', // 当前路由上可以访问到的信息
      path: '/tuijian',
      component: tuijianView
    },
    {
      name: 'Shopping', // 当前路由上可以访问到的信息
      path: '/shopping',
      component: shoppingView
    },
    {
      name: 'Zhanghu', // 当前路由上可以访问到的信息
      path: '/zhanghu',
      component: zhanghuView
    },
    {
      name: 'other', // 当前路由上可以访问到的信息
      path: '/other',
      component: other
    },
    {
      name: 'searchgo',
      path: '/searchgo/:id',
      component: searchGo
    },
    {
      name: 'productPage',
      path: '/productPage',
      component: productPage
    }
  ]
})
