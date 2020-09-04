
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

    <div class="topview">{{mydata.imgTextName}}</div>
    <div class="middview1">
      <div class="middview1-texticon">
        <div class="middview1-text1">
          <div>发布日期: 2020-10-12</div>
          <div class="share1">阅读量: {{mydata.lookNumer}}</div>
        </div>
        <div>
          <img
            src="../../assets/image/组 381.png"
            alt
            style="width: 20px;height: 20px; margin:0px 3px"
          />
          <img
            src="../../assets/image/组 380.png"
            alt
            style="width: 20px;height: 20px; margin:0px 3px"
          />
        </div>
      </div>
      <div
        class="jianjie"
      >{{mydata.imgTextIntro}}</div>
    </div>
    <div class="middleview2">
      {{mydata.imgTextContent}}
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
import Axios from "axios";
export default {
  name: "EntrystaffDetail",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
      mydata: {},
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    loaddata: function () {
      var that = this;
      var api = "http://yapi.jeemoo.com/mock/33/multiapi/z346v_imgText";
      Axios.post(api, {
        headers: {
          "Content-Type": "application/json",
          "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
          "multi-type": "H5",
        },
        data: {
          id: "id",
        },
      })
        .then((res) => {
          console.log("res", res);
          that.mydata = res.data.data;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  mounted() {
    this.loaddata();
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
  color: #333333;
  font-size: 15px;
  box-sizing: border-box;
  text-align: left;
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
  color: #999999;
  font-size: 14px;
  text-align: left;
  font-family: Arial-regular;
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
  padding: 12px 14px;
  box-sizing: border-box;
}
.topview {
  padding: 10px 10px 0px 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
}
</style>