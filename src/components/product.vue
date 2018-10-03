<template>
    <div>
        <ul class="products weui-cells weui-cells_after-title" v-if="productList.length">
            <li class="item weui-cell" v-for="(item, index) in productList" :key="index">
                <div class="title weui-cell__bd">{{item.name}}</div>
                <div class="add-button" @click="addToCart">+</div>
            </li>
        </ul>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'product',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['productList'])
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>
    .products .item {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }

    .add-button {
        position: absolute;
        width: 32px;
        height: 22px;
        background-color: #52a341;
        font-size: 17px;
        color: #fff;
        border-right: 12px;
        right: 15px;
        text-align: center;
        overflow: hidden;
        line-height: 19px;
    }

</style>