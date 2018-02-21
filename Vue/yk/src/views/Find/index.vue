<template>
  <div class="wrap">
    <header class="header">
      发现
    </header>
    <main class="main">
      
    </main>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import FooterBar from '@/components/FooterBar'
  export default {
    data () {
      return {
        msg: 'smile'
      }
    },
    components: {
      FooterBar
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      width: 100%;
      height: 0.91rem;
    }
    .main{
      width: 100%;
      flex:1;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>
