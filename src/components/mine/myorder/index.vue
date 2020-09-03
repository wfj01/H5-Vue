<template>
  <div class="pageview">
    <div>
      <van-nav-bar title="我的订单" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div>
      <van-tabs v-model="active" swipeable color="#F6B900">
        <van-tab v-for="(item,index) in tabslist" :key="index">
          <template #title>{{item.title}}</template>
          <!-- 内容 {{ item.index }} -->
          <div>
            <div class="item" v-if="item.index == 0">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-title">
                    <div class="topview-left">共1件商品 实付款:</div>
                    <div class="topview-right1">￥168</div>
                  </div>
                  <div class="topview-right">待收货</div>
                </div>
                <div class="shoppingbox">
                  <div
                    class="shoppingview"
                    v-for="(item,index) in 2"
                    v-bind:key="index"
                    @click="orderdetail()"
                  >
                    <div class="shoppingview-item">
                      <div class="shoppingview-itemleft">
                        <img
                          class="shoppingview-itemleftimage"
                          src="https://img.yzcdn.cn/vant/ipad.jpeg"
                          alt
                        />
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
                  <div class="middleviewbtn">
                    <div class="middleviewbtn-btn1">取消订单</div>
                    <div class="middleviewbtn-btn2" @click="orderdetail()">立即支付</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" v-if="item.index == 1">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-title">
                    <div class="topview-left">共1件商品 实付款:</div>
                    <div class="topview-right1">￥168</div>
                  </div>
                  <div class="topview-right">待付款</div>
                </div>
                <div class="shoppingbox">
                  <div
                    class="shoppingview"
                    v-for="(item,index) in 3"
                    v-bind:key="index"
                    @click="orderdetail()"
                  >
                    <div class="shoppingview-item">
                      <div class="shoppingview-itemleft">
                        <img
                          class="shoppingview-itemleftimage"
                          src="https://img.yzcdn.cn/vant/ipad.jpeg"
                          alt
                        />
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
                <div class="middleviewbtn">
                  <div class="middleviewbtn-btn2">立即支付</div>
                </div>
              </div>
            </div>
            <div class="item" v-if="item.index == 2">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-title">
                    <div class="topview-left">共1件商品 实付款:</div>
                    <div class="topview-right1">￥168</div>
                  </div>
                  <div class="topview-right">待收货</div>
                </div>
                <div class="shoppingbox" v-for="(item,index) in 2" v-bind:key="index">
                  <div
                    class="shoppingview"
                    v-for="(item,index) in 2"
                    v-bind:key="index"
                    @click="orderdetail()"
                  >
                    <div class="shoppingview-item">
                      <div class="shoppingview-itemleft">
                        <img
                          class="shoppingview-itemleftimage"
                          src="https://img.yzcdn.cn/vant/ipad.jpeg"
                          alt
                        />
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
                <div class="middleviewbtn">
                  <div class="middleviewbtn-btn2">确认收货</div>
                </div>
              </div>
            </div>
            <div class="item" v-if="item.index == 3">
              <div class="itembox" v-for="(item,index) in 2" v-bind:key="index">
                <div class="topview">
                  <div class="topview-title">
                    <div class="topview-left">共1件商品 实付款:</div>
                    <div class="topview-right1">￥168</div>
                  </div>
                  <div class="topview-right">待评价</div>
                </div>
                <div class="shoppingview-item">
                  <div class="shoppingview-itemleft">
                    <img
                      class="shoppingview-itemleftimage"
                      src="https://img.yzcdn.cn/vant/ipad.jpeg"
                      alt
                    />
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
                <div class="middleviewbtn">
                  <div class="middleviewbtn-btn2">立即评价</div>
                </div>
              </div>
            </div>
            <div class="item" v-if="item.index == 4">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-title">
                    <div class="topview-left">共1件商品 实付款:</div>
                    <div class="topview-right1">￥168</div>
                  </div>
                  <div class="topview-right">已完成</div>
                </div>
                 <div class="shoppingview-item">
                  <div class="shoppingview-itemleft">
                    <img
                      class="shoppingview-itemleftimage"
                      src="https://img.yzcdn.cn/vant/ipad.jpeg"
                      alt
                    />
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
                <div class="middleviewbtn">
                  <div class="middleviewbtn-btn1">删除订单</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Tab, Tabs } from "vant";
export default {
  name: "Myorder",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      cutnumber: 1,
      active: "",
      tabslist: [
        {
          index: 0,
          title: "全部",
        },
        {
          index: 1,
          title: "待付款",
        },
        {
          index: 2,
          title: "待收货",
        },
        {
          index: 3,
          title: "待评价",
        },
        {
          index: 4,
          title: "已完成",
        },
      ],
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    // 跳转到订单详情
    orderdetail: function () {
      this.$router.push({
        name: "Orderdetail",
      });
    },
  },
};
</script>

<style scoped>
.topview-right1 {
  font-size: 18px;
  color: #000000;
  line-height: 40px;
}
.topview-title {
  display: flex;
  justify-content: space-between;
}
.itembox1-left {
  width: 331rpx;
}
.itembox1-right {
  width: 96rpx;
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
  padding: 8px 0px 8px 0px;
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
  color: #666666;
  line-height: 24px;
  text-align: right;
}
.shoppingview-itemright-middleview-left {
  color: #844404;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-toptext {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
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
  padding: 10px 0px;
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