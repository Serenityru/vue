<template>
    <div class="tlist">
        <dl v-for='item in obj'>
            <dt>
                <img :src=item.src alt="">
            </dt>
            <dd>
                {{item.name}}
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
      props: ['obj'],
      name: 'list'
    }
</script>
<style scoped>
    .tlist {
        height: auto;
        overflow: hidden;
    }
    dl {
    height: 2rem;
    border-bottom: 1px solid #c9c9c9; 
    }
    dt {
        height: 1.62rem;
    }
    dt img {
        width: 100%;
        height: 100%;
    }
    dd {
        width: 100%;
        line-height: 0.38rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        color: #333;
    }
</style>