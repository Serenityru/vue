<template>
    <swiper :options='swiperOption'>
        <swiper-slide v-for='(v,k) in slides' :key='k'>
            <img :src='v'>
        </swiper-slide>
        <div class="swiper-pagination" slot='pagination'></div>    
    </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {slide, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
      return {
          swiperOption: {
            autoplay: 1500,
            setWrapperSize: true,
            pagination:'.swiper-pagination',
            paginationClickable: true,
            mouseWheelControl: true,
            observeParents: true,
            loop:true
          },
          slides: [
              'src/assets/1.jpg',
              'src/assets/2.jpg',
              'src/assets/3.jpg',
              'src/assets/4.jpg'
          ]
      }
  },
  components: {
      swiperSlide,
      slide
  }

}
</script>
