<template>
  <div id="login">
      <input type="text" v-model="user">
      <button type="button" @click='onSub'>登录</button>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            user: ''
        }
    },
    methods: {
        onSub () {
            localStorage.setItem('username',this.user);
            this.$router.push({name: 'home', params: {username: this.user}})
        }
    }
}
</script>

<style>

</style>
