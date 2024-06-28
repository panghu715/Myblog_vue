//top和滚动条
export default function(refsvalue){
 
  return{
 methods: {
  handleScroll() {
    if (this.$bus) {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    }
  },
  handleSetMainScroll(scrollTop) {
    this.$refs.mainContainer.scrollTop = scrollTop;
  },
 },
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
    },
    beforeDestro() {
      this.$bus.$emit("mainScroll");
      this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    } 
  };
}