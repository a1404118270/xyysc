/*vuex 的 action 模块*/

import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_PRODUCT_LIST,
  RECEIVE_SK_PRODUCT,
  RECEIVE_CATEGORY_LIST
} from './mutation-type'
import {reqUserInfo,reqcategorysList,reqSkProduct,reqProductsList} from '../api'

export default {
  // 同步记录用户信息
  recordUser ({commit},userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
// 异步获取用户信息实现自动登录
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0){
      commit(RECEIVE_USER_INFO,{userInfo: result.data})
    }

  },
//  重置用户信息（退出登录）
  resetUserInfo ({commit}){
    commit(RESET_USER_INFO)
  },
// 异步获取秒杀商品信息
  async getSkProduct ({commit}){
    const result = await reqSkProduct()
    if (result.code === 0) {
      commit(RECEIVE_SK_PRODUCT,{skProduct:result.data})
    }
  },
//  异步获取商品列表信息
  async getProductsList ({commit}){
    const result  = await reqProductsList()
    if (result.code === 0) {
      commit(RECEIVE_PRODUCT_LIST,{productList: result.data})
    }
  },
  async getCategorysList ({commit}){
    const result  = await reqcategorysList()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY_LIST,{categorys: result.data})
    }
  },
}
