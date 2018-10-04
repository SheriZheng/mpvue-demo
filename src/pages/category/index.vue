<template>
    <app-scroll :categories="categoryList"></app-scroll>
</template>
<!--grid 已废弃
    <div class="page">
        <div class="page__bd">
            <div class="weui-grids">
                <block v-for="item in categoryList" :key="index">
                    <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
                        <image class="weui-grid__icon" :src="item.src" />
                        <div class="weui-grid__label">{{item.name}}</div>
                    </navigator>
                </block>
            </div>
        </div>
    </div>-->
<script>
  import AppScroll from '../../components/AppScroll'

  export default {
    components: {
      AppScroll
    },
    data () {
      return {
        categoryList: [
          {id: 0, name: '全部'},
          {id: 1, name: '母婴用品'},
          {id: 2, name: '保健品'},
          {id: 3, name: '美容护肤'},
          {id: 4, name: '家居日化'},
          {id: 5, name: '美食'},
          {id: 6, name: '时尚服饰'}
        ]
      }
    }
  }
</script>

<style>
</style>

