<template>
    <ul id='list'>
        <li v-for='(i, k) in obj' @click='jump(i)' :key='k'>
            <span class='left'><img :src='i.src' alt=''/></span>
            <span class='right'>
            <em>{{i.name}}</em>
            <em> ￥69.9<i>3.5折起</i></em>
            </span>
        </li>
    </ul>
</template>
<script>
import bs from '../../../../assets/bs/bs.js'
export default {
  props: ['obj'],
  mounted () {
    bs.$on('content', function (data) {
      console.log(data)
    })
  },
  name: 'list',
  data: function () {
    return {
      opt: ''
    }
  },
  methods: {
    jump (val) {
      this.$router.push(val.path + '/' + val.pid)
    }
  }
}
</script>
<style>

</style>
