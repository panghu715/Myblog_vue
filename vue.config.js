// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://examplggge.com",// 目标服务器地址
      },
    },
  },
};