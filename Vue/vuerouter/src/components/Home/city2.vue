<template>
    <div id="province" v-if='cityFlag'>
        <h2>请选择你所在的省市</h2>
        <div v-for='(item, k) in data.province' :key='k'>
            <p class="area">{{item.name}}</p>
            <div class="city" v-for='(items, k) in item.city' :key='k'>
                <p @click='returnData(items.name, items.cid, item.pid)'>{{items.name}}</p>
            </div>
        </div>
        <div class="reference">
            <span v-for='(itemd, k) in data.province' :key='k'>{{k}}</span>
        </div>
    </div>
</template>
<script>
    import bs from '../../assets/bs/bs.js'
    import axios from 'axios'
    export default {
      name: 'city',
      data () {
        return {
          cityFlag: false,
          data: ''
        }
      },
      methods: {
        returnData (cname, cid, pid) {
          this.cityFlag = false
          bs.$emit('CityreturnDatad', {cname: cname, cid: cid, pid: pid})
        }
      },
      mounted () {
        bs.$on('changecity', (res) => {
          this.cityFlag = res
        })
        axios.get('/city')
          .then((res) => {
            this.data = res.data.cityData
          })
      }
    }
</script>
<style>
    #province {
        width: 100%;
        height: 1000px;
        overflow-y: scroll;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .5);
    }
    .reference {
        height: 555px;
        width: 25px;
        position: fixed;
        right: 0.1rem;
        background: rgba(0, 0, 0, .8);
        top: 50%;
        margin-top: -255px;
        color: #fff;
    }
    .reference span {
        text-align: center;
        margin: .06rem auto;
        display: block;
    }
    h2 {
        line-height: .3rem;
        background: #fff;
        color: #999;
        font-weight: normal;
        font-size: 0.16rem;
        padding-left: .1rem;
    }
    .area {
        line-height: .35rem;
        padding-left: 0.15rem;
        font-weight: thin;
        color: #333;
        font-size: 0.14rem;
        background: palevioletred;
        border-bottom: 1px solid #ccc; 
    }
    .city {
        line-height: 0.3rem;
        background: rgba(100, 100, 100, .8);
        color: #fff;
        padding-left: 0.2rem;
        border-bottom: 1px solid #ccc; 
    }
</style>