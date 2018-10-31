/*vuex 的 action 模块*/

import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_PRODUCT_LIST,
  RECEIVE_SK_PRODUCT,
  RECEIVE_CATEGORY_LIST,
  RECEIVE_SHOP_CART,
  ADD_SHOP_CART,
  DELETE_SHOP
} from './mutation-type'
import {
  reqUserInfo,
  reqcategorysList,
  reqSkProduct,
  reqProductsList,
  reqGetShopCart,
  reqAddShopCart,
  reqDeleteShops
} from '../api'

export default {
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
// 异步获取用户信息实现自动登录
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }

  },
//  重置用户信息（退出登录）
  resetUserInfo({commit}) {
    commit(RESET_USER_INFO)
  },
// 异步获取秒杀商品信息
  async getSkProduct({commit}) {
    const result = await reqSkProduct()
    if (result.code === 0) {
      commit(RECEIVE_SK_PRODUCT, {skProduct: result.data})
    }
  },
//  异步获取商品列表信息
  async getProductsList({commit}) {
    const result = await reqProductsList()
    if (result.code === 0) {
      commit(RECEIVE_PRODUCT_LIST, {productList: result.data})
    }
  },
  //异步获取分类列表信息
  async getCategorysList({commit}) {
    const result = await reqcategorysList()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY_LIST, {categorys: result.data})
    }
  },
//  异步获取 购物车信息
  async getShopCart({commit}){
    const result = await reqGetShopCart()
    if (result.code === 0) {
      commit(RECEIVE_SHOP_CART,{shopCarts: result.carts})
    }
  },
  //异步加入购物车
  async addShopCarts({commit},product){
    //异步更新购物车中的数据
    const result = await reqAddShopCart(product)
    if (result.code ===0) {
      commit(ADD_SHOP_CART,{product}) //更新 vuex中 的状态
    }

  },
  // 删除购物车中的商品
  async deleteShops({commit},shopId){
    //异步删除
    const result = await reqDeleteShops(shopId)
    //删除 vuex
    commit(DELETE_SHOP,{shopId})
  }
}
