<template>
    <div class="bigsearch">
        <div class="search">
            <i class='fa fa-search'></i>
            <input type="text" placeholder="大家都在搜:西柚色按压口红">
        </div> 
        <div class="searList">
            <li v-for='(item, k) in obj' :key='k' @click='changesearch(item.path, k, item.name)'>{{item.name}}</li>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      name: 'bigsearch',
      data () {
        return {
          obj: ''
        }
      },
      mounted () {
        var _this = this
        axios.get('/bigsearch')
          .then((res) => {
            _this.obj = res.data.search.list
          })
      },
      methods: {
        changesearch (path, k, name) {
          this.$store.dispatch('getplace', name)
          this.$router.push(path + '/' + k)
        }
      }
    }
</script>
<style>
.bigsearch {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #FAF0F0;
}
.search {
    width: 90%;
    height: 0.3rem;
    margin: .1rem 5%;
    display: -webkit-flex;
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
    -webkit-flex: 1;
    color: #baafb6;
    background: transparent;
    padding-left: 0.05rem;
    border-width: 0;
}
.searList {
    padding-left: 0.1rem;
    padding-right: 0.1rem;
}
.searList li {
    padding: .05rem .1rem;
    background: #DECEDF;
    color: #fff;
    border-radius: 15px;
    float: left;
    margin: .05rem .1rem;
}

</style>