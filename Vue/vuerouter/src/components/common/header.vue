<template>
    <div class="header">
        <img :src=imgs alt="" class="logo"/>
        <h1>
            <span @click='changeCity'>{{title}} <i class="fa fa-angle-down"></i></span>
            <div class="search"><input type="text" ref='search' @keyup='search($event)' :placeholder=val /></div>
         </h1>
        <i class="fa fa-user"></i>
        <div v-if='flag' class="searchBox">
            <li  v-for='(item, k) in obj' :key='k'>{{item}}</li>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import '../../assets/styles/header.css'
import bs from '../../assets/bs/bs.js'
import img from '../../assets/images/logo.png'
var vals = ''
export default {
  name: 'HelloWorld',
  data () {
    return {
      // title: '北京',
      val: '好货全面上新',
      obj: [],
      flag: false,
      imgs: img
    }
  },
  computed: mapState({
    title: state => state.title
  }),
  // mounted () {
  //   bs.$on('CityreturnDatad', (res) => {
  //     this.title = res.cname
  //   })
  // },
  methods: {
    search (e) {
      vals = this.$refs.search.value
      if (e.keyCode === 13) {
        bs.$emit('searchChangeList', vals)
      }
    },
    changeCity () {
      // bs.$emit('changecity', 'changed')
      this.$store.dispatch('cityShow')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
