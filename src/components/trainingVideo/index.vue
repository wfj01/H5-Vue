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
    <div class="topviewviode-wai">
      <div class="topviewvideo-nei">
        <div class="topview-shuliang">已结束</div>
      </div>
      <div class="ceshi">
        <div class="ceshi-text">新人要懂得的分销策略</div>
        <div class="ceshi-text2">537人次</div>
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
    return {};
  },
  methods: {
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
    },
    onClickRight: function () {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
.neirong-box {
  line-height: 26px;
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-top: 10px;
  text-indent:2em
}
.neirong-title {
  line-height: 30px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.neirong {
  padding: 20px;
  box-sizing: border-box;
}
.ceshi-text {
  line-height: 50px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.ceshi-text2 {
  color: rgba(98, 98, 98, 1);
  font-size: 14px;
  line-height: 30px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.ceshi {
  box-shadow: 0px 2px 2px #f5f5f4;
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
  border: 1px solid rgba(255, 255, 255, 0);
}
.topviewviode-wai {
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
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