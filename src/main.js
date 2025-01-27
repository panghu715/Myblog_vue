// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";

import "./eventBus";

Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLazy from "./directives/lazy";
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// // 随便测试一下

// import * as blogApi from "./api/blog";
// blogApi.getBlog("asdfasdf").then((r) => {
//   console.log(r);
// });

// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });
