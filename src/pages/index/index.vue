<template>
  <div class="page">
    <div class="page__bd">
        <!--轮播图-->
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
        <!--搜索栏-->
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="search" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">Search</div>
          </label>
        </div>
        <div @click="scanQR" :hidden="inputShowed" class="scan"><span class="iconfont icon-saoma icon"></span></div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">Cancel</div>
      </div>
        <!--产品列表-->
      <good-item></good-item>
    </div>
  </div>
</template>

<script>
  // import config from '@/config'
  // import product from '../../components/product'
  import goods from '../../components/goods'

  export default {
    components: {
      'good-item': goods
    },
    data () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        inputShowed: false,
        inputVal: '',
        productList: []
      }
    },
    methods: {
      showInput () {
        this.inputShowed = true
      },
      hideInput () {
        this.inputVal = ''
        this.inputShowed = false
      },
      clearInput () {
        this.inputVal = ''
      },
      inputTyping (e) {
        console.log(e)
        this.inputVal = e.mp.detail.value
      },
      scanQR () {
        wx.scanCode({
        })
      }
      /* addToCart (good) {
        cart.cartList.push(good)
      } */
    }
  }
</script>

<style scoped>

  .weui-search-bar {
    border: none;
    background-color: white;
  }
  .weui-search-bar__cancel-btn{
    color: #586c94;
  }
  .weui-btn{
    margin: auto 10px;
  }
  .icon{
    margin-left: 10px;
    font-size: 20px;
  }
  .slide-image {
      width: 100%;
      height: 100%;
  }



</style>
