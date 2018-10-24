<template>
  <div class="login-container">
    <van-nav-bar title="注册" class="navbar" fixed>
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
      <br/>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <br/>
      <van-field
        v-model="password2"
        type="password"
        label="确认密码"
        placeholder="请输入确认密码"
        required
      />

    </van-cell-group>
    <br/><br/>
    <van-button size="large" type="warning" @click="register">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</van-button>
    <br/><br/>
    <van-button size="large" @click="toLogin">已有账号</van-button>
  </div>
</template>

<script>
  import {  Field, CellGroup, Button, NavBar,Icon, Toast } from 'vant';
  import {reqRegistere} from "../../api";

  export default {
    data(){
      return {
        username:'', //用户名
        password:'', // 密码
        password2:'', // 确认密码
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
    methods: {
      toLogin(){
        this.$router.replace('/login')
      },
      register(){
      //  收集表单数据
        const {username, password, password2} = this
      //  验证数据合法性
        if (!/^[a-z0-9_-]{3,16}$/.test(username)){
          Toast('用户名不合法')
          return
        }
        if (!/^[a-z0-9_-]{3,18}$/.test(password)) {
          Toast('密码不合法')
          return
        }
        if (password !== password2) {

          Toast('两次密码输入不一致')
          return
        }
        console.log('ok');
      //  发送注册请求
      }
    }
  }
</script>

<style scoped lang="less">
  .login-container {
    padding: 46px 5px;
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
