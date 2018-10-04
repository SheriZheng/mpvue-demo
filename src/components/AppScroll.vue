<template class="container">
    <div class="container-list">
        <scroll-view class="cate-scroll" scroll-y>
            <div class="cate-container">
                <div class="cate-box" v-for="(item, index) in categories" :key="index">
                    <div :id="item.id"
                         class="cate-navbar-item"
                         :class="activeCateId==item.id?'cate-selected':''"
                         @click="tabClick(index)">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </scroll-view>
        <scroll-view class="goods-scroll" scroll-y>
            <ul class="goods-list">
                <li class="goods-item" v-for="(item, index) in subList" :key="index">
                    <div class="goods-img">
                        <img :src="item.img" :alt="item.name">
                    </div>
                    <div class="goods-info">
                        <p class="goods-title">{{ item.name }}</p>
                        <div class="goods-price">
                            <span>${{ item.price }}</span>
                        </div>
                        <span class="add" @click="addToCart(item)">+</span>
                    </div>
                </li>
            </ul>
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
      this.$store.dispatch('getAllProducts')
    },

    computed: {
      ...mapGetters(['productList'])
    },
    methods: {
      ...mapActions(['addToCart']),
      tabClick (index) {
        this.activeCateId = index
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
        flex: 1;
    }

    ul,
    li,
    p {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    .goods-list {
        padding-top: 8px;
        overflow-y: scroll;
    }

    .goods-item {
        display: flex;
        margin-bottom: 8px;
        padding: 10px 10px;
        min-height: 62px;
        background: #fff;
    }

    .goods-img {
        position: relative;
        margin-right: 4%;
        display: block;
        width: 16%;
    }

    .goods-img img {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
    }

    .goods-info {
        position: relative;
        width: 80%;
    }

    .goods-title {
        font-size: 14px;
        width: 100%;
        color: #363636;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .goods-price {
        margin-top: 6px;
        line-height: 1;
    }

    .goods-price span {
        font-size: 15px;
        color: #ff2d51;
    }
    .add {
        position: absolute;
        right: 10px;
        bottom: 2px;
        width: 32px;
        height: 22px;
        background-color: #fa8c35;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #fff;
        border-radius: 12px;
        overflow: hidden;
    }

</style>
