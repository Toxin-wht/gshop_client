<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Today></Today>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Today from './Today'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    ListContainer,
    Today,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  mounted(){
    this.$store.dispatch('getfloors')
    this.$store.dispatch('getrecommends')
  }
}
</script>

<style lang="less" scoped>

</style>
