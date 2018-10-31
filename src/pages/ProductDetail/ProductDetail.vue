<template>
  <div class="productDetail-container">
    <van-nav-bar title="商品详情" class="navbar" fixed>
      <van-icon name="arrow-left" slot="left" color="#fff" size="18px" @click="$router.back()"/>
    </van-nav-bar>
    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="item in product.info_Img" :key="item">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>

      <van-cell-group class="cell-box">
        <van-cell>
          <div class="goods-title">{{ product.title }}</div>
          <div class="goods-price">￥{{ product.price }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ product.express }}</van-col>
          <van-col span="14">剩余：{{ product.stock }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" is-link >
          <template slot="title">
            <span class="van-cell-text">校园店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" is-link />
        <van-cell title="服务" is-link />
      </van-cell-group>
      <van-actionsheet v-model="show" class="add-container" >
        <van-icon name="close"  class="close-icon" @click="show=false"/>
        <div class="add-cart">
          <img :src="product.img_Url" alt="">
          <div>
            <h3>￥{{product.price}}</h3>
            <span>库存：{{ product.stock }}件</span>
          </div>
        </div>
        <div class="add-count">
          <span>购买数量:</span>
          <van-stepper v-model="count"  :max="product.stock"/>
        </div>
        <van-button type="danger" size="large" round @click="addShopCart">
          确定
        </van-button>
      </van-actionsheet>

      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" >
          客服
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="like-o" >
          关注
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn @click.stop="toggleShow">
          加入购物车
        </van-goods-action-big-btn>
        <van-goods-action-big-btn primary >
          立即购买
        </van-goods-action-big-btn>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
  import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn,
    NavBar,
    Actionsheet,
    Button,
    Stepper,
  } from 'vant';
  import {mapState} from 'vuex'

  export default {
    components: {
      [Tag.name]: Tag,
      [NavBar.name]: NavBar,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionBigBtn.name]: GoodsActionBigBtn,
      [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
      [Actionsheet.name]: Actionsheet,
      [Button.name]: Button,
      [Stepper.name]: Stepper,
    },
    data() {
      return {
        product: {}, //商品详情
        show:false ,//是否显示加入购物车
        count: 1, //购买数量
      };
    },
    computed: {
      ...mapState(['productList','userInfo'])
    },
    beforeCreate(){

    },
    created() {
      //  解决刷新数据丢失问题
      this.$store.dispatch('getProductsList')

    },

    watch: {
      productList(){
        //获取 当前产品的信息
        this.product  = this.productList[this.$route.params.id]
      }
    }
    ,
    methods: {
      toggleShow(){ //切换加入购物车
        if (this.userInfo._id){
          this.show = true
        }else {
          Toast('请先登录')
        }
      },
      addShopCart(){ //加入购物车
        const {id, title, price, img_Url} = this.product
        this.$store.dispatch('addShopCarts',{id, title, price, img_Url, count:this.count, select: 1})
        Toast('加入购物车成功')
        this.show = false
      }
    }
  };
</script>

<style scoped lang="less">
  .productDetail-container {
    overflow: hidden;
    padding-top: 46px;
    .navbar {
      background-color: #FF852A;
      font-size: 16px;
      color: #fff;
    }
    .add-container{
      &.van-actionsheet{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        color: #333;
        overflow-y: visible;
        max-height: 90%;
        -webkit-overflow-scrolling: touch;
        background-color: #f8f8f8;
      }
      padding: 20px;
      .close-icon{
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .add-cart{
        display: flex;

        img{
          height:100px;
          margin-right: 20px;
          border-radius: 5px;
          border: 1px solid #eee;
          transform: translateY(-30%);
          z-index: 99;
        }
        h3{
          color: #e92322;
        }
        span{
          color:#888;
          font-size: 12px;
        }
      }
      .add-count{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 14px;
        }
        margin-bottom: 20px;
      }
    }

    .goods {
      padding-bottom: 50px;
      &-swipe {
        img {
          width: 100%;
          height: 350px;
          display: block;
        }

      }
      .cell-box{
        padding-top: 20px;
      }
      &-title {
        font-size: 16px;
      }
      &-price {
        color: #f44;
      }
      &-express {
        color: #999;
        font-size: 12px;
        padding: 5px 15px;
      }
      &-cell-group {
        margin: 15px 0;
        .van-cell__value {
          color: #999;
        }
      }
      &-tag {
        margin-left: 5px;
      }
    }
  }
</style>
