// 请求函数模块
import ajax  from './ajax'
// 登录请求函数
export const reqLogin = ({username, password}) => ajax('api/login',{username, password},'POST')
// 注册请求函数
export const reqRegister = ({username, password}) => ajax('api/register',{username, password},'POST')
// 异步获取用户信息 实现自动登录
export const reqUserInfo = () => ajax('api/getuserinfo')
