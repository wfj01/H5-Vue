<template>
  <div>
    <div>
      <van-nav-bar title="培训视频详情页" fixed>
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
      <div class="topviewviode-wai">
        <div class="topviewvideo-nei" :style="note">
          <!-- <div class="topview-shuliang">已结束</div> -->
        </div>
        <div class="ceshi">
          <div class="ceshi-text">
            <div>新人要懂得的分销策略</div>
            <img
              src="../../assets/image/组 380.png"
              alt
              style="width: 25px;height: 25px;line-height:45px; padding-top:7px"
            />
          </div>
          <div class="ceshi-text2">
            <div style="margin-right: 5px;">
              <van-icon name="friends-o" size="19.5px" />
            </div>
            <div>537人次</div>
          </div>
        </div>
      </div>
      <div class="neirong">
        <div class="neirong-title">课程介绍</div>
        <div class="neirong-box">
          首先用户会看到生成分销海报的界面，然后将海报分享出去，
          好友扫描你的专属海报完成付费，系统就会提示你获得一部分佣金。
          除此之外，如果好友的好友完成付费，你也可能会获得一部分佣金。
          而如果你邀请其他人和你一样成为专门做分销的人员，
          那么你也可能会获得一部分佣金。
          总之，分销的佣金规则设定是其不同于其他裂变玩法的主要表现。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
export default {
  name: "ShoppCart",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../../assets/image/ceshi.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderRadius: "10px",
      },
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
.pageview {
  height: 100%;
  background: #f4f4f4;
}
.neirong-box {
  line-height: 26px;
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-top: 10px;
}
.neirong-title {
  line-height: 30px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.neirong {
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #ffffff;
}
.ceshi-text {
  line-height: 40px;
  color: #333333;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-regular;
  display: flex;
  justify-content: space-between;
}
.ceshi-text2 {
  color: rgba(98, 98, 98, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  display: flex;
  justify-content: flex-start;
}
.ceshi {
  padding: 10px;
  box-sizing: border-box;
}
.topview-shuliang {
  float: right;
  right: 0px;
  top: 0px;
  z-index: 100;
  width: 100px;
  height: 25px;
  line-height: 25px;
  border-radius: 30px 30px 30px 30px;
  background-color: rgba(0, 0, 0, 0.36);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  margin-right: 20px;
  margin-top: 10px;
}
.topviewviode-wai {
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
}
.topviewvideo-nei {
  width: 100%;
  height: 200px;
  border: 1px solid green;
  position: relative;
  line-height: 20px;
  background-color: rgba(185, 190, 189, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
.imagestyle {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>