/*vuex 的 action 模块*/

import {RECEIVE_USER_INFO, RESET_USER_INFO} from './mutation-type'
import {reqUserInfo} from '../api'

export default {
  // 同步记录用户信息
  recordUser ({commit},userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
// 异步获取用户信息实现异步登录
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0){
      commit(RECEIVE_USER_INFO,{userInfo: result.data})
    }

  },
//  重置用户信息
  resetUserInfo ({commit}){
    commit(RESET_USER_INFO)
  }
}
