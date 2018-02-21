<template>
    <div class='bannerBox' id='bannerBox'>
        <mt-swipe :auto="4000">
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
        _this.opt = rs.data.tbanner.obj
      })
  },
  data () {
    return {
      opt: ''
    }
  },
  name: 'tbanner'
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
