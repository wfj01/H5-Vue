
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
    <div>
      <van-swipe class="my-swipe">
        <van-swipe-item class="swipeitemstyle">
          <img class="imagestyle" src="../../assets/image/ceshi.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img class="imagestyle" src="../../assets/image/ceshi.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img class="imagestyle" src="../../assets/image/ceshi.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img class="imagestyle" src="../../assets/image/ceshi.jpg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="middleview-title">
      <div class="middleview-titleview">
        <div class="middleview-title-item1left">{{mydata.spuname}}</div>
        <img class="iconview" src="../../assets/image/组 380.png" alt />
      </div>
      <div class="middleview-title2">
        <div class="middleview-title-item2">
          <div class="middleview-title-item2left">￥{{mydata.price}}</div>
          <div class="middleview-title-item2left2">￥{{mydata.originalPrice}}</div>
        </div>
        <div class="middleview-title-item2right">已售：{{mydata.soldCount}}</div>
      </div>
      <div class="middleview-title3">
        <div class="middleview-title3text">请选择购买数量</div>
        <div>
          <ul class="btn-numbox">
            <li>
              <ul class="count">
                <li>
                  <span id="num-jian" class="num-jian" @click="jianfa(cutnumber)">-</span>
                </li>
                <li>
                  <input type="text" class="input-num" id="input-num" v-model="cutnumber" />
                </li>
                <li>
                  <span id="num-jia" class="num-jia" @click="jiafa(cutnumber)">+</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="middleview-title4">{{mydata.spuIntro}}</div> -->
      <div class="middleview-title4">{{mydata.spuIntro}}</div>
    </div>
    <div style="height:50px"></div>
    <div class="dibu">
      <div class="ceshi1">
        <div class="ceshi1-item">
          <img src="../../assets/image/组 137.png" style="width: 20px;height: 20px;" alt />
          <div style="font-size: 15px;color: #8E8E8E;">店铺</div>
        </div>

        <div class="ceshi1-item" @click="addshoucang()">
          <img :src="selectshoucang == false ? image2 : image1" style="width: 20px;height: 20px;" alt />
          <div style="font-size: 15px;color: #8E8E8E;">收藏</div>
        </div>
        <div class="ceshi1-item">
          <img src="../../assets/image/购物车.png" style="width: 20px;height: 20px;" alt />
          <div style="font-size: 15px;color: #8E8E8E;">购物车</div>
        </div>
      </div>
      <div>
        <van-button class="btn1" @click="addShopCar()">加入购物车</van-button>
        <van-button class="btn2">立即购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
