import mock from 'mockjs'
var brr = []
for (var i = 0; i < 6; i++) {
  brr.push({
    img: mock.Random.dataImage('160 x 506'),
    con1: mock.Random.ctitle(7),
    con2: mock.Random.ctitle(19),
    price: mock.Random.float(3, 1000, 2, 2)
  })
}
// console.log(brr)
export default brr
