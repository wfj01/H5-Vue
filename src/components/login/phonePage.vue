<template>
  <div class="loginPage">
    <img src="../../assets/logo.png" alt="1" />
    <div class="middleview">
      <div class="mddleview2">
        <div class="textname">手机号</div>
        <div class="inputstyle">
          <input type="text" class="inputcolor" style="width: 100%;" placeholder="请输入您的手机号" />
        </div>
        <div class="textname">验证码</div>
        <div class="mybox">
          <input type="text" placeholder="请输入验证码" />
          <span>| 获取验证码</span>
        </div>
      </div>
      <div class="vxbuttonview">
        <van-button type="info" class="vxbutton">登录</van-button>
      </div>
      <div class="bottomtext">温馨提示：未注册珍珪谷账号的手机号，登录时将自动注册，且代表您已同意《用户注册协议》</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "vant/lib/button";
export default {
  components: {
    [Button.name]: Button,
  },
  name: "PhonePage",
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style scoped>
.inputcolor {
  background: #F4F2F5;
  border-radius: 5px;
  border:#F4F2F5;
  padding: 0px 6px;
}
.titlename {
  text-align: center;
  letter-spacing: 10px;
  font-size: 26px;
}

.middleview {
  padding: 20px 40px;
  box-sizing: border-box;
}
.mddleview2 {
  width: 100%;
  height: 100%;
}
.textname {
  text-align: left;
  padding: 10px 0px;
}
.inputstyle {
  display: flex;
  height: 38px;
}
.mybox {
  height: 38px;
  position: relative;
}

.mybox input {
  width: 100%;
  padding: 3px 5px;
  padding-right: 80px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 3px;
  background: #F4F2F5;
  border-radius: 5px;
    padding: 0px 6px;

}

.mybox span {
  position: absolute;
  display: block;
  height: 30px;
  right: 2px;
  top: 2px;
  line-height: 38px;
  color: #000;
  margin: 0px 5px 0px 10px;
}
.vxbuttonview {
  padding: 15px 0px;
  box-sizing: border-box;
}
.vxbutton {
  letter-spacing: 10px;
  width: 100%;
  border-radius: 5px;
  background: #844404;
  border: #844404;
}

.bottomtext{
  font-size: 13px;
  color: #606060;
}
</style>
