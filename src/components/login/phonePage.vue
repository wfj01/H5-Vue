<template>
  <div class="loginPage">
    <img
      src="../../assets/image/组 458.png"
      alt="1"
      style="width: 90px;height: 100px;margin-top: 180px;margin-bottom:20px"
    />
    <div class="middleview">
      <div class="mddleview2">
        <div class="inputstyle">
          <input type="text" class="inputcolor" style="width: 100%;" placeholder="请输入您的手机号" />
        </div>
        <div class="mybox">
          <input type="text" placeholder="请输入验证码" />
          <p class="span1">|</p>
          <span v-if="isshow == false" @click="huoquyanzhengma()">获取验证码</span>
          <span v-if="isshow == true" style="background: #DDDDDD;color: #FFFFFF;">重新发送59s</span>
        </div>
      </div>
      <div class="vxbuttonview">
        <van-button   v-if="isshow == false" class="vxbutton">登录</van-button>
        <van-button  v-if="isshow == true" style="background: #FEE333;" class="vxbutton" @click="goindexPage()">登录</van-button>
      </div>
      <div class="bottomtext">温馨提示：未注册珍珪谷账号的手机号，登录时将自动注册，且代表您已同意<a href="##">《用户注册协议》</a></div>
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
      isshow: false,
    };
  },
  methods: {
    //获取验证码
    huoquyanzhengma: function () {
      this.isshow = true;
    },
    //跳转到首页
    goindexPage:function(){
      this.$router.push({
        name: "Index",
      });
    }
  },
};
</script>

<style scoped>
.inputcolor {
  padding: 0px 6px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
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
  margin-top: 10px;
}

.mybox input {
  width: 100%;
  padding: 3px 5px;
  padding-right: 80px;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  outline: none;
  padding: 0px 6px;
}
.span1 {
  position: absolute;
  display: block;
  height: 40px;
  right: 120px;
  top: 2px;
  line-height: 38px;
  color: #ffe231;
  margin: 0px 5px 0px 10px;
}

.mybox span {
  position: absolute;
  display: block;
  height: 30px;
  right: 2px;
  top: 2px;
  line-height: 32px;
  color: #000;
  margin: 0px 5px 0px 10px;
  background: #ffe231;
  padding: 0px 10px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 14px;
}
.vxbuttonview {
  padding: 15px 0px;
  box-sizing: border-box;
}
.vxbutton {
  letter-spacing: 10px;
  width: 100%;
  background: #dddddd;
  border-radius: 50px;
  font-size: 15px;
  font-weight: bolder;
}

.bottomtext {
  font-size: 14px;
  color: #606060;
  text-align: left;
}
</style>
