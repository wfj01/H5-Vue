<template>
  <div>
    <div>
      <van-nav-bar title="订单状态" fixed>
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
      <div class="topview">
        <div class="item">
          <div class="item-left">订单状态</div>
          <div class="item-right">待付款</div>
        </div>
        <div class="item">
          <div class="item-left">剩余时间</div>
          <div class="item-right1">15分钟</div>
        </div>
        <div class="item">
          <div class="item-left">订单编号</div>
          <div class="item-right1">84556646654</div>
        </div>
        <div class="item">
          <div class="item-left">下单时间</div>
          <div class="item-right1">2018-10-10 14:00:00</div>
        </div>
      </div>
      <div class="middlevie">
        <div class="middleview-title">收货信息</div>
        <div class="middleview-middlebox">
          <div class="yonghuxinxi">
            <div class="name">收货人：张三</div>
            <div class="phone">17611141678</div>
          </div>
          <div class="address">北京-北京市-通州区临河里路，华业东方玫瑰，D区D2，2单元604</div>
        </div>
      </div>
      <div class="middlevie">
        <div class="middleview-title">商品信息</div>
        <div class="shoppingbox">
          <div class="shoppingview" v-for="(item,index) in 10" v-bind:key="index">
            <div class="shoppingview-item">
              <div class="shoppingview-itemleft">
                <img
                  class="shoppingview-itemleftimage"
                  src="https://img.yzcdn.cn/vant/ipad.jpeg"
                  alt
                />
              </div>
              <div class="shoppingview-itemright">
                <div class="shoppingview-itemright-toptext">95%棉下机男士短袖POLO韩版时尚潮流半袖</div>
                <div class="leixingview">
                  <div class="leixing1">粉色</div>
                  <div class="leixing1">大尺寸</div>
                </div>
                <div class="shoppingview-itemright-middleview">
                  <div class="shoppingview-itemright-middleview-left">￥168</div>
                  <div class="shoppingview-itemright-middleview-right">数量 x1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middlevie">
        <div class="middleview-title">付款信息</div>
        <div class="fukuanjine">
          <div class="fukuanjine-left">合计金额</div>
          <div class="fukuanjine-right">￥336</div>
        </div>
      </div>
      <div class="middleviewbtn">
        <div class="middleviewbtn-btn1">取消订单</div>
        <div class="middleviewbtn-btn2">立即支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
export default {
  name: "Orderdetail",
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
    //跳转到地址列表
    goAddresslist:function(){
      this.$router.push({
        name: "Addresslist",
      });
    },
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
.leixingview {
  display: flex;
}
.middleviewbtn {
  justify-content: end;
  padding: 15px 0px;
  display: -webkit-box;
}
.middleviewbtn-btn1 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0);
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  border: 1px solid rgba(178, 178, 178, 1);
  margin: 0px 4px;
}
.middleviewbtn-btn2 {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 50px;
  background-color: rgba(132, 68, 4, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  margin: 0px 4px;
}
.fukuanjine {
  display: flex;
  justify-content: space-between;
}
.fukuanjine-left {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.fukuanjine-right {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingbox {
  border: 1px solid #eeeeee;
  background-color: #fafafa;
  padding: 5px 10px;
  box-sizing: border-box;
}
.shoppingview-itemright {
  margin-left: 10px;
}
.shoppingview-itemright-middleview {
  bottom: 0px;
}
.shoppingview-itemright-middleview-right {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: right;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-middleview-left {
  color: #844404;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-toptext {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-weight: bold;
}
.shoppingview-itemright-middleview {
  display: flex;
  justify-content: space-between;
}
.shoppingview-itemleft {
  width: 100px;
  height: 100px;
}
.shoppingview-itemleftimage {
  width: 100%;
  height: 100%;
}
.shoppingview {
  padding: 10px 0px;
  border-bottom: 1px solid #f2f2f2;
}
.shoppingview-item {
  display: flex;
  justify-content: space-between;
}
.leixing1 {
  left: 115px;
  top: 499px;
  width: 50px;
  height: 20px;
  line-height: 20px;
  border-radius: 1px;
  background-color: rgba(242, 242, 242, 1);
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 0px 0px 0px rgba(185, 185, 185, 1);
  font-family: Arial;
  margin: 0px 2px;
}

.address {
  color: rgb(102, 97, 97);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.name {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.phone {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-align: right;
  font-family: PingFangSC-regular;
}
.yonghuxinxi {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.middlevie {
  background-color: #ffffff;
  padding: 0px 20px;
  box-sizing: border-box;
}
.middleview-title {
  line-height: 30px;
  height: 30px;
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
  text-align: left;
  font-family: Arial;
  margin: 10px 0px;
}
.topview {
  background-color: #ffffff;
  padding: 0px 20px;
  box-sizing: border-box;
}
.item {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
}
.item-left {
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  text-align: left;
  font-family: Arial;
}
.item-right {
  color: rgba(132, 68, 4, 1);
  font-size: 16px;
  text-align: right;
  font-family: Arial;
}
.item-right1 {
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: right;
  font-family: Arial;
}
</style>