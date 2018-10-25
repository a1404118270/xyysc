<template>
  <div class="category-container">
    <van-nav-bar title="商品分类" class="Navbar" fixed>
    </van-nav-bar>
    <div class="tab-bar">
      <van-tabs>
        <van-tab :title="category.title"  v-for="(category,index) in categorys" :key="index">
         <div class="category-list">
           <div class="category-item" v-for="(item, index) in category.producks" :key="index">
             <img :src="item.pro_img" alt="">
             <p>{{item.pro_title}}</p>
           </div>
         </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { Tab, Tabs ,Icon,NavBar} from 'vant';
  import {mapState} from 'vuex'

  export default {
    mounted(){
    // 发送请求获取 分类数据
      this.$store.dispatch('getCategorysList')
    },
    computed: {
      ...mapState(['categorys'])
    },
    components: {
      NavBar,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Icon.name]: Icon,
      [NavBar.name]: NavBar,
    }
  }
</script>

<style scoped lang="less">
  .category-container{
    overflow: hidden;
    .Navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .tab-bar{
      padding-top: 46px;
    }
    .category-list{
      width: 100%;
      padding: 5px 0;
      display: flex;
      flex-wrap: wrap;

      .category-item{
        margin-top: 10px;
        flex: none;
        width: 24%;
        text-align: center;
        border-bottom: 1px solid #eee;
        img{
          width: 90%;
        }
        p{
          margin: 0;
        }
      }
    }
  }
</style>
