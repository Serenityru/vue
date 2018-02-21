import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import home from '@/components/home';
import login from '@/components/login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
});
