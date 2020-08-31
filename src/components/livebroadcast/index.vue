
<template>
  <div>
    <div>
      <van-nav-bar title="直播间详情" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="topview">
      <div class="topview-shuliang">77.23万</div>
    </div>
    <div>
      <van-tabs @click="onClick" swipeable>
        <van-tab title="介绍">
          <div class="item1">
            <div class="item1-text1">XXXXXX的直播间</div>
            <div class="item1-text2">
              <div>XXXXXX</div>
              <div>2020-08-07 15:00:00</div>
            </div>
            <div class="item1-text3">
              奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公
              司奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司
              奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司奇虎
              360科技有限公司奇虎360科技有限公司奇虎360科技有限公司奇虎360科技有限公司,
              是中国领先的互联网和手机安全产品及服务供应商。据第三方统计,按照用户数量计算,360是中国第一大互联网安全公司。
            </div>
          </div>
        </van-tab>
        <van-tab title="互动">
          <div class="hudong1">
            <!-- Left -->
            <div class="chat-sender">
              <div class="touxiangview">
                <img
                  class="touxiang"
                  src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                />
              </div>
              <div>主持人</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>
                  欢迎进入【直播间】
                  1.请自行调节手机音量至适合的状态。
                  2.直播间显示主播发布的内容，听众可以发言，以弹幕形式发出。
                </span>
              </div>
            </div>
            <div class="chat-sender">
              <div class="touxiangview">
                <img
                  class="touxiang"
                  src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                />
              </div>
              <div>主持人</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>直播结束后，你可以随时回看全部的内容</span>
              </div>
            </div>
            <div class="chat-sender">
              <div class="touxiangview">
                <img
                  class="touxiang"
                  src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                />
              </div>
              <div>主持人</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>直播结束后，你可以随时回看全部的内容</span>
              </div>
            </div>
            <div class="chat-sender">
              <div class="touxiangview">
                <img
                  class="touxiang"
                  src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                />
              </div>
              <div>主持人</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>直播结束后，你可以随时回看全部的内容</span>
              </div>
            </div>
            <div class="chat-sender">
              <div class="touxiangview">
                <img
                  class="touxiang"
                  src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                />
              </div>
              <div>主持人</div>
              <div>
                <div class="chat-left_triangle"></div>
                <span>直播结束后，你可以随时回看全部的内容</span>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <div class="side-bar">
                    <div style="display: flex;justify-content: space-between;" class="tanmu">
                      <div class="danmuwenzi">沙发，还有谁！！</div>
                      <div class="touxiangview1">
                        <img
                          class="touxiang"
                          src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="side-bar1">
                    <div style="display: flex;justify-content: space-between;" class="tanmu">
                      <div class="danmuwenzi">沙发，还有谁！！</div>
                      <div class="touxiangview1">
                        <img
                          class="touxiang"
                          src="https://img2.woyaogexing.com/2020/08/27/5c21905fea19474c89163082f3d8292d!400x400.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Notice/Center -->
            <div class="chat-notice">
              <img
                class="bottomimage"
                src="https://img2.woyaogexing.com/2020/08/26/21ef89bc3cd5431a84c732695359a90d!400x400.jpeg"
                alt
              />
              <div class="textcolor">
                <div style="font-size: 14px;text-align: left;">心田农场西红柿</div>
                <div class="bottom-item2">
                  <div>
                    <div style="font-size: 18px;color:#FF5454">￥48</div>
                    <div style="text-decoration: line-through; font-size:14px">￥88</div>
                  </div>
                  <div class="gobuy">去购买</div>
                </div>
              </div>
            </div>
          </div>
          <div class="inputview">
            <div style="text-align: left;">
              <input placeholder="来说点什么吧" class="inputstyle" />
            </div>
            <div class="fasongdanmu">发送弹幕</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon, Toast, Tab, Tabs } from "vant";
