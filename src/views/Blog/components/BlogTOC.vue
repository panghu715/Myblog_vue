<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocwithselect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  created() {
    this.setselectdebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setselectdebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setselectdebounce);
  },

  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect() {
      this.activeAnchor = "";
      //设置选中项
      const range = 200; //元素上下选中范围为200像素
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }

        //元素距离视口顶部距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
  computed: {
    tocwithselect() {
      const getToc = (toc = []) => {
        return toc.map((t) => {
          return {
            ...t,
            isSelect: t.anchor === this.activeAnchor,
            children: getToc(t.children),
          };
        });
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
