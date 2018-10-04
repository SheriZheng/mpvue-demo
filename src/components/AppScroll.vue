<template class="container">
    <div class="container-list">
        <scroll-view class="cate-scroll" scroll-y>
            <div class="cate-container">
                <div class="cate-box" v-for="item in categories" :key="item">
                    <div :id="item.id"
                         class="cate-navbar-item"
                         :class="activeCateId==item.id?'cate-selected':''"
                         @click="tabClick">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </scroll-view>
        <scroll-view class="goods-scroll" scroll-y>
            <div class="goods-container">
                <div class="goods-box"
                     v-for="item in subList"
                     :key="item"
                     :data-id="item.id">
                    <div class="image-box">
                        <img :src="item.img"/>
                    </div>
                    <span class="goods-title">{{item.name}}</span>
                    <span class="goods-price">${{item.price}}</span>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'AppScroll',
    props: ['categories'],
    data () {
      return {
        activeCateId: 0,
        subList: []
      }
    },
    created: function () {
      this.setList()
    },

    computed: {
      ...mapGetters(['productList'])
    },
    methods: {
      ...mapActions(['addToCart']),
      tabClick (e) {
        this.activeCateId = e.currentTarget.id
        this.setList()
      },
      setList () {
        var self = this
        this.subList = this.productList.filter(function (item) {
          return self.activeCateId !== 0
            ? item.type === self.activeCateId
            : item
        })
      }
    }
  }
</script>

<style scoped>
    .container{
        min-height: 100%;
        background:#f2f2f2;
    }
    .container-list{
        display: flex;
        height: 100%;
        /* background: #000; */
    }
    .cate-scroll {
        height:100%;
        flex: 0 0 80px;
    }
    .cate-container{
        width: 80px;
        height: 100%;
        background: #f2f2f2;
        margin-top: 2px;
    }
    .cate-box{
        display: inline-block;
        width:80px;
        line-height: 42px;
        text-align:center;
        font-size:12px;
        background:#f2f2f2;
    }
    .cate-navbar-item{
        border-bottom:1px solid #fff
    }
    .cate-selected {
        border-left:1px solid #e64340;
        background: #fff;
    }
    .goods-scroll{
        height:100%;
        flex: 1
    }

    .goods-container{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        box-sizing: content-box;
        padding:2px 5px 5px 0;
    }
    .goods-box{
        width:49%;
        overflow:hidden;
        margin-bottom:12px;
        background:#fff;
    }
    .goods-box .image-box{
        width:100%;
        overflow: hidden;
        padding:4px 4px 4px 4px;
        box-sizing:border-box;

    }
    .image-box image{
        width:100%;
        height:135px;
    }
    .goods-box .goods-title{
        width:128px;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
        font-size:12px;
        padding-top:9px;
        color:#000;
        margin:0 6px;
    }
    .goods-box .goods-price{
        width:140px;
        overflow:hidden;
        padding:9px 0;
        color:#ff3366;
        font-size:12px;
        margin-left:6px;
    }
</style>
