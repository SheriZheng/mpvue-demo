export const cartProducts = state => { // 相当于 cartProducts = function (state) {}
  return state.cart.added.map(({ id, quantity }) => { // state.cart.added表示cart模块的added, 代表已购产品
    const product = state.products.all.find(p => p.id === id) // state.products.all表示products模块的all, 代表所有产品
    // 从所有产品里面, 找到某个匹配产品

    return {
      title: product.title,
      price: product.price,
      quantity
    }
  }) // Array.prototype.map(callback)方法创建一个新数组, 根据added购物车产品, 重新生成一个数组，包含更多详细信息
}
