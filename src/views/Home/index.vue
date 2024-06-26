<template>
  <div class="home-container" 
    v-loading="isLoading"
   ref="container"
   @wheel="handlewheel"
   >
  <ul class="carousel-container" 
  :style="{
    marginTop
  }"
  @transitionend="handletransitionend">

    <li v-for="(item) in data" :key="item.id" >
      <Carouselitem :carousel="item" />
    </li>

  </ul>
<div v-show="index>=1"  @click="switchTo(index-1)" class="icon icon-up">
  <Icon type="arrowUp"/>
</div>
<div v-show="index < data.length-1"  
@click="switchTo(index+1)" 
class="icon icon-down">
  <Icon type="arrowDown"  />
</div>
  <ul class="indicator"> 
    <li  
    v-for="(item,i) in data" :key="item.id" 
    :class="{
      active:i===index,
      }"
       @click="switchTo(i)"></li>
  </ul>
</div>

</template>

<script >

import { getBanners } from "@/api/banner";
import Icon from "@/components/Icon";
import Carouselitem from "./Carouselitem.vue";
import fetchData from "@/mixins/fetchData.js";

export default {
  mixins:[fetchData([])],
  components:{
    Icon,
    Carouselitem
  },
data(){
  return{
        index:0,
        containerHeight:0,
        swiching:false,
        };
},
mounted(){
  this.containerHeight = this.$refs.container.clientHeight;
  window.addEventListener("resize", this.handleResize);
},
destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
computed:{
  marginTop(){
    return -this.index*this.containerHeight + "px";
   },
  
   
},
methods:{
  switchTo(i){
    this.index=i;
  },
  async fetchData(){
    return await getBanners();
  },
  handlewheel(e){
    if(this.swiching){
      return;
    }
    if(e.deltaY<-5 && this.index>0){
      this.swiching=true;
      this.index--;
    }
    else if(e.deltaY>5 && this.index < this.data.length-1){
      this.swiching=true;
      this.index++;
    }
  },
  handletransitionend(){
    this.swiching=false;
  },
  handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
}
};
</script>



<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container{
  width: 100%;
  height: 100%;
  overflow:hidden;
 
  ul{margin: 0;
    list-style: none;
    padding: 0;
  }
  position: relative;
}
.icon{
  .self-center(absolute);
  font-size: 30px;
  color: @words;
  @gap:25px;
   
  &.icon-up{
    top:@gap;
    cursor: pointer;
    animation: jump-up 2s infinite;
  }
  &.icon-down{
    top:auto;
    bottom:@gap;
    cursor: pointer;
    animation: jump-down 2s infinite;
  }

  @keyframes jump-up {
    0%{
      transform: translate(-50%,5px);
    }
    50%{
      transform: translate(-50%,-5px);
    }
    100%{
      transform: translateY(-50%,5px);
    }
  }
  @keyframes jump-down {
    0%{
      transform: translate(-50%,-5px);
    }
    50%{
      transform: translate(-50%,5px);
    }
    100%{
      transform: translateY(-50%,-5px);
    }
  }
  &:hover{
    animation: jump 1s infinite;
  }

}
.carousel-container{
  width: 100%;
  height: 100%;
  transition: 500ms;
  li{
    width: 100%;
    height: 100%;
  }
}
.indicator{
  .self-center(absolute);
  left: auto;
  right: 20px;
  li{
    height: 7px;
    width: 7px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 10px;
    box-sizing: border-box;
    transition: 0.5s;
    background: @othor8;
    border: 2px solid @othor8;
    &.active{
      background: @othor1;
    }

  }
}
</style>