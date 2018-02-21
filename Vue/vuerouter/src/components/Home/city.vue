<template>
    <div id="province" v-if='cityShow'>
        <h2>请选择你所在的省市</h2>
        <mt-index-list>
            <mt-index-section v-for='(item, k) in data.province' :index=item.name :key='k' >
                <mt-cell calss='big' v-for='(items, ks) in item.city' :key='ks' :title="items.name">
                    <p id='city' @click='returnData(items.name, items.cid, item.pid)'></p>
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
    import bs from '../../assets/bs/bs.js'
    import axios from 'axios'
    import Vue from 'vue'
    import { mapState } from 'vuex'
    import { IndexList, IndexSection, Cell } from 'mint-ui'
    Vue.component(Cell.name, Cell)
    Vue.component(IndexList.name, IndexList)
    Vue.component(IndexSection.name, IndexSection)
    export default {
      mounted () {
        var _this = this
        bs.$on('changecity', (res) => {
          _this.cityFlag = res
        })
        axios.get('/city')
          .then((res) => {
            _this.data = res.data.cityData
          })
      },
      name: 'city',
      data () {
        return {
          data: ''
        }
      },
      computed: mapState({
        cityShow: state => state.cityShow
      }),
      methods: {
        returnData (cname, cid, pid) {
        //   this.cityFlag = false
          this.$store.dispatch('cityData', {cname: cname, cid: cid, pid: pid})
        //   bs.$emit('CityreturnDatad', {cname: cname, cid: cid, pid: pid})
        }
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
        background: #fff;
        z-index: 9999;
    }
    #city {
        width: 100%;
        height: 0.4rem;
        position: absolute; 
        left: 0;
        top: 0;
    }
</style>