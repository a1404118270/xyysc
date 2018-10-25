<template>
 <div>
   <keep-alive >
     <router-view v-if="this.$route.meta.keepAlive" />
   </keep-alive>

     <router-view v-if="!this.$route.meta.keepAlive"/>


  <FooterBar v-if="$route.meta.isShow"/>
 </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';
  import Cookies from 'js-cookie'
  import FooterBar from './components/FooterBar/FooterBar'
  export default {
    created(){
      const userid = Cookies.get('userid')
      if (userid) {
        this.$store.dispatch('getUserInfo')
      }

    },
    components: {
      FooterBar
    }
  }

</script>

<style scoped>
  .box{
    width: 100%;
    height: 200px;
    background-color: red;
  }
</style>
