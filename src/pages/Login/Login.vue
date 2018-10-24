<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="navbar" fixed>
      <van-icon name="arrow-left" slot="left"  color="#fff" size="18px" @click="$router.back()"/>
    </van-nav-bar>
    <div class="header">
      <h3>校园云商城</h3>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"

      />
      <br>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <br><br>
    <van-button size="large" type="warning" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</van-button>
    <br><br>
    <van-button size="large" @click="toRegister">没有账号</van-button>
  </div>
</template>

<script>
  import {  Field, CellGroup, Button ,NavBar, Icon , Toast} from 'vant';
  import Cookies from 'js-cookie'
  import {reqLogin} from '../../api'
  export default {
    data(){
      return {
        username:'', //用户名
        password:'', // 密码
      }
    },
    components: {
      [Field.name]:Field,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [Toast.name]: Toast,
    },
    created() {
      if (Cookies.get('userid')) {
        this.$router.replace('profile')
      }
    },
    methods: {
      toRegister(){
        this.$router.replace('/register')
      },
      async login () {//登录
      //  收集数据
        const {username, password} = this
        if (!username.trim()) {
          return Toast('用户名不能为空')
        }
        if (!password.trim()) {
          return Toast('密码不能为空')
        }
      //  发送 ajax 请求
        const result = await reqLogin({username, password})
      //  处理结果
        if (result.code === 0){ //登录成功
          this.$store.dispatch('recordUser',result.data)
          this.$router.replace('/profile')

        } else{ //登录失败
          Toast(result.msg)
        }
      //   this.$store.dispatch('re')

      }
    }
  }
</script>

<style scoped lang="less">
  .login-container {
    padding: 46px 0;
    overflow: hidden;
    .navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .header{
      height: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h3{
        font-size:32px;
        color: #ff852a
      }
    }
  }
</style>
