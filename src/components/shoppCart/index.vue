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
    <div>
      <van-swipe-cell>
        <div class="waibiankuang">
          <div class="loginPage">
            <div class="login_left">
              <div class="leftview">
                <div @tap="opt(item.isbuyzb, index)">
                  <!-- v-if="item.isbuyzb == 0" -->
                  <div class="iconfont iconicon_huabanfuben leftview-icon"></div>
                  <!-- <div v-if="item.isbuyzb == 2" class="iconfont icon-xuanzhong"></div>
                  <div v-if="item.isbuyzb == 1" class="iconfont icon-xuanzhong icon_over"></div>-->
                </div>
              </div>
              <div>
                <img class="imgstyle" src="../../assets/logo.png" alt />
              </div>
            </div>
            <div class="login_right">
              <div class="toptitle">如厕沐浴套餐2</div>
              <div class="middleviewtext">
                <div class="middleviewtext_left">
                  <div class="midddviewtext_leftprice">￥168</div>
                  <div class="midddviewtext_rightprice">￥888</div>
                </div>
                <div>
                  <ul class="btn-numbox">
                    <li>
                      <ul class="count">
                        <li>
                          <span id="num-jian" class="num-jian" @click="jianfa()">-</span>
                        </li>
                        <li>
                          <input type="text" class="input-num" id="input-num" v-model="cutnumber" />
                        </li>
                        <li>
                          <span id="num-jia" class="num-jia" @click="jiafa()">+</span>
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
          <van-button class="heightstyle colorStyle1" square type="primary" text="收藏" />
          <van-button class="heightstyle colorStyle2" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <div
      style="padding: 10px 12px;position: absolute;bottom: 35px;width: 100%;box-sizing: border-box;"
    >
      <div class="bottombtn">
        <div class="bottombtn-left">
          <van-checkbox v-model="checked" @tap="all()">全选</van-checkbox>
          <div class="deletebtn">删除</div>
        </div>
        <div class="bottombtn-right">
          <div>合计:￥1680</div>
          <div class="bottombtn1">结算（2）</div>
        </div>
      </div>
    </div>
    <div style="height:30px"></div>
  </div>
</template>

<script>
import Vue from "vue";
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
    };
  },
  methods: {
    onSubmit: function () {
      this.$router.push({
        name: "Buynow",
      });
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
  },
};
</script>

<style scoped>
.bottombtn-left {
  display: flex;
  justify-content: space-between;
}
.bottombtn-right {
  display: flex;
  justify-content: space-between;
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
  padding-top: 10px;
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
  border: 1px solid rgba(185, 185, 185, 1);
  cursor: pointer;
  background-color: rgba(185, 185, 185, 1);
  margin: 0px 1px;
}
.btn-numbox .count .input-num {
  width: 30px;
  height: 26px;
  color: #333;
  border: 1px solid rgba(185, 185, 185, 1);
  background-color: rgba(185, 185, 185, 1);
}
.loginPage {
  display: flex;
  justify-content: start;
}
.imgstyle {
  width: 90px;
  height: 90px;
}
.toptitle {
  margin-left: 12px;
  line-height: 40px;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middleviewtext {
  width: 100%;
  margin-left: 12px;
  display: flex;
  justify-content: space-between;
}
.middleviewtext_left {
  display: flex;
  justify-content: space-between;
}
.midddviewtext_leftprice {
  padding-top: 20px;
  color: rgba(208, 2, 27, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.midddviewtext_rightprice {
  padding-top: 20px;
  color: rgba(178, 178, 178, 1);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  text-decoration: line-through;
  margin-left: 8px;
  line-height: 22px;
}
.login_left {
  display: flex;
  justify-content: space-between;
}
.leftview {
  line-height: 90px;
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
}
.colorStyle2 {
  background: #fc5552;
}
.bottombtn {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  line-height: 55px;
}
.bottombtn1 {
  margin-left: 20px;
  left: 271px;
  top: 677px;
  width: 105px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(252, 85, 82, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  border-radius: 20px;
  margin: 7.5px 0px 7.5px 10px;
}
</style>
