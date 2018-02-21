<template>
  <div id="home">
    <headers/>
    <contents/>
  </div>
</template>

<script>
import '../../../assets/styles/reset.css'
import '../../../assets/styles/style.css'
import '../../../assets/styles/font.css'
import headers from '../../common/header'
import contents from '../../Home/content'

export default {
  name: 'home',
  components: {
    headers,
    contents
  }
}
</script>
<style>

</style>

