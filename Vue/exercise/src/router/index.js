import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import home from '@/components/home';
import login from '@/components/Login/login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            redirect: '/home',
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
