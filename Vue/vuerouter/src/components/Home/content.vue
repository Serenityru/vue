<template>
    <div class='main'>
      <my-nav @changes='change'></my-nav>
      <my-main :obj=obj1 :objs=objs></my-main>
      <city />
    </div>
</template>

<script>
import bs from '../../assets/bs/bs.js'
import axios from 'axios'
import '../../assets/styles/content.css'
import mynav from './nav'
import mymain from './main.vue'
import city from './city'
export default {
  mounted () {
    var _this = this
    this.defaultListD()
    bs.$on('searchChangeList', function (data) {
      _this.changeListD(data)
    })
    bs.$on('CityreturnDatad', (res) => {
      axios.get('/list', {params: {obj: res}})
        .then(function (rs) {
          _this.obj1 = rs.data.listdefault.lists
        })
    })
  },
  name: 'content',
  data: function () {
    return {
      obj1: '',
      objs: ''
    }
  },
  components: {
    'my-nav': mynav,
    'my-main': mymain,
    'city': city
  },
  methods: {
    change (data) {
      this.obj1 = data
      if (data) {
        console.log(111)
      }
    },
    defaultListD () {
      var _this = this
      axios.get('/list')
        .then(function (rs) {
          _this.obj1 = rs.data.listdefault.lists
          _this.objs = rs.data.listData.list
        })
    },
    changeListD (data) {
      var _this = this
      axios.get('/list')
        .then(function (rs) {
          let result = rs.data.listNew.lists
          let news = result.filter((v, k) => {
            if (v.name.indexOf(data) !== -1) {
              return v
            }
          })
          _this.obj1 = news
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
