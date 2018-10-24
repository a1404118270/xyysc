<template>
  <div class="footer">
    <router-link :class="{active:$route.path ==='/home'}" tag="div" to="/home">
      <van-icon name="home" />
      <span>首页</span>
    </router-link>
    <router-link :class="{active:$route.path ==='/category'}" tag="div" to="/category">
      <van-icon name="wap-nav" />
      <span>分类</span>
    </router-link >
    <router-link :class="{active:$route.path ==='/shopcart'}" tag="div" to="/shopcart">
      <van-icon name="cart" />
      <span>购物车</span>
    </router-link>
    <router-link :class="{active:$route.path ==='/profile'}" tag="div" to="/profile">
      <van-icon name="contact" />
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  import { Icon } from 'vant';
  export default {
    components: {
      [Icon.name]: Icon
    }
  }
</script>

<style lang="less">
  .footer {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 42px;
    color: #888;
    font-weight: 800;
    padding-top: 5px;
    border-top: .5px solid #979797;
    background: #fff;
    > div{
      float: left;
      width: 25%;
      text-align: center;
      font-size: 18px;
      span {
        display: block;
        font-size: 10px;
      }
      &.active{
        color: #e63f00;
      }
    }

  }

</style>
