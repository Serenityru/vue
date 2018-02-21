<template>
  <div class="login-page">
    <div class="lo">
      <p> 手机号：<input type="text" v-model="phone"></p>
      <p>密码：<input type="password" v-model="password"></p>
      <input type="submit" value="登录" class="deng" @click="loginDo">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'smile',
        phone: '',
        password: ''
      }
    },
    methods: {
      loginDo () {
        window.localStorage.setItem('userInfo', JSON.stringify(
          {
            phone: this.phone
          }
        ))
        this.$router.replace(this.$route.query.loginDoCallback)
      }
    }
  }
</script>

<style scoped lang="less">
  .login-page{
    width: 100%;
    position: relative;
    .lo{
      margin: 2.0rem auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    p{
      margin-top: 0.5rem;
    }
    input{
      display: inline-block;
      margin-top: 0.1rem;
    }
    .deng{
      width: 3.5rem;
      height: 0.5rem;
      border: none;
      outline: none;
      color: #fff;
      background: skyblue;
      margin-top: 0.5rem;
    }
  }
</style>
