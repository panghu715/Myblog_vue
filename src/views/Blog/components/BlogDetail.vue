<template>
  <div class="blog-detail-container" >
    <h1>{{ blog.title }}</h1>
    <div class="aside">
    <span>日期：{{ formatDates(blog.createDate) }}</span>
    <span>浏览量：{{ blog.scanNumber}}</span>
    <a  href=""> 评论：{{ blog.commentNumber}}</a>
    <a  href="">{{ blog.category.name}}</a>
    </div>

    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import {formatDates} from "@/utils"
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
props: {
    blog: {
        type: Object,
        required: true
    }
},
methods:{
  formatDates
}
}
</script>

<style lang="less" scoped>

@import "~@/styles/var.less";
.aside{
  font-size: 12px;
  color: @othor8;
  span,
  a {
    margin-right: 15px;
  }
}

 
</style>