<template>
  <div class="page">
    <div class="page__bd">
      <cart-list></cart-list>
      <cart-menu></cart-menu>
    </div>
  </div>
</template>

<script>
  import cartList from '../../components/cartList'
  import cartMenu from '../../components/cartMenu'

  export default {
    components: {
      cartList,
      cartMenu
    }
  }
</script>

<style scoped>



</style>
