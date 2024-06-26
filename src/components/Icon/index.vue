<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-a-067_naicha",
  success: "icon-a-067_boluo",
  error: "icon-a-067_dasuan",
  close: "icon-a-067_dangao",
  warn: "icon-a-067_guantou",
  info: "icon-a-067_hebaodan",
  blog: "icon-a-067_chaofan",
  code: "icon-a-067_hanbao",
  about: "icon-a-067_fantuan",
  weixin: "icon-a-067_huacai",
  mail: "icon-a-067_jiweijiu",
  github: "icon-a-067_juanbing",
  qq: "icon-a-067_lajiao",
  arrowUp: "icon-a-067_kaoji",
  arrowDown: "icon-a-067_juzi",
  empty: "icon-a-067_lizi",
  chat: "icon-a-067_lanmei",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_4470329_67oq4i8dr14.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
