<template>
    <div class="container">
        <div class="image-wrapper">
            <img :src="goodDetail.image" class="product-image" :alt="goodDetail.title" />
        </div>
        <div class="goods-info">
            <h1 class="goods-title">{{ goodDetail.title }}</h1>
            <p class="goods-subtitle">{{ goodDetail.etitle }}</p>
            <div class="goods-price">
                <span>${{ goodDetail.price }}</span>
            </div>
            <div class="goods-detail">
                <h3>商品简介</h3>
                <p class="product-describe">{{goodDetail.describe}}</p>
            </div>
        </div>
        <add-button></add-button>
    </div>
</template>

<script>
  import AddButton from '../../components/AddButton'
  export default {
    components: {
      AddButton
    },
    data () {
      return {
        goodDetail: {}
      }
    },
    onShow () {
      let id = parseInt(this.$root.$mp.query.id)
      this.getGoodDetail(id)
    },
    methods: {
      async getGoodDetail (id) {
        this.$fly.request({
          method: 'get',
          url: `/api/goods/${id}`,
          body: {}
        }).then(res => {
          this.goodDetail = res
        })
      }
    }
  }
</script>

<style scoped>
    h1,
    ul,
    li,
    p {
        margin: 0;
        padding: 0;
    }
    .container {
        display: block;
        padding: 0;
    }
    .image-wrapper {
        width: 100%;
    }
    .product-image {
        width: 200px;
        height: 200px;
        display: block;
        margin: auto;
    }
    .goods-info {
        margin: 8px;
        position: relative;
    }

    .goods-title {
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        color: #363636;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .goods-subtitle {
        font-size: 15px;
        width: 100%;
        color: #404040;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .goods-price {
        margin-top: 15px;
        line-height: 1;
        margin-left: 10px;
    }

    .goods-price span {
        font-size: 18px;
        color: #ff2d51;
    }
    .goods-detail h3 {
        font-size: 18px;
        margin-top: 15px;
        color: #404040;
    }
    .product-describe {
        font-size: 16px;
        width: 80%;
        line-height: 1.2;
        color: #666666;
        margin: 10px;
    }

</style>