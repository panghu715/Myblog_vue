<template>
 <ul class="contact-container">
  <li>
    <a href="">
      <div class="icon">
        <Icon type="github"/>
      </div>
      <span>github</span>
    </a>
  </li>
  <li>
      <a href="mailto:2830844644@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>2830844644@qq.com</span>
      </a>
    </li>
 <li>
      <a
        href="tencent://message/?Menu=yes&uin=2830844644&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2830844644</span>
      </a>
      <div class="pop">
        <img
          src="http://wangsiyue.online/img/d1abce9ba039c63d4046725ce2acd07.jpg"
          alt=""
        />
      </div>
    </li>
    
 <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>bfw</span>
      </a>
      <div class="pop">
        <img
          src="http://wangsiyue.online/img/6ae3f3429280843c5e8369d504b32d7-17150818905342.jpg"
          alt=""
        />
      </div>
    </li>
 </ul>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container{
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  li{
    height: 20px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover{
      .pop{
        transform: scaleY(1);
      }
    }
  }
  a{   
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 14px;
  }
  .icon{
    font-size: 26px;
    width: 36px;
    &.weixin{
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop{
    position:absolute;
    left: 0;
    transform: scaleY(0);
    padding:10px 15px;
    bottom: 35px;
    background: #fff;
    border-radius: 5px;
    transition: 0.3s;
    transform-origin: center bottom;
    img {
      width: 150px;
      height: 150px;
    }
    &::after{
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }

}
</style>