import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => { // { commit }是ES6的解构赋值
  if (product.inventory > 0) { // 如果产品剩余量没有空余，那么就将该产品添加到购物车
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}