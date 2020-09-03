<template>
  <div>
    <div>
      <van-nav-bar title="入职员工" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>

    <div class="topname">
      <div>
        <img width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="toptext">
        <div class="toptext1">收藏量：8950</div>
        <div class="toptext2">+收藏</div>
      </div>
    </div>
    <div class="middleview2">
      <div :class="isshow1 ? 'middleview2-btn1' : 'middleview2-btn2'" @click="isshowa()">图文信息</div>
      <div :class="isshow2 ? 'middleview2-btn1' : 'middleview2-btn2'" @click="isshowb()">内训直播</div>
    </div>
    <div v-if="isshow1">
      <van-card
        class="cardview"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="(item,index) in 2"
        :key="index"
        @click="cardclick()"
      >
        <template #title>
          <div class="toptext">店铺介绍</div>
        </template>
        <template #tags>
          <div class="middletext">
            店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
            介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
          </div>
          <div class="bottomicon">
            <van-icon name="star" size="18px" class="share" />
            <van-icon name="share" size="18px" class="share" />
          </div>
        </template>
      </van-card>
    </div>
    <div v-if="isshow2" class="videoceshi">
      <div v-for="(item,index) in 3" :key="index">
        <div class="topvideo"></div>
        <div class="video-middleview">
          <div class="video-middleview-text1">课程直播视频名称名称</div>
          <div class="video-middleview-text2">视频简介视频简介视频简介视频简介视频简介视频简介视频简</div>
          <div class="video-middleview-fenlei">
            <div>
              <div class="video-middleview-text3">直播时长：70分钟</div>
              <div class="video-middleview-text4">开始时间：2020-05-31 20:30</div>
            </div>
            <div class="video-middleview-fenlei-right">
              <van-icon name="star" size="20px" />
              <van-icon name="share" size="20px" class="share" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Lazyload, Swipe, SwipeItem, Card } from "vant";
export default {
  name: "Entrystaff",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card,
  },
  data() {
    return {
      isshow1: true,
      isshow2: false,
      cutnumber: 1,
      images: [
        { url: "https://img.yzcdn.cn/vant/apple-1.jpg" },
        { url: "https://img.yzcdn.cn/vant/apple-2.jpg" },
      ],
    };
  },
  methods: {
    //点击卡片跳转到详情页
    cardclick: function () {
      this.$router.push({ name: "EntrystaffDetail" });
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    //显示图文信息
    isshowa: function () {
      this.isshow1 = true;
      this.isshow2 = false;
    },
    //显示内训直播
    isshowb: function () {
      this.isshow2 = true;
      this.isshow1 = false;
    },
  },
};
</script>

<style scoped>
.bottomicon {
  display: flex;
  justify-content: flex-end;
}
.videoceshi {
  margin: 10px 0px;
}
.video-middleview-fenlei-right {
  line-height: 50px;
}
.video-middleview-fenlei {
  display: flex;
  justify-content: space-between;
}
.video-middleview-text4 {
  color: rgba(155, 155, 155, 1);
  font-size: 13px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
}
.video-middleview-text3 {
  color: rgba(155, 155, 155, 1);
  font-size: 13px;
  text-align: left;
  font-family: Arial-regular;
  line-height: 26px;
}
.video-middleview-text2 {
  color: rgba(155, 155, 155, 1);
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-family: PingFangSC-regular;
  line-height: 26px;
}
.video-middleview-text1 {
  color: rgba(16, 16, 16, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  line-height: 26px;
}
.video-middleview {
  padding: 10px 0px;
  margin: 0px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
}
.topvideo {
  width: 100%;
  height: 150px;
  line-height: 20px;
  background-color: rgba(21, 8, 9, 0.57);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
.share {
  margin-left: 10px;
}
.toptext {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.middletext {
  margin-top: 10px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgba(155, 155, 155, 1);
}
.cardview {
  background-color: #ffffff;
  padding: 8px 0px 8px 0px;
  margin: 5px 16px;
}
.middleview2-btn1 {
  width: 147px;
  height: 36px;
  line-height: 36px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
}
.middleview2-btn2 {
  width: 147px;
  height: 36px;
  line-height: 36px;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
}
.middleview2 {
  padding: 10px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.share {
  margin-left: 20px;
  line-height: 30px;
}
.yuan2 {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(185, 185, 185, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  margin: 0px 4px;
}
.yuan1 {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  border-radius: 50%;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  margin: 0px 4px;
}
.middleview1 {
  padding: 12px;
  box-sizing: border-box;
  display: flex;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.toptext {
  margin-left: 10px;
}
.toptext1 {
  height: 20px;
  color: rgba(125, 125, 125, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.toptext2 {
  width: 80px;
  height: 23px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 1);
  font-size: 15px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  margin-top: 15px;
}
.topname {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: start;
}
</style>