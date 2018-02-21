<template>
    <div class='big'>
        <div class='info' v-for="(v, k) in data" :key='k'>
            <mytitle :mytitle='v'></mytitle>
        </div>
    </div>
</template>

<script>
import mytitle from './title.vue';
import axios from 'axios';
export default {
    name: 'all',
    components: {
        mytitle
    },
    data () {
        return {
            data: ''
        };
    },
    mounted () {
        axios({
            url: '/getList',
            method: 'GET',
            params: {
                uid: 2
            }
        }).then((res) => {
            this.data = res.data;
        });
    }
};
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style:none;
}
.big{
    width:150px;
    height:100%;
    background:lightpink;
    text-align:center;
    position: fixed;
    left: 0;
    top:0;
}
.big .info{
    width:150px;
    height:auto;
}
.info h3{
    height:30px;
    background: lightblue;
}
</style>
