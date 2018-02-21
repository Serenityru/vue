import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    num: 0,
    placeholder: '',
    cityShow: false,
    title: '北京',
    productDate: '11111',
    searchList: [
      {
        id: 0,
        name: '李萍1'
      },
      {
        id: 1,
        name: '李萍2'
      },
      {
        id: 2,
        name: '李萍3'
      }
    ]
  },
  getters: {
    searchList: state => {
      return state.searchList.filter((v) => {
        if (v.id > 1) {
          return v
        }
      })
    }
  },
  actions,
  mutations
})
