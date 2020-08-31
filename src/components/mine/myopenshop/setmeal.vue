<template>
  <div>
    <div>
      <van-nav-bar title="套餐详情" fixed>
        <template #left @click="onClickLeft()">
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()"/>
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>

    <div class="middleview">
      <div class="middleview1">
        <div class="middleview1-toptitle">请选择套餐类型</div>
        <div class="topbianju"></div>
        <div>
          <div class="itembox" v-for="(item,index) in 3" :key="index">
            <div class="item">
              <div class="item-left">
                <div class="item-left-lefttext">
                  <van-icon name="passed" size="18px" />
                </div>
                <div class="item-left-righttext">1-10人</div>
              </div>
              <div class="item-right">￥999</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="fixedbox">
        <div class="fixed-lefttext">合计：￥4680</div>
        <div class="fix-button">结算(2)</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
export default {
  name: "Setmealdetail",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
    };
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

      Toast("返回");
    },
    onClickRight: function () {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
.fix-button {
  width: 105px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
}
.fixed-lefttext {
  width: 105px;
  height: 45px;
  line-height: 45px;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-regular;
}
.fixed {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 9999;
  padding: 0px 10px;
  box-sizing: border-box;
}
.fixedbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.itembox {
  padding: 0px 20px;
  box-sizing: border-box;
}
.item {
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item-left {
  display: flex;
  justify-content: start;
}
.item-right {
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: right;
  font-family: PingFangSC-regular;
}
.middleview1-toptitle {
  width: 100%;
  margin: 15px 20px;
  box-sizing: border-box;
  line-height: 20px;
  color: rgba(45, 45, 45, 1);
  font-size: 13px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.topbianju {
  border-top: 1px solid #eeeeee;
  margin: 0px 15px;
}
.item-left-righttext {
  margin-left: 10px;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: right;
  font-family: PingFangSC-regular;
}
</style>