<template>
  <div class="wrap">
    <header class="header">
      购物车
    </header>
    <main class="main">
      <div class="lu">
        <router-link tag="span" to="/login">登录</router-link><b>登陆后同步电脑与手机购物车</b>
      </div>
      <div class="shop" v-for="(item, index) in shopData" :key="index">
        <p>
          <input type="checkbox">
          <b>{{item.con1}}</b>
        </p>
        <p>
          <input type="checkbox">
        </p>
        <p></p>
        <p>
          <span>{{item.con2}}</span>
          <span>¥<b>{{item.price}}</b></span>
        </p>
        <p>
          <span @click="jian">-</span><input type="text" v-model="num"><span @click="add">+</span>
        </p>
      </div>
    </main>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import FooterBar from '@/components/FooterBar'
  export default {
    data () {
      return {
        msg: 'smile',
        shopData: [],
        num: '1'
      }
    },
    components: {
      FooterBar
    },
    methods: {
      add () {
        this.num++
        if (this.num === 11) {
          alert('最多为10件')
          this.num = 10
        }
      },
      jian () {
        this.num--
        if (this.num === 0) {
          alert('最少为1件')
          this.num = 1
        }
      }
    },
    created () {
      this.$http.get('./api/shopData').then(resolve => {
        // console.log(resolve.data)
        this.shopData = resolve.data
      }, error => {
        console.log(error)
      })
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
      border-bottom: 0.01rem solid #eee;
      font-size: 0.30rem;
      line-height: 0.91rem;
      text-align: center;
    }
    .main{
      width: 100%;
      flex:1;
      overflow-x: hidden;
      overflow-y: scroll;
      .lu{
        width: 100%;
        padding:0.2rem;
        span{
          border:0.01rem solid #eee;
          padding: 0.2rem;
          text-align: center;
          line-height: 0.56rem;
          margin-top: 0.2rem;
          margin-left: 0.5rem;
        }
        b{
          margin-left: 0.3rem;
        }
      }
      .shop{
        width: 100%;
        height: 3.0rem;
        position: relative;
        margin-top: 0.2rem;
        p:nth-child(1){
          padding:0.2rem;
          background: #eee;
        }
        p:nth-child(2){
          display: inline-block;
          position: absolute;
          left: 0.16rem;
          top: 1.6rem;
        }
        p:nth-child(3){
          width: 1.82rem;
          height: 1.82rem;
          background: pink;
          display: inline-block;
          position: absolute;
          left: 0.8rem;
          top: 0.88rem;
        }
        p:nth-child(4){
          display: inline-block;
          position: absolute;
          left: 2.81rem;
          top: 1.0rem;
          span:nth-child(2){
            position: absolute;
            top: 1.6rem;
          }
        }
        p:nth-child(5){
          display: inline-block;
          position: absolute;
          right: 0.2rem;
          top: 2.4rem;
          span{
            padding:0.2rem;
            border:0.01rem solid #eee;
          }
          input{
            width: 0.5rem;
          }
        }
      }
    }
  }
</style>
