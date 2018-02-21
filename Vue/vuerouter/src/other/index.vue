<template>
    <div id='home'>
		<adds />
		<cuts />
		<renders />
    </div>
</template>
<script>
import adds from './add'
import cuts from './cut'
import renders from './render'
export default {
  name: 'index',
  mounted () {
    this.$store.dispatch('add', 100)
  },
  components: {
    adds,
    cuts,
    renders
  }
}
</script>
