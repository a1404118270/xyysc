<template>
  <div class="shopcart-container">
    <van-nav-bar title="购物车" class="Navbar" fixed/>

    <div>
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="item in goods"
          :key="item.id"
          :name="item.id"
        >
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          >
            <div slot="footer" >
              <van-stepper v-model="item.num"  />
            </div>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    >
       <span slot="tip">
    你的收货地址不支持同城送, <span>修改地址</span>
      </span>

    </van-submit-bar>
  </div>
</template>

<script>
  import {Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Stepper, NavBar} from 'vant';

  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [SubmitBar.name]: SubmitBar,
      [CheckboxGroup.name]: CheckboxGroup,
      [Stepper.name]: Stepper,
      [NavBar.name]: NavBar,
    },
    data() {
      return {
        checkedGoods: ['1', '2', '3'],
        goods: [{
          id: '1',
          title: '进口香蕉',
          desc: '约250g，2根',
          price: 200,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
        },{
          id: '3',
          title: '美国伽力果',
          desc: '约680g/3个',
          price: 2680,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
        }]
      };
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      }
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        Toast('点击结算');
      },
      test(){

      }
    }
  };
</script>

<style scoped lang="less">
  .shopcart-container {
    overflow: hidden;
    padding: 46px 10px ;
    .Navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .card-goods {
      padding: 10px 0;
      background-color: #fff;
      &__item {
        position: relative;
        background-color: #fafafa;
        .van-checkbox__label {
          width: 100%;
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
