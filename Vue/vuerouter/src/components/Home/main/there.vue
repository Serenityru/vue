<template>
    <div id="one" @touchstart='start($event)' @touchend='end($event)'>
        <my-banner/>
        <big-nav/>
        <list :obj=obj :objs=objs></list>
    </div>
</template>
<script>
import mybanner from './one/banner'
import bigNav from './one/bignav'
import list from './one/list'
export default {
  props: ['obj', 'objs'],
  data () {
    return {
      starts: 0,
      ends: 0,
      numd: 0,
      distance: 0
    }
  },
  name: 'one',
  components: {
    'my-banner': mybanner,
    'big-nav': bigNav,
    'list': list
  },
  methods: {
    start (e) {
      this.starts = e.touches[0].clientY
    },
    end (e) {
      this.ends = e.changedTouches[0].clientY
      this.distance = parseInt(this.starts - this.ends)
      if (this.distance > 200) {
        this.obj.push(...this.objs.slice(this.numd, this.numd + 2))
        this.numd++
      }
    }
  }
}
</script>
