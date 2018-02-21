import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import mock from './Mock';
if (process.env.NODE_ENV === 'development') {
    mock.bootstrap();
}
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
