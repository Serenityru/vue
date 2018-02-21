<template>
    <div class='header'>
        <h3>{{$route.meta.title}}>{{username}}</h3>
        <p>欢迎：{{$route.params.name}} <input type="button" value="退出" @click='exit'></p>
    </div>
</template>

<script>
import bus from '../../bus.js';
export default {
    name: 'header',
    // computed: {
    //     username () {
    //         return localStorage.getItem('username');
    //     }
    // },
    data () {
        return {
            username: 'default'
        };
    },
    mounted () {
        let that = this;
        bus.$on('changeTitle', (data) => {
            that.username = data;
        });
    },
    methods: {
        exit () {
            this.$router.push({name: 'login'});
        }
    }
};
</script>

<style>
    .header{
        width:100%;
        height: 80px;
        position: fixed;
        top:0;
        left:150px;
        text-align: center;
        background:lightcyan;
    }
    .header h3{
        margin-top:10px;
    }
</style>
