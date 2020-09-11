
<template>
  <div>
    <div>
      <van-nav-bar title="我的收藏" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="pageview">
      <div class="topview">
        <van-search v-model="value" shape="round" show-action placeholder="请输入搜索关键词">
          <template #action>
            <div>搜索</div>
          </template>
        </van-search>
      </div>
      <div>
        <van-tabs v-model="active" swipeable @change="selectchange($event)">
          <van-tab
            v-for="(item,index) in itemlist"
            :key="index"
            background="#F6B900"
            color="#F6B900"
          >
            <template #title>{{item.name}}</template>
            <div v-if="item.index == 0">
              <div style="margin-top: 15px;background: #FFFFFF;">
                <van-card
                  class="cardview"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                  v-for="(item,index) in 2"
                  :key="index"
                >
                  <template #title>
                    <div class="toptext">店铺介绍</div>
                  </template>
                  <template #tags style="margin-top:5px">
                    <div class="middletext">
                      店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
                      介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
                    </div>
                    <div style="justify-content: flex-end;display: flex;">
                      <img
                        src="../../../assets/381.png"
                        alt
                        style="width: 20px;height: 20px;"
                        @click="CancelCollection()"
                      />
                      <img
                        src="../../../assets/380.png"
                        alt
                        style="width: 20px;height: 20px;margin-left:10px"
                      />
                    </div>
                  </template>
                </van-card>
              </div>
              <div class="kongview">
                <div class="kongview-text">没有更多数据</div>
              </div>
            </div>
            <div v-if="item.index == 1">
              <div style="margin-top: 15px;background: #FFFFFF;">
                <van-card
                  class="cardview"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                  v-for="(item,index) in 2"
                  :key="index"
                >
                  <template #title>
                    <div class="toptext">分类名称—店铺名称</div>
                  </template>
                  <template #tags>
                    <div class="middletext">
                      店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
                      介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
                    </div>
                    <div style="justify-content: flex-end;display: flex;">
                      <img
                        src="../../../assets/381.png"
                        alt
                        style="width: 20px;height: 20px;"
                        @click="CancelCollection()"
                      />
                      <img
                        src="../../../assets/380.png"
                        alt
                        style="width: 20px;height: 20px;margin-left:10px"
                      />
                    </div>
                  </template>
                </van-card>
              </div>
              <div class="kongview">
                <div class="kongview-text">没有更多数据</div>
              </div>
            </div>
            <div v-if="item.index == 2">
              <div style="margin-top: 15px;background: #FFFFFF;">
                <van-card
                  class="cardview"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                  v-for="(item,index) in 2"
                  :key="index"
                >
                  <template #title>
                    <div class="toptext">分类名称—店铺名称</div>
                  </template>
                  <template #tags>
                    <div class="middletext">
                      店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
                      介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
                    </div>
                    <div style="justify-content: flex-end;display: flex;">
                      <img
                        src="../../../assets/381.png"
                        alt
                        style="width: 20px;height: 20px;"
                        @click="CancelCollection()"
                      />
                      <img
                        src="../../../assets/380.png"
                        alt
                        style="width: 20px;height: 20px;margin-left:10px"
                      />
                    </div>
                  </template>
                </van-card>
              </div>
              <div class="kongview">
                <div class="kongview-text">没有更多数据</div>
              </div>
            </div>
            <div v-if="item.index == 3">
              <div style="margin-top: 15px;background: #FFFFFF; padding:10px;box-sizing:border-box">
                <div class="topvideo"></div>
                <div class="video-middleview">
                  <div class="video-middleview-text1">课程直播视频名称名称</div>
                  <div class="video-middleview-text2">视频简介视频简介视频简介视频简介视频简介视频简介视频简</div>
                  <div class="video-middleview-fenlei">
                    <div style="display: flex;justify-content: flex-start;">
                      <div class="video-middleview-text4">
                        <i class="iconfont iconshijian" style="margin:0px 3px"></i>2020-05-31 20:30
                      </div>
                      <div class="video-middleview-text3">
                        <i class="iconfont iconbofang" style="margin:0px 3px"></i>70分钟
                      </div>
                    </div>
                    <div class="video-middleview-fenlei-right">
                      <img
                        src="../../../assets/381.png"
                        alt
                        style="width: 20px;height: 20px;"
                        @click="CancelCollection()"
                      />
                      <img
                        src="../../../assets/380.png"
                        alt
                        style="width: 20px;height: 20px;margin-left:10px"
                      />
                      <!-- <img src="../../../assets/381.png" alt="" style="width: 20px;height: 20px;"> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="kongview">
                <div class="kongview-text">没有更多数据</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Search, Tab, Tabs, Card, Toast } from "vant";
