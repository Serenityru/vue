<template>
        <div class='bignav' id='bignav'>
           <div class='small' v-for='(item, k) in opt' :key='k'>
                <i :class=item.fa></i>
                {{item.con}}
            </div>
        </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    var _this = this
    axios.get('/big')
      .then(function (rs) {
        _this.opt = rs.data.big.obj
      })
  },
  name: 'bignav',
  data: function () {
    return {
      opt: ''
    }
  }
}
</script>
<style>

</style>
