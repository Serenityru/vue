<template>
    <div class="productPage">
        <h1>{{productDatas.name}}</h1>
        <img :src=productDatas.src alt="">
    </div>
</template>
<script>
    // import axios from 'axios'
    // import {mapState} from 'vuex'
    export default {
      name: 'productPage',
      computed: {
        productDatas () {
          return this.$store.state.productDate
        }
      },
    //   computed: mapState({
    //     productDatas: state => state.productData
    //   }),
      mounted () {
        console.log(this.productDatas)
      }
    }
</script>
<style scoped>
.productPage {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
h1 {
    line-height: 0.35rem;
    border-bottom: 1px solid #fafafa;
    text-align: center;
    font-size: 0.16rem;
    font-weight: normal;
    color: #2d2d2d;
}
img {
    width: 100%;
    height: 2rem;
}
</style>
   