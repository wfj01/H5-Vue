<template>
  <div
    style="
    height: 100vh;
    /* position: relative; */
    /* bottom: 0; */
    /* position: relative; */
    /* bottom: 0; */
    position: relative;
"
  >
    <div>
      <van-nav-bar title="购物车" fixed>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="pageview">
      <van-swipe-cell v-for="(item,index) in mydata.list " :key="index">
        <div class="waibiankuang">
          <div class="loginPage">
            <div class="login_left">
              <div class="leftview">
                <div @tap="opt(item.isbuyzb, index)">
                  <!-- <img src="../../assets/weixuanzhong1.png" class="leftview-icon" alt=""> -->
                  <img src="../../assets/xuanzhong1.png" class="leftview-icon" alt />
                </div>
              </div>
              <div v-if="item.boolPublishEnum == 1" class="con_img">
                <img class="imgstyle" src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
                <div class="ms">
                  <div class="yixiajia">已下架</div>
                </div>
              </div>
            </div>
            <div class="login_right">
              <div class="toptitle">{{item.name}}</div>
              <div class="toptext">{{item.intro}}</div>
              <div class="middleviewtext">
                <div class="middleviewtext_left">
                  <div class="midddviewtext_leftprice">￥{{item.price}}</div>
                  <div class="midddviewtext_rightprice">￥{{item.originalPrice}}</div>
                </div>
                <div>
                  <ul class="btn-numbox">
                    <li>
                      <ul class="count">
                        <li>
                          <span id="num-jian" class="num-jian" @click="jianfa(item.num)">-</span>
                        </li>
                        <li>
                          <input type="text" class="input-num" id="input-num" v-model="cutnumber" />
                        </li>
                        <li>
                          <span id="num-jia" class="num-jia" @click="jiafa(item.num)">+</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <template #right class="heightstyle">
          <van-button
            class="heightstyle colorStyle1"
            square
            type="primary"
            text="收藏"
            @click="shoucangClick()"
          />
          <van-button
            class="heightstyle colorStyle2"
            square
            type="danger"
            text="删除"
            @click="deleteClick()"
          />
        </template>
      </van-swipe-cell>
      <div>
        <div class="bottombtn">
          <div class="bottombtn-left">
            <img src="../../assets/xuanzhong1.png" class="leftview-icon1" alt />
            <div>全选</div>
            <div style="margin-left: 10px;">删除</div>
          </div>
          <div class="bottombtn-right">
            <div>合计:￥1680</div>
            <div class="bottombtn1" @click="onSubmit()">结算（2）</div>
          </div>
        </div>
      </div>
      <div style="height:150px"></div>
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
  SwipeCell,
  Button,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  NavBar,
  Toast,
  Icon,
} from "vant";
export default {
  name: "ShoppCart",
  components: {
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
      mydata: {},
      checked: "",
    };
  },
  methods: {
    onSubmit: function () {
      this.$router.push({
        name: "Buynow",
      });
    },
    shoucangClick: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z498d_cart_1598201502942";
      console.log("api地址", api);
      Axios.post(api, {
        data: {
          id: 1,
          num: 1,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == 200) {
            Toast("收藏成功");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //删除数据操作
    deleteClick: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z496d_cart";
      console.log("api地址", api);
      Axios.post(api, {
        data: {
          idList: ["1111111", "1111112"],
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == 200) {
            Toast("删除成功");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    //结算
    jiesuanClick: function () {
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/z496p_cart";
      Axios.post(api, {
        data: {
          spuList: [
            {
              skuId: 111,
              num: 11,
            },
          ],
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.data.code == 200) {
            Toast.success("购买成功");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 减少
    jianfa: function (num) {
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
    //全选方法
    all: function () {
      var that = this;
      if (this.all_opt) {
        this.all_opt = false;
        this.list1.forEach(function (item) {
          if (!(item.isbuyzb == 1)) {
            item.isbuyzb = 0;
            that.totalNum = 0;
          }
        });
      } else {
        this.all_opt = true;
        this.list1.forEach(function (item) {
          if (!(item.isbuyzb == 1)) {
            item.isbuyzb = 2;
            that.totalNum += Number(item.bdTbSignupDTO.wjfy);
          }
        });
      }
    },
    onClickLeft: function () {
      Toast("返回");
    },
    onClickRight: function () {
      Toast("按钮");
    },
    loaddata: function () {
      var that = this;
      let data = {
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z496p_cart";
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
.leftview-icon1 {
  widows: 22px;
  height: 22px;
  padding-top: 16px;
  margin-right: 5px;
}
.pageview {
  background: #f8f8f8;
  height: 100%;
}
.con_img {
  position: relative;
  width: 90px;
  height: 90px;
}
.ms {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 90px;
  opacity: 0.6;
  background: #cccccc;
  -webkit-display: flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.yixiajia {
  width: 60px;
  height: 60px;
  background: #000000;
  opacity: 0.67;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  line-height: 60px;
  color: #ffffff;
}
.bottombtn-left {
  display: flex;
  justify-content: space-between;
}
.bottombtn-right {
  display: flex;
  justify-content: space-between;
  color: #262626;
}
.deletebtn {
  line-height: 55px;
  margin-left: 20px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
}
.waibiankuang {
  padding: 10px 16px;
  box-sizing: border-box;
  background-color: #ffffff;
}
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  text-decoration: none;
}

a:link {
  text-decoration: none;
}

img {
  vertical-align: middle;
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
.loginPage {
  display: flex;
  justify-content: space-between;
}
.imgstyle {
  width: 90px;
  height: 90px;
}
.login_right {
  margin-left: 12px;
  width: 100%;
}
.toptitle {
  line-height: 36px;
  font-size: 17px;
  text-align: left;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
}
.toptext {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  text-align: left;
}
.middleviewtext {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.middleviewtext_left {
  display: flex;
  justify-content: space-between;
}
.midddviewtext_leftprice {
  color: #1c69d4;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 32px;
}
.midddviewtext_rightprice {
  color: #999999;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  text-decoration: line-through;
  margin-left: 8px;
  line-height: 32px;
}
.login_left {
  display: flex;
  justify-content: space-between;
}
.leftview {
  line-height: 90px;
  margin-right: 5px;
}
.leftview-icon {
  width: 22px;
  font-size: 22px;
  line-height: 90px;
  color: #4a90e2;
}
.leftview-text {
  line-height: 40px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.goods-card {
  margin: 0;
  background-color: "@white";
}

.delete-button {
  height: 100%;
}

.heightstyle {
  height: 100%;
}
.colorStyle1 {
  background: #ff9800;
  border: 1px solid #ff9800;
  margin-right: -3px;
}
.colorStyle2 {
  background: #fc5552;
}
.bottombtn {
  display: flex;
  justify-content: space-between;
  display: -webkit-box;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  line-height: 55px;
  margin-bottom: 50px;
  background-color: #ffffff;
  padding: 6px 12px;
  box-sizing: border-box;
}
.bottombtn1 {
  margin-left: 20px;
  left: 271px;
  top: 677px;
  width: 110px;
  height: 36px;
  line-height: 36px;
  background-color: #ffe231;
  color: #262626;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  border-radius: 20px;
  margin: 7.5px 0px 7.5px 10px;
}
</style>
