<template>
  <div>
    <div>
      <van-nav-bar title="铁碧图旗舰店" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="videoceshi">
      <div style="padding: 10px 15px;box-sizing: border-box;">
        <div class="topvideo note" :style="note"  @click="Livebroadcast()" >
          <img v-if="mydata.liveRadioTypeEnum == 1" src="../../assets/image/组 378.png" alt class="topview-shuliang" />
          <div v-if="mydata.liveRadioTypeEnum == 1" class="ceshi">
            <div class="ceshitext">直播未开始</div>
          </div>
          <img v-if="mydata.liveRadioTypeEnum == 2" src="../../assets/image/组 378.png" alt class="topview-shuliang" />
          <div v-if="mydata.liveRadioTypeEnum == 2" class="ceshi">
            <div class="ceshitext1">进入直播</div>
          </div>
          <img v-if="mydata.liveRadioTypeEnum == 3" src="../../assets/image/组 378.png" alt class="topview-shuliang" />
          <div v-if="mydata.liveRadioTypeEnum == 3" class="ceshi">
            <div class="ceshitext1">查看回放</div>
          </div>
        </div>
        <div class="video-middleview">
          <div class="video-middleview-text1">{{mydata.liveRadioName}}</div>
          <div style="display: flex;justify-content: end;float: right;">
            <img
              src="../../assets/image/组 381.png"
              alt
              style="width: 20px;height: 20px; margin:0px 6px"
            />
            <img
              src="../../assets/image/组 380.png"
              alt
              style="width: 20px;height: 20px; margin:0px 6px"
            />
          </div>
        </div>
        <div class="video-middleview1">
          {{mydata.liveRadioIntro}}
        </div>
        <div class="bottom1">
          <img
            src="../../assets/image/眼睛.png"
            alt
            width="20px"
            height="17px"
            style="margin-top:2px;margin-right:5px"
          />
          <div style="font-size: 15px;">988人看过</div>
        </div>
        <div class="video-middleview-fenlei">
          <div style="display: flex;justify-content: flex-start;">
            <div class="video-middleview-text4">
              <img
                src="../../assets/image/时间.png"
                alt
                width="18px"
                height="17px"
                style="margin-top:2px;margin-right:5px"
              />{{mydata.startDate}}
            </div>
            <div class="video-middleview-text3">
              <img
                src="../../assets/image/开始.png"
                alt
                width="18px"
                height="17px"
                style="margin-top:2px;margin-right:5px"
              />{{mydata.liveRadioLongDate}}分钟
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-l1">
          <div style="display: table-cell; width:32%;border-right:1px solid #CCCCCC">店铺主页</div>
          <div style="display: table-cell;width:32%;border-right:1px solid #CCCCCC">购物车</div>
          <div style="display: table-cell;width:32%">我的</div>
        </div>
        <div class="bottom-l2">珍珪谷提供技术支持</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import { NavBar, Icon, Lazyload, Swipe, SwipeItem, Card } from "vant";
export default {
  name: "PlayStatus",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card,
  },
  data() {
    return {
      mydata: {},
      isshow1: true,
      isshow2: false,
      liveRadioTypeEnum: "",
      cutnumber: 1,
      note: {
        backgroundImage: "url(" + require("../../assets/image/ceshi.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderRadius: "10px",
      },
    };
  },
  methods: {
    //   返回按钮
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {},
    //跳转到商品详情页
    goCommoditysharing: function () {
      this.$router.push({
        name: "Commoditysharing",
      });
    },

    Livebroadcast: function () {
      this.$router.push({
        name: "Livebroadcast",
      });
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
    //加载商品列表
    loaddata: function () {
      var that = this;
      var api = "http://yapi.jeemoo.com/mock/33/multiapi/z368v_liveRadio";
      Axios.post(api, {
        data: {
          shopId: "2121",
          sortId: 5453432,
          pageNum: 1,
          pageSize: 10,
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
  },
  mounted() {
    this.loaddata();
    this.loaddata1();
  },
};
</script>

<style scoped>
.ceshitext1{
  position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /* color: black; */
    border-radius: 50px;
    line-height: 40px;
    padding: 0px 17px;
    font-weight: bold;
    background-color: #FFE231;
    color: #141821;
}
.ceshitext {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* color: black; */
  background: #999999;
  border-radius: 50px;
  line-height: 40px;
  color: #ffffff;
  padding: 0px 17px;
  font-weight: bold;
}
.ceshi {
  width: 100%;
  height: 100%;
  background-color: rgba(0 , 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.video-middleview-text1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  font-weight: bold;
  line-height: 20px;
}
.bottom {
  padding: 20px 50px;
  text-align: center;
  background: #f4f4f4;
  margin-top: 10px;
}
.bottom-l1 {
  width: 300px;
  color: rgba(16, 16, 16, 0.73);
  font-size: 15px;
  text-align: center;
  font-family: PingFangSC-regular;
  box-sizing: border-box;
  display: flex;
  display: table;
  width: 100%;
}
.bottom-l2 {
  margin-top: 15px;
  height: 20px;

  color: #666666;
  font-size: 15px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.video-middleview-fenlei-right {
  line-height: 50px;
}
.video-middleview-fenlei {
  display: flex;
  justify-content: space-between;
}
.video-middleview-text3 {
  color: rgba(155, 155, 155, 1);
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
  margin-left: 5px;
}
.video-middleview-text4 {
  color: rgba(155, 155, 155, 1);
  font-size: 15px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
}
.bottom1 {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  color: #999999;
}
.video-middleview1 {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 30px;
  margin-top: 15px;
  text-align: left;
}
.ceshi11-text {
  font-size: 4px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.ceshi11 {
  display: flex;
  justify-content: flex-start;
  background: #000000;
  width: 60px;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  opacity: 0.5;
}
.topvideo1 {
  width: 170px;
  height: 90px;
}
.topvideo {
  width: 100%;
  height: 150px;
  line-height: 20px;
  text-align: center;
  position: relative;
}
.middleviewtext1 {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
}
.middleviewtext2 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.middleviewtext3 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
}
.middleviewtext4 {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  display: flex;
  line-height: 21px;
  margin-right: 11px;
}

.topview-shuliang {
  float: right;
  right: 0px;
  top: 0px;
  z-index: 100;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 30px 30px 30px 30px;
  background-color: rgba(0, 0, 0, 0.36);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
}
.ceshi1-text1 {
  color: #844505;
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 30px;
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
  line-height: 30px;
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
  margin-top: 10px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgba(155, 155, 155, 1);
  text-align: left;
}
.cardview {
  background-color: #ffffff;
  padding: 8px 0px 12px 0px;
  margin: 5px 16px;
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
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
}
.swipeitemstyle {
  height: 200px;
}
.imagestyle {
  width: 100%;
  height: 100%;
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
  margin-top: 5px;
}

.video-middleview {
  padding: 15px 0px 0px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
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
  padding: 8px 0px 10px 0px;
  margin: 5px 16px;
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
  padding: 5px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.share {
  margin-left: 10px;
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
}
.toptext3 {
  margin-left: 10px;
}
.toptext1 {
  line-height: 22px;
  color: rgba(125, 125, 125, 1);
  font-size: 14px;
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
  padding: 12px 15px;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: start;
}
</style>