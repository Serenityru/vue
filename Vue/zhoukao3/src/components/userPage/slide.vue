<template>
  <ul class="slide" v-show="flag">
    <li v-for="(v, k) in menuList" :key="k">v</li>
  </ul>
</template>

<script>
const menuList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
export default {
    name: 'slide',
    data () {
        return {
            menuList
        };
    },
    props: ['flag']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    position: absolute;
    height:100%;
    background:#2C3F51;
    overflow: hidden;
}
li{
    padding:10px;
    color:#A6B0C3;
}
</style>
