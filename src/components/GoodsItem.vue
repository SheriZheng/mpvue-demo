<template>
    <ul class="goods-list">
        <li class="goods-item" v-for="(item, index) in productList" :key="index">
            <div class="goods-img">
                <img :src="item.img" :alt="item.name">
            </div>
            <div class="goods-info">
                <p class="goods-title">{{ item.name }}</p>
                <div class="goods-price">
                    <span>${{ item.price }}</span>
                </div>
                <span class="add" @click="addToCart">+</span>
            </div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: ['productList'],
    data () {
      return {
      }
    }
  }
</script>


<style scoped>
    body {
        font-size: 14px;
        color: #363636;
        background-color: #333;
    }

    h1,
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
        background-color: #eee;
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
        font-size: 17px;
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