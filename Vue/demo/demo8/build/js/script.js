webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Serenity on 2017/11/8.
 */
var news = new Swiper('.news', {
    autoplay: 2000,
    direction: 'vertical'
});
var banner = new Swiper('.banner', {
    autoplay: 2000,
    pagination: '.swiper-pagination',
    loop: true
});
var _module = new Vue({
    el: "#search",
    data: {
        sea: "找工作 找房子"
    }
});

/***/ })
],[0]);