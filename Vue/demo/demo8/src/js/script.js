/**
 * Created by Serenity on 2017/11/8.
 */
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