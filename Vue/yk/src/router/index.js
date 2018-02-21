import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ClassTab from '@/views/ClassTab'
import Cart from '@/views/Cart'
import Find from '@/views/Find'
import Me from '@/views/Me'
import Login from '@/views/Login'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classTab',
      name: 'ClassTab',
      component: ClassTab
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      query: {
        loginDoCallback: ''
      },
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          loginDoCallback: to.path
        }
      })
    }
  } else {
    if (window.localStorage.getItem('userInfo')) {
      next('/cart')
    } else {
      next()
    }
  }
})
export default router
