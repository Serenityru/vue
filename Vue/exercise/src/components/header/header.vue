<template>
  <header class="header">
      <button v-on:click='fn'>{{msg}}</button>
      欢迎来到
  </header>
</template>
<script>
import bus from '../../bus.js'
export default {
    name: 'header',
    data () {
        return {
            msg: "我的"
        }
    },
    methods: {
        fn () {
            bus.$emit('myfn',this.msg)
            // this.$emit('myfn',this.msg)
        }
    }
}
</script>

<style scoped>

</style>
