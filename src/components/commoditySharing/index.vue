
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
    <div>
      <van-swipe class="my-swipe">
        <van-swipe-item class="swipeitemstyle">
          <img
            class="imagestyle"
            src="http://img.netbian.com/file/2020/0101/ed53728a0593fca90d434019c9b9be23.jpg"
          />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img
            class="imagestyle"
            src="http://img.netbian.com/file/2019/0810/f88bf86d458da9da292984d9bc669990.jpg"
          />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img
            class="imagestyle"
            src="http://img.netbian.com/file/2020/0529/bfc52b590e1f9be57528d41237c9c24b.jpg"
          />
        </van-swipe-item>
        <van-swipe-item class="swipeitemstyle">
          <img
            class="imagestyle"
            src="http://img.netbian.com/file/20140715/bd5d9194b9c2f87302e9bf0b62da50c7.jpg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="middleview-title">
      <div class="middleview-titleview">
        <div class="middleview-title-item1left">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
        <div class="iconview">
          <i class="iconfont iconfenxiang"></i>
        </div>
      </div>
      <div class="middleview-title2">
        <div class="middleview-title-item2">
          <div class="middleview-title-item2left">￥1680</div>
          <div class="middleview-title-item2left2">￥1800</div>
        </div>
        <div class="middleview-title-item2right">已售：142</div>
      </div>
      <div class="middleview-title3">
        <div class="middleview-title3text">请选择购买数量</div>
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
      <div class="middleview-title4">
        侃爷已经错失了很多关键州的投票，其中包括他的家乡伊利诺伊州和第二故乡怀俄明州，
        威斯康星州尚且摇摆不定。而加利福尼亚、佛罗里达和宾夕法尼亚州，
        他不是错过了提交报名的截止日期，就是被拒大门外。不过侃爷的名字将出现在阿肯色州、
        科罗拉多州、俄克拉荷马州、犹他州和佛蒙特州的选票上。
      </div>
    </div>
    <div style="height:50px"></div>
    <div class="dibu">
      <div class="ceshi1">
        <div class="ceshi1-item">
          <i class="iconfont icondianpu" style="font-size: 19px;"></i>
          <div>店铺</div>
        </div>
        <div class="ceshi1-item">
          <i class="iconfont icon-star-o" style="font-size: 19px;"></i>
          <div>收藏</div>
        </div>
        <div class="ceshi1-item">
          <i class="iconfont icongouwuche" style="font-size: 19px;"></i>
          <div>购物车</div>
        </div>
      </div>
      <div>
        <van-button type="danger">加入购物车</van-button>
        <van-button type="default" style="background-color: rgba(41, 40, 41, 0.43);">立即购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Button,
} from "vant";
export default {
  name: "Commoditysharing",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button,
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
.ceshi1-item{
  margin: 0px 5px;
}
.ceshi1{
  display: flex;
}
.dibu {
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 6px 10px 10px 10px;
  box-sizing: border-box;
}
.middleview-title4 {
  margin-top: 10px;
  box-sizing: border-box;
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middleview-title3text {
  height: 40px;
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  line-height: 40px;
  font-family: PingFangSC-regular;
}
.middleview-title3 {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
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
  border: 1px solid #ecedee;
  cursor: pointer;
  background-color: #ecedee;
  margin: 0px 1px;
}
.btn-numbox .count .input-num {
  width: 30px;
  height: 26px;
  color: #333;
  border: 1px solid #ecedee;
  background-color: #ecedee;
}
.middleview-title-item2left {
  left: 15px;
  top: 500px;
  width: 59px;
  font-weight: bold;
  height: 30px;
  color: rgba(132, 68, 4, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 30px;
}
.middleview-title-item2left2 {
  left: 67px;
  top: 500px;
  width: 78px;
  height: 30px;
  line-height: 30px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
  text-decoration: line-through;
  font-weight: bold;
}
.middleview-title-item2right {
  left: 215px;
  top: 500px;
  font-weight: bold;
  width: 145px;
  height: 30px;
  line-height: 30px;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: right;
  font-family: PingFangSC-regular;
}
.middleview-title2 {
  display: flex;
  justify-content: space-between;
  line-height: 35px;
}
.middleview-title-item2 {
  display: flex;
  justify-content: start;
}
.iconview {
  left: 338px;
  top: 474px;
  width: 24px;
  height: 24px;
  color: rgba(98, 98, 98, 1);
}
.middleview-title-item1left {
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middleview-title {
  padding: 15px;
  box-sizing: border-box;
}
.middleview-titleview {
  display: flex;
  justify-content: space-between;
}
.swipe {
  width: 100%;
  height: 380px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.swipeitemstyle {
  left: 0px;
  width: 100%;
  height: 380px;
}
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