<template>
  <div class="spec-preview">
    <img :src="defaultImg.imgUrl" />
    <div class="event" @mousemove="magnifying"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['imgList'],
    data(){
      return{
        defaultIndex:0
      }
    },
    computed:{
      defaultImg(){
        return this.imgList[this.defaultIndex] || {}
      }
    },
    mounted(){
      this.$bus.$on('changeIndex',this.changeIndex)
    },
    methods:{
      changeIndex(index){
        this.defaultIndex=index
      },
      magnifying(event){
        const mouseX=event.offsetX
        const mouseY=event.offsetY

        const mask = this.$refs.mask
        const maskX=mouseX-mask.offsetWidth/2
        const maskY=mouseY-mask.offsetHeight/2
        
        if(maskX>mask.offsetWidth){
          maskX=mask.offsetWidth
        }else if(maskX<0){
          maskX=0
        }
        if(maskY>mask.offsetHeight){
          maskY=mask.offsetHeight
        }else if(maskY<0){
          maskY=0
        }
        
        const big=this.$refs.big
        mask.style.left=maskX+'px'
        mask.style.top=maskY+'px'

        big.style.left=-maskX*2 + 'px'
        big.style.top=-maskY*2 + 'px'
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>