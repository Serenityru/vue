<template>
    <div class='footer'>
        <span v-for='(item, k) in opt'  @click='fn(k, item)'  :class = item.bool>
            <i :class=item.fa></i>
            <span class="con">{{item.con}}</span>
            <!-- <router-link :to='item.path' class='con'>{{item.con}}</router-link> -->
        </span>
    </div>
</template>

<script>
import bs from '../../assets/bs/bs.js'
import '../../assets/styles/footer.css'
export default {
  name: 'footer',
  data () {
    return {
      opt: [
        {
          bool: 'active',
          fa: 'fa fa-dribbble',
          con: '首页',
          index: 1,
          path: '/'
        },
        {
          bool: '',
          fa: 'fa fa-camera',
          con: '推荐',
          index: 2,
          path: '/tuijian'
        },
        {
          bool: '',
          fa: 'fa fa-vcard',
          con: '购物',
          index: 3,
          path: '/shopping'
        },
        {
          bool: '',
          fa: 'fa fa-gamepad',
          con: '账户',
          index: 4,
          path: '/zhanghu'
        },
        {
          bool: '',
          fa: 'fa fa-joomla',
          con: '我的',
          index: 5,
          path: '/user'
        }
      ]
    }
  },
  methods: {
    fn (k, item) {
      for (let i in this.opt) {
        this.opt[i].bool = ''
      }
      this.opt[k].bool = this.opt[k].bool === 'active' ? '' : 'active'
      bs.$emit('content', item.index)
      this.$router.push(item.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
