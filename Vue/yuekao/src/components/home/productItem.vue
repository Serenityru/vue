<template>
    <dl class="item">
        <dt><img src="../../images/1.png" alt=""></dt>
        <dd>
            <p>{{item.title}}<br><span>王府井/东单</span></p>
            <div>
            <span>{{item.nowPrice}}元</span>
            门市价：{{item.oldPrice}}元
            <span>已售{{item.ed}}</span>
            </div>
        </dd>
    </dl>
</template>

<script>
export default {
    name: 'item',
    props: ['item']
};
</script>

<style scoped>

.like dl {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .02rem;
  background:#fff;
}
.like dl dt {
  flex:1;
  padding:.1rem;
}
.like dl dt img {
  display: block;
  width:100%;
  height:auto;
}
.like dl dd {
  flex:3;
}
.like dl dd p span {
  font-size: .24rem;
  color:#888;
}
.like dl dd div {
  margin-top: .2rem;
  font-size:.28rem;
}
.like dl dd div span {
  font-size:.28rem;
}
</style>
