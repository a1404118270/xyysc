<template>
  <div class="search-container">
    <van-nav-bar title="商品搜索" class="navbar" fixed>
    <van-icon name="arrow-left" slot="left"  color="#fff" size="18px" @click="$router.back()"/>
  </van-nav-bar>
    <van-search
      placeholder="请输入搜索关键词"
      show-action
    >
      <div slot="action">搜索</div>
    </van-search>
  </div>
</template>

<script>
  import { Search,NavBar, Icon } from 'vant';
  export default {
    components: {
      [Search.name]: Search,
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
    }
  }
</script>

<style  scoped lang="less">
  .search-container{
    padding: 46px 0;
    .navbar{
      background-color:#FF852A;
      font-size: 16px;
      color: #fff;
    }
    .element.style{
      background: white;
    }
  }

</style>
