<template>
    <div>
        <ul class="goods-list" v-if="cartList.length">
            <li class="goods-item" v-for="(item, index) in cartList" :key="index">
                <div class="goods-img">
                    <img :src="item.image" :alt="item.title">
                </div>
                <div class="goods-info">
                    <p class="goods-title">{{ item.title }}</p>
                    <div class="goods-price">
                        <span>${{ item.price }}</span>
                        <span class="item_qty">x{{item.num}}</span>
                    </div>
                    <div class="btn btn-danger delete-button" @click="delProduct(item)">x</div>
                </div>
            </li>
        </ul>
        <div class="empty-cart" v-else>购物车空空如也，快去添加商品吧~</div>
        <div class="menu-bar">
            <!--<div class="toggler" @click="selectAll">-->
            <!--    <span>全选</span>-->
            <!--</div>-->
            <div class="totalNum">总数：{{totalNum}}</div>
            <div class="totalPrice">总计：${{totalPrice}}</div>
            <div class="toBuy">去结算</div>
        </div>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'cartList',
    computed: {
      ...mapGetters(['cartList', 'totalPrice', 'totalNum'])
    },
    methods: {
      ...mapActions(['delProduct'])
    }
  }
</script>

<style scoped>

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
        color: #9b9b9b;
    }


    .delete-button {
        position: absolute;
        right: 10px;
        width: 32px;
        height: 22px;
        background-color: #ff2d51;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #fff;
        border-radius: 12px;
        overflow: hidden;
    }
    .item_qty {
        position: absolute;
        right: 60px;
        width: 30px;
        text-align: center;
        overflow: hidden;
        font-size: 14px;
        color: #9b9b9b;
    }
    .empty-cart {
        text-align: center;
        display: block;
    }
    .menu-bar {
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 49px;
        font-size: 15px;
        background-color: #fff;
        border-top: 1px solid #ddd;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .totalNum {
        margin-left: 10px;
    }
    .totalPrice {
        font-size: 17px;
        color: #ff7500;
    }
    .toggler {
        float: left;
        width: 70px;
        margin-left: 4%;
        height: 49px;
        cursor: pointer;
    }
    .toggler span {
        position: absolute;
        margin-left: 20px;
        color: #5F646E;
        top: 15px;
    }
    .toBuy {
        float: right;
        width: 120px;
        height: 49px;
        color: #fff;
        text-align: center;
        font-weight: 300;
        line-height: 49px;
        cursor: pointer;
        background-color: #52a341;
    }

</style>