<template>
    <div class='wrap'>
        <h3 @click="show" :class='{"bg": true}'>{{mytitle.title}}</h3>
        <ul v-if="flag">
            <li v-for="(val,k) in mytitle.item" :key="k" @click='emitItem(val.path, val.name)'>{{val.name}}</li>
            <!-- <router-link v-for="(val,k) in mytitle.item" :key="k" :to='val.path'>{{val.name}}</router-link> -->
        </ul>
    </div>
</template>

<script>
import bus from '../../bus.js';
export default {
    name: 'title',
    props: ['mytitle'],
    methods: {
        show () {
            this.flag = !this.flag;
        },
        emitItem (path, name) {
            bus.$emit('changeTitle', name);
            this.$router.push(path);
        }
    },
    data () {
        return {
            flag: false,
            bg: 'bg'
        };
    }
};
</script>

<style>
    .bg{
        background:red;
    }
</style>
