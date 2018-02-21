'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Focus = function () {
    function Focus() {
        _classCallCheck(this, Focus);

        this.click();
    }

    _createClass(Focus, [{
        key: 'click',
        value: function click() {
            left.onclick = function (num) {
                count--;
                if (count < 0) {
                    count = lis.length - 1;
                }
                fn();
            };
            var fn = function fn() {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].style.display = 'none';
                    ols[i].className = '';
                }
                lis[count].style.display = 'block';
                ols[count].className = 'active';
            };
            right.onclick = function () {
                fn1();
            };
            timer = setInterval(fn1, 1000);
            box.onmouseout = function () {
                timer = setInterval(fn1, 1000);
            };
            box.onmouseover = function () {
                clearInterval(timer);
            };
            function fn1() {
                count++;
                if (count >= lis.length) {
                    count = 0;
                }
                fn();
            }
        }
    }]);

    return Focus;
}();

var lunbo = new Focus();
exports.lunbo = lunbo;