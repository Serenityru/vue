<template>
    <div class='login'>
        <input type="text" v-model='username'>
        <button @click='onSubmit'>登录</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'login',
    data () {
        return {
            username: ''
        };
    },
    methods: {
        onSubmit () {
            // this.$router.push({name: 'welcome', params: {name: this.username}});
            // localStorage.setItem('username', this.username);
            axios({
                url: '/api/login',
                params: {
                    username: this.username
                },
                method: 'POST'
            }).then((res) => {
                if (res.status === 200) {
                    this.$router.push({name: 'welcome', params: {name: res.data.name}});
                }
            });
        }
    },
    computed: {
        remove () {
            return localStorage.removeItem('username');
        }
    }
};
</script>

<style>

</style>
