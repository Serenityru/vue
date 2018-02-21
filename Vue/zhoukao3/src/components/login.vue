<template>
  <div class="login">
    <h3>Login in. To see it in action</h3>
    <input type="text" placeholder="Username" v-model="user">
    <input type="password" placeholder="Password" v-model="pwd">
    <button @click="login">submit</button>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            user: '',
            pwd: ''
        };
    },
    methods: {
        login () {
            if (this.user.trim() !== '' && this.pwd.trim() !== '') {
                let userInfo = {
                    user: this.user.trim(),
                    pwd: this.pwd.trim()
                };
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                this.$router.push('user');
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  display: block;
  margin:5px auto;
}
button{
  display: block;
  margin: 0 auto;
}
</style>
