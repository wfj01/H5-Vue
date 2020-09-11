<template>
  <div>
    <div>
      <van-nav-bar title="我要开店" fixed>
        <template #left @click="onClickLeft()">
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="middleview">
      <div class="middleview1">
        <div class="middleview1-toptitle">我的店铺列表</div>
        <div class="middleview1-box">
          <div class="item-box" v-for="(item,index) in mydata.list" :key="index">
            <div class="item">
              <div class="item-left">
                <div>{{index+1}}</div>
                <div class="item-left-righttext">{{item.shop_name}}</div>
              </div>
              <div class="item-right" @click="openConfirm()">
                <div>{{item.shopUserTypeEnumString}}</div>
                <div style="margin-left:10px">
                  <van-icon name="arrow" size="19px" color="#999999" style="padding-top:2px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middleview">
      <div class="middleview1">
        <div class="middleview1-toptitle middleview2">请选择我要开店的套餐</div>
        <div class="middleview2-box">
          <div class="middleview2-box-wai">
            <div
              v-for="(item,index) in Setmeallist"
              :key="index"
              style="height: 120px;margin: 20px 0px;"
            >
              <img
                :src="item.setMealBgUrl"
                alt
                style="width: 100%;height: 100%;"
                @click="Setmealdetail()"
              />

              <img
                @click.stop="xuanzeClick()"
                :src="isClick1 == true ? image2 : image1"
                alt
                style="position: relative;top: -115px;left: 295px;width: 28px;height: 28px;"
              />

              <div class="text1">{{item.setMealName}}</div>
              <div class="text2">{{item.setMealIntro}}</div>
              <div class="text3">{{item.priceIntro}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirmLayercovering" v-show="isshow">
      <div class="confirmLayer">
        <p class="confirmTit">店铺详情</p>
        <div>
          <div class="itembox">
            <div class="itembox-left">店铺名称：</div>
            <div class="itembox-right">冰水家园小果人家</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">状态：</div>
            <div class="itembox-right">未赠送</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">购买时间：</div>
            <div class="itembox-right">2020-5-21 13:02:56</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">购买渠道：</div>
            <div class="itembox-right">线上购买</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">店铺名称：</div>
            <div class="itembox-right">冰水家园小果人家</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">店铺类型：</div>
            <div class="itembox-right">企业版</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">套餐详情：</div>
            <div class="itembox-right">20-50人</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">入驻时间：</div>
            <div class="itembox-right">未入驻</div>
          </div>

          <div class="itembox">
            <div class="itembox-left">审核状态：</div>
            <div class="itembox-right">已通过</div>
          </div>
          <div class="itembox">
            <div class="itembox-left">金额：</div>
            <div class="itembox-right">3598 元</div>
          </div>
          <div class="itembox">
            <div class="widthtext">赠送人手机号：</div>
          </div>
          <div class="name">
            <van-field type="tel" class="inputstyle" v-model="acceptUserPhone" />
          </div>
        </div>
        <div class="confirmbtns">
          <a class="confirmClose" @click="guanbiClick()">关闭</a>
          <a class="confirmSure" @click="querenClick()">赠送</a>
        </div>
      </div>
    </div>
    <div class="bottomview" @click="lastBtn()">
      <div class="bottombtn">下 一 步</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Dialog, Field, Toast } from "vant";
