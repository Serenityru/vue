/**
 * Created by Serenity on 2017/11/9.
 */
require('../../static/css/reset.css');
require('../../static/css/common.css');
require('../../static/css/iconfont.css');
require('../../static/css/swiper-3.3.1.min.css');
require('../css/style.css');

var Swiper = require('../../static/js/swiper-3.3.1.min.js');
var Vue = require('../../static/js/vue.min.js');
var news = new Swiper('.news',{
    autoplay:2000,
    direction: 'vertical'
});
var banner = new Swiper('.banner',{
    autoplay:2000,
    pagination: '.swiper-pagination',
    loop:true
});
var module = new Vue({
    el: "#search",
    data: {
        sea: "找工作 找房子"
    }
});