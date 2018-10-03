<template>
    <div>
        <ul class="products weui-cells weui-cells_after-title" v-if="cartList.length">
            <li class="item weui-cell" v-for="(item, index) in cartList" :key="index">
                <div class="title weui-cell__bd">{{item.name}}</div>
                <div class="delete-button" @click="deleteItem">x</div>
            </li>
        </ul>
        <div class="empty-cart" v-else>购物车空空如也，快去添加商品吧~</div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'cartList',
    computed: {
      ...mapGetters(['cartList'])
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
</style>