<template>
    <div class="page">
        <div class="page__bd">
            <div class="weui-grids">
                <block v-for="item in grids" :key="index">
                    <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
                        <image class="weui-grid__icon" :src="item.src" />
                        <div class="weui-grid__label">{{item.name}}</div>
                    </navigator>
                </block>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        grids: [
          { src: '../../../static/img/baby.png', name: '母婴专区', url: './baby/main' },
          { src: '../../../static/img/health.png', name: '保健品' },
          { src: '../../../static/img/beauty.png', name: '美容护肤' },
          { src: '../../../static/img/daily.png', name: '家居日用' },
          { src: '../../../static/img/food.png', name: '美食' },
          { src: '../../../static/img/shoe.png', name: '时尚服饰' }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style>
    page {
        margin-top: 50px;
    }
</style>




<!--


<template>
    <div class="page">
        <ul>
            <li v-for="item in categories" :key="item">
                <button class="weui-btn categories">{{item}}</button>
            </li>
        </ul>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: ['母婴产品', '营养保健', '美容护肤', '时尚服饰']
      }
    }
  }
</script>

<style scoped>
.categories {
    height: 90px;
    line-height: 90px;
    vertical-align: middle;
}
</style>
-->
