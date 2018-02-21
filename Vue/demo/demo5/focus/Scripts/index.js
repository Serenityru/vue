/**
 * Created by Serenity on 2017/11/3.
 */
var box = document.querySelector('.box');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var lis = document.querySelectorAll('ul>li');
var ols = document.querySelectorAll('ol>li');
var count = 0;
var timer = null;
class Focus {
    constructor () {
        this.click();
    }
    click () {
        left.onclick = function (num) {
            count--;
            if (count < 0) {
                count = lis.length-1;
            }
            fn();
        };
        const fn = () => {
            for (let i=0;i<lis.length;i++){
                lis[i].style.display = 'none';
                ols[i].className = '';
            }
            lis[count].style.display = 'block';
            ols[count].className = 'active';
        };
        right.onclick = function () {
            fn1();
        };
        timer = setInterval(fn1,1000);
        box.onmouseout = function () {
            timer = setInterval(fn1,1000);
        };
        box.onmouseover = function () {
            clearInterval(timer);
        };
        function fn1() {
            count ++ ;
            if (count >= lis.length) {
                count =  0;
            }
            fn();
        }
    }
}
var lunbo = new Focus();
export {lunbo}

