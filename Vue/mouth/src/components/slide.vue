<template>
    <swiper :options='swiperOption'>
        <swiper-slide v-for='(v,k) in slides' :key='k'>
            <img :src='v.img' >
        </swiper-slide>
    </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data () {
        return {
            swiperOption: {
                autoplay: 1500,
                loop:true
            },
            slides: [
                {
                    'img': 'src/assets/1.jpg'
                },
                {
                    'img': 'src/assets/1.jpg'
                },
                {
                    'img': 'src/assets/1.jpg'
                }
            ]
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>

</style>
