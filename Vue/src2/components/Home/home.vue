<template>
    <div>
        <all></all>
        <myhead></myhead>
        <mymain></mymain>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import all from '../Item/all.vue';
import myhead from '../Head/header.vue';
import mymain from '../Main/main.vue';
export default {
    name: 'home',
    components: {
        all,
        myhead,
        mymain
    }
};
</script>

<style>

</style>
