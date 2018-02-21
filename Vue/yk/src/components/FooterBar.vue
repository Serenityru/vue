<template>
  <footer class="footer">
    <ul class="list">
      <router-link v-for="(item,index) in footerData" :key="index" :to="item.path" tag="li" active-class="active">
        <i :class="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'smile',
        footerData: [
          {
            icon: 'iconfont icon-iconhuidaoshouye',
            text: '首页',
            path: '/home'
          },
          {
            icon: 'iconfont icon-iconhuidaoshouye',
            text: '分类',
            path: '/classTab'
          },
          {
            icon: 'iconfont icon-iconhuidaoshouye',
            text: '发现',
            path: '/find'
          },
          {
            icon: 'iconfont icon-iconhuidaoshouye',
            text: '购物车',
            path: '/cart'
          },
          {
            icon: 'iconfont icon-iconhuidaoshouye',
            text: '我的',
            path: '/me'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .footer{
    width: 100%;
    height: 0.91rem;
    border-top: 0.01rem solid #eee;
    .list{
      width: 100%;
      height: 100%;
      display: flex;
      li{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i{
          font-size: 0.35rem;
        }
        span{
          margin-top: 0.1rem;
        }
      }
      li.active{
        span{
          color: #f23030;
        }
        i{
          color: #f23030;
        }
      }
    }
  }
</style>
