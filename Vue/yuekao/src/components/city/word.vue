<template>
    <ul class="word">
        <li class="title">{{list.word}}</li>
        <li v-for="(v, k) in list.city" :key="k" @click="active(v)">{{v}}</li>
    </ul>
</template>

<script>
import bus from '../../bus';

export default {
    name: 'word',
    props: ['list'],
    methods: {
        active (city) {
            bus.$emit('active', city);
        }
    }
};
</script>

<style scoped>
.word {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background:#fff;
  margin-top: .02rem;
}
.word .title {
    font-weight: bold;
}
.word li {
    font-size: .26rem;
    text-align: center;
    padding:.15rem 0;
    flex-basis: 25%;
    box-sizing: border-box;
    border-right: .02rem solid #f0efed;
    border-bottom: .02rem solid #f0efed;
}
</style>
