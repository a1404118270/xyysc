/*vuex 的mutations 模块
* */
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_PRODUCT_LIST,
  RECEIVE_SK_PRODUCT,
  RECEIVE_CATEGORY_LIST,
  ADD_SHOP_CART,
  RECEIVE_SHOP_CART,
  DELETE_SHOP,
} from './mutation-type'

export default {
  // 获取用户信息
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
//获取 秒杀商品
  [RECEIVE_SK_PRODUCT](state, {skProduct}) {
    state.skProduct = skProduct
  },
//  获取商品列表
  [RECEIVE_PRODUCT_LIST](state, {productList}) {
    state.productList = productList
  },
//  获取 分类信息
  [RECEIVE_CATEGORY_LIST](state, {categorys}) {
    state.categorys = categorys
  },
  //加入购物车
  [ADD_SHOP_CART](state, {product}) {
    let flag = false
    state.shopCarts.forEach(item => { //购物车中有这个商品累计数量
      if (item.id === product.id) {
        item.count += product.count
        flag = true
      }
    })
    if (!flag) { //如果没有直接加入购物车数组中
      state.shopCarts.unshift(product)
    }

  },
  [RECEIVE_SHOP_CART](state, {shopCarts}) { //获取购物车信息
    state.shopCarts = shopCarts
  },
  [DELETE_SHOP](state, {shopId}) { //删除购物车中的数据
    console.log(shopId);
    shopId.forEach(item => { //根据下标过滤数组中的数据
      state.shopCarts = state.shopCarts.filter(shop => shop.id !== item)
      console.log(state.shopCarts);
    })
  }
}
