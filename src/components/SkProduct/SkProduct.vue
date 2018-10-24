<template>
  <div class="sk-container">
    <ul class="sk-list" ref="skList">
      <li class="sk-item">
        <img src="./images/prds/prd.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd1.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd2.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd3.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd4.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>
      <li class="sk-item">
        <img src="./images/prds/prd1.jpg" alt="">
        <span class="newPrice">￥99.00</span>
        <span class="oldPrice">￥299.00</span>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .sk-container{
    overflow: hidden;
    .sk-list{
      width: 560px;
      .sk-item{
        width: 80px;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
          width: 90%;
          display: block;
        }
        .newPrice{
          display: block;
          font-size: 14px;
          font-weight: bold;
          color: red;
        }
        .oldPrice{
          display: block;
          text-decoration: line-through;
          font-size: 14px;
        }
      }
      &::after{
        content: '';
        display: block;
        clear: both;
      }
    }


  }
</style>
