<template>
  <div>
    <div>
      <van-nav-bar title="店铺详情" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="page">
      <div class="topview">
        <div class="topview-text">设置你的店铺名称</div>
      </div>
      <div class="topview1-right">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
      </div>
      <div class="middleviewbox">
        <div class="name">
          <input placeholder="店铺名称" class="inputstyle" />
        </div>
        <div class="name">
          <textarea placeholder="请描述下你的店铺" class="inputstyle1" />
        </div>
        <div class="name1">
          <div class="savebtn">保 存</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Uploader } from "vant";
export default {
  name: "ShoppSuccess",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
  },
  data() {
    return {
      cutnumber: 1,
      fileList: [
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
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
.middleviewbox {
  padding: 15px;
  box-sizing: border-box;
  top: -20px;
  position: relative;
}
.pageview {
  background: #ffffff;
  height: 100vh;
}
.round_icon {
  width: 5rem;
  position: relative;
  height: 5rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  box-shadow: 0 0 0 2px #ececec, 0 0 0 3px rgba(0, 0, 0, 0.4);
  top: -42px;
}
.xuanfu {
  position: relative;
  top: -100px;
  left: 33px;
  width: 700px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 1px 1px 1px #85e9c4;
  border-radius: 20px;
}
.topbackGroup {
  width: 750px;
  height: 270px;
  background: #26c68a;
  overflow: hidden;
}
.savebtn {
  width: 100%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  background: #ffe231;
  border-radius: 30px;
}
.page {
  background-color: #ffffff;
  height: 100vh;
}
.inputstyle {
  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 0px 0px;
  background-color: #ffffff;
  height: 35px;
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #858997;
  line-height: 24px;
  font-size: 18px;
}
.inputstyle1 {
  margin-top: 5px;
  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 0px 0px;
  background: #f6f7f8;
  border-radius: 15px;
  height: 38px;
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ced0d9;
  line-height: 32px;
  font-size: 16px;
}
.textarea {
  height: 120px;
}
.name {
  top: -30px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
}
.name1 {
  margin: 10px 0px;
  padding: 10px 50px;
  box-sizing: border-box;
}
.topview {
  background-color: #ffe231;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 10px;
  height: 90px;
}
.topview-text {
  color: rgba(155, 155, 155, 1);
  font-size: 16px;
  font-family: PingFangSC-regular;
  line-height: 70px;
  color: #ffffff;
}
</style>