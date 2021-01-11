<template>
  <div>
    小明的爸爸现在有{{money}}元
    
    <h2>不使用sync修改符</h2>
      <Child :money="money" @update:money="money=$event"></Child>
    <h2>使用sync修改符</h2>
      <Child :money.sync="money"></Child>
    <h2>使用v-model修改符</h2>
      <Child2 v-model="money"></Child2>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    components: {
      Child,
      Child2
    },
    data(){
      return{
        money:1000
      }
    }
  }
</script>
