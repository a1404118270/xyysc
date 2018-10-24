/*路由模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import Category from '../pages/Category/Category.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import ProductDetail from '../pages/ProductDetail/ProductDetail.vue'
export default new VueRouter ({
  routes:[
    {
      path:'/login',
      component: Login

    },
    {
      path:'/register',
      component: Register

    },
    {
      path:'/home',
      component: Home,
      meta: {
        isShow: true
      }
    },
    {
      path:'/search',
      component: Search
    },
    {
      path:'/shopcart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path:'/profile',
      component: ProFile,
      meta: {
        isShow: true
      }
    },
    {
      path:'/category',
      component: Category,
      meta: {
        isShow: true
      }
    },
    {
      path:'/productdetail/:id',
      component: ProductDetail,
    },
    {
      path:'/',
      redirect: '/home'
    }
  ]
})
