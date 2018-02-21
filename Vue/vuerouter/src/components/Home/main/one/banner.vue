<template>
    <div class='bannerBox' id='bannerBox'>
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for='(item, k) in opt' :key='k'>
                <img :src=item.src class='img'/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  mounted () {
    var _this = this
    axios.get('/banner')
      .then(function (rs) {
        _this.opt = rs.data.banner.obj
        // console.log(rs.data.banner.obj)
      })
  },
  data () {
    return {
      opt: ''
    }
  },
  name: 'banner'
}
</script>
<style>
.bannerBox {
  height: 2rem;
}
.bannerBox img {
  width: 100%;
  height: 100%;
}
</style>
