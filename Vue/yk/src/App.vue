<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/fonts/iconfont.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
