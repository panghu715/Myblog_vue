
<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container"><BlogTOC :toc="data.toc" v-if="data" /></div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  updated() {
    //刷新后仍在原来的地方
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  min-width: 100%;
  overflow-x: hidden;
}
.right-container {
  width: 300px;
  height: 100%;

  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
}
</style>