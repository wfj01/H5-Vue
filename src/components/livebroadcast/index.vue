
<template>
  <div>
    <div>
      <van-nav-bar title="直播间详情" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="topview note" :style="note">
      <div class="ceshi1">
        <div class="ceshitext1">
          <img
            src="../../assets/image/群组.png"
            alt
            style="width: 20px;height: 20px;padding-top: 6px;margin-left:5px"
          />
          <div style="margin-left: 5px;">{{mydata.lookNumber}}</div>
        </div>
      </div>
      <div class="ceshi">
        <div class="ceshitext">开始直播</div>
      </div>
    </div>
    <div>
      <van-tabs @click="onClick" swipeable>
        <van-tab title="介绍">
          <div class="item1">
            <div class="item1-text1">{{mydata.liveRadioName}}</div>
            <div class="video-middleview-fenlei item1-text2">
              <div style="display: flex;justify-content: flex-start;">
                <div class="video-middleview-text4">
                  <img
                    src="../../assets/image/时间.png"
                    alt
                    width="18px"
                    height="17px"
                    style="margin-top:2px;margin-right:5px"
                  />
                  <div>{{mydata.startDate}}</div>
                </div>
                <div class="video-middleview-text3">
                  <img
                    src="../../assets/image/开始.png"
                    alt
                    width="19px"
                    height="18px"
                    style="margin-top:2px;margin-right:5px"
                  />
                  <div>{{mydata.liveRadioLongDate}}分钟</div>
                </div>
              </div>
            </div>
            <div class="item1-text3">{{mydata.liveRadioIntro}}</div>
          </div>
        </van-tab>
        <van-tab title="互动">
          <div class="hudong1" v-for="(item,index) in hostlist" :key="index">
            <!-- Left -->
            <div class="chat-sender">
              <div class="touxiangview">
                <img class="touxiang" src="../../assets/image/1.jpeg" />
              </div>
              <div>{{item.userName}}</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>{{item.commentContent}}</span>
              </div>
            </div>
            <div>
              <ul>
                <li v-for="(item,index) in observerlist" :key="index">
                  <div class="side-bar">
                    <div style="display: flex;justify-content: space-between;" class="tanmu">
                      <div class="danmuwenzi">{{item.commentContent}}</div>
                      <div class="touxiangview1">
                        <img class="touxiang" src="../../assets/image/1.jpeg" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Notice/Center -->
            <div class="chat-notice" v-for="(item,index) in chanpinlist" :key="index">
              <img class="bottomimage" src="../../assets/image/1.jpeg" alt />
              <div class="textcolor">
                <div style="font-size: 14px;text-align: left;">{{item.spuName}}</div>
                <div class="bottom-item2">
                  <div>
                    <div style="font-size: 18px;color:#FF5454">￥{{item.price}}</div>
                    <div
                      style="text-decoration: line-through; font-size:14px"
                    >￥{{item.originalPrice}}</div>
                  </div>
                  <div class="gobuy">去购买</div>
                </div>
              </div>
            </div>
          </div>
          <div class="inputview">
            <div style="text-align: left;">
              <input placeholder="来说点什么吧…" class="inputstyle" v-model="commentContent" />
            </div>
            <div class="fasongdanmu" @click="sendoutbarrage()">发送弹幕</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Toast, Tab, Tabs } from "vant";
