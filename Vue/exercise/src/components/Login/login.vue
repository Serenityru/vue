<template>
  <div id="login">
      <input type="text" v-model="user">
      <button type="button" @click='subMit'>登录</button>       
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
        subMit () {
            let names = this.user;
            localStorage.setItem('names',this.user);
            this.$router.push({name: 'home', params: {name: this.user}});
        }
    }
}
</script>

<style>

</style>
