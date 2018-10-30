// 请求函数模块
import ajax  from './ajax'
// 登录请求函数
export const reqLogin = ({username, password}) => ajax('api/login',{username, password},'POST')
// 注册请求函数
export const reqRegister = ({username, password}) => ajax('api/register',{username, password},'POST')
// 异步获取用户信息 实现自动登录
export const reqUserInfo = () => ajax('api/getuserinfo')

//异步获取秒杀商品信息
export const reqSkProduct = () => ajax('/skProducts')

// 异步获取商品信息列表

export const reqProductsList = () => ajax('/products')
// 异步获取商品分类
export const reqcategorysList = () => ajax('/categorys')
//异步加入购物车
export const reqAddShopCart = (product) => ajax('api/addshopcart',product,'POST')
//异步获取购物车信息
export const reqGetShopCart = () => ajax('api/getshopcart')
