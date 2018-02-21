/**
 * Created by Serenity on 2017/11/2.
 */
class List {
    constructor () {
        this.fade();
    }
    fade() {
        $('div>div').on('mouseover', function () {
            $(this).find('p').fadeIn();
            $(this).siblings().find('p').fadeOut();
        });
        $('.list').on('mouseout', function(){
            $(this).find('p').fadeOut();
        })
    }
}
var lists = new List();
export {lists};