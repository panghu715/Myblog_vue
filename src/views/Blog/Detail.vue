
<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"/>
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container"><BlogTOC :toc="data.toc" v-if="data"/></div>
    </template>
  </Layout>
  
</template>

<script>
import fetchData from '@/mixins/fetchData';
import {getBlog} from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from './components/BlogDetail.vue';
import BlogTOC from './components/BlogTOC.vue';
import BlogComment from "./components/BlogComment";
export default {
mixins:[fetchData(null)],
methods:{
  async fetchData(){
    return await getBlog( this.$route.params.id);
  }
},
components:{
  Layout,
  BlogDetail,
  BlogTOC,
  BlogComment
},

}
</script>

<style lang="less" scoped>
.main-container{
  overflow-y: scroll;
  height: 100%;
  box-sizing:border-box ;
  padding: 20px;
  position: relative;
  min-width: 100%;
  overflow-x:hidden ;
}
.right-container{
  width:300px;
  height: 100%;
 
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
}
</style>