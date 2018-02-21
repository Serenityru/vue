<template>
  <div id="order">
      <ul v-for="(v,k) in tabs" :key='k'>
          <h2>{{v.content}}</h2>
         <li></li>
      </ul>
  </div>
</template>

<script>
import bus from '../../bus.js'
export default {
    data () {
        return {
            flag: true,
            tabs: [
                {
                    "content": "首页管理",
                    "children": [
                        "角色列表",
                        "首页列表"
                    ]
                },
                {
                    "content": "权限管理",
                    "children": [
                        "权限列表",
                        "首页列表"
                    ]
                }
            ]
        }
    },
    mounted () {
        bus.$on('myfn',function (result) {
            console.log(result);
        })
    },
    methods: {
        fn () {
            this.flag = !this.flag;
        }

    }
}
</script>

<style>
    #order{
        position: absolute;
        left:0;
        top:0;
    }
    .two{
        margin-left:40px;
    }
    .two>li{
        line-height: 35px;
        color:#fff;
        background: pink;
    }
</style>
