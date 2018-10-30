<template>
  <div class="shopcart-container">
    <van-nav-bar title="购物车" class="Navbar" fixed>
      <van-icon name="delete" slot="right" class="rigth-icon" @click="deleteProduct"/>
    </van-nav-bar>
    <Error v-if="!userInfo._id"/>
    <div v-if="userInfo._id">
      <div>
        <van-cell-group class="card-goods">
          <van-cell
            class="card-goods__item"
            v-for="(item, index) in shopCarts"
            :key="item.id"
            :name="item.id"
          >
            <van-checkbox :name="item" v-model="item.select" ref="checkboxes"
                          class="checkd"/>
            <van-card
              :title="item.title"
              :num="item.count"
              :price="item.price"
              :thumb="item.img_Url"
            >
              <div slot="footer">
                <van-stepper v-model="item.count"/>
              </div>
            </van-card>
          </van-cell>
        </van-cell-group>
      </div>
      <van-submit-bar
        :price="totalPrice"
        :button-text="totalCount"
        @submit="onSubmit"
      >
       <span slot="tip">
    你的收货地址不支持同城送, <span>修改地址</span>
      </span>

      </van-submit-bar>
    </div>

  </div>
</template>

<script>
  import {
    Checkbox,
    CellGroup,
    Cell,
    Card,
    SubmitBar,
    Toast,
    Stepper,
    NavBar,
    Icon,
    Button,
    Dialog
  } from 'vant';
  import Error from '../../components/Error/Error.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [SubmitBar.name]: SubmitBar,
      [CellGroup.name]: CellGroup,
      [Stepper.name]: Stepper,
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [Button.name]: Button,
      [Cell.name]: Cell,
      [Dialog.name]: Dialog,
      Error
    },
    data() {
      return {};
    },
    computed: {
      ...mapState(['userInfo', 'shopCarts']),
      //计算价格
      totalPrice() { //返回购物车中选中商品价格
        return this.shopCarts.reduce((price, shop) => price + (shop.select ? shop.price * shop.count : 0), 0) * 100
      },
      totalCount() {
        return '结算(' + this.shopCarts.reduce((count, shop) => count + (shop.select ? 1 : 0), 0) + ')'
      }

    },
    methods: {
      onSubmit() {
        Toast('暂无后续逻辑')
      },
      deleteProduct(){ //删除购物车中的商品
        Dialog.confirm({
          title: '确认要删除选中商品吗？'
        }).then(() => {

        }).catch(() => {
          // on cancel
        });
      }
    }
  };
</script>

<style scoped lang="less">
  .shopcart-container {
    overflow: hidden;
    padding: 46px 10px;
    .Navbar {
      background-color: #FF852A;
      font-size: 16px;
      color: #fff;
      .rigth-icon{
        color: #fff;
        font-size: 14px;
      }
    }
    .van-card {
      margin-left: 15px;
      &__right {
        color: red;
      }
    }
    .card-goods {
      padding: 10px 0;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;

      &__item {
        flex: none;
        position: relative;
        background-color: #fafafa;
        .checkd {
          display: inline-block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 99;

        }
        .van-checkbox__label {
          width: 80%;
          padding: 0 10px 0 15px;
          box-sizing: border-box;
        }
        .van-checkbox__icon {
          top: 50%;
          left: 10px;
          z-index: 1;
          position: absolute;
          margin-top: -10px;
        }
        .van-card__price {
          color: #f44;
        }
      }
    }
    .van-submit-bar {
      bottom: 46px;
    }
  }
</style>
