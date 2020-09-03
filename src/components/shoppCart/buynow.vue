<template>
  <div class="pageview">
    <div>
      <van-nav-bar title="购物车" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="address" @click="addressClick()">
      <div class="leftview">
        <van-icon name="location" size="18" color="#B2B2B2" />
      </div>
      <div class="rightview">
        <div class="topview">
          <div class="name">收货人：马少杰</div>
          <div class="topview_righttext">
            <div class="phone">17611141678</div>
            <van-icon name="arrow" size="18" color="#B2B2B2" />
          </div>
        </div>
        <div class="middleview1">
          <div class="middleview-left">北京-北京市-通州区临河里路，华业东方玫瑰，D区D2，2单元604通州区临河里路，华业东方玫瑰，D区D2，2单元604</div>
        </div>
      </div>
    </div>
    <div class="shoppingbox">
      <div class="shoppingview" v-for="(item,index) in 2" v-bind:key="index">
        <div class="shoppingview-item">
          <div class="shoppingview-item">
            <div class="shoppingview-itemleft">
              <img class="shoppingview-itemleftimage" src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
            </div>
            <div class="shoppingview-itemright">
              <div class="itembox1-left">
                <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                <div class="leixingview">
                  <div class="leixing1">粉色</div>
                  <div class="leixing1">大尺寸</div>
                </div>
              </div>
              <div class="itembox1-right">
                <div class="shoppingview-itemright-middleview">
                  <div class="shoppingview-itemright-middleview-left">￥168</div>
                  <div class="shoppingview-itemright-middleview-right">x1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dibubtn">
      <div class="dibubtn-left">
        <div class="dibubtn-left-text1">共 2 件商品，合计支付：¥ 4,100</div>
        <div style="display: flex;justify-content: flex-start; margin-top: 5px;">
          <div class="dibubtn-left-text1">实际应付金额：</div>
          <div class="dibubtn-left-text2">¥ 4,100</div>
        </div>
      </div>
      <div class="dibubtn-right">微信支付</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast, Icon } from "vant";
export default {
  name: "Buynow",
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    addressClick: function () {
      this.$router.push({ name: "Addresslist" });
    },
  },
};
</script>

<style scoped>
.dibubtn-left-text2 {
 
    font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-weight: bold;
  color: #262626;
}
.dibubtn-left-text1 {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #262626;
  font-size: 14px;
  line-height: 20px;
}
.pageview {
  background: #f8f8f8;
  height: 100%;
}
.phone {
  margin-right: 10px;
}
.dibubtn-left {
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.dibubtn-right {
  width: 120px;
  line-height: 46px;
  border-radius: 1px;
  background-color: #ffe231;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
}
.dibubtn {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  display: -webkit-box;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  justify-content: space-between;
}
.heiji-left {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-regular;
}
.heiji-right {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: right;
  font-weight: bold;
  font-family: PingFangSC-regular;
}
.hejitext {
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 45px;
}
.shoppingbox {
  margin-top: 10px;
  background-color: #ffffff;
}
.shoppingview-itemright {
  margin-left: 10px;
}
.shoppingview-itemright-middleview-right {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: right;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-middleview-left {
  color: rgba(208, 2, 27, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-toptext {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemleft {
  width: 90px;
  height: 100%;
}
.shoppingview-itemleftimage {
  width: 100%;
  height: 100%;
}
.shoppingview {
  padding: 12px;
  box-sizing: border-box;
}
.shoppingview-item {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}
.address {
  padding: 12px 16px 12px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  background-color: #ffffff;
}
.leftview {
  padding: 0px 6px;
  box-sizing: border-box;
}
.topview {
  display: flex;
  justify-content: space-between;
  color: #333333;
  padding: 0px 0px 6px 0px;
}
.topview_righttext {
  display: flex;
  justify-content: end;
}
.middleview1 {
  line-height: 24px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: left;
  font-family: PingFangSC-regular;
}
@import url(http://fonts.googleapis.com/css?family=Lato:100);
.hr {
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
}
.hr:after,
.hr:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
}
.hr:before {
  background: -webkit-linear-gradient(
    0deg,
    #10111f 0%,
    #10111f 50%,
    transparent 50%,
    transparent 100%
  );
  background: linear-gradient(
    90deg,
    #10111f 0%,
    #10111f 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 15px;
  background-position: center;
  z-index: 1;
}
.hr:after {
  -webkit-transition: opacity 0.3s ease, animation 0.3s ease;
  transition: opacity 0.3s ease, animation 0.3s ease;
  background: -webkit-linear-gradient(
    left,
    #62efab 5%,
    #f2ea7d 15%,
    #f2ea7d 25%,
    #ff8797 35%,
    #ff8797 45%,
    #e1a4f4 55%,
    #e1a4f4 65%,
    #82fff4 75%,
    #82fff4 85%,
    #62efab 95%
  );
  background: linear-gradient(
    to right,
    #62efab 5%,
    #f2ea7d 15%,
    #f2ea7d 25%,
    #ff8797 35%,
    #ff8797 45%,
    #e1a4f4 55%,
    #e1a4f4 65%,
    #82fff4 75%,
    #82fff4 85%,
    #62efab 95%
  );
  background-size: 200%;
  background-position: 0%;
  -webkit-animation: bar 15s linear infinite;
  animation: bar 15s linear infinite;
}
@-webkit-keyframes bar {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
@keyframes bar {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
body {
  background: #10111f;
  padding: 4em;
  font-family: Lato;
  font-weight: 100;
  color: #696b89;
  text-indent: 1em;
  line-height: 2;
}
.topview-right1 {
  font-size: 18px;
  color: #000000;
  line-height: 40px;
}
.topview-title {
  display: flex;
  justify-content: space-between;
}

.itembox1-right {
  margin-left: 5px;
}
.itembox {
  width: 100%;
  background: #ffffff;
  padding: 4px;
  border-radius: 11px;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
}
.pageview {
  background: #f4f4f4;
  height: 100vh;
}
.middleviewbtn {
  justify-content: end;
  display: -webkit-box;
}
.middleviewbtn-btn1 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0);
  color: #000000;
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  border: 1px solid rgba(178, 178, 178, 1);
  margin: 0px 4px;
  font-weight: bold;
}
.middleviewbtn-btn2 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: #ffe231;
  color: #000000;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  margin: 0px 4px;
  font-weight: bold;
}
.leixingview {
  display: flex;
  justify-content: start;
  padding: 4px 0px 4px 0px;
}
.leixing1 {
  margin-left: 2px;
  margin-right: 2px;
  width: 40px;
  line-height: 20px;
  border-radius: 1px;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  text-align: left;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
}
.shoppingbox {
  box-sizing: border-box;
}
.shoppingview-itemright {
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
.shoppingview-itemright-middleview-right {
  width: 45px;
  height: 24px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 24px;
  text-align: right;
}
.shoppingview-itemright-middleview-left {
  color: #000000;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-toptext {
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemleft {
  width: 100px;
}
.shoppingview-itemleftimage {
  width: 100%;
  height: 100%;
}
.shoppingview {
  padding: 10px 15px;
  box-sizing: border-box;
}
.shoppingview-item {
  display: flex;
  justify-content: space-between;
}
.item {
  padding: 10px;
  box-sizing: border-box;
}
.topview {
  display: flex;
  justify-content: space-between;
}
.topview-left {
  line-height: 40px;
  color: rgba(51, 51, 51, 1);
  font-size: 13px;
  text-align: left;
  font-family: Arial;
}
.topview-right {
  line-height: 40px;
  color: #1c69d4;
  font-size: 14px;
  text-align: right;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
}
</style>
