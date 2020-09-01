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
          <div class="item-box" v-for="(item,index) in 3" :key="index">
            <div class="item">
              <div class="item-left">
                <div>1</div>
                <div class="item-left-righttext">冰水之家水果冰水之家水果园冰水之家水果园</div>
              </div>
              <div class="item-right" @click="openConfirm()">
                <div>未赠送</div>
                <div>
                  <van-icon name="arrow" size="22px" color="#101010" />
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
            <div>
              <img
                src="../../../assets/494.png"
                alt
                style="width: 100%;height: 100%;"
                @click="Setmealdetail()"
              />
            </div>
            <div>
              <img
                src="../../../assets/495.png"
                alt
                style="width: 100%;height: 100%;"
                @click="Setmealdetail()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirmLayercovering" id="confirmLayercovering">
      <div class="confirmLayer" id="confirmLayer">
        <p class="confirmTit" id="confirmTit">店铺详情</p>
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
            <input placeholder="你的店铺名称" class="inputstyle" />
          </div>
        </div>
        <div class="confirmbtns">
          <a class="confirmClose" id="confirmClose">关闭</a>
          <a class="confirmSure" id="confirmSure">赠送</a>
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
import { NavBar, Icon, Dialog } from "vant";
export default {
  name: "Myopenshop",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      cutnumber: 1,
      show: false,
    };
  },
  methods: {
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
    //赠送
    lookzengsong: function () {
      this.show = true;
    },
    onClickRight: function () {
      Toast("按钮");
    },
    //确认弹窗
    ConfirmLayer: function (txt, callback) {
      var _this = this;
      var confirmLayercovering = document.getElementById(
          "confirmLayercovering"
        ),
        confirmTit = document.getElementById("confirmTit"),
        confirmClose = document.getElementById("confirmClose"),
        confirmSure = document.getElementById("confirmSure"),
        confirmCall = callback,
        tittxt = txt;
      if (!confirmLayercovering) {
        return;
      }
      var init = function () {
          if (txt) {
            confirmTit.innerHTML = txt;
          }
          show();
          confirmClose.addEventListener("click", function () {
            hide();
            confirmCall && confirmCall(true);
          });
          confirmSure.addEventListener("click", function () {
            hide();
            confirmCall && confirmCall(true);
          });
        },
        hide = function () {
          confirmLayercovering.style.display = "none";
        },
        show = function () {
          confirmLayercovering.style.display = "block";
        },
        Confirm = function (txt, callback) {
          if (tittxt != txt && txt) {
            confirmTit.innerHTML = txt;
            tittxt = txt;
          }
          confirmCall = callback;
          show();
        };
      init(); //初始化
      _this.ConfirmLayer = Confirm; //下次不用再初始化
    },
    openConfirm() {
      let _this = this;
      _this.ConfirmLayer("店铺详情", function (flag) {
        if (flag) {
          console.log("确认");
        } else {
          console.log("取消");
        }
      });
    },
  },
};
</script>

<style scoped>
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
  height: 30px;
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
  display: none;
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
  padding: 0px 20px 10px 20px;
  box-sizing: border-box;
}
.bottombtn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 7px 7px 7px 7px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0);
  font-family: Arial;
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
  padding: 15px 25px;
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
}
.item-left {
  display: flex;
  justify-content: start;
}
.item-right {
  display: flex;
  justify-content: space-between;
  width: 80px;
}
.item {
  line-height: 25px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
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
  color: rgba(45, 45, 45, 1);
  font-size: 13px;
  text-align: left;
  font-family: PingFangSC-regular;
}
</style>