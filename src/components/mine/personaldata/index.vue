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
            <van-uploader :after-read="afterRead">
              <img :src="imageSrc" class="round_icon" alt />
            </van-uploader>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-cell-group>
        <van-field
          placeholder="请输入你的昵称"
          label="昵称"
          input-align="right"
          :value-class="className"
          v-model="mydata.nickName"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        >
          <template #button>
            <van-icon
              name="arrow"
              style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
            />
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div>
      <van-cell-group>
        <van-field
          placeholder="请输入你的真实姓名"
          label="真实姓名"
          input-align="right"
          :value-class="className"
          v-model="mydata.userName"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        >
          <template #button>
            <van-icon
              name="arrow"
              style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
            />
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div>
      <van-cell-group>
        <van-field
          label="性别"
          input-align="right"
          :value-class="className"
          v-model="mydata.genderEnumString"
          @click-input="showPopup1"
          readonly
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        >
          <template #button>
            <van-icon
              name="arrow"
              style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
            />
          </template>
        </van-field>
        <van-popup v-model="show1" position="bottom">
          <van-picker
            title="选择性别"
            show-toolbar
            :columns="columns"
            @confirm="AexonConfirm"
            @cancel="show = false"
            @change="AexonChange"
          />
        </van-popup>
      </van-cell-group>
    </div>
    <div>
      <van-cell-group>
        <van-field
          label="出生日期"
          input-align="right"
          :value-class="className"
          v-model="timeValue"
          readonly
          @click-input="showPopup"
          style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
        >
          <template #button>
            <van-icon
              name="arrow"
              style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
            />
          </template>
        </van-field>
        <van-popup v-model="show" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="datetime"
            title="选择时间"
            :loading="isLoadingShow"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
            @cancel="show1 = false"
            @confirm="confirmPicker"
          />
        </van-popup>
      </van-cell-group>
    </div>

    <div class="toptext">
      <div>
        <van-cell-group>
          <van-field
            label="地区"
            input-align="right"
            :value-class="className"
            v-model="AddressValue"
            readonly
            @click-input="AddressPopup"
            style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
          >
            <template #button>
              <van-icon
                name="arrow"
                style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
              />
            </template>
          </van-field>
          <van-popup v-model="Addressshow" position="bottom">
            <van-area
              title="省市区选择"
              :area-list="areaList"
              @change="onChange"
              @confirm="onConfirm"
              @cancel="onCancel"
            />
          </van-popup>
        </van-cell-group>
      </div>
      <div>
        <van-cell-group>
          <van-field
            placeholder="请输入你的收货地址"
            label="收货地址"
            input-align="right"
            readonly
            :value-class="className"
            v-model="mydataaddress"
            @click="goAddresslist()"
            style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
          >
            <template #button>
              <van-icon
                name="arrow"
                style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
              />
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div>
        <van-cell-group>
          <van-field
            placeholder="请输入你的手机号码"
            label="手机号码"
            input-align="right"
            :value-class="className"
            v-model="mydata.userPhone"
            style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
          >
            <template #button>
              <van-icon
                name="arrow"
                style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
              />
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div>
        <van-cell-group>
          <van-field
            label="服务协议"
            input-align="right"
            readonly
            :value-class="className"
            style="text-align:left;padding-top:20px;padding-bottom:20px;color: #2c3e50;font-size:16px"
          >
            <template #button>
              <van-icon
                name="arrow"
                style="width: 16px;height: 29px;font-size: 20px;line-height: 31px;"
              />
            </template>
          </van-field>
        </van-cell-group>
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
  Field,
  Uploader,
} from "vant";
// 导入相应的请求函数
import areaList from "../../../assets/area/area.js";
import addresslistVue from "../../shoppCart/address/addresslist.vue";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
import moment from "moment";
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
    [Field.name]: Field,
    [Area.name]: Area,
    [Uploader.name]: Uploader,
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
      fuwuxieyi: "",
      imageSrc: "https://img.yzcdn.cn/vant/ipad.jpeg",
      addressSelect: {},
      genderEnum: "",
    };
  },
  methods: {
    // 上传头像
    afterRead(file) {
      console.log("asdfasdf");
      // 此时可以自行将文件上传至服务器
      var that = this;
      var api = GLOBAL.baseURL + "/multiapi/open/upload";
      console.log(file);
      let formData = new FormData();
      formData.append("file", file.file);
      function httpPost(url, data = {}) {
        return new Promise((resolve, reject) => {
          axios.post(url, data).then(
            (res) => {
              resolve(res.data);
            },
            (err) => {
              reject(err);
            }
          );
        });
      }
      httpPost(api, formData)
        .then((res) => {
          console.log(res);
          that.imageSrc = res.data;
          that.mydata.avatarUrl = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //保存信息
    Saveminemessage: function () {
      var that = this;
      if (that.mydata.genderEnumString == "保密") {
        that.genderEnum = 1;
      } else if (that.mydata.genderEnumString == "男性") {
        that.genderEnum = 2;
      } else if (that.mydata.genderEnumString == "女性") {
        that.genderEnum = 3;
      } else {
        that.genderEnum = 4;
      }
      let data = {
        userName: that.mydata.userName,
        nickName: that.mydata.nickName,
        avatarUrl: that.mydata.avatarUrl,
        genderEnum: that.genderEnum,
        birthday: that.mydata.birthday,
        country: "中国",
        province: that.mydata.province,
        city: that.mydata.city,
        county: that.mydata.county,
        address: that.mydataaddress,
      };
      console.log("datadatadatadatadata", data);
      var api = GLOBAL.baseURL + "/multiapi/z292e_user";
      function httpPost(url, data = {}) {
        return new Promise((resolve, reject) => {
          axios.post(url, data).then(
            (res) => {
              resolve(res.data);
            },
            (err) => {
              reject(err);
            }
          );
        });
      }
      httpPost(api, data)
        .then((res) => {
          console.log(res);
          Toast(res.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    AexonConfirm() {
      this.show1 = false;
    },
    AexonChange(picker, index, value) {
      console.log("index", picker);
      let val = picker.getValues();
      console.log(val); //查看打印
      this.mydata.genderEnum = index;
      this.mydata.genderEnumString = val.toString();
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
      this.mydata.province = val[0].name;
      this.mydata.city = val[1].name;
      this.mydata.county = val[2].name;
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
      this.timeValue = `${year}-${month}-${day} ${hour}:${minute}`;
      let tiem = `${year}${month}${day}${hour}${minute}`;
      this.mydata.birthday = moment(tiem).valueOf();
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
      var that = this;
      let data = {
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z291v_user";
      function httpPost(url, data = {}) {
        return new Promise((resolve, reject) => {
          axios.post(url, data).then(
            (res) => {
              resolve(res.data);
            },
            (err) => {
              reject(err);
            }
          );
        });
      }
      httpPost(api, data)
        .then((res) => {
          console.log(res);
          Toast(res.msg);
          that.mydata = res.data;
          that.imageSrc = that.mydata.avatarUrl;
          that.AddressValue =
            that.mydata.country +
            that.mydata.province +
            that.mydata.city +
            that.mydata.county;
          that.timeValue = that.mydata.birthday;
        })
        .catch((err) => {
          console.log(err);
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
    onClickRight: function () {},
  },
  activated() {
    this.loaddata();
  },
  mounted() {
    this.loaddata();
    this.addressSelect = JSON.parse(localStorage.getItem("addressSelect"));
    this.mydataaddress =
      this.addressSelect.province +
      this.addressSelect.city +
      this.addressSelect.county +
      this.addressSelect.address;
    console.log("dadaddada", this.mydataaddress);
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