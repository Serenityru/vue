<template>
  <div id="app">
    <router-view></router-view>
    <footers/>
  </div>
</template>

<script>
import './assets/styles/reset.css'
import './assets/styles/style.css'
import './assets/styles/font.css'
import footers from './components/common/footer'

export default {
  name: 'app',
  components: {
    footers
  }
}
</script>
<style>

</style>
    
    