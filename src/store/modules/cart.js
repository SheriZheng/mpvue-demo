const state = {
  // 商品列表
  product_List: [
    {
      id: 1001,
      title: 'Beats EP头戴式耳机',
      price: 558,
      type: 4,
      stock: 128,
      sales: 1872,
      image: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
    }, {
      id: 1002,
      title: '雀巢（Nestle）高钙成人奶粉',
      price: 60,
      type: 3,
      stock: 5,
      sales: 2374,
      image: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
    }, {
      id: 1003,
      title: '煎炒烹炸一锅多用',
      price: 216,
      type: 5,
      stock: 2,
      sales: 351,
      ishot: true,
      image: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
    }, {
      id: 1004,
      title: 'ANNE KLEIN 潮流经典美式轻奢',
      price: 585,
      type: 2,
      stock: 465,
      sales: 8191,
      image: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
    }, {
      id: 1005,
      title: '乐高EV3机器人积木玩具',
      price: 3099,
      type: 1,
      stock: 154,
      sales: 165,
      image: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
    }, {
      id: 1006,
      title: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
      price: 10967,
      type: 2,
      stock: 12,
      sales: 6,
      image: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
    }, {
      id: 1007,
      title: 'Kindle Paperwhite3 黑色经典版电纸书',
      price: 805,
      type: 4,
      stock: 3,
      sales: 395,
      image: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
    }, {
      id: 1008,
      title: 'DELSEY 男士双肩背包',
      price: 269,
      type: 2,
      stock: 18,
      sales: 69,
      ishot: true,
      image: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
    }, {
      id: 1009,
      title: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
      price: 89,
      type: 1,
      stock: 36,
      sales: 1895,
      image: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
    }, {
      id: 1010,
      title: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
      price: 19.9,
      type: 3,
      stock: 353,
      sales: 3041,
      ishot: true,
      image: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
    }, {
      id: 1011,
      title: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
      price: 3580,
      type: 2,
      stock: 5,
      sales: 18,
      image: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
    }
  ],
  // 添加到购物车的商品列表
  added: []
}

const getters = {
  // 商品列表
  productList: state => state.product_List,
  // 购物车列表
  cartList: state => {
    return state.added.map(({id, num}) => {
      let product = state.product_List.find(n => n.id === id)
      return {
        ...product,
        num
      }
    })
  },
  totalPrice: (state, getters) => {
    let total = 0
    getters.cartList.forEach(n => {
      total += n.price * n.num
    })
    return total
  },
  totalNum: (state, getters) => {
    let total = 0
    getters.cartList.forEach(n => {
      total += n.num
    })
    return total
  }
}

const actions = {
  addToCart ({commit}, product) {
    commit('add', {
      id: product.id
    })
  },
  // delete items
  delProduct ({commit}, product) {
    commit('del', product)
  }
}

const mutations = {
  add (state, {id}) {
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  },
  del (state, product) {
    state.added.forEach((n, i) => {
      if (n.id === product.id) {
        state.added.splice(i, 1)
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
