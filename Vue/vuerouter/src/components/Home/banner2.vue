<template>
    <div class='bannerBox' id='bannerBox'>
        <ul class='banner' id='banner'>
            <li v-for='(item, k) in opt' :key='k'><img :src=item.src class='img'/></li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  mounted () {
    this.bannerBox = document.getElementById('bannerBox')
    this.banner = document.getElementById('banner')
    this.img = document.getElementsByClassName('img')
    var _this = this
    axios.get('/banner')
      .then(function (rs) {
        _this.opt = rs.data.banner.obj
      })
    this.auto()
  },
  name: 'banner',
  data: function () {
    return {
      img: '',
      num: 0,
      opt: ''
    }
  },
  methods: {
    auto () {
      var _this = this
      setInterval(function () {
        if (_this.num <= -3) {
          _this.num = 0
        }
        _this.banner.style.marginLeft = 100 * _this.num + '%'
        _this.num--
      }, 1000)
    }
  }
}
</script>
<style>

</style>
