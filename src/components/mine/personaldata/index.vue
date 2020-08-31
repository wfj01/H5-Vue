<template>
  <div class="page">
    <div>
      <van-nav-bar title="个人资料" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <div class="topview1">
      <div class="topview1-box">
        <div class="box-item1">
          <div class="box-item2-left">个人头像</div>
          <div class="topview1-right">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" class="round_icon" alt />
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-cell
        title="昵称"
        is-link
        :value-class="className"
        :value="mydata.nickName"
        @click="showPopup1"
        style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
      />
    </div>
    <div>
      <van-cell
        title="真实姓名"
        is-link
        :value-class="className"
        :value="mydata.userName"
        @click="showPopup1"
        style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
      />
    </div>

    <div>
      <van-cell
        title="性别"
        is-link
        :value-class="className"
        :value="mydata.genderEnumString"
        @click="showPopup1"
        style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
      />
      <van-popup v-model="show1" position="bottom">
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="show = false"
          @change="onChange"
        />
      </van-popup>
    </div>
    <div>
      <van-cell
        title="出生日期"
        is-link
        :value-class="className"
        :value="mydata.birthday"
        @click="showPopup"
        style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
      />
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择时间"
          :loading="isLoadingShow"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show1 = false"
          @confirm="confirmPicker"
        />
      </van-popup>
    </div>

    <div class="toptext">
      <div>
        <van-cell
          title="地区"
          is-link
          :value-class="className"
          :value="AddressValue"
          @click="AddressPopup"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        />
        <van-popup v-model="Addressshow" position="bottom">
          <van-area
            title="省市区选择"
            :area-list="areaList"
            @change="onChange"
            @confirm="onConfirm"
            @cancel="onCancel"
          />
        </van-popup>
      </div>
      <div>
        <van-cell
          title="收货地址"
          is-link
          :value-class="className"
          :value="mydata.address"
          @click="goAddresslist()"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        />
      </div>

      <div class="topview1">
        <div class="topview1-box">
          <div class="box-item2">
            <div class="box-item1-left">手机号码</div>
            <div class="topview2-right">
              <input
                type="text"
                v-model="mydata.userPhone"
                placeholder="请输入手机号码"
                style="border:none;text-align:right"
              />
              <van-icon name="arrow" size="20px" color="#CBCBCB" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <van-cell
          title="服务协议"
          is-link
          :value-class="className"
          :value="fuwuxieyi"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        ></van-cell>
      </div>
    </div>
    <div class="toptext" @click="tuichulogin()">
      <div class="topview1 wp">
        <div class="tuichubtn">退出登录</div>
      </div>
    </div>
    <div class="toptext" @click="Saveminemessage()">
      <div class="topview1 wp1">
        <div class="xiugaibtn">确 认 修 改</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  Icon,
  Dialog,
  DatetimePicker,
  Popup,
  Cell,
  Picker,
  Toast,
  Area,
} from "vant";
// 导入相应的请求函数
import { querymine, savemine, getDisassemble } from "../../../api/index";
import areaList from "../../../assets/area/area.js";
import addresslistVue from "../../shoppCart/address/addresslist.vue";
export default {
  name: "Personaldata",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Picker.name]: Picker,
    [Toast.name]: Toast,
    [Area.name]: Area,
  },
  data() {
    return {
      AddressValue: "",
      columns: ["保密", "男性", "女性", "中性"],
      cutnumber: 1,
      mydata: {},
      minDate: new Date(1901, 1, 1),
      maxDate: new Date(2099, 12, 31),
      currentDate: new Date(),
      show: true,
      msg: "商家页面",
      timeValue: "请选择时间",
      show: false,
      areaList,
      show1: false,
      isLoadingShow: false,
      className: "",
      Addressshow: false,
      fuwuxieyi:''
    };
  },
  methods: {
    //保存信息
    Saveminemessage: function () {
      // 调用该工厂方法进行请求返回一个对象，再通过对象的then(), catch()方法进行后续操作
      savemine()
        .then((res) => {
          console.log("uploadelf --->", res.data.code);
          if(res.data.code == 200){
            Toast.success('保存成功');

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //选择地区
    AddressPopup: function () {
      this.Addressshow = true;
    },

    //value=0改变省，1改变市，2改变区
    onChange(picker, index, value) {
      let val = picker.getValues();
      console.log(val); //查看打印
      let areaName = "";
      for (var i = 0; i < val.length; i++) {
        areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
      }
      this.carmodel = areaName;
    },
    //确定选择城市
    onConfirm(val) {
      console.log(val[0].name + "," + val[1].name + "," + val[2].name);
      this.AddressValue = val[0].name + "," + val[1].name + "," + val[2].name;
      this.Addressshow = false; //关闭弹框
    },
    //取消选中城市
    onCancel() {
      this.Addressshow = false;
      this.$refs.myArea.reset(); // 重置城市列表
    },
    showPopup() {
      this.show = true;
      this.isLoadingShow = true;
      setTimeout(() => {
        this.isLoadingShow = false;
      }, 500);
    },
    showPopup1() {
      this.show1 = true;
      this.isLoadingShow = true;
      setTimeout(() => {
        this.isLoadingShow = false;
      }, 500);
    },
    // 确认选择的时间
    confirmPicker(val) {
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      let hour = val.getHours();
      let minute = val.getMinutes();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      if (hour >= 0 && hour <= 9) {
        hour = `0${hour}`;
      }
      if (minute >= 0 && minute <= 9) {
        minute = `0${minute}`;
      }
      this.className = "timeClass";
      this.timeValue = `${year}-${month}-${day}`;
      this.show = false;
    },
    // 选项格式化函数
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    //选择生日
    selectbirthday: function () {
      this.show = true;
    },
    //加载
    loaddata() {
      // 调用该工厂方法进行请求返回一个对象，再通过对象的then(), catch()方法进行后续操作
      querymine()
        .then((res) => {
          console.log("uploadelf --->", res.data.data);
          this.mydata = res.data.data;
          this.AddressValue =
            this.mydata.country +
            "," +
            this.mydata.province +
            "," +
            this.mydata.city;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //跳转到地址列表
    goAddresslist: function () {
      this.$router.push({
        name: "Addresslist",
      });
    },
    //退出登录
    tuichulogin: function () {
      Dialog.confirm({
        title: "警告",
        message: "是否需要退出登录",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
    },
  },
  mounted() {
    this.loaddata();
  },
};
</script>

<style scoped>
.xiugaibtn {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #844404;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
}
/* 定位代码 */
.wp {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 0px;
  background-color: #ffffff;
  color: #ff5454;
  font-weight: bold;
}
.wp1 {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 0px;
  font-weight: bold;
}
.tuichubtn {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
  text-align: left; /* 修正文字 */
}
.page {
  background-color: #f2f2f2;
}
.toptext {
  margin-top: 15px;
}
.topview2-righttext {
  font-size: 16px;
  line-height: 30px;
  margin-right: 10px;
}
.topview2-right {
  display: flex;
  justify-content: space-between;
}
.box-item1-left {
  font-size: 16px;
  line-height: 30px;
}
.box-item2-left {
  font-size: 16px;
  line-height: 84px;
}
.topview1 {
  padding: 0px 10px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.topview1-box {
  background-color: #ffffff;
}
.box-item1 {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.box-item2 {
  padding: 20px 0px 20px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
}
.round_icon {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  box-shadow: 0 0 0 2px #ececec, 0 0 0 3px rgba(0, 0, 0, 0.4);
  line-height: 84px;
}
</style>