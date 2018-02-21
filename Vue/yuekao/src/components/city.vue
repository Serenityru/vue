<template>
    <div class="city">
        <header class="header">
          <div><router-link to="/">返回</router-link></div>
          <span>选择城市</span>
          <div><a href="javascript:;">首页</a><a href="javascript:;">搜索</a></div>
        </header>
        <section class="section">
          <div class="ok">
            定位城市：<span>{{nowCity}}</span>
          </div>
          <hotCity :list="cityList.hot"/>
          <allCity :list="cityList.all"/>
        </section>
    </div>
</template>

<script>
import hotCity from './city/hotCity';
import allCity from './city/allCity';
import cityList from '../data/cityList';
import bus from '../bus';

export default {
    name: 'city',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            cityList,
            nowCity: localStorage.getItem('nowCity')
        };
    },
    components: {
        hotCity,
        allCity
    },
    methods: {
        change (city) {
            this.nowCity = city;
        }
    },
    mounted () {
        bus.$on('active', city => {
            this.nowCity = city;
            localStorage.setItem('nowCity', city);
        });
    }
};
</script>

<style scoped>
.city {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.city .header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #04c6b1;
  padding: .1rem 0;
}
.city .header div {
  flex:1;
  display: flex;
}
.city .header div a {
  display:block;
  padding: 0 .06rem;
  color:#fff;
  font-size: .28rem;
}
.city .header span {
  flex:2.5;
  color:#fff;
  text-align: center;
}

.city .section {
  flex:1;
  overflow-y: scroll;
  padding:.15rem;
  background:#f0efed;
}
.city .section .ok {
  background:#fff;
  padding:.15rem;
}
.city .section .ok span {
  color:#04c6b1;
}
</style>
