<template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <Footer v-show="!$route.meta.isFooterShow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList} from './api'
export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    // reqCategoryList().then(result=>{
    //   console.log(result);
    // })
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  }
}
</script>

<style lang="less" scoped>

</style>
