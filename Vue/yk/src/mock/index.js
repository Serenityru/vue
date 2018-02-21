import axios from '@/utils/http'
import listData from './api/ListData'
import shopData from './api/ShopData'
import MockAdapter from 'axios-mock-adapter'

var Mock = new MockAdapter(axios)
Mock.onGet('./api/listData').reply(function () {
  return [200, listData]
})
Mock.onGet('./api/shopData').reply(function () {
  return [200, shopData]
})
