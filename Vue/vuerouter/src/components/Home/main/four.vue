<template>
    <div id="one">
        <my-banner></my-banner>
        <my-search></my-search>
        <my-nav></my-nav>
        <my-list></my-list>
    </div>
</template>
<script>
// import bs from '../../../assets/bs/bs.js'
// import axios from 'axios'
import mybanner from './two/tbanner'
import mysearch from './two/tsearch'
import mynav from './two/tnav'
import mylist from './two/tlist'
export default {
  data () {
    return {

    }
  },
  name: 'two',
  components: {
    'my-banner': mybanner,
    'my-search': mysearch,
    'my-nav': mynav,
    'my-list': mylist
  },
  methods: {

  }
}
</script>
