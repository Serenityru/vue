export default {
  ADD (state, nums) {
    state.num += nums
  },
  CUT (state, nums) {
    state.num -= nums
    if (state.num <= 0) {
      state.num = 0
    }
  },
  GETPLACE (state, val) {
    state.placeholder = val
  },
  CITYSHOW (state) {
    state.cityShow = !state.cityShow
  },
  CITYDATA (state, city) {
    state.cityShow = !state.cityShow
    state.title = city.cname
  },
  PRODUCTPAGE (state, product) {
    state.productDate = product
  }
}
