<template>
  <div class="pagination">
    <!-- 当前页为第一页时 点击上一页无效  -->
    <button :disabled="myCurrentPage===1" :class="{disable:myCurrentPage===1}" @click="setPages(myCurrentPage-1)">上一页</button>
    <!-- 当起始页不等于1时显示1 -->
    <button v-if="startEnd.start != 1" @click="setPages(1)">1</button>
    <!-- 当起始页大于第二页 也就是起始页为第三页时 显示... -->
    <button class="disable" v-if="startEnd.start>2">...</button>
    <!-- 遍历数组显示具体的几个页码数 当前页具有高亮效果 -->
    <button 
    v-for="item in startEndArr" 
    :key="item"
    :class="{active:item===myCurrentPage}"
    @click="setPages(item)"
    >{{item}}</button>
    <!-- 当结束页小于总页数-1时显示右侧... -->
    <button class="disable" v-if="startEnd.end<totalPages-1">...</button>
    <!-- 当结束页小于总页数时 显示总页数 -->
    <button v-if="startEnd.end<totalPages" @click="setPages(totalPages)">{{totalPages}}</button>
    <!-- 当前页等于总页数时 点击下一页无效 -->
    <button :disabled="myCurrentPage===totalPages" :class="{disable:myCurrentPage===totalPages}" @click="setPages(myCurrentPage+1)">下一页 </button>
    <!-- 显示数据总数 -->
    <button class="disable">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  
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
          //最大连续显示页码数必须是奇数
          validator:function(value){
              return value % 2 !==0
          }
      }
  },
  data(){
      return{
        myCurrentPage:this.currentPage
      }
  },
  computed:{
      //计算总页数
      totalPages(){
          //数据总数/单页显示数据量 向上取整
          return Math.ceil(this.total/this.pageSize)  
      },
      //计算连续页的起始页和结束页
      startEnd(){
          let start,end
          //解构赋值取出当前页数，连续显示页码以及总页数
          let {myCurrentPage,showPage,totalPages} = this
          //开始页码等于 当前页面减去连续显示页数除2并向下取整
          start=myCurrentPage-Math.floor(showPage/2)
          //开始页最小值为1
          if(start<1)start = 1
          //结束页等于开始页+连续显示页数-1
          end=start+showPage-1
          //结束页最大值为总页数
          if(end>totalPages){
              end=totalPages
              //当结束页超过总页数做出调整后 起始页也要变化
              //起始页等于结束页-连续显示页+1
              start=end-showPage+1
              if(start<1)start = 1
          }
          return{start,end}
      },
      //根据startEnd对象中的起始和结束页码数 生成数组
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
      //改变当前页码
      setPages(page){
          //重复点击无效
          if(page===this.myCurrentPage)return
          this.myCurrentPage=page
          this.$emit('change',page)
      }
  },
  watch:{
    //   currentPage:{
    //       handler(value){
    //         this.myCurrentPage=value
    //       }        
    //   }
      currentPage (value) {
      this.myCurrentPage = value
      }
  },
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
