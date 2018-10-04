<template>
    <app-scroll :categories="categoryList"></app-scroll>
</template>

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
    app-scroll {
        width: 100%;
        height: 500px;
    }
</style>

