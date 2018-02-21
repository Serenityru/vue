<template>
  <div class="main-bar">
    <div class="banner"><img src="../../../static/images/2_02.jpg" /></div>
    <div class="list">
      <router-link v-for="(item,index) in listData" :key="index" tag="dl" to="/cart">
        <dt><img src="../../../static/images/1_02.jpg" /></dt>
        <dd>
          <p>{{item.con}}</p>
          <p>¥<span>{{item.price}}</span></p>
        </dd>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'smile',
        listData: []
      }
    },
    created () {
      this.$http.get('./api/listData').then(resolve => {
        // console.log(resolve.data)
        this.listData = resolve.data
      }, error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="less">
  .main-bar{
    width: 100%;
    .banner{
      img{
        width: 100%;
        height: 0.76rem;
      }
    }
    .list{
      width: 100%;
      margin-top: 0.3rem;
    }
    dl{
      width: 48%;
      height: 5.06rem;
      display: inline-block;
      dt{
        width: 100%;
        height: 3.70rem;
        img{
          width:100%;
          height: 100%;
        }
      }
      dd{
        p{
          margin-left: 0.2rem;
        }
        p:nth-child(1){
          display:-webkit-box;
          -webkit-box-orient:vertical;
          word-break:break-all;
          -webkit-line-clamp:2;
          overflow:hidden;
          margin-top: 0.1rem;
          line-height: 0.30rem;
        }
        p:nth-child(2){
          margin-top: 0.2rem;
          color: #f77676;
          span{
            font-size: 0.30rem;
          }
        }
      }
    }
  }
</style>
