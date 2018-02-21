<template>
    <ol class="tnav">
        <li v-for='item in obj'>
            <i :class=item.fa></i>
            <span>{{item.con}}</span>
        </li>
    </ol>
</template>
<script>
    export default {
      name: 'nav',
      data: function () {
        return {
          'obj': [
            {
              fa: 'fa fa-dribbble',
              con: '衣服'
            },
            {
              fa: 'fa fa-camera',
              con: '推荐'
            },
            {
              fa: 'fa fa-vcard',
              con: '购物'
            },
            {
              fa: 'fa fa-gamepad',
              con: '账户'
            }
          ]
        }
      }
    }
</script>
<style scoped>
    .tnav {
        height: 0.8rem;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        box-sizing: border-box;
        display: -webkit-flex;
        justify-content: space-between;
    }
    li {
        width: 25%;
        text-align: center;
    }
    li i {
        display: block;
        margin: 0 auto;
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
        color: #edb2a6;
    }
    li span {
        font-size: 0.12rem;
        color: #c9c9c9;
    }
</style>