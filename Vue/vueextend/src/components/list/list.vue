<template>
    <div>
      <span v-for='(v,k) in list' :key='k'><router-link :to='v.toName' v-link-active>{{v.name}}</router-link></span>
      <router-view></router-view> 
    </div>
</template>
<script>
export default {
  props: ['list']
}
</script>
<style scoped>
    div{
      display: flex;
    }
    div>span{
      flex:1;
    }
    .active{
      background: aqua;
    }
</style>
