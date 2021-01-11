<template>
  <div>
      <a href="javascript:;" :title="title">
          <el-button v-bind="$attrs" v-on="$listeners"></el-button>
      </a>
  </div>
</template>

<script>
export default {
  name: '',
  props:['title'],
//   mounted(){
//       console.log(this.$attrs,this.$listeners);
//   }
}
</script>

<style lang="less" scoped>

</style>