import {
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Button,
} from "vant";
export default {
  name: "Commoditysharing",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button,
  },
  data() {
    return {
      cutnumber: 1,
      mydata: {},
      selectshoucang: false,
      image1: require("../../assets/image/组 381.png"),
      image2: require("../../assets/image/收藏.png"),
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    // 减少
    jianfa: function () {
      var that = this;
      console.log("that.cutnumber", that.cutnumber >= 1);

      if (that.cutnumber <= 1) {
        return;
      } else {
        that.cutnumber = that.cutnumber - 1;
        console.log("that.cutnumber", that.cutnumber);
      }
    },
    // 加法
    jiafa: function () {
      var that = this;
      that.cutnumber = that.cutnumber + 1;
      console.log("that.cutnumber", that.cutnumber);
    },
    onClickRight: function () {
      Toast("按钮");
    },
    // 添加购物车
    addShopCar: function () {
      var that = this;
      let data = {
        id: 1,
        num: that.cutnumber,
        skuId: 11,
      };
      var api = GLOBAL.baseURL + "/multiapi/z499c_cart";
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 添加收藏
    addshoucang: function () {
      var that = this;
      that.selectshoucang = true;
      let data = {
        objectId: "121212",
        relUserSkuTypeEnum: 5, //<comment>收藏类型:[1=内训直播=INSIDE_RADIO, 2=内训图文=INSIDE_TEXT ,3=商品=SKU,4=首页直播=RADIO,5=店铺=shop]max=5</comment>
      };
      var api = GLOBAL.baseURL + "/multiapi/z461c_relUserSku";
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 加载数据
    loaddata: function () {
      var that = this;
      let data = {
        id: "1",
      };
      var api = GLOBAL.baseURL + "/multiapi/z346v_imgText";
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
  activated() {
    this.loaddata();
  },
};
</script>

<style scoped>
.btn1 {
  background: #5351fb;
  border-radius: 36px;
  border: 1px solid #5351fb;
  color: #ffffff;
  font-weight: bold;
  width: 100px;
  font-size: 13.5px;
  height: 38px;
}
.btn2 {
  background: #ffe231;
  border-radius: 36px;
  border: 1px solid #ffe231;
  color: #000000;
  font-weight: bold;
  width: 100px;
  font-size: 13.5px;
  height: 38px;
}
.ceshi1-item {
  margin: 0px 5px;
  text-align: center;
}
.ceshi1 {
  display: flex;
}
.dibu {
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 6px 10px 10px 10px;
  box-sizing: border-box;
}
.middleview-title4 {
  margin-top: 10px;
  box-sizing: border-box;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  word-break: break-all;
}
.middleview-title3text {
  font-size: 15.5px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 32px;
}
.middleview-title3 {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.btn-numbox {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
}

.btn-numbox li {
  float: left;
}

.btn-numbox li .number,
.kucun {
  display: inline-block;
  font-size: 12px;
  color: #808080;
  vertical-align: sub;
}

.btn-numbox .count {
  overflow: hidden;
  padding-left: 0px;
  border-radius: 25px;
  border: 2px solid #dddfe7;
}

.btn-numbox .count .num-jian,
.input-num,
.num-jia {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  background-color: #ffffff;
}
.btn-numbox .count .input-num {
  width: 30px;
  height: 26px;
  color: #333;
  background-color: #ffffff;
  border: none;
  border-left: 2px solid #dddfe7;
  border-right: 2px solid #dddfe7;
}
.middleview-title-item2left {
  left: 15px;
  top: 500px;
  width: 59px;
  font-weight: bold;
  height: 30px;
  color: #1c69d4;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 30px;
}
.middleview-title-item2left2 {
  left: 67px;
  top: 500px;
  width: 78px;
  height: 30px;
  line-height: 30px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  text-decoration: line-through;
}
.middleview-title-item2right {
  left: 215px;
  top: 500px;
  width: 145px;
  height: 30px;
  line-height: 30px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: right;
  font-family: PingFangSC-regular;
}
.middleview-title2 {
  display: flex;
  justify-content: space-between;
  line-height: 35px;
  margin-top: 5px;
}
.middleview-title-item2 {
  display: flex;
  justify-content: start;
}
.iconview {
  left: 338px;
  top: 474px;
  width: 24px;
  height: 24px;
  color: rgba(98, 98, 98, 1);
}
.middleview-title-item1left {
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middleview-title {
  padding: 15px;
  box-sizing: border-box;
}
.middleview-titleview {
  display: flex;
  justify-content: space-between;
}
.swipe {
  width: 100%;
  height: 380px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.swipeitemstyle {
  left: 0px;
  width: 100%;
}
.bottom {
  padding: 0px 55px;
  text-align: center;
}
.bottom-l1 {
  width: 300px;
  color: rgba(16, 16, 16, 0.73);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  padding: 10px 40px;
  box-sizing: border-box;
  display: flex;
}
.bottom-l2 {
  left: 55px;
  top: 1358px;
  width: 266px;
  height: 20px;
  color: rgba(16, 16, 16, 0.73);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.middleview2 {
  padding: 0px 15px;
  box-sizing: border-box;
}
.ptext {
  line-height: 26px;
  font-size: 17px;
  color: #80858b;
}
.round_icon {
  width: 200px;
  height: 120px;
  box-shadow: 0 0 0 2px #ececec, 0 0 0 3px rgba(0, 0, 0, 0.4);
}
.round_iconview {
  text-align: center;
}
.jianjie {
  color: rgba(134, 134, 134, 1);
  font-size: 14px;
  text-align: left;
  font-family: Arial-regular;
  text-indent: 2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.middview1-texticon {
  display: flex;
  justify-content: space-between;
  line-height: 34px;
}
.middview1-text1 {
  display: flex;
  justify-content: start;
  font-size: 14px;
  line-height: 30px;
  color: rgba(16, 16, 16, 1);
}
.share {
  margin-left: 6px;
  line-height: 30px;
}
.share1 {
  margin-left: 10px;
}
.middview1 {
  padding: 15px 20px;
  box-sizing: border-box;
}
.topview {
  padding: 10px 10px 0px 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
}
</style>