export default {
  name: "Livebroadcast",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      cutnumber: 1,
    };
  },
  methods: {
    onClick(name, title) {},
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
.side-bar a,
.chat-tips i {
}
.side-bar {
  position: fixed;
  bottom: 70px;
  right: 25px;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar1 {
  position: fixed;
  bottom: 110px;
  right: 25px;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar a {
  height: 66px;
  display: inline-block;
  background-color: #ddd;
  margin-bottom: 2px;
}
.side-bar a:hover {
  background-color: #669fdd;
}
.side-bar .icon-qq {
  background-position: 0 -62px;
}
.side-bar .icon-chat {
  background-position: 0 -130px;
  position: relative;
}
.side-bar .icon-blog {
  background-position: 0 -198px;
}
.side-bar .icon-mail {
  background-position: 0 -266px;
}
.side-bar a,
.chat-tips i {
}
.side-bar {
  position: fixed;
  font-size: 0;
  line-height: 0;
  z-index: 100;
}
.side-bar a {
  height: 66px;
  display: inline-block;
  background-color: #ddd;
  margin-bottom: 2px;
}
.side-bar a:hover {
  background-color: #669fdd;
}
.side-bar .icon-qq {
  background-position: 0 -62px;
}
.side-bar .icon-chat {
  background-position: 0 -130px;
  position: relative;
}
.side-bar .icon-blog {
  background-position: 0 -198px;
}
.side-bar .icon-mail {
  background-position: 0 -266px;
}
.tanmu {
  left: 240px;
  top: 528px;
  width: 150px;
  height: 35px;
  line-height: 35px;
  border-radius: 4px 4px 4px 4px;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: center;
  padding: 0px 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
}
.touxiangview1 {
  width: 25px;
  height: 100%;
  border-radius: 50px 50px 50px 50px;
  padding: 4px 0px;
  box-sizing: border-box;
}
.danmuwenzi {
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.fasongdanmu {
  left: 298px;
  top: 696px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  color: rgba(132, 68, 4, 1);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(132, 68, 4, 1);
}
.inputstyle {
  border: 1px solid rgba(187, 187, 187, 1);
  height: 30px;
  width: 220px;
  border-radius: 4px;
}
.inputview {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
}
.bottom-item2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.gobuy {
  background-color: rgba(252, 85, 82, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  padding: 0px 20px;
  border-radius: 10px;
  height: 25px;
  margin-top: 18px;
}
.textcolor {
  color: #333333;
  margin-left: 10px;
  width: 100%;
  position: relative;
}
.bottomimage {
  height: 75px;
  width: 80px;
}
.touxiangview {
  border-radius: 50%;
  overflow: hidden;
}
.touxiang {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
.hudong1 {
  padding: 10px 15px;
  box-sizing: border-box;
  background: #f5f6f7;
  height: 300px;
  overflow: auto;
}
body {
  background-color: #ebebeb;
  font-family: -apple-system;
  font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI",
    sans-serif;
}
.chat-sender {
  clear: both;
  font-size: 80%;
}
.chat-sender div:nth-of-type(1) {
  float: left;
}
.chat-sender div:nth-of-type(2) {
  margin: 0 50px 2px 50px;
  padding: 0px;
  color: #848484;
  font-size: 70%;
  text-align: left;
}
.chat-sender div:nth-of-type(3) {
  background-color: white;
  /*float: left;*/
  margin: 0 50px 10px 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  text-indent: -12px;
}

.chat-receiver {
  clear: both;
  font-size: 80%;
}
.chat-receiver div:nth-of-type(1) {
  float: right;
}
.chat-receiver div:nth-of-type(2) {
  margin: 0px 50px 2px 50px;
  padding: 0px;
  color: #848484;
  font-size: 70%;
  text-align: right;
}
.chat-receiver div:nth-of-type(3) {
  /*float:right;*/
  background-color: #b2e281;
  margin: 0px 50px 10px 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
}

.chat-receiver div:first-child img,
.chat-sender div:first-child img {
  width: 40px;
  height: 40px;
  /*border-radius: 10%;*/
}

.chat-left_triangle {
  height: 0px;
  width: 0px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent white transparent transparent;
  position: relative;
  left: -22px;
  top: 3px;
}
.chat-right_triangle {
  height: 0px;
  width: 0px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent transparent #b2e281;
  position: relative;
  right: -22px;
  top: 3px;
}

.chat-notice {
  clear: both;
  font-size: 70%;
  color: white;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: start;
  background: #ffffff;
  padding: 8px;
  box-sizing: border-box;
  margin: 0px 20px;
}
.chat-notice span {
  background-color: #cecece;
  line-height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
}
.item1-text3 {
  padding: 10px 0px;
  text-align: left;
  font-size: 14px;
  text-indent: 2em;
}
.item1-text2 {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #e2e2e2;
}
.item1-text1 {
  text-align: left;
  font-size: 18px;
}
.item1 {
  padding: 15px 10px;
  box-sizing: border-box;
}
.topview-shuliang {
  float: right;
  border: 1px solid red;
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
.topview {
  height: 200px;
  border: 1px solid green;
  position: relative;
  line-height: 20px;
  background-color: rgba(185, 190, 189, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
</style>