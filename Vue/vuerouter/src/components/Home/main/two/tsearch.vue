<template>
    <div class="search">
        <i class='fa fa-search'></i>
        <input type="text" placeholder="大家都在搜:西柚色按压口红" @click='tsearched'>
    </div>
</template>
<script>
    export default {
      name: 'search',
      methods: {
        tsearched () {
          this.$emit('tsearchd', true)
        }
      },
      computed: {
        searchList () {
          return this.$store.getters.searchList
        }
      }
    }
</script>
<style scoped>
    .search {
        width: 90%;
        height: 0.3rem;
        margin: .1rem 5%;
        display: -webkit-flex;
        background: #ffe2f1;
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
</style>