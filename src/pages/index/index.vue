<template>
  <div class="page">
    <div class="page__bd">
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
        <!--轮播图-->
        <AppSwiper :imgUrls="imgUrls"></AppSwiper>
        <!--产品列表-->
        <GoodsItem :productList="productList"></GoodsItem>
    </div>
  </div>
</template>

<script>
  // import config from '@/config'
  import AppSwiper from '../../components/AppSwiper.vue'
  import GoodsItem from '../../components/GoodsItem.vue'

  export default {
    components: {
      GoodsItem,
      AppSwiper
    },
    data () {
      return {
        imgUrls: [
          'https://d2kferpni7vbkj.cloudfront.net/media/catalog/category/Cemoy-Banner_1_1.jpg',
          'https://3.bp.blogspot.com/-xCetM1FUuDY/Vm-R9C-uHUI/AAAAAAAANSY/L59A0Nv2AD8/s1600/LEGO.png',
          'http://www.sugros.com/wp-content/uploads/2017/01/1077-800x326.jpg'
        ],
        inputShowed: false,
        inputVal: ''
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

  .icon{
    margin-left: 10px;
    font-size: 20px;
  }



</style>
