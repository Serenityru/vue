import Vue from 'vue';
import VueRouter from 'vue-router';
import user from '../components/User/user.vue';
import order from '../components/Order/order.vue';
import welcome from '../components/welcome.vue';
import home from '../components/Home/home.vue';
import login from '../components/User/login.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: home,
        children: [
            {
                path: 'order',
                meta: {
                    title: '管理'
                },
                component: order
            },
            {
                path: 'user',
                meta: {
                    title: '用户'
                },
                component: user
            },
            {
                path: 'welcome',
                meta: {
                    title: '欢迎'
                },
                name: 'welcome',
                component: welcome
            }
        ]
    }
];
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
router.afterEach((to, from, next) => {
    to.meta &&
    (to.meta.title) &&
    (localStorage.setItem('title', to.meta.title));
});
export default router;