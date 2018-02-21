import Vue from 'vue';
import Router from 'vue-router';

import newList from '@/components/newList';
import content from '@/components/content';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newList',
      component: newList
    },
    {
      path: '/newList',
      name: 'newList',
      component: newList
    },
    {
      path: '/content/:newsContent',
      name: 'content',
      component: content
    }
  ]
})
