/**
 * Created by Serenity on 2017/11/2.
 */
let arr = ['学习', '休闲', '招聘', '工作啦'];
let bot = [{ "content": "一学生不会读“厦”，找到老师。“老师，这念啥？”“厦（啥）。”“啥？”“厦”学生回来了：“到底是啥？” " }, { "content": "问：去过什么地方旅游啊？答：长城，黄河，南海，海南。问：觉得这样地方怎么样?答：长城很长，黄河很黄，南海很偏南，海南都是海。" }, { "content": "招聘会现场，今天多大了：22,为什么相进我们公司啊？答：不知道，问：从哪里知道我们公司的，答：听说的吧！问：听谁说的？答：不知道.老板有点晕却，问道：什么都不知道，为什么来我们公司？答道：想到你们公司学习东西。 " }, { "content": "工作之后负责显示器结构方面工作，今天穿衣服脖子后有刺一天不舒服，跟同事聊天，脖子怎么啦？答道：hinge出问题了，问：衣服的关系吧？答道：恩，衣服毛边（模具脱模现象）了。" }];
class Tab {
    constructor() {}
    mouse() {
        let spns = document.querySelectorAll('.top>span');
        let box = document.querySelector('.box');
        let content = document.querySelector('.content');
        for (let i = 0; i < spns.length; i++) {
            spns[i].innerHTML = arr[i];
            content.innerHTML = bot[i].content;
            spns[i].index = i;
            spns[i].onmouseover = function () {
                content.innerHTML = bot[i].content;
            };
        }
    }
}
var change = new Tab();
export { change };