import Axios from "axios";
import GLOBAL from "@/api/global_variable.js";
export default {
  name: "Livebroadcast",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      cutnumber: 0,
      note: {
        backgroundImage: "url(" + require("../../assets/image/ceshi.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderRadius: "10px",
      },
      mydata: {},
      chanpinlist: [],
      commentContent: "",
      hostlist: [],
      observerlist: [],
    };
  },
  methods: {
    onClick(name, title) {},
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },

    loaddata: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z348v_liveRadio";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "12121212",
        },
      })
        .then((res) => {
          console.log("res", res);
          that.mydata = res.data.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //加载主持人评论列表
    loadcommentList: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z349v_liveRadioComment";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "12121212", //<comment>直播id</comment>
          createDataGt: 1583415963985,
          liveRadioCommentUserEnum: 2, //<comment>评论人类型:[1=主播=ANCHOR, 2=主持人=HOST,3=观看人=LOOK]max=3</comment>
        },
      })
        .then((res) => {
          console.log("res", res);
          that.hostlist = res.data.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //加载观看者评论列表
    loadcommentList1: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z349v_liveRadioComment";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "12121212", //<comment>直播id</comment>
          createDataGt: 1583415963985,
          liveRadioCommentUserEnum: 3, //<comment>评论人类型:[1=主播=ANCHOR, 2=主持人=HOST,3=观看人=LOOK]max=3</comment>
        },
      })
        .then((res) => {
          console.log("res", res);
          that.observerlist = res.data.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //发送弹幕
    sendoutbarrage: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z356c_liveRadioComment";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "12121212", //<comment>直播id</comment>
          commentContent: that.commentContent,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == 200) {
            Toast("发送成功");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //产品推送
    pushproducts: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z353l_relLiveRadioSpu";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "12121212", //<comment>直播id</comment>
        },
      })
        .then((res) => {
          console.log("res", res);
          that.chanpinlist = res.data.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  mounted() {
    this.loaddata();
    this.pushproducts();
    this.loadcommentList();
    this.loadcommentList1();
  },
};
</script>

<style scoped>
.video-middleview-fenlei-right {
  line-height: 50px;
}
.video-middleview-fenlei {
  display: flex;
  justify-content: space-between;
}
.video-middleview-text3 {
  color: #2c3e50;
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
}
.video-middleview-text4 {
  color: #2c3e50;
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
  display: flex;
  justify-content: flex-start;
}
.ceshitext1 {
  float: right;
  top: 3%;
  padding: 0px 15px;
  margin: 6px 6px 0px 0px;
  box-sizing: border-box;
  /* -webkit-transform: translate(-50%, -50%); */
  /* transform: translate(-50%, -50%); */
  /* color: black; */
  background: #000000;
  /* border-radius: 50px; */
  line-height: 35px;
  color: #ffffff;
  /* padding: 0px 17px; */
  font-weight: bold;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 25px;
  text-align: center;
}
.ceshitext {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* color: black; */
  background: #ffe231;
  border-radius: 50px;
  line-height: 40px;
  color: #141821;
  padding: 0px 17px;
  font-weight: bold;
}
.ceshi1 {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.ceshi {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.side-bar {
  position: fixed;
  bottom: 90px;
  right: 20px;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar1 {
  position: fixed;
  bottom: 135px;
  right: 20px;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar a {
  height: 66px;
  display: inline-block;
  background-color: #ddd;
  margin-bottom: 2px;
}
.side-bar a:hover {
  background-color: #669fdd;
}
.side-bar .icon-qq {
  background-position: 0 -62px;
}
.side-bar .icon-chat {
  background-position: 0 -130px;
  position: relative;
}
.side-bar .icon-blog {
  background-position: 0 -198px;
}
.side-bar .icon-mail {
  background-position: 0 -266px;
}
.side-bar {
  position: fixed;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar a {
  height: 66px;
  display: inline-block;
  background-color: #ddd;
  margin-bottom: 2px;
}
.side-bar a:hover {
  background-color: #669fdd;
}
.side-bar .icon-qq {
  background-position: 0 -62px;
}
.side-bar .icon-chat {
  background-position: 0 -130px;
  position: relative;
}
.side-bar .icon-blog {
  background-position: 0 -198px;
}
.side-bar .icon-mail {
  background-position: 0 -266px;
}
.tanmu {
  left: 240px;
  top: 528px;
  width: 150px;
  height: 35px;
  line-height: 35px;
  border-radius: 4px 4px 4px 4px;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: center;
  padding: 0px 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
}
.touxiangview1 {
  width: 25px;
  height: 100%;
  border-radius: 50px 50px 50px 50px;
  padding: 4px 0px;
  box-sizing: border-box;
}
.danmuwenzi {
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.fasongdanmu {
  line-height: 34px;
  border-radius: 4px;
  color: #000000;
  font-size: 14px;
  text-align: center;
  padding: 0px 20px;
  box-sizing: border-box;
  font-weight: bold;
  font-family: Microsoft Yahei;
  background-color: #ffe231;
  border: 1px solid #ffe231;
  border-radius: 30px;
}
.inputstyle {
  border: 1px solid #999999;
  height: 35px;
  width: 220px;
  border-radius: 4px;
  font-size: 15px;
}
.inputview {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
}
.bottom-item2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.gobuy {
  background-color: rgba(252, 85, 82, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  padding: 0px 20px;
  border-radius: 10px;
  height: 25px;
  margin-top: 18px;
}
.textcolor {
  color: #333333;
  margin-left: 10px;
  width: 100%;
  position: relative;
}
.bottomimage {
  height: 75px;
  width: 80px;
}
.touxiangview {
  border-radius: 50%;
  overflow: hidden;
}
.touxiang {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
.hudong1 {
  padding: 10px 15px;
  box-sizing: border-box;
  background: #f5f6f7;
  height: 300px;
  overflow: auto;
}
body {
  background-color: #ebebeb;
  font-family: -apple-system;
  font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI",
    sans-serif;
}
.chat-sender {
  clear: both;
  font-size: 80%;
}
.chat-sender div:nth-of-type(1) {
  float: left;
}
.chat-sender div:nth-of-type(2) {
  margin: 0 50px 2px 50px;
  padding: 0px;
  color: #848484;
  font-size: 70%;
  text-align: left;
}
.chat-sender div:nth-of-type(3) {
  background-color: #ffe231;
  /*float: left;*/
  margin: 0 50px 10px 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  text-indent: -12px;
  text-align: left;
}

.chat-receiver {
  clear: both;
  font-size: 80%;
}
.chat-receiver div:nth-of-type(1) {
  float: right;
}
.chat-receiver div:nth-of-type(2) {
  margin: 0px 50px 2px 50px;
  padding: 0px;
  color: #848484;
  font-size: 70%;
  text-align: right;
}
.chat-receiver div:nth-of-type(3) {
  /*float:right;*/
  background-color: #b2e281;
  margin: 0px 50px 10px 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
}

.chat-receiver div:first-child img,
.chat-sender div:first-child img {
  width: 40px;
  height: 40px;
  /*border-radius: 10%;*/
}

.chat-left_triangle {
  height: 0px;
  width: 0px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent white transparent transparent;
  position: relative;
  left: -22px;
  top: 3px;
}
.chat-right_triangle {
  height: 0px;
  width: 0px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent transparent #b2e281;
  position: relative;
  right: -22px;
  top: 3px;
}

.chat-notice {
  clear: both;
  font-size: 70%;
  color: white;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: start;
  background: #ffffff;
  padding: 8px;
  box-sizing: border-box;
}
.chat-notice span {
  background-color: #cecece;
  line-height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
}
.item1-text3 {
  padding: 10px 0px;
  text-align: left;
  font-size: 14px;
  text-indent: 2em;
}
.item1-text2 {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #e2e2e2;
}
.item1-text1 {
  text-align: left;
  font-size: 18px;
}
.item1 {
  padding: 15px 10px;
  box-sizing: border-box;
}
.topview-shuliang {
  float: right;
  border: 1px solid red;
  right: 0px;
  top: 0px;
  z-index: 100;
  width: 100px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 0px 0px 0px 10px;
}
.topview {
  height: 200px;
  border: 1px solid green;
  position: relative;
  line-height: 20px;
  background-color: rgba(185, 190, 189, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
</style>