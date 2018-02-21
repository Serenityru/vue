<template>
    <div id="one">
        <my-banner></my-banner>
        <my-search @tsearchd='tsearchs'></my-search>
        <my-nav></my-nav>
        <my-list :obj=obj></my-list>
        <big-search v-if='bigflag'></big-search>
    </div>
</template>
<script>
// import bs from '../../../assets/bs/bs.js'
import axios from 'axios'
import mybanner from './two/tbanner'
import mysearch from './two/tsearch'
import mynav from './two/tnav'
import mylist from './two/tlist'
import bigsearch from './two/bigsearch'
export default {
  mounted () {
    var _this = this
    axios.get('/tlist')
      .then((res) => {
        _this.obj = res.data.twoListData.list
      })
  },
  data () {
    return {
      obj: '',
      bigflag: false
    }
  },
  name: 'two',
  components: {
    'my-banner': mybanner,
    'my-search': mysearch,
    'my-nav': mynav,
    'my-list': mylist,
    'big-search': bigsearch
  },
  methods: {
    tsearchs (data) {
      if (data) {
        this.bigflag = data
      }
    }
  }
}
</script>
<style>

</style>
