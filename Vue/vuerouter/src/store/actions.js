export default {
  add ({commit}, num) {
    commit('ADD', num)// 执行更新函数中的ADD方法
  },
  cut ({commit}, num) {
    commit('CUT', num)// 执行更新函数中的ADD方法
  },
  getplace ({commit}, val) {
    commit('GETPLACE', val)
  },
  cityShow ({commit}) {
    commit('CITYSHOW')
  },
  cityData ({commit}, city) {
    commit('CITYDATA', city)
  },
  productPage ({commit}, product) {
    commit('PRODUCTPAGE', product)
  }
}
