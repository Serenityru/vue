<template>
    <div class='home' id="home">
        <hed v-on:myfn='fns'></hed>
        <order />
        <p>姓名： {{names}}</p>
        <p>{{$route.params.name}}</p>
    </div>
</template>
<script>
import hed from './header/header'
import order from './Order/order'
import axios from 'axios'
export default {
    name: 'home',
    data () {
        return {
           names: '' 
        }
    },
    mounted () {
        axios.post('/users').then((res) => {
            console.log(res.data.result);
        });
        console.log(this.names)
        console.log(localStorage.getItem(names))
        this.names = localStorage.getItem(names);
        console.log(this.names)
    },
    components: {
        hed,
        order
    },
    methods: {
        fns (result) {
            this.names = result;
        }
    }
}
</script>

<style>

</style>
