<template>
  <div class="homeContainer">
    <van-nav-bar title="校园云商城" class="Navbar" fixed>
      <van-icon name="search" slot="left"  color="#fff" size="18px" @click="toSearch"/>
    </van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img src="./images/lunbo/lunbo1.jpg" class="img-size">
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/lunbo/lunbo2.jpg" class="img-size">
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/lunbo/lunbo3.jpg" class="img-size">
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/lunbo/lunbo4.jpg" class="img-size">
      </van-swipe-item>
    </van-swipe>
    <div class="img-go">
      <img src="./images/go.gif" alt="">
    </div>
    <div class="menu-container">
      <ul class="menu-list">
        <li class="menu-item">
          <img src="./images/icons/icon1.png" alt="">
          <span>预售精选</span>
        </li>
        <li class="menu-item">
          <img src="./images/icons/icon2.png" alt="">
          <span>拼聚团</span>
        </li>
        <li class="menu-item">
          <img src="./images/icons/icon3.png" alt="">
          <span>热卖排行</span>
        </li>
        <li class="menu-item">
          <img src="./images/icons/icon4.png" alt="">
          <span>限时抢购</span>
        </li>
        <li class="menu-item">
          <img src="./images/icons/icon5.png" alt="">
          <span>9.9包邮</span>
        </li>
      </ul>
    </div>
    <div>
      <van-notice-bar
        text="个税专项附加怎么扣除?专家逐条解析扣除标准.  个税抵扣细则来了:养儿供房大病赡养父母再减免,最低为零。  "
        left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </div>
    <van-panel title="限时秒杀" :status="time.toString()"/>

    <SkProduct/>
    <div class="recommend">
      <span>①为您推荐</span>
    </div>
    <div class="recommend-product">
        <router-link tag="div" to="/productdetail/x" class="recommend-block" v-for="(item, index) in arr" :key="index">
          <img src="./images/prds/p1.jpg" alt="">
          <h3>{{item.title}}</h3>
          <p>
            <span>￥{{item.price}}</span>
            <span>看相似</span>
          </p>
        </router-link>
    </div>
  </div>
</template>

<script>

  import { Swipe, SwipeItem ,NoticeBar, Panel, NavBar, Icon} from 'vant';
  import SkProduct from '../../components/SkProduct/SkProduct'
  export default {
    data(){
      return {
        time: 1.5,// 倒计时的时间
        arr: [
          {
            id: 1,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
          {
            id: 2,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
          {
            id: 3,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
          {
            id: 4,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
          {
            id: 5,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
          {
            id: 6,
            title: '荣耀10 GT游戏加速 AIS手持夜景 8GB+128GB 幻夜黑 全网通 移动联通电信4G 双卡双待 游戏手机',
            price: 3299
          },
        ]
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [NoticeBar.name]: NoticeBar,
      [Panel.name]: Panel,
      [Icon.name]: Icon,
      SkProduct
    },
    methods: {
      toSearch(){
        this.$router.push('/search')
      }
    },
    mounted(){


      let totalTime = this.time* 60*60 //初始倒计时时间

      let timeId = setInterval(()=> {
        totalTime --
        if (totalTime<= 0){
          clearInterval(timeId)
          return
        }
        let h = parseInt(totalTime / 3600) //小时
        let m = parseInt((totalTime - h* 3600) / 60 )//分
        let s = parseInt(totalTime % 60) //秒
        h = h > 9 ? h : '0'+h
        m = m > 9 ? m : '0'+m
        s = s > 9 ? s : '0'+s
        this.time = h+':'+ m +':'+ s
      },1000)
    }
  }
</script>

<style scoped lang="less">
  .homeContainer{
    padding: 46px 0;
    overflow: hidden;
    .Navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .img-size{
      width: 100%;
      height: 200px;
    }
    .img-go{
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
    .menu-container{
      .menu-list{
        margin-top: 20px;
        width: 100%;
        .menu-item {
          float: left;
          width: 20%;
          text-align: center;
          img{
            width: 60%;
            display: block;
            margin: 0 auto;
          }
          span{
            font-size: 14px;

          }


        }
      }
    }
    .recommend{
      width: 100%;
      padding: 5px;
      text-align: center;
      background-color: #eee;
      span{
        color: #333;

      }
      & ::after{
        border-top: 1px solid #888;
      }
    }
    .recommend-product{
      margin-top: 10px;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .recommend-block{
        margin-top: 10px;
        box-shadow: 1px 1px 1px #eee;
        width: 48%;
        flex: none;
        h3{
          height: 40px;
          overflow: hidden;
          text-overflow: inherit;
          font-size: 16px;
        }
        img{
          width: 100%;
        }
        p{
          margin: 0;
          padding: 2px 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & :first-child{
            color: red;
            line-height: 32px;
          }
          & :last-child{
            padding: 5px;
            border: 1px solid #ccc;
            font-size: 12px;
            color: #888;
          }
        }
      }
    }
  }
</style>
