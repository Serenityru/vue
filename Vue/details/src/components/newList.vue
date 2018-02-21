<template>
  <div>
    <ul>
        
        <li v-for='(v,k) in lists':key='k'><router-link :to='{"name": "content", params:{"newsContent":v.content,"newsTitle":v.title}}'>{{v.title}} </router-link></li>
       
        <router-view/>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
      return {
          lists: null
      }
  },
  mounted () {
      this.getJson()
  },
  methods: {
      getJson () {
          axios.get('./src/data/data.json').then((result) => {
              this.lists=result.data
          })
      }
  }
}
</script>

