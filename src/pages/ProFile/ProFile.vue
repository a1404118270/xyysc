
<template>
  <div class="proFile-container">
    <van-nav-bar title="我的" class="Navbar" fixed/>

    <router-link tag="div" to="login" class="information">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3797481993,1929347741&fm=27&gp=0.jpg" alt="">
      <h3 v-if="userInfo._id">{{userInfo.username}}</h3>
      <h3 v-else>登录/注册</h3>
    </router-link>
    <div>
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />
          待付款
        </van-col>
        <van-col span="6">
          <van-icon name="chat" />
          评价
        </van-col>
        <van-col span="6">
          <van-icon name="pending-deliver" />
          待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />
          待发货
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="exchange" title="我的积分" is-link />
        <van-cell icon="gold-coin" title="我的优惠券" is-link />
        <van-cell icon="location" title="我的收货地址" is-link />
      </van-cell-group>
    </div>
    <br/>
    <van-button size="large" type="danger" @click="logout">退出登录</van-button>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Cookies from 'js-cookie'
  import { Row, Col, Icon, Cell, CellGroup, NavBar, Button ,Dialog} from 'vant';
  export default {

    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Dialog.name]: Dialog,
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      logout() {
        Dialog.confirm({
          title: '确认要退出吗？',
        }).then(() => {
          Cookies.remove('userid')
          this.$store.dispatch('resetUserInfo')
        }).catch(() => {

        })

      }
    }
  }
</script>

<style scoped lang="less">
  .proFile-container{
    padding: 46px 5px;
    .Navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .van-submit-bar {
      bottom: 46px;
    }
    .user {
      &-poster {
        width: 7.5rem;
        height: 4rem;
        display: block;
      }
      &-group {
        margin-bottom: .3rem;
      }
      &-links {
        padding: 15px 0;
        font-size: 12px;
        text-align: center;
        background-color: #fff;
        .van-icon {
          display: block;
          font-size: 24px;

        }
      }
    }
    .information{
      padding: 10px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      img{
        margin-left: 10px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      h3{
        margin-left: 20px;
        color: #888;
      }
    }
  }
</style>
