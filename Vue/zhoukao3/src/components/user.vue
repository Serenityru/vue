<template>
  <div class="user">
    <slide :flag="flag"/>
    <div>
        <top/>
        <contents/>
        <button @click="flagSlide">控制侧边栏</button>
        <router-link to="/">退出当前用户</router-link>
    </div>
  </div>
</template>

<script>
import slide from './userPage/slide';
import top from './userPage/top';
import contents from './userPage/content';
export default {
    name: 'user',
    components: {
        slide,
        top,
        contents
    },
    data () {
        return {
            flag: true
        };
    },
    methods: {
        flagSlide (e) {
            this.flag = !this.flag;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
    height:100%;
    overflow: hidden;
}
button{
    margin-left:50px;
}
</style>
