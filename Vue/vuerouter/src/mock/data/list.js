import Mock from 'mockjs'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.png'
export const listData = Mock.mock({
  'list|100': [
    {
      'pid|1-100': 100,
      'path': 'profileList',
      'name|1': [
        '修身卫衣秋冬新款1',
        '新款冬衣1',
        '黑色长袖秋冬新款1',
        '新款包包1',
        '休闲毛衣秋冬新款1',
        '新款包包1'
      ],
      'src|1': [
        img2,
        img1,
        img3
      ]
    }
  ]
})
export const listdefault = Mock.mock({
  'lists|100': [
    {
      'pid|1-100': 100,
      'path': 'profileList',
      'name|1': [
        '保暖毛衣秋冬新款1',
        '新款包包2',
        '韩版卫衣秋冬新款1',
        '新款冬衣2',
        '中国风卫衣秋冬新款1',
        '新款冬衣2',
        '休闲毛衣黑色秋冬新款1',
        '新款包包2'
      ],
      'src|1': [
        img2,
        img1,
        img3
      ]
    }
  ]
})

export const listNew = Mock.mock({
  'lists|100': [
    {
      'pid|1-100': 100,
      'path': 'profileList',
      'name|1': [
        '休闲卫衣秋冬新款1',
        '新款冬衣2',
        '韩版毛衣修身秋冬新款1',
        '新款包包2',
        '韩版卫衣秋冬新款1',
        '新款冬衣2',
        '休闲毛衣黑色秋冬新款1',
        '新款包包2'
      ],
      'src|1': [
        img2,
        img1,
        img3
      ]
    }
  ]
})
