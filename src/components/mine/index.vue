<template>
  <div class="pageview">
    <div>
      <van-nav-bar title="我的" fixed>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>

    <div class="topview1" @click="gerenziliao()">
      <div class="topview1-right">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
      </div>
      <div class="topview1-left">
        <div class="topview1-left-text1">老子就不吃早餐</div>
        <div class="topview1-left-text2">查看和编辑</div>
      </div>
    </div>
    <div class="topview2">
      <div class="topview2box">
        <div class="topview2-item1">
          <div class="topview2-item1text1">账户余额</div>
          <div class="topview2-item1text2">
            8956.36
            <div class="topview2-item1text3">元</div>
          </div>
        </div>
        <div class="topview2-item2">
          <div class="topview2-item2text">我要提现</div>
        </div>
      </div>
    </div>
    <div class="middleview">
      <div class="middleview-item" @click="myorder()">
        <div class="middleview-item-left">
          <van-icon name="balance-list-o" size="28px" color="#000000" />
          <div class="middleview-item-lefttext">我的订单</div>
        </div>
        <van-icon name="arrow" size="28px" color="#000000" />
      </div>
      <div class="middleview-item" @click="Myopenshop()">
        <div class="middleview-item-left">
          <van-icon name="shop-o" size="28px" color="#000000" />
          <div class="middleview-item-lefttext">我要开店</div>
        </div>
        <van-icon name="arrow" size="28px" color="#000000" />
      </div>
      <div class="middleview-item" @click="Mycollection()">
        <div class="middleview-item-left">
          <van-icon name="star-o" size="28px" color="#000000" />
          <div class="middleview-item-lefttext">我的收藏</div>
        </div>
        <van-icon name="arrow" size="28px" color="#000000" />
      </div>
      <div class="middleview-item">
        <div class="middleview-item-left">
          <van-icon name="cluster-o" size="28px" color="#000000" />
          <div class="middleview-item-lefttext">分销中心</div>
        </div>
        <van-icon name="arrow" size="28px" color="#000000" />
      </div>
    </div>
    <div style="height:30px"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
export default {
  name: "Mineview",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
    };
  },
  methods: {
    gerenziliao: function () {
      this.$router.push({
        name: "Personaldata",
      });
    },
    onClickLeft: function () {
      Toast("返回");
    },
    onClickRight: function () {
      Toast("按钮");
    },
    //跳转到我的订单
    myorder: function () {
      this.$router.push({
        name: "Myorder",
      });
    },
    //跳转到我要开店
    Myopenshop: function () {
      this.$router.push({
        name: "Myopenshop",
      });
    },
    //跳转到我的收藏
    Mycollection: function () {
      this.$router.push({
        name: "Mycollection",
      });
    },
  },
};
</script>

<style scoped>
.topview1-left{
  padding-top: 6px;
  padding-left: 10px;
}
.pageview{
  background: #ffffff;
  height: 100vh;
}
.topview2-item1text1 {
  width: 96px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 33px;
  text-align: left;
}

.topview2-item1text2 {
  width: 140px;
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  display: flex;
  text-align: left;
}
.topview2-item1text3 {
  width: 20px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 28px;
  text-align: left;
  margin-left: 4px;
}
.topview2-item2text {
  background: #ffffff;
  border-radius: 26px;
  line-height: 42px;
  width: 110px;
}
.middleview {
  padding: 12px;
  box-sizing: border-box;
}
.middleview-item {
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 20px 10px;
}
.middleview-item-left {
  display: flex;
  justify-content: start;
}
.middleview-item-lefttext {
  font-size: 20px;
  margin-left: 8px;
  line-height: 28px;
}
.topview2 {
  padding: 10px 15px 15px 15px;
  box-sizing: border-box;
}
.topview2box {
  background: linear-gradient(180deg, #feec35 0%, #fecf00 100%);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
}
.topview2-item2 {
  padding: 20px 0px;
  line-height: 60px;
  line-height: 20px;
  color: rgba(16, 16, 16, 1);
  text-align: center;
  font-family: Arial;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 37px;
}
.topview2-item1 {
  padding: 10px 0px;
  line-height: 60px;
  line-height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
}
.page {
  background-color: #f7f8fa;
  height: 100vh;
}
.round_icon {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  box-shadow: 0 0 0 2px #ececec, 0 0 0 3px rgba(0, 0, 0, 0.4);
}
.topview1-left-text1 {
  color: rgba(64, 64, 64, 1);
  font-size: 26px;
  text-align: left;
  font-family: "PingFangSC-bold";
  font-weight: bold;
}
.topview1-left-text2 {
  color: rgba(191, 191, 191, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  padding-top: 10px;
}
.topview1 {
  display: flex;
  justify-content: flex-start;
  padding: 20px 15px 15px 15px;
  box-sizing: border-box;
}
</style>