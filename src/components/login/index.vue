<template>
  <div class="loginPage">
    <div style="text-align: center;">
      <img
        src="../../assets/image/组 458.png"
        alt="1"
        style="width: 90px;height: 100px;margin-top: 200px;"
      />
    </div>

    <h3 class="middletext">申请获取你微信绑定的手机号</h3>
    <div class="vxbuttonview">
      <van-button class="vxbutton">微信登录</van-button>
    </div>
    <h3 class="middletext" @click="gophonePage()">使用手机号登录</h3>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button,
  },
  name: "LoginPage",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    gophonePage: function () {
      console.log("走了吗");
      this.$router.push({
        name: "PhonePage",
      });
    },
  },
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
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.vxbuttonview {
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  margin-top: 50px;
}
.vxbutton {
  letter-spacing: 10px;
  width: 100%;
  background: #fee333;
  border-radius: 50px;
}
</style>
