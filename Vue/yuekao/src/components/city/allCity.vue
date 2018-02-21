<template>
    <div class="allCity">
        <h4>全部城市</h4>
        <ul class="word">
            <li v-for="(v, k) in list" :key="k">{{v.word}}</li>
        </ul>
        <word v-for="(v, k) in list" :key="k" :list="v"/>
    </div>
</template>

<script>
import word from './word';
export default {
    name: 'allCity',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    props: ['list'],
    components: {
        word
    }
};
</script>

<style scoped>
.allCity h4 {
    padding: .15rem 0;
}
.allCity .word {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background:#fff;
}
.allCity .word li {
    font-size: .26rem;
    text-align: center;
    padding:.15rem 0;
    flex-basis: 20%;
    color: #01c8b3;
}
</style>