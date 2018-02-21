import mock from 'mockjs'
var arr = []
for (var i = 0; i < 6; i++) {
  arr.push({
    img: mock.Random.dataImage('160 x 506'),
    con: mock.Random.ctitle(30),
    price: mock.Random.float(3, 1000, 2, 2)
  })
}
// console.log(arr)
export default arr
