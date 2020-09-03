
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
      >时下，老年人保健主要是药物、健身，很少有人考虑心理健康问题。但现实生活中很多老年人由于长期缺乏与人沟通，易产生孤独、自尊感不强和老而无用的感觉，牢骚越多越影响心理健康，也不懂得如何调整自己的心态。</div>
    </div>
    <div class="middleview2">
      改善老年痴呆的食物 穴位按摩方法介绍·年龄愈增长性爱更美好·秋天出汗别太多·便秘会对老年人的健康危害
      如何预防·老年人入秋后应防止受凉·老年人应多防范登革热·煮茶比泡茶更防癌·古稀老人想过性生活·平常心态 养生怡然·老年人牙齿问题及对策·脊柱保健新方法·
      老年心绞痛的表现特点·平底鞋有碍老年人健康·某些葡萄汁可预防心脏病·老人腿脚受凉会导致的疾病·老年人流感
      肺炎要一起防·老人外地旅游保健常识·老人白天嗜睡应尽快做检查·做这些事儿让你人老脑不老·老年人锻炼 专家推荐的运动方式是快步走·中老年男性
      应常吃能促进雄激素的食物·皮肤干燥瘙痒的防护·吃烧烤会加速人体老化·看脚知寿命长短·多饮水防治心脑血管病·老年人做哪些身体检查项目·老人怎么样运
      动更健康·6个能增寿的小动作·老人冬天应 早睡晚起·预防冠心病的对策大公开·平均寿命的性别差距正逐渐缩小。
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