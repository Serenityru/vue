import Mock from 'mockjs'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.png'
export const newListData = Mock.mock({
  'list|100': [
    {
      'pid|1-100': 1000,
      'path|1': '@csentence(5)',
      'name|1': [
        '魅力卫衣秋冬新款1',
        '黑色长袖秋冬新款1',
        '新款卫衣',
        '潮款风衣',
        '秋冬保暖',
        '口红',
        'cc素颜霜',
        '增白cc素颜霜2',
        'cc素颜霜2',
        'cc素颜霜2',
        '面膜',
        '阔腿裤',
        '毛衣宽松新款',
        '生活用品',
        '美食'
      ],
      'src|1': [
        img2,
        img1,
        img3
      ]
    }
  ]
})
