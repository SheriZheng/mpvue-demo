const state = {
  product_List: [
    {
      id: 11,
      name: 'Swisse 胶原蛋白液 500ml',
      type: 2,
      price: 12,
      amount: 98
    },
    {
      id: 12,
      name: 'Fatblaster 澳洲神奇排毒减肥椰子水 750ML',
      type: 2,
      price: 15,
      amount: 398
    },
    {
      id: 13,
      name: 'Ego QV 清爽止汗滚珠 80g',
      type: 3,
      price: 18,
      amount: 58
    }
  ],
  added: []
}

const getters = {
  productList: state => state.product_List,
  cartList: state => {
    return state.added.map(({id, amount}) => {
      let product = state.product_List.find(n => n.id === id)
      return {
        ...product,
        amount
      }
    })
  }
}

const actions = {
  addToCart ({commit}, product) {
    commit('add', {
      id: product.id
    })
  }
}

const mutations = {
  add (state, {id}) {
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        amount: 1
      })
    } else {
      record.amount++
    }
    console.info(record, state.added)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
