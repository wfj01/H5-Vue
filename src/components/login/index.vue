<template>
  <div class="loginPage">
    <img src="../../assets/logo.png" alt="1">
    <h2 class="titlename">珍硅谷</h2>
    <h3 class="middletext">申请获取你微信绑定的手机号</h3>
    <div class="vxbuttonview">
      <van-button type="info" class="vxbutton">微信登录</van-button>
    </div>
    <h3 class="middletext" @click="gophonePage()">使用手机号登录</h3>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "vant/lib/button";
import "vant/lib/button/style";
export default {
  components: {
    [Button.name]: Button,
  },
  name: "loginPage",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    gophonePage:function(){
      console.log("走了吗")
      this.$router.push({
        name:'phonePage'
      })
    }
  }

};
</script>

<style scoped>
.titlename {
  text-align: center;
  letter-spacing: 10px;
  font-size: 26px;
}

.middletext {
  text-align: center;
  letter-spacing: 2px;
  font-size: 14px;
}
.vxbuttonview {
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.vxbutton {
  letter-spacing: 10px;
  width: 100%;
}
</style>
