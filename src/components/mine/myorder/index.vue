<template>
  <div>
    <div>
      <van-nav-bar title="我的订单" fixed>
        <template #left  >
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()"/>
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div>
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item,index) in tabslist" :key="index">
          <template #title>{{item.title}}</template>
          <!-- 内容 {{ item.index }} -->
          <div>
            <div class="item" v-if="item.index == 0">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-left">共1件商品 实付款:￥168</div>
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
                        <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                        <div class="leixingview">
                          <div class="leixing1">粉色</div>
                          <div class="leixing1">大尺寸</div>
                        </div>
                        <div class="shoppingview-itemright-middleview">
                          <div class="shoppingview-itemright-middleview-left">￥168</div>
                          <div class="shoppingview-itemright-middleview-right">数量 x1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="middleviewbtn">
                  <div class="middleviewbtn-btn1">取消订单</div>
                  <div class="middleviewbtn-btn2">立即支付</div>
                </div>
              </div>
            </div>
            <div class="item" v-if="item.index == 1">
              <div class="itembox">
                <div class="topview">
                  <div class="topview-left">共1件商品 实付款:￥168</div>
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
                        <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                        <div class="leixingview">
                          <div class="leixing1">粉色</div>
                          <div class="leixing1">大尺寸</div>
                        </div>
                        <div class="shoppingview-itemright-middleview">
                          <div class="shoppingview-itemright-middleview-left">￥168</div>
                          <div class="shoppingview-itemright-middleview-right">数量 x1</div>
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
                  <div class="topview-left">共1件商品 实付款:￥168</div>
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
                        <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                        <div class="leixingview">
                          <div class="leixing1">粉色</div>
                          <div class="leixing1">大尺寸</div>
                        </div>
                        <div class="shoppingview-itemright-middleview">
                          <div class="shoppingview-itemright-middleview-left">￥168</div>
                          <div class="shoppingview-itemright-middleview-right">数量 x1</div>
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
                  <div class="topview-left">共1件商品 实付款:￥168</div>
                  <div class="topview-right">待评价</div>
                </div>
                <div class="shoppingbox">
                  <div class="shoppingview" @click="orderdetail()">
                    <div class="shoppingview-item">
                      <div class="shoppingview-itemleft">
                        <img
                          class="shoppingview-itemleftimage"
                          src="https://img.yzcdn.cn/vant/ipad.jpeg"
                          alt
                        />
                      </div>
                      <div class="shoppingview-itemright">
                        <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                        <div class="leixingview">
                          <div class="leixing1">粉色</div>
                          <div class="leixing1">大尺寸</div>
                        </div>
                        <div class="shoppingview-itemright-middleview">
                          <div class="shoppingview-itemright-middleview-left">￥168</div>
                          <div class="shoppingview-itemright-middleview-right">数量 x1</div>
                        </div>
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
                  <div class="topview-left">共1件商品 实付款:￥168</div>
                  <div class="topview-right">已完成</div>
                </div>
                <div class="shoppingbox">
                  <div
                    class="shoppingview"
                    @click="orderdetail()"
                    v-for="(item,index) in 2"
                    v-bind:key="index"
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
                        <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                        <div class="leixingview">
                          <div class="leixing1">粉色</div>
                          <div class="leixing1">大尺寸</div>
                        </div>
                        <div class="shoppingview-itemright-middleview">
                          <div class="shoppingview-itemright-middleview-left">￥168</div>
                          <div class="shoppingview-itemright-middleview-right">数量 x1</div>
                        </div>
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
      console.log("妈的")
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

      Toast("返回");
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
.middleviewbtn {
  justify-content: end;
  padding: 15px 0px;
  display: -webkit-box;
}
.middleviewbtn-btn1 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0);
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  border: 1px solid rgba(178, 178, 178, 1);
  margin: 0px 4px;
}
.middleviewbtn-btn2 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  margin: 0px 4px;
}
.leixingview {
  display: flex;
  justify-content: start;
  padding: 8px 0px 8px 0px;
}
.leixing1 {
  margin-left: 2px;
  margin-right: 2px;
  width: 50px;
  line-height: 20px;
  border-radius: 1px;
  background-color: rgba(242, 242, 242, 1);
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
}
.shoppingbox {
  border: 1px solid #eeeeee;
  background-color: #fafafa;
  padding: 5px 10px;
  box-sizing: border-box;
}
.shoppingview-itemright {
  margin-left: 10px;
}
.shoppingview-itemright-middleview {
  bottom: 0px;
}
.shoppingview-itemright-middleview-right {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: right;
  font-family: PingFangSC-regular;
  font-weight: bold;
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
.shoppingview-itemright-middleview {
  display: flex;
  justify-content: space-between;
}
.shoppingview-itemleft {
  width: 100px;
  height: 100px;
}
.shoppingview-itemleftimage {
  width: 100%;
  height: 100%;
}
.shoppingview {
  padding: 10px 0px;
  border-bottom: 1px solid #f2f2f2;
}
.shoppingview-item {
  display: flex;
  justify-content: space-between;
}
.item {
  padding: 0px 15px;
  box-sizing: border-box;
}
.itembox {
  width: 100%;
}
.topview {
  display: flex;
  justify-content: space-between;
}
.topview-left {
  line-height: 40px;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: left;
  font-family: Arial;
}
.topview-right {
  line-height: 40px;
  color: rgba(132, 68, 4, 1);
  font-size: 14px;
  text-align: right;
  font-family: Arial;
}
</style>