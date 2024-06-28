import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;
  const resct = img.dom.getBoundingClientRect();
  console.log(resct)
  const height = resct.height || 150;
  const clientHeight = document.documentElement.clientHeight;
  // imgs = imgs.filter( (i) => i !== img)
  if (resct.top >= -height && resct.top < clientHeight) {
    const tempImg = new Image();

    tempImg.onload = function () {
      img.dom.src = img.src;
    }
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img)
  }
}

function setImages() {
  for (const img of imgs) {
    // 处理该图片
    setImage(img);
  }
}

function handleScroll() {
  setImages()
}
eventBus.$on("mainScroll", debounce(handleScroll, 50));


export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    }
    // console.log(img)
    imgs.push(img)
    setImage(img)
  },
  unbind(el) {//元素消失时间点
    imgs = imgs.filter((img) => img.dom !== el)
  }

}