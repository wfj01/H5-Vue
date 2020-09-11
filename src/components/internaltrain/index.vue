<template>
  <div class="pageview">
    <div>
      <van-nav-bar title="内训" fixed>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="topname">
      <div style="display: flex;justify-content: flex-start;">
        <div class="topname-text1">优家美乐管</div>
        <div style="line-height:45px;margin-left: 5px;">
          <img src="../../assets/image/多边形 13.png" alt style="width: 16px;height: 12px;" />
        </div>
      </div>
      <div style="padding-top: 6px;">
        <img
          src="../../assets/image/组 441.png"
          alt
          style="width: 39px;height: 39px;line-height:45px;"
        />
        <img
          src="../../assets/image/组 442.png"
          alt
          style="width: 39px;height: 39px;line-height:45px;"
        />
        <img
          src="../../assets/image/组 443.png"
          alt
          style="width: 39px;height: 39px;line-height:45px;"
        />
      </div>
    </div>
    <div>
      <div class="imagestylebox">
        <van-swipe class="my-swipe">
          <van-swipe-item class="swipeitemstyle">
            <img
              class="imagestyle"
              src="../../assets/image/boy singing on microphone with pop filter.png"
            />
          </van-swipe-item>
          <van-swipe-item class="swipeitemstyle">
            <img
              class="imagestyle"
              src="../../assets/image/boy singing on microphone with pop filter.png"
            />
          </van-swipe-item>
          <van-swipe-item class="swipeitemstyle">
            <img
              class="imagestyle"
              src="../../assets/image/boy singing on microphone with pop filter.png"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="middleview1">
      <div class="parentWrap">
        <div class="parent">
          <div class="child" @click="goClassifieddisplay()">
            <img src="../../assets/image/入职审批.png" alt style="width: 28px;height: 28px;" />
            <div class="xuanzhongziti">入职员工</div>
          </div>
          <div class="child">
            <img src="../../assets/image/管理 (2).png" alt style="width: 28px;height: 28px;" />
            <div class="xuanzhongziti1">管理层</div>
          </div>
          <div class="child">
            <img src="../../assets/image/行政班课程(1).png" alt style="width: 28px;height: 28px;" />
            <div class="xuanzhongziti1">魔方课程</div>
          </div>
          <div class="child">
            <img src="../../assets/image/行政班课程(1).png" alt style="width: 28px;height: 28px;" />
            <div class="xuanzhongziti1">线上课程</div>
          </div>
          <div class="child borderleft">
            <img src="../../assets/image/组 444.png" alt style="width: 28px;height: 28px;" />
            <div class="xuanzhongziti">分享</div>
          </div>
        </div>
      </div>
    </div>
    <div class="middleview2">
      <div :class="isshow1 ? 'middleview2-btn2' : 'middleview2-btn1'" @click="isshowa()">图文信息</div>
      <div :class="isshow2 ? 'middleview2-btn2' : 'middleview2-btn1'" @click="isshowb()">内训直播</div>
    </div>
    <div v-if="isshow1">
      <div
        v-for="(item,index) in mydata.list"
        :key="index"
        @click="EntrystaffDetail()"
        style="padding: 3px;box-sizing: border-box;"
      >
        <div class="imagestylebox">
          <img
            class="imagestyle"
            src="../../assets/image/boy singing on microphone with pop filter.png"
          />
        </div>
        <div style="padding-bottom: 10px;">
          <div
            style="display: flex;justify-content: space-between;padding: 0px 12px;box-sizing: border-box;"
          >
            <div class="itemtitle">{{item.name}}</div>
            <div>
              <img
                src="../../assets/image/组 379.png"
                alt
                style="width: 20px;height: 20px; margin:0px 3px"
              />
              <img
                src="../../assets/image/组 380.png"
                alt
                style="width: 20px;height: 20px; margin:0px 3px"
              />
              <img
                src="../../assets/image/组 381.png"
                alt
                style="width: 20px;height: 20px; margin:0px 3px"
              />
            </div>
          </div>
          <div class="itemtext" style>{{item.intro}}</div>
        </div>
      </div>
    </div>
    <div v-if="isshow2" class="videoceshi">
      <div
        v-for="(item,index) in mydata1.list"
        :key="index"
        @click="Livebroadcast()"
        style="padding: 10px 15px;box-sizing: border-box;"
      >
        <div class="topvideo note1" :style="note1">
          <img
            v-if="item.liveRadioTypeEnum == 1"
            src="../../assets/image/组 378.png"
            alt
            class="topview-shuliang"
          />
          <img
            v-if="item.liveRadioTypeEnum == 2"
            src="../../assets/image/组 378.png"
            alt
            class="topview-shuliang"
          />
          <img
            v-if="item.liveRadioTypeEnum == 3"
            src="../../assets/image/组 378.png"
            alt
            class="topview-shuliang"
          />
        </div>
        <div class="video-middleview">
          <div class="video-middleview-text1">{{item.name}}</div>
          <div class="video-middleview-text2">{{item.intro}}</div>
          <div class="video-middleview-fenlei">
            <div style="display: flex;justify-content: flex-start;">
              <div class="video-middleview-text4">
                <i class="iconfont iconshijian" style="margin:0px 3px"></i>2020-05-31 20:30
              </div>
              <div class="video-middleview-text3">
                <i class="iconfont iconbofang" style="margin:0px 3px"></i>
                {{item.liveRadioLongDate}}分钟
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:60px;background: #F2F2F2;" v-if="mydata1.list != []"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Lazyload, Swipe, Toast, SwipeItem, Card } from "vant";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
export default {
  name: "Internaltrain",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card,
    [Toast.name]: Toast,
  },
  data() {
    return {
      isshow1: true,
      isshow2: false,
      cutnumber: 1,
      mydata: [],
      mydata1: [],
      images: [
        { url: "https://img.yzcdn.cn/vant/apple-1.jpg" },
        { url: "https://img.yzcdn.cn/vant/apple-2.jpg" },
      ],
      note: {
        backgroundImage: "url(" + require("../../assets/image/ceshi.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderRadius: "20px",
      },
      note1: {
        backgroundImage: "url(" + require("../../assets/image/ceshi.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderRadius: "20px",
      },
    };
  },
  methods: {
    //跳转到详情页
    EntrystaffDetail: function () {
      this.$router.push({
        name: "EntrystaffDetail",
      });
    },
    //跳转到分类入职员工
    goClassifieddisplay: function () {
      this.$router.push({
        name: "Classifieddisplay",
      });
    },
    //跳转到直播间详情
    Livebroadcast: function () {
      this.$router.push({
        name: "Livebroadcast",
      });
    },
    onClickRight: function () {
      Toast("按钮");
    },
    //显示图文信息
    isshowa: function () {
      this.isshow1 = true;
      this.isshow2 = false;
    },
    //显示内训直播
    isshowb: function () {
      this.isshow2 = true;
      this.isshow1 = false;
    },
    //加载主页商品列表
    loaddata: function () {
      var that = this;
      let data = {
        shopId: "2121",
        sortId: 5453432,
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z344p_imgText";
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
    loaddata1: function () {
      var that = this;
      let data = {
        shopId: "2121",
        sortId: 5453432,
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z345p_liveRadio";
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
          this.mydata1 = res.data;
          Toast(res.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.loaddata();
    this.loaddata1();
  },
};
</script>

<style scoped>
.itemtext {
  padding: 0px 12px;
  box-sizing: border-box;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #c3c6d1;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.itemtitle {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #141821;
}
.borderleft {
  border-left: 1px solid #ffe231;
}
.xuanzhongziti {
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #141821;
  text-align: center;
}
.xuanzhongziti1 {
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #c3c6d1;
  text-align: center;
}
body,
p {
  margin: 0;
}
.parentWrap {
  overflow: hidden;
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
}
.parent {
  font-size: 0;
  margin-right: -20px;
  overflow: hidden;
}
.child {
  display: inline-block;
  vertical-align: top;
  width: 20%;
  padding-right: 15px;
  box-sizing: border-box;
  background-clip: content-box;
  font-size: 16px;
  text-align: center;
}
.imagestylebox {
  padding: 10px 12px;
  box-sizing: border-box;
}
.topname-text1 {
  font-size: 22px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #141821;
  line-height: 48px;
  text-align: left;
}
.topview-shuliang {
  float: right;
  right: 0px;
  top: 0px;
  z-index: 100;
  width: 75px;
  height: 22px;
  line-height: 30px;
  border-radius: 30px 30px 30px 30px;
  background-color: rgba(0, 0, 0, 0.36);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
}
.topvideo {
  width: 100%;
  height: 150px;
  line-height: 20px;
  text-align: center;
}
/*左上角标签，父元素必须设置position: relative;overflow: hidden;height: 大于150;width: 大于150px;，同时，角标标签内加入属性superscript-title="左上角标签文字内容"*/
.subscript:after {
  position: absolute;
  top: 15px;
  left: -45px;
  width: 150px;
  height: 25px;
  content: attr(superscript-title);
  text-align: center;
  font-size: 12px;
  color: white;
  line-height: 25px;
  font-family: "Microsoft YaHei", "PingFangSC-Regular", "sans-serif",
    "San Francisco", "Microsoft Sans Serif", "Arial"; /*背景旋转角度渐变*/
  background: -webkit-linear-gradient(
    90deg,
    orange 0%,
    orangered 100%
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    90deg,
    orange 0%,
    orangered 100%
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    90deg,
    orange 0%,
    orangered 100%
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    90deg,
    orange 0%,
    orangered 100%
  ); /* 标准的语法（必须放在最后） */ /*旋转角标*/
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/*时下流行的风格--【新拟态】________________________*/
.subscript {
  position: relative;
  overflow: hidden;
  font-family: "Arial";
  width: 200px;
  height: 200px;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1),
    -10px -10px 15px rgba(255, 255, 255, 0.9);
  background: linear-gradient(-180deg, #eee, #f9f9f9);
}

/*渐变文字样式________________________*/
.subscript p {
  margin: 0;
  padding: 0;
  line-height: 200px;
  font-size: 100px;
  text-align: center;
  color: #238aea;
  /*渐变文字（仅谷歌内核浏览器支持）*/
  background: -webkit-linear-gradient(0deg, #1858f1, #32c0e3);
  -webkit-text-fill-color: transparent;
}
.swipeitemstyle {
  height: 200px;
}
.imagestyle {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
/* .videoceshi {
  margin: 10px 0px;
} */
.video-middleview-fenlei-right {
  line-height: 50px;
}
.video-middleview-fenlei {
  display: flex;
  justify-content: space-between;
}
.video-middleview-text4 {
  color: rgba(155, 155, 155, 1);
  font-size: 13px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
}
.video-middleview-text3 {
  color: rgba(155, 155, 155, 1);
  font-size: 13px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
  margin-left: 5px;
}
.video-middleview-text2 {
  color: rgba(155, 155, 155, 1);
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
  color: #333333;
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 26px;
  font-weight: bold;
}
.video-middleview {
  padding: 10px 0px 0px 0px;
  box-sizing: border-box;
}
.topvideo {
  width: 100%;
  height: 150px;
  line-height: 20px;
  text-align: center;
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
.toptext11 {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 10px;
}
.middletext {
  margin-top: 10px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgba(155, 155, 155, 1);
}
.cardview {
  background-color: #ffffff;

  padding: 8px 0px 12px 0px;
  margin: 5px 16px;
}
.cardview-bottom {
  border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.middleview2-btn1 {
  width: 147px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border-radius: 30px;
  border: 2px solid #c3c6d1;
  color: #141821;
}
.middleview2-btn2 {
  width: 147px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border-radius: 30px;
  background: #ffe231;
  color: #141821;
  border: 2px solid #ffe231;
}
.middleview2 {
  padding: 10px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.share {
  margin-left: 20px;
  line-height: 30px;
}
.yuan2 {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(185, 185, 185, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  margin: 0px 4px;
}
.yuan1 {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  border-radius: 50%;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  margin: 0px 4px;
}
.middleview1 {
  padding: 12px;
  box-sizing: border-box;
  display: flex;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  border-radius: 15px;
}
.toptext1 {
  height: 20px;
  color: rgba(125, 125, 125, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.toptext2 {
  width: 80px;
  height: 23px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 1);
  font-size: 15px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  margin-top: 15px;
}
.topname {
  padding: 6px 12px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>