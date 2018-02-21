import Mock from 'mockjs'
import tbanner1 from '../../assets/images/tbanner1.gif'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
export const banner = Mock.mock({
  'obj': [
    {
      bool: 'bbottom',
      src: banner1

    },
    {
      bool: '',
      src: banner2
    },
    {
      bool: '',
      src: banner3
    }
  ]
})
export const tbanner = Mock.mock({
  'obj': [
    {
      bool: 'bbottom',
      src: tbanner1

    },
    {
      bool: '',
      src: tbanner1
    },
    {
      bool: '',
      src: tbanner1
    }
  ]
})
