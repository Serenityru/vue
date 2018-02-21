import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/parent'
import tab from '@/components/tab'
import zs from '@/components/list/zs'
import ls from '@/components/list/ls'
import we from '@/components/list/we'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'parents',
      component: parent,
      children: [
        {
          path: '/zs',
          name: 'zs',
          component: zs
        },
        {
          path: '/ls',
          name: 'ls',
          component: ls
        },
        {
          path: '/we',
          name: 'we',
          component: we
        }
      ]
    },
    {
      path: '/tab',
      name: 'tabs',
      component: tab
    }
  ]
})
