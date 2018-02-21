'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Serenity on 2017/11/2.
 */
var List = function () {
    function List() {
        _classCallCheck(this, List);

        this.fade();
    }

    _createClass(List, [{
        key: 'fade',
        value: function fade() {
            $('div>div').on('mouseover', function () {
                $(this).find('p').fadeIn();
                $(this).siblings().find('p').fadeOut();
            });
            $('.list').on('mouseout', function () {
                $(this).find('p').fadeOut();
            });
        }
    }]);

    return List;
}();

var lists = new List();
exports.lists = lists;