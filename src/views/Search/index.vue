<template>
  <div>
    <p>Search</p>
<!--    <h2>{{this.$route.params.keyword}}</h2>-->
<!--    <h2>{{this.$route.query.keyword2}}</h2>-->
    <h2>{{keyword}}</h2>
    <h2>{{keyword2}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword','keyword2']
}
</script>

<style lang="less" scoped>

</style>
