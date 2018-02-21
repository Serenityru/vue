import Mock from 'mockjs'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.png'
export const nav = Mock.mock({
  'obj': [
    {
      bool: 'bbottom',
      con: '今日推荐',
      path: '/',
      obj: [
        {name: '休闲卫衣秋冬新款1', src: img2},
        {name: '新款冬衣1', src: img1},
        {name: '休闲卫衣秋冬新款1', src: img3},
        {name: '新款包包1', src: img1},
        {name: '休闲卫衣秋冬新款1', src: img3},
        {name: '休闲卫衣秋冬新款1', src: img1}
      ]
    },
    {
      bool: '',
      con: '时尚盛典',
      path: '/proMain2',
      obj: [
        {name: '休闲卫衣秋冬新款2', src: img1},
        {name: '新款冬衣2', src: img2},
        {name: '休闲卫衣秋冬新款2', src: img2},
        {name: '新款包包2', src: img1},
        {name: '休闲卫衣秋冬新款2', src: img2},
        {name: '休闲卫衣秋冬新款2', src: img1}
      ]
    },
    {
      bool: '',
      con: '美妆',
      path: '/proMain3',
      obj: [
        {name: '休闲卫衣秋冬新款3', src: img3},
        {name: '新款冬衣3', src: img1},
        {name: '休闲卫衣秋冬新款3', src: img3},
        {name: '新款包包3', src: img2},
        {name: '休闲卫衣秋冬新款3', src: img2},
        {name: '休闲卫衣秋冬新款3', src: img1}
      ]
    },
    {
      bool: '',
      con: '美妆',
      path: '/proMain4',
      obj: [
        {name: '休闲卫衣秋冬新款3', src: img2},
        {name: '新款冬衣3', src: img1},
        {name: '休闲卫衣秋冬新款3', src: img2},
        {name: '新款包包3', src: img2},
        {name: '休闲卫衣秋冬新款3', src: img2},
        {name: '休闲卫衣秋冬新款3', src: img1}
      ]
    },
    {
      bool: '',
      con: '母婴',
      path: '/proMain5',
      obj: [
        {name: '休闲卫衣秋冬新款5', src: img1},
        {name: '新款冬衣5', src: img2},
        {name: '休闲卫衣秋冬新款5', src: img2},
        {name: '新款包包5', src: img2},
        {name: '休闲卫衣秋冬新款5', src: img2},
        {name: '休闲卫衣秋冬新款5', src: img1}
      ]
    }
  ]
})
