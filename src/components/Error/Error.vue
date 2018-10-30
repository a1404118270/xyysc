<template>
  <div class="shop-error">
    <van-icon name="shopping-cart" class="error-icon"/>
    <p>登录账号才能看见购物车哦</p>
    <van-button plain type="danger" @click="toLogin">马上登录</van-button>
  </div>
</template>

<script>
  import {Icon, Button} from 'vant'

  export default {
    components: {
      [Icon.name]: Icon,
      [Button.name]: Button
    },
    methods: {
      toLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="less">
  .shop-error {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    .error-icon {
      padding: 30px;
      color: #888;
      font-size: 70px;
      border: 1px solid #888;
      border-radius: 50%;
    }
  }

</style>