import axios from "axios";
import qs from "qs";
import GLOBAL from "@/api/global_variable.js";

export default {
  name: "Mycollection",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Card.name]: Card,
  },
  data() {
    return {
      cutnumber: 1,
      activeName: "1",
      value: "",
      typeEnum: 1,
      active: 1,
      itemlist: [
        {
          index: 0,
          name: "店铺列表",
        },
        {
          index: 1,
          name: "分类",
        },
        {
          index: 2,
          name: "图文商品",
        },
        {
          index: 3,
          name: "培训视频",
        },
      ],
    };
  },
  methods: {
    // 取消收藏
    CancelCollection: function () {
      var that = this;
      let data = {
        id: 1,
      };
      var api = GLOBAL.baseURL + "/multiapi/z454d_relUserSku";
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //选择切换
    selectchange: function (event) {
      console.log(event, this.itemlist[event].name);
      this.typeEnum = event;
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    loaddata: function () {
      var that = this;
      let data = {
        typeEnum: 1, //<comment>[1=内训直播=INSIDE_RADIO, 2=内训图文=INSIDE_TEXT ,3=商品=SKU,4=直播=RADIO,5=店铺=shop]</comment>
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z310p_relUserSku";
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.loaddata();
  },
};
</script>

<style scoped>
.pageview {
  height: 100vh;
  background: #f4f4f4;
}
.video-middleview-fenlei-right {
  line-height: 40px;
  padding-top: 5px;
}
.video-middleview-fenlei {
  display: flex;
  justify-content: space-between;
}
.video-middleview-text4 {
  color: rgba(155, 155, 155, 1);
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 40px;
}
.video-middleview-text3 {
  color: rgba(155, 155, 155, 1);
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  margin-left: 5px;
  line-height: 40px;
}
.video-middleview-text2 {
  color: #999999;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-family: PingFangSC-regular;
  line-height: 26px;
}
.video-middleview-text1 {
  color: rgba(16, 16, 16, 1);
  font-size: 17px;
  text-align: left;
  line-height: 26px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #333333;
  font-weight: bold;
}
.video-middleview {
  padding: 10px 0px 0px 0px;
  margin: 0px 10px;
  box-sizing: border-box;
}
.topvideo {
  width: 100%;
  height: 150px;
  line-height: 20px;
  background-color: rgba(21, 8, 9, 0.57);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
.ceshi1-text1 {
  color: #844505;
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.ceshi1-text2 {
  font-size: 17px;
  text-decoration: line-through;
}
.marginleft {
  margin-left: 10px;
}
.ceshi1-text {
  color: rgba(155, 155, 155, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 22px;
}
.ceshi {
  display: flex;
  justify-content: space-between;
}
.ceshi1 {
  display: flex;
  justify-content: start;
}
.kongview-text {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: SourceHanSansSC-regular;
  text-align: center;
}
.kongview {
  padding: 25px;
  box-sizing: border-box;
  text-align: center;
}
.hr {
  margin: 0px 16px;
  border-top: 1px solid rgba(187, 187, 187, 1);
}
.share {
  margin-left: 10px;
}
.toptext {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middletext {
  margin-top: 6px;
  margin-bottom: 8px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: rgba(155, 155, 155, 1);
}
.cardview {
  background-color: #ffffff;
  padding: 8px 0px 10px 0px;
  margin: 5px 16px;
}
.topview {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
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
</style>