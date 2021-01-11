<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowXM(100)">找小明借钱100</button><br>
    <button @click="borrowXH(150)">找小红借钱150</button><br>
    <button @click="borrowAll(200)">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son"/>

    <br>
    <Daughter ref="dau"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowXM(money){
      this.money+=money
      this.$refs.son.money-=money
    },
    borrowXH(money){
      this.money+=money
      this.$refs.dau.money-=money
    },
    borrowAll(money){
      this.money+=money*2
      // this.$refs.son.money-=money
      // this.$refs.dau.money-=money
      this.$children.forEach(item=>item.money-=money)
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
