<template>
    <ul class="goods-list">
        <li class="goods-item" v-for="(item, idx) in productList" :key="item.id">
            <div class="goods-img" @click="goToDetail(idx)">
                <img :src="item.image" :alt="item.title">
            </div>
            <div class="goods-info">
                <p class="goods-title">{{ item.title }}</p>
                <div class="goods-price">
                    <span>${{ item.price }}</span>
                </div>
                <span class="add" @click="addToCart(item)">+</span>
            </div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'GoodsItem',
    data () {
      return {
        productList: [],
        idx: 0
      }
    },
    mounted () {
      this.getProductList()
    },
    methods: {
      async getProductList () {
        this.$fly.request({
          method: 'get',
          url: '/api/goods',
          body: {}
        }).then(res => {
          this.productList = res.data.map((item) => {
            return item
          })
        })
      },
      goToDetail (idx) {
        let good = this.productList[idx]
        let indexId = good.id
        let url = '/pages/details/main?id=' + indexId
        wx.navigateTo({
          url
        })
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