import Axios from "axios";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
export default {
  name: "Myopenshop",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
  },
  data() {
    return {
      cutnumber: 1,
      show: false,
      isshow: false,
      acceptUserPhone: "",
      mydata: {},
      isClick1: true,
      isClick2: false,
      image1: require("../../../assets/weixuanze.png"),
      image2: require("../../../assets/xuanze.png"),
      Setmeallist: [],
    };
  },
  methods: {
    //关闭弹窗事件
    guanbiClick() {
      this.isshow = false;
    },
    //赠送事件
    querenClick: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z308c_shopGive";
      console.log("api地址", api);
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          shopId: "店铺ID",
          acceptUserPhone: that.acceptUserPhone,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == 200) {
            Toast("赠送成功");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.isshow = false;
    },
    change(e, index) {
      this.form.formList[index].val = e;
      this.$forceUpdate();
    },
    // 选择
    xuanzeClick() {
      this.isClick1 = true;
      this.isClick2 = false;
    },
    xuanzeClick1() {
      this.isClick1 = false;
      this.isClick2 = true;
    },
    //加载
    loaddata() {
      var that = this;
      let data = {
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z304p_shop";
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
    //加载套餐列表
    loadSetmeal: function () {
      var that = this;
      let data = {
        setMealTypeEnum: 1, //<comment>套餐类型:[1=默认套餐(个人版，企业版)=DEFAULT,2=增加人数=ADD_COUNT, 3=增加期限=ADD_DATE,4=隐藏人数=HID_PERSON_COUNT,5=隐藏商品浏览数，购买数=HIDE_BUG_COUNT,6=隐藏直播打赏详情=HID_MONEY_DETAIL]max=6</comment>
      };
      var api = GLOBAL.baseURL + "/multiapi/z305l_shopSetMeal";
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
          that.Setmeallist = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //跳转套餐详情
    Setmealdetail: function () {
      this.$router.push({
        name: "Setmealdetail",
      });
    },
    //下一步
    lastBtn: function () {
      this.$router.push({
        name: "ShoppSuccess",
      });
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    //赠送
    lookzengsong: function () {
      this.show = true;
    },
    onClickRight: function () {
      Toast("按钮");
    },

    openConfirm() {
      var that = this;
      that.isshow = true;
      console.log("simale", that.isshow);
    },
  },
  mounted() {
    this.loaddata();
    this.loadSetmeal();
  },
};
</script>

<style scoped>
.text1 {
  position: relative;
  top: -120px;
  left: -10px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  display: inline-block;
  display: inline;
  zoom: 1;
}
.text2 {
  position: relative;
  top: -115px;
  left: 23px;
  font-size: 13.5px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  zoom: 1;
  width: 275px;
  height: 36px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.text3 {
  position: relative;
  top: -100px;
  left: 270px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  width: 115px;
}
.widthtext {
  width: 100%;
  left: 64px;
  top: 205px;
  height: 22px;
  color: rgba(3, 3, 3, 1);
  font-size: 16px;
  text-align: left;
  font-family: Helvetica-regular;
}
.inputstyle {
  border-radius: 5px;
  box-shadow: 0px 0px 0px 0px;
  background-color: #ffffff;
  height: 44px;
  width: 100%;
  border: 1px solid #9f9f9f;
}
.textarea {
  height: 120px;
}
.name {
  padding: 10px 25px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.itembox {
  padding: 5px 0px 5px 25px;
  display: flex;
  justify-content: start;
}
.itembox-left {
  left: 64px;
  top: 205px;
  width: 90px;
  height: 22px;
  color: rgba(3, 3, 3, 1);
  font-size: 16px;
  text-align: left;
  font-family: Helvetica-regular;
}
.itembox-right {
  left: 157px;
  top: 205px;
  height: 22px;
  color: rgba(3, 3, 3, 1);
  font-size: 16px;
  text-align: left;
  font-family: Helvetica-regular;
  margin-left: 8px;
}
button {
  border: none;
  padding: 0.05rem 0.1rem;
  border-radius: 5px;
  background: lightcoral;
  color: #ffffff;
}

/* 确认弹框 start */
.confirmLayercovering {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1005;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0;
}

.confirmLayer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: #fff;
  border-radius: 10px;
  padding: 0.1rem;
  box-sizing: border-box;
  padding-bottom: 5px;
}

.confirmTit {
  width: 100%;
  color: #333;
  font-size: 17px;
  text-align: center;
}

.confirmbtns {
  width: 100%;
  display: flex;
  height: 35px;
}

.confirmbtns a {
  display: inline-block;
  flex: 1;
  height: 100%;
  line-height: 2.5;
  border-radius: 4px;
  font-size: 0.16rem;
}

.confirmClose {
  background-color: #bbb;
  color: #fff;
  margin-right: 0.1rem;
  text-align: center;
  width: 40%;
}

.confirmSure {
  background: #ff7035;
  color: #fff;
  text-align: center;
  width: 40%;
}

/* 确认弹框 end */
.bottomview {
  padding: 0px 20px 30px 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.bottombtn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 7px 7px 7px 7px;
  background: #ffe231;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0);
  font-family: Arial;
  border-radius: 25px;
}
.waibianju {
  margin-top: 10px;
}
.middleview2-box-nei {
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(248, 248, 248, 1);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
  padding: 15px;
  box-sizing: border-box;
}
.middleview2-box-wai {
  padding: 15px;
  box-sizing: border-box;
}
.middview2-itembox1-list {
  display: flex;
  justify-content: space-between;
}
.middview2-itembox1-list3 {
  height: 17px;
  color: rgba(45, 45, 45, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  text-align: right;
  margin-top: 5px;
}
.middview2-itembox1-list2 {
  margin-top: 10px;
  color: rgba(155, 155, 155, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /*截取第三行*/
  overflow: hidden;
}
.middview2-itembox1-list1 {
  height: 22px;
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middleview2 {
  margin-top: 10px;
}
.item {
  display: flex;
  justify-content: space-between;
}
.item-left-righttext {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  width: 120px;
  margin-left: 15px;
  color: #262626;
  text-align: left;
}
.item-left {
  display: flex;
  justify-content: start;
  color: #262626;
  font-weight: bold;
}
.item-right {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  color: #999999;
}
.item {
  line-height: 25px;
  padding: 3px 8px;
  box-sizing: border-box;
  width: 100%;
  font-size: 11px;
}
.item-box {
  width: 100%;
  padding: 5px 20px;
  box-sizing: border-box;
}
.middleview1-toptitle {
  width: 100%;
  padding: 5px 20px;
  box-sizing: border-box;
  line-height: 20px;
  color: #262626;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-regular;
}
</style>