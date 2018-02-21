<template>
  <div class="top">
        <span>姓名</span>：{{username}}
        登录成功
  </div>
</template>

<script>
export default {
    name: 'top',
    data () {
        return {
            username: ''
        };
    },
    mounted () {
        let obj = localStorage.getItem('userInfo');
        this.username = JSON.parse(obj).user;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    padding:10px 0;
    text-align: center;
    border-bottom:1px solid #ccc;
}
</style>
