import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
var navDatad = require('./data/nav.js')
var listDatad = require('./data/list.js')
var newDatad = require('./data/newD.js')
var bannerDatad = require('./data/banner.js')
var bigDatad = require('./data/bignav.js')
var cityDatad = require('./data/city.js')
var tlistDatad = require('./data/tlist.js')
var bigsearchDatad = require('./data/bigsearch.js')

export default {
  booStrap () {
    const mocks = new MockAdapter(axios)
    mocks.onGet('/newList').reply((config) => {
      return new Promise((resolve, reject) => {
        let bigData = newDatad.newListData.list
        let nData = bigData.filter((v) => {
          if (v.pid === Number(config.params.id)) {
            return v
          }
        })
        resolve([200, nData])
      })
    })
    mocks.onGet('/city').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, cityDatad])
      })
    })
    mocks.onGet('/nav').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, navDatad])
      })
    })
    mocks.onGet('/list').reply((config) => {
      // let pid = config.params.pid
      // let cname = config.params.cname
      // let cid = config.params.cid
      if (config.params) {
        for (var i = 0; i < listDatad.listdefault.lists.length; i++) {
          listDatad.listdefault.lists[i].name = config.params.obj.cname
        }
      }
      return new Promise((resolve, reject) => {
        resolve([200, listDatad])
      })
    })
    mocks.onGet('/banner').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, bannerDatad])
      })
    })
    mocks.onGet('/big').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, bigDatad])
      })
    })
    mocks.onGet('/tlist').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, tlistDatad])
      })
    })
    mocks.onGet('/bigsearch').reply((config) => {
      var datago = bigsearchDatad
      if (config.params) {
        for (var i in bigsearchDatad) {
          datago = bigsearchDatad[i].list.filter((v) => {
            if (v.name.indexOf(config.params.name) !== -1) {
              return v
            }
          })
        }
      }
      return new Promise((resolve, reject) => {
        resolve([200, datago])
      })
    })
  }
}
