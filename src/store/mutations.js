/*vuex 的mutations 模块
* */
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_PRODUCT_LIST,
  RECEIVE_SK_PRODUCT,
  RECEIVE_CATEGORY_LIST
} from './mutation-type'

export default {
  // 获取用户信息
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
//获取 秒杀商品
  [RECEIVE_SK_PRODUCT] (state,{skProduct}){
    state.skProduct = skProduct
  },
//  获取商品列表
  [RECEIVE_PRODUCT_LIST] (state,{productList}){
    state.productList = productList
  },
//  获取 分类信息
  [RECEIVE_CATEGORY_LIST] (state,{categorys}){
    state.categorys = categorys
  }

}
