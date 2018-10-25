<template>
  <div class="productDetail-container">
    <van-nav-bar title="商品搜索" class="navbar" fixed>
      <van-icon name="arrow-left" slot="left" color="#fff" size="18px" @click="$router.back()"/>
    </van-nav-bar>
    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="item in product.info_Img" :key="item">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ product.title }}</div>
          <div class="goods-price">{{ product.price }}</div>
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


      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" >
          客服
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="like-o" >
          关注
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn >
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
    NavBar
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
      [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },
    data() {
      return {
        product: {} //商品详情
      };
    },
    computed: {
      ...mapState(['productList'])
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
        console.log(this.$route.id);
      }
    }
    ,
    methods: {

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
    .goods {
      padding-bottom: 50px;
      &-swipe {
        img {
          width: 100%;
          height: 350px;
          display: block;
        }
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
