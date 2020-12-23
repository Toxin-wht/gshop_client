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
import {getCategoryList} from './api'
export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted(){
    getCategoryList().then(result=>{
      console.log(result);
    })
  }
}
</script>

<style lang="less" scoped>

</style>
