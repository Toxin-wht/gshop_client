<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- <el-button type="success" icon="el-icon-lollipop" size="mini"></el-button>
    <el-button type="info" icon="el-icon-s-promotion" size="mini"></el-button> -->
    <HintButton type="success" icon="el-icon-lollipop" size="mini" title="成功" @click="test"></HintButton>
    <HintButton type="info" icon="el-icon-s-promotion" size="mini" title="信息" @click="test"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
  import HintButton from './HintButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      HintButton
    },
    methods: {
      test(){
        alert(111)
      }
    },
  }
</script>
