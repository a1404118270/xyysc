<template>
  <div class="sk-container" ref="skList">
       <ul class="sk-list" >
         <li class="sk-item" v-for="(product,index) in skProduct" :key="index">
           <img :src="product.img_Url" alt="">
           <span class="newPrice">￥{{product.price}}</span>
           <span class="oldPrice">￥{{product.old_price}}</span>
         </li>
       </ul>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      skProduct: Array
    },
    mounted(){

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
    },
    watch:{
      skProduct(){
        //DOM 渲染完成后调用
        this.$nextTick(()=>{
          this._initScroll()
        })
        // console.log(skProduct);

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
          color: red;
        }
        .oldPrice{
          display: block;
          text-decoration: line-through;
          font-size: 14px;
          color: #888;
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
