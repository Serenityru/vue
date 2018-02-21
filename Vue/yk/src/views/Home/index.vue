<template>
  <div class="wrap">
    <header class="header">
      <p class="sao">
        <i class="iconfont icon-zixun"></i>
      </p>
      <form action="">
        <label for=""><i class="iconfont icon-fangdajing"></i></label>
        <input type="text" value="运动鞋">
      </form>
      <p class="new">
        <i class="iconfont icon-xiaoxi"></i>
      </p>
    </header>
    <main class="main">
      <MainBar></MainBar>
    </main>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import FooterBar from '@/components/FooterBar'
  import MainBar from './components/MainBar'
  export default {
    data () {
      return {
        msg: 'smile'
      }
    },
    components: {
      FooterBar,
      MainBar
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
      text-align: center;
      line-height: 0.91rem;
      border-bottom: 0.01rem solid #eee;
      position: relative;
      .sao{
        position: absolute;
        left: 0.24rem;
        i{
          font-size:0.45rem;
        }
      }
      .new{
        position: absolute;
        right: 0.24rem;
        i{
          font-size:0.45rem;
        }
      }
      form{
        position: absolute;
        left: 1.5rem;
        width: 5rem;
        height: 0.6rem;
        background: #d8d8d8;
        margin-top: 0.15rem;
        border-radius: 50px;
        label{
          position: absolute;
          left: 0.2rem;
          bottom:-0.2rem;
          display: inline-block;
          i{
            color:#fff;
          }
        }
        input{
          width: 4rem;
          height: 0.56rem;
          border:none;
          outline: none;
          position: absolute;
          right:0.2rem;
          background: #d8d8d8;
          display: inline-block;
          color: #fff;
        }
      }

    }
    .main{
      width: 100%;
      flex:1;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>
