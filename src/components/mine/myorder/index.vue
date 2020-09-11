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
      <van-tabs v-model="active" swipeable color="#F6B900" @change="onClick">
        <van-tab v-for="(item,index) in tabslist" :key="index" :title="item.title">
          <template #title>{{item.title}}</template>
          <!-- 内容 {{ item.index }} -->
          <div >
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="loaddata"
              >
                <div class="item" v-for="(item,index) in mydata.list" :key="index">
                  <div class="itembox" v-if="item.orderStatusEnum == indextext">
                    <div class="topview">
                      <div class="topview-title">
                        <div class="topview-left">共1件商品 实付款:</div>
                        <div class="topview-right1">￥{{item.skuTotalPrice}}</div>
                      </div>
                      <div class="topview-right">待收货</div>
                    </div>
                    <div class="shoppingbox">
                      <div
                        class="shoppingview"
                        v-for="(iitem,iindex) in item.detail"
                        v-bind:key="iindex"
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
                              <div class="shoppingview-itemright-toptext">{{iitem.spuName}}</div>
                              <div class="leixingview">
                                <div class="leixing1">{{iitem.skuName}}</div>
                              </div>
                            </div>
                            <div class="itembox1-right">
                              <div class="shoppingview-itemright-middleview">
                                <div class="shoppingview-itemright-middleview-left">￥{{iitem.price}}</div>
                                <div
                                  class="shoppingview-itemright-middleview-right"
                                >x{{iitem.skuCount}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="middleviewbtn" v-if="indextext == 0">
                        <div class="middleviewbtn-btn1">取消订单</div>
                        <div class="middleviewbtn-btn2" @click="orderdetail()">立即支付</div>
                      </div>
                      <div class="middleviewbtn" v-if="indextext == 1">
                        <div class="middleviewbtn-btn2">立即支付</div>
                      </div>
                      <div class="middleviewbtn" v-if="indextext == 2">
                        <div class="middleviewbtn-btn2">确认收货</div>
                      </div>
                      <div class="middleviewbtn" v-if="indextext == 3">
                        <div class="middleviewbtn-btn2">立即评价</div>
                      </div>
                      <div class="middleviewbtn" v-if="indextext == 4">
                        <div class="middleviewbtn-btn1">删除订单</div>
                      </div>
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Tab, Tabs, Toast, List, PullRefresh } from "vant";
import Axios from "axios";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";

export default {
  name: "Myorder",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Toast.name]: Toast,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      mydata: {
        total: 2,
        list: [
          {
            id: "1585708648912",
            orderNo: "订单编号",
            orderStatusEnum: 1,
            orderStatusEnumString:
              "订单状态:[1=待付款=UN_PAY, 2=已付款=DO_PAY, 3=已发货=DO_SEND,4=已完成=FINISH,5=退款中=REFUND,6=已退款=DO_REFUND,7=已关闭=CLOSE]max=7",
            skuTotalPrice: 111,
            typeEnum: "122",
            detail: [
              {
                imgUrl: "图片",
                spuName: "名称",
                skuName: "名称",
                skuCount: 5,
                originalPrice: 112,
                price: 111,
              },
            ],
          },
        ],
        pageNum: 1,
        pageSize: 10,
        size: 1,
        startRow: 0,
        endRow: 0,
        pages: 0,
        prePage: 0,
        nextPage: 0,
        isFirstPage: true,
        isLastPage: true,
        hasPreviousPage: false,
        hasNextPage: false,
        navigatePages: 8,
        navigatepageNums: [],
        navigateFirstPage: 0,
        navigateLastPage: 0,
      },
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
      indextext: '',
    };
  },
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.loaddata(this.indextext);
    },
    onClick(name, title) {
      console.log("index", title);
      if (title == "全部") {
        this.indextext = "";
      } else if (title == "待付款") {
        this.indextext = 1;
      } else if (title == "待收货") {
        this.indextext = 2;
      } else if (title == "待评价") {
        this.indextext = 3;
      } else {
        this.indextext = 4;
      }
      this.loaddata(this.indextext);
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    // 加载数据
    loaddata: function (indextext) {
      var that = this;
      let data = {
        search: "",
        orderStatusEnum: indextext,
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z309p_spuOrder";
      function httpPost(url, data = {}) {
        return new Promise((resolve, reject) => {
          axios.post(url, data).then(
            (res) => {
              resolve(res.data);
            },
            (err) => {
              reject(err);
            }
          );
        });
      }
      httpPost(api, data)
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          that.mydata = res.data;
          that.refreshing = false;
          setTimeout(() => {
            if (that.refreshing) {
              that.mydata.list = [];
              that.refreshing = false;
            }
            if (that.mydata.list.length >= that.mydata.size) {
              that.finished = true;
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转到订单详情
    orderdetail: function () {
      this.$router.push({
        name: "Orderdetail",
      });
    },
  },
  
  activated() {
    this.loaddata(this.indextext);
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
  font-size: 15px;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
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