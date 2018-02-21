<template>
    <div class="searchgo" >
        <div class="search">
            <i class='fa fa-search'></i>
            <input type="text" :placeholder=nums>
        </div>
        <div class="list">
            <dl v-for='item in obj' @click='productPage(item)'>
                <router-link :to=path>
                    <dt>
                        <img :src=item.src alt="">
                    </dt>
                    <dd>
                        {{item.name}}
                        {{searchList.name}}
                    </dd>
                </router-link>
            </dl>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapState } from 'vuex'
    // import { mapGetters } from 'vuex'
    export default {
      name: 'searchgo',
      data () {
        return {
          num: '',
          obj: '',
          path: ''
        }
      },
      computed: {
        ...mapState({
          nums: state => state.placeholder
        }),
        searchList () {
          return this.$store.getters.searchList
        }
      },
      mounted () {
        var _this = this
        axios.get('/bigsearch', {params: {name: this.nums}})
          .then((res) => {
            _this.obj = res.data
            _this.path = '/' + res.data[0].path2
          })
      },
      methods: {
        productPage (path) {
          this.$store.dispatch('productPage', path)
        }
      }
    }
</script>
<style scoped>
.searchgo {
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
.search {
    width: 90%;
    height: 0.3rem;
    margin: .1rem 5%;
    display: flex;
    background: #f8e7ce;
    box-sizing: border-box;
    border-radius: 15px;
}
.search i {
    font-size: 0.14rem;
    color: #baafb6;
    margin-left: 0.1rem;
    margin-top: 0.08rem;
}
.search input {
    flex: 1;
    color: #baafb6;
    background: transparent;
    padding-left: 0.05rem;
    border-width: 0;
}
.list {
    flex: 1;
    overflow-y: scroll;
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