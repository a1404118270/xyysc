<template>
  <div class="category-container">
    <van-nav-bar title="商品分类" class="Navbar" fixed>
    </van-nav-bar>
    <div class="tab-bar">
      <van-tabs>
        <van-tab title="女装">
         <div class="category-list">
           <div class="category-item">
             <img src="./p1.jpg" alt="">
             <p>连衣裙</p>
           </div>
           <div class="category-item">
             <img src="./p1.jpg" alt="">
             <p>连衣裙</p>
           </div>
           <div class="category-item">
             <img src="./p1.jpg" alt="">
             <p>连衣裙</p>
           </div>
           <div class="category-item">
             <img src="./p1.jpg" alt="">
             <p>连衣裙</p>
           </div>
           <div class="category-item">
             <img src="./p1.jpg" alt="">
             <p>连衣裙</p>
           </div>
         </div>
        </van-tab>
        <van-tab title="美食">
          <div class="category-list">
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>休闲食品</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="居家日用">
          <div class="category-list">
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>洗碗机</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="男装">
          <div class="category-list">
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>西装</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="鞋品">
          <div class="category-list">
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>运动鞋</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="数码">
          <div class="category-list">
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>智能手机</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
            <div class="category-item">
              <img src="./p1.jpg" alt="">
              <p>连衣裙</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { Tab, Tabs ,Icon,NavBar} from 'vant';
  export default {
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
        width: 25%;
        text-align: center;
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
