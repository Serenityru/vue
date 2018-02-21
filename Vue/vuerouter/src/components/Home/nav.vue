<template>
    <ul class='navbar'>
        <li v-for='(item, k) in opt' :key='k'><span  @click='changeCon(k, item)' :class=item.bool>{{item.con}}</span></li>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    var _this = this
    axios.get('/nav')
      .then(function (rs) {
        _this.opt = rs.data.nav.obj
      })
  },
  name: 'nav',
  data: function () {
    return {
      opt: ''
    }
  },
  methods: {
    changeCon (k, item) {
      for (let i in this.opt) {
        this.opt[i].bool = ''
      }
      this.opt[k].bool = this.opt[k].bool === 'bbottom' ? '' : 'bbottom'
      this.$emit('changes', item.obj)
      this.$router.push(item.path)
    }
  }
}
</script>
<style>

</style>
