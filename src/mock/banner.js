import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://azure.wangsiyue.online:9001/vuetest0img/imgs/cat-8415620_1280.webp",
      title: "胖虎",
      description: "ごうだ たけし Gōda Takeshi",
    },
    {
      id: "2",
      midImg:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      bigImg:
        "http://azure.wangsiyue.online:9001/vuetest0img/imgs/box-8702500_1280.webp",
      title: "源 静香",
      description: "みなもと しずか",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://azure.wangsiyue.online:9001/vuetest0img/imgs/cat-8410502_1280.webp",
      title: "骨川小夫",
      description: "ほねかわ スネお Honekawa Suneo",
    },
  ],
})