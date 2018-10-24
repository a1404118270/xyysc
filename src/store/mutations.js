/*vuex 的mutations 模块
* */
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-type'

export default {
  // 异步获取用户信息
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  }

}
