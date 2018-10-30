<template>
 <div>
   <transition>
     <router-view/>
   </transition>
  <FooterBar v-if="$route.meta.isShow"/>
 </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';
  import Cookies from 'js-cookie'
  import FooterBar from './components/FooterBar/FooterBar'
  export default {
    created(){
      const userid = Cookies.get('userid')
      if (userid) { //自动登录
        this.$store.dispatch('getUserInfo')
      }
      //获取购物车信息
      this.$store.dispatch('getShopCart')
      //  发送 ajax 请求获取秒杀商品的数据
      this.$store.dispatch('getSkProduct')
      //  发送 ajax 请求获取商品列表信息
      this.$store.dispatch('getProductsList')
      // 发送请求获取 分类数据
      this.$store.dispatch('getCategorysList')

    },
    components: {
      FooterBar
    }
  }

</script>

<style scoped>
  .box{
    width: 100%;
    height: 200px;
    background-color: red;
  }
</style>
