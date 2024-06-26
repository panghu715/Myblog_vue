<template>

 <Layout>
  <Bloglist />
  <template #right> 
    <BlogCategory/>
  </template>
 </Layout>

</template>

<script>
import Layout from "@/components/Layout";
import Bloglist from "./components/Bloglist";
import BlogCategory from "./components/BlogCategory";
export default {
components:{
  Layout,
  Bloglist,
  BlogCategory
}

};
</script>

<style></style>