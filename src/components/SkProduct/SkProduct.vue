<template>
  <div class="sk-container" ref="skList">
       <ul class="sk-list" >
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
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      //DOM 渲染完成后调用
     this.$nextTick(()=>{
       this._initScroll()
     })

    },
    methods:{
      _initScroll(){
        // 自动计算 ul 的宽度
        let ul = this.$refs.skList.children[0]
         ul.style.width = ul.children.length * 80 +'px'
        //设置横向滚动
        new BScroll(this.$refs.skList,{
          scrollX:true
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .sk-container{
    width: 100%;
    overflow:hidden;
    .sk-list{
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
