import Mock from 'mockjs'
import img1 from '../../assets/images/tnav1.jpg'
import img2 from '../../assets/images/tnav2.jpg'
import img3 from '../../assets/images/tnav3.jpg'
import img4 from '../../assets/images/tnav5.jpg'
export const twoListData = Mock.mock({
  'list|20': [
    {
      'name|1': [
        '今日特卖 早上10：00更新',
        '一周畅销 中午12：00更新',
        '最热 中午12：00更新',
        '超低价 上午8：00更新'
      ],
      'src|1': [
        img2,
        img1,
        img3,
        img4
      ]
    }
  ]
})
