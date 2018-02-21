<template>
    <div class="home">
        <header class="header">
          <router-link class="city" to="/city">{{nowCity}}</router-link>
          <div><input type="text" placeholder="输入/商家/商圈"></div>
          <a href="javascript:;">我的</a>
        </header>
        <section class="section">
            <ul class="menu">
              <li><span></span>美食</li>
              <li><span></span>猫眼电影</li>
              <li><span></span>酒店</li>
              <li><span></span>休闲娱乐</li>
              <li><span></span>外卖</li>
              <li><span></span>KTV</li>
              <li><span></span>周边游</li>
              <li><span></span>丽人</li>
              <li><span></span>小吃快餐</li>
              <li><span></span>机票/火车票</li>
            </ul>
            <div ref="to" class="like">
              <h4>猜你喜欢</h4>
              <productItem v-for="(v, k) in list" :item="v" :key="k"/>
            </div>
        </section>
    </div>
</template>

<script>
import productItem from './home/productItem';
import productList from '../data/productList.json';
export default {
    name: 'home',
    data () {
        return {
            nowCity: localStorage.getItem('nowCity') || '北京',
            count: 3
        };
    },
    computed: {
        list () {
            return productList.slice(0, this.count);
        }
    },
    components: {
        productItem
    },
    mounted () {
        localStorage.setItem('nowCity', '北京');
        let mouseY = 0;
        let that = this;
        this.$refs.to.addEventListener('touchstart', function (e) {
            mouseY = e.changedTouches[0].pageY;
        }, false);
        this.$refs.to.addEventListener('touchend', function (e) {
            let raduce = mouseY - e.changedTouches[0].pageY;
            if (raduce >= 150) {
                that.count += 2;
                if (that.count >= productList.length) {
                    setTimeout(() => {
                        window.alert('已经全部加载了');
                    }, 200);
                }
            }
        }, false);
    }
};
</script>

<style scoped>
.home {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.home .header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #04c6b1;
  padding: .1rem 0;
}
.home .header .city {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .24rem;
}
.home .header a {
  flex:1;
  text-align: center;
  color:#fff;
}
.home .header div {
  flex:5;
  background: #01aa97;
  padding: .1rem;
}

.home .header div input {
  background:transparent;
  font-size: .26rem;
}
.home .section {
  flex:1;
  overflow-y: scroll;
  background:#efeeec;
}
.section .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background:#fff;
}
.section .menu li {
  flex-basis: 20%;
  text-align: center;
  font-size: .24rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.section .menu li span {
  display: block;
  width:.5rem;
  height: 0.5rem;
  background:#eee;
  margin: .06rem auto;

}
.like{
  margin-top: .2rem;
}
.like h4 {
  padding:.1rem .2rem;
  background:#fff;
}
</style>
