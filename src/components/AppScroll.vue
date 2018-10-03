<template>
    <scroll-view class="cate-scroll" scroll-y>
        <div class="cate-container">
            <div class="cate-box" v-for="item in categories" :key="item">
                <div :id="item.id"
                     class="cate-navbar-item"
                     :class="activeCateId==item.id?'cate-selected':''"
                     @click="tabClick">
                    {{item.name}}
                </div>
            </div>
        </div>
    </scroll-view>
</template>

<script>
  export default {
    name: 'AppScroll',
    data () {
      return {
        categories: [
          {id: 0, name: '母婴用品'},
          {id: 1, name: '保健品'},
          {id: 2, name: '美容护肤'},
          {id: 3, name: '家居日化'},
          {id: 4, name: '美食'},
          {id: 5, name: '时尚服饰'}
        ],
        activeCateId: 0
      }
    },
    methods: {
      tabClick (e) {
        this.activeCateId = e.currentTarget.id
      }
    }
  }
</script>

<style scoped>

</style>
