<template>
    <div class="menu-bar">
        <div class="toggler" @click="selectAll">
            <icon></icon>
            <span>全选</span>
        </div>
        <div class="toBuy">去结算</div>
    </div>
</template>

<script>
  export default {
    name: 'cartMenu'
  }
</script>

<style scoped>
    .menu-bar {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 49px;
        font-size: 15px;
        background-color: #fff;
        border-top: 1px solid #ddd;
    }
    .toggler {
        float: left;
        width: 70px;
        margin-left: 4%;
        height: 49px;
        cursor: pointer;
    }
    .toggler span {
        position: absolute;
        margin-left: 20px;
        color: #5F646E;
        top: 15px;
    }
    .toBuy {
        float: right;
        width: 120px;
        height: 49px;
        color: #fff;
        text-align: center;
        font-weight: 300;
        line-height: 49px;
        cursor: pointer;
        background-color: #52a341;
    }


</style>