<template>
    <div class="container">
        <div class="page__bd">
            <div class="weui-cells" v-for="item in grids" :key="index">
                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                    <image class="weui-grid__icon" :src="item.src" />
                    <div class="weui-grid__label">{{item.name}}</div>
                </navigator>
                <!--<navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">快递设置</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">退出</div>
                </navigator>-->
            </div>
        </div>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        grids: [
          {src: '../../static/img/baby.png', name: 'Button'},
          {src: '../../static/img/baby.png', name: 'Cell'},
          {src: '../../static/img/baby.png', name: 'Toast'},
          {src: '../../static/img/baby.png', name: 'Dialog'},
          {src: '../../static/img/baby.png', name: 'Progress'},
          {src: '../../static/img/baby.png', name: 'Msg'},
          {src: '../../static/img/baby.png', name: 'Article'},
          {src: '../../static/img/baby.png', name: 'ActionSheet'},
          {src: '../../static/img/baby.png', name: 'Icons'}
        ]
      }
    }
  }
</script>
<style>
/*    page {
        margin-top: 50px;
    }*/
    .container{
        width: 100%;
    }
    .page__bd{
        width: 100%;
    }


</style>