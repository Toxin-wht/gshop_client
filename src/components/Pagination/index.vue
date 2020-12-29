<template>
  <div class="pagination">
    <button :disabled="myCurrentPage===1" :class="{disable:myCurrentPage===1}" @click="setPages(myCurrentPage-1)">上一页</button>
    <button v-if="startEnd.start != 1" @click="setPages(1)">1</button>
    <button class="disable" v-if="startEnd.start>2">...</button>
    <button 
    v-for="item in startEndArr" 
    :key="item"
    :class="{active:item===myCurrentPage}"
    @click="setPages(item)"
    >{{item}}</button>
    <button class="disable" v-if="startEnd.end<totalPages-1">...</button>
    <button v-if="startEnd.end<totalPages" @click="setPages(totalPages)">{{totalPages}}</button>
    <button :disabled="myCurrentPage===totalPages" :class="{disable:myCurrentPage===totalPages}" @click="setPages(myCurrentPage+1)">下一页 </button>
    <button class="disable">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data(){
      return{
        myCurrentPage:this.currentPage
      }
  },
  props:{
      currentPage:{
          type:Number,
          default:1
      },
      pageSize:{
          type:Number,
          default:10
      },
      total:{
          type:Number,
          default:0
      },
      showPage:{
          type:Number,
          default:5,
          validator:function(value){
              return value % 2 !==0
          }
      }
  },
  computed:{
      totalPages(){
          return Math.ceil(this.total/this.pageSize)  
      },
      startEnd(){
          let start,end
          //解构赋值取出当前页数，连续显示页码以及总页数
          let {myCurrentPage,showPage,totalPages} = this
          //开始页码等于 当前页面减去连续显示页数除2并向下取整
          start=myCurrentPage-Math.floor(showPage/2)
          if(start<1)start = 1
          end=start+showPage-1
          if(end>totalPages){
              end=totalPages
              start=end-showPage+1
              if(start<1)start = 1
          }
          return{start,end}
      },
      startEndArr(){
          let Arr =[]
          const {start,end}=this.startEnd
          for(let i=start;i<=end;i++){
            Arr.push(i)
          }
          return Arr
      }
  },
  methods:{
      setPages(page){
          if(page===this.myCurrentPage)return
          this.myCurrentPage=page
          this.$emit('change',page)
      }
  }
}
</script>

<style lang="less" scoped>
    .pagination{
        button{
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;
        }
        .active{
            background-color: aqua;
            color: white;
            cursor: not-allowed;
        }
        .disable{
            cursor: not-allowed;
            color: #ccc;
        }

    }

</style>
