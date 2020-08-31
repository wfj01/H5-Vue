
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

    <div class="topview">铁碧图旗舰店铁碧图旗舰店</div>
    <div class="middview1">
      <div class="middview1-texticon">
        <div class="middview1-text1">
          <div>发布日期: 2020-10-12</div>
          <div class="share1">阅读量: 4842</div>
        </div>
        <div>
          <van-icon name="star" size="18px" />
          <van-icon name="share" size="18px" class="share" />
        </div>
      </div>
      <div
        class="jianjie"
      >简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容</div>
    </div>
    <div class="middleview2">
      <p
        class="ptext"
      >该试点项目于今年5月获得美国环境保护署(EPA)的批准，旨在测试转基因蚊子能否替代喷洒杀虫剂的替代品，来控制埃及伊蚊。现在地方当局已经给予了该计划所需的最终许可。</p>
      <div class="round_iconview">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
      </div>
      <p
        class="ptext"
      >该试点项目于今年5月获得美国环境保护署(EPA)的批准，旨在测试转基因蚊子能否替代喷洒杀虫剂的替代品，来控制埃及伊蚊。现在地方当局已经给予了该计划所需的最终许可。</p>
      <div class="round_iconview">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
      </div>
      <p
        class="ptext"
      >该试点项目于今年5月获得美国环境保护署(EPA)的批准，旨在测试转基因蚊子能否替代喷洒杀虫剂的替代品，来控制埃及伊蚊。现在地方当局已经给予了该计划所需的最终许可。</p>
      <div class="round_iconview">
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-l1">
        <div>店铺主页 丨</div>
        <div>购物车 丨</div>
        <div>我的</div>
      </div>
      <div class="bottom-l2">珍珪谷提供技术支持</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
export default {
  name: "EntrystaffDetail",
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
    },
    onClickRight: function () {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
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