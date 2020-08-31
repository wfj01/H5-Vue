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
        <van-uploader v-model="fileList" multiple max-count="1" class="image" />
        <div class="topview-text">设置你的店铺名称</div>
      </div>
      <div class="name">
        <input placeholder="你的店铺名称" class="inputstyle" />
      </div>
      <div class="name">
        <textarea placeholder="描述下你的店铺" class="inputstyle textarea" />
      </div>
      <div class="name1">
        <div class="savebtn">保 存</div>
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
.savebtn {
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  line-height: 40px;
  text-align: center;
  border-radius: 8px;
}
.page {
  background-color: #eeeeee;
  height: 100vh;
}
.inputstyle {
  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 0px 0px;
  background-color: #ffffff;
  height: 35px;
  width: 100%;
}
.textarea {
  height: 120px;
}
.name {
  margin: 10px 0px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.name1 {
  margin: 10px 0px;
  padding: 10px;
  box-sizing: border-box;
}
.topview {
  background-color: #eeeeee;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 10px;
}
.topview-text {
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
  font-family: PingFangSC-regular;
}
</style>