<template>
    <div id='home'>
        <div class="name">{{name}}</div>
        <div class="pid">{{pid}}</div>
        <div class="info">{{info}}</div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      name: 'profileList',
      data () {
        return {
          name: '该衣服不存在',
          pid: '该id不存在',
          info: '该用户不存在'
        }
      },
      methods: {
        render () {
          axios.get('/newList', {params: {id: this.$route.params.id}})
            .then((res) => {
              this.name = res.data[0].name
              this.pid = res.data[0].pid
              this.info = res.data[0].path
            })
        }
      },
      mounted () {
        this.render()
      },
      beforeRouteUpdate () {
        this.render()
      }
    }
</script>
<style>

</style>