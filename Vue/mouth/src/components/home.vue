<template>
  <div id="home">
      <header class="header">
          <span @click='fn'>{{cname?cname:'北京'}}</span>
          <span><input type="text" ></span>
          <span>{{username}}</span>
      </header>
      <main class="main">
          <slide />
      </main>
      <div class="mark" v-if='cityFlag'>
          <div class="box">
                <div v-for='(v, k) in cityArr.province' :key="k">
                    <h3 >{{v.name}}</h3>
                    <div class="city" v-for='(v,k) in v.city':key='k'>
                        <span @click='fns(v.name)'>{{v.name}}</span>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import slide from './slide'
export default {
    name: 'home',
    data () {
        return {
            cityFlag: false,
            cityArr: [],
            username: '',
            cname: ''
        }
    },
    mounted () {
        axios.post('/city').then((res) => {
           this.cityArr = res.data;
        });
        this.username = localStorage.getItem('username');
    }, 
    methods: {
        fn () {
            this.cityFlag = !this.cityFlag;
        },
        fns (cname) {
            this.cityFlag = false;
            this.cname = cname;
        }
    },
    components: {
        slide
    }
}
</script>

<style scoped>  
    #home{
        width:100%;
        height: 100%;
        position: relative;
    }
    .mark{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        background: #000;
        opacity: .4;
        overflow: hidden;
        z-index: 99;
        
    }
    .box{
        width:100%;
        height: 100%;
        padding-top:40px;
        overflow-y:scroll;
    }
</style>
