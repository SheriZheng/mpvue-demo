<template>
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
            :circular="circular">
        <div v-for="item in imgUrls" :key="index">
            <swiper-item>
                <image :src="item" class="slide-image" />
            </swiper-item>
        </div>
    </swiper>
</template>

<script>
  export default {
    name: 'AppSwiper',
    data () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true
      }
    },
    props: ['imgUrls']
  }
</script>

<style scoped>
    .slide-image {
        width: 100%;
        height: 100%;
    }
</style>
