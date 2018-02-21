<template>
    <div class="hotCity">
        <h4>热门城市</h4>
        <ul>
            <li v-for="(v, k) in list" :key="k" @click="active(v)">{{v}}</li>
        </ul>
    </div>
</template>

<script>
import bus from '../../bus';

export default {
    name: 'hotCity',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    props: ['list'],
    methods: {
        active (city) {
            bus.$emit('active', city);
        }
    }
};
</script>

<style scoped>
.hotCity h4 {
    padding: .15rem 0;
}
.hotCity ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background:#fff;
}
.hotCity ul li {
    flex-basis: 25%;
    text-align: center;
    box-sizing: border-box;
    border-right: .02rem solid #f0efed;
    border-bottom: .02rem solid #f0efed;
    font-size: .26rem;
    padding:.15rem 0;
}
</style>