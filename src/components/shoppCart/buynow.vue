<template>
  <div>
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
    <b class="hr"></b>
    <div class="shoppingbox">
      <div class="shoppingview" v-for="(item,index) in 2" v-bind:key="index">
        <div class="shoppingview-item">
          <div class="shoppingview-itemleft">
            <img class="shoppingview-itemleftimage" src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
          </div>
          <div class="shoppingview-itemright">
            <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
            <div class="shoppingview-itemright-middleview">
              <div class="shoppingview-itemright-middleview-left">￥168</div>
              <div class="shoppingview-itemright-middleview-right">数量 x1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hejitext">
      <div class="heiji-left">合计支付</div>
      <div class="heiji-right">￥168</div>
    </div>
    <div class="dibubtn">
      <div class="dibubtn-left">实付款：￥168</div>
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
      //关闭子页面
      this.$store.state.tagsView.visitedViews.splice(
        this.$store.state.tagsView.visitedViews.findIndex(
          (item) => item.path === this.$route.path
        ),
        1
      );
      this.$router.push(
        this.$store.state.tagsView.visitedViews[
          this.$store.state.tagsView.visitedViews.length - 1
        ].path
      );
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
.phone {
  margin-right: 10px;
}
.dibubtn-left {
  line-height: 42px;
  color: rgba(252, 85, 82, 1);
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.dibubtn-right {
  width: 130px;
  line-height: 42px;
  border-radius: 1px;
  background-color: rgba(50, 195, 245, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
}
.dibubtn {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;
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
  border: 1px solid #eeeeee;
}
.shoppingview-itemright {
  margin-left: 10px;
}
.shoppingview-itemright-middleview {
  bottom: 0px;
  margin-top: 24px;
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
.shoppingview-itemright-middleview {
  display: flex;
  justify-content: space-between;
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
</style>
