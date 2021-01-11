<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生dom事件在html标签和组件标签上的区别 -->
    <button @click="test1">点我</button>
    <Event1 @click.native="test2"></Event1>
    <!-- vue自定义的事件在html标签和组件标签上的区别 -->
    <br>
    <hr>
    <button @xxx="test3">点我2</button>
    <Event2 @click="test4"></Event2>
    <Event2 @xxx="test3"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
     test1(event){
      console.log(event.target.innerHTML);
     },
     test2(event){
      console.log(event.target.innerHTML);
     },
     test3(event){
      console.log(event.target.innerHTML);
     },
     test4(event){
       console.log(event.target.innerHTML);
     }
    }
  }
</script>
