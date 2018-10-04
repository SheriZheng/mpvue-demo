<template>
    <div>
        <ul class="products weui-cells weui-cells_after-title" v-if="cartList.length">
            <li class="item weui-cell" v-for="(item, index) in cartList" :key="index">
                <div class="title weui-cell__bd">{{item.name}}</div>
                <div class="delete-button" @click="deleteItem">x</div>
            </li>
        </ul>
        <div class="empty-cart" v-else>购物车空空如也，快去添加商品吧~</div>
        <div class="menu-bar">
            <div class="toggler" @click="selectAll">
                <icon></icon>
                <span>全选</span>
            </div>
            <span>Total: {{ total | currency }}</span>
            <div class="toBuy" @click="checkout(products)">去结算</div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'cartList',
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      total () {
        return this.products.reduce((total, item) => {
          return total + item.price * item.quantity
        }, 0) // Array.prototype.reduce(callback[, initialValue])  计算总价
      }
    },
    methods: {
      checkout (products) { // 结账
        this.$store.dispatch('checkout', products) // 分发actions checkout
      }
    }
  }
</script>

<style scoped>
    .products .item {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }

    .delete-button {
        position: absolute;
        width: 32px;
        height: 22px;
        background-color: indianred;
        font-size: 17px;
        color: #fff;
        border-right: 12px;
        right: 15px;
        text-align: center;
        overflow: hidden;
        line-height: 19px;
    }
    .empty-cart {
        text-align: center;
        display: block;
    }
    .menu-bar {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 49px;
        font-size: 15px;
        background-color: #fff;
        border-top: 1px solid #ddd;
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