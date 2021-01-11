<template>
  <div>
    <h2>深入v-model</h2>
    
    <input type="text" v-model="msg">
    <br>
    <span>{{msg}}</span>
    <br>

    <CustomInput :value="msg" @input="msg=$event"></CustomInput>

    <!-- 对于上面的简写 -->
    <h4>简写</h4>
    <CustomInput v-model="msg"></CustomInput>
    <el-input v-model="msg"></el-input>

  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    components: {
      CustomInput
    },
    data(){
      return{
        msg:'第九百步'
      }
    }
  }
</script>
