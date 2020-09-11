<template>
  <div>
    <div>
      <van-nav-bar title="新增地址" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div class="pageview">
      <van-address-edit
        :area-list="areaList"
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-area="onChangeArea"
        show-set-default
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, AddressEdit, NavBar, Toast, Icon, Area } from "vant";
import areaList from "../../../assets/area/area.js";
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
export default {
  name: "ShoppCart",
  components: {
    [Button.name]: Button,
    [AddressEdit.name]: AddressEdit,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [Area.name]: Area,
  },
  data() {
    return {
      cutnumber: 1,
      areaList,
      searchResult: [],
      province: "",
      city: "",
      county: "",
      provinceCode: "",
      cityCode: "",
      countyCode: "",
    };
  },
  methods: {
    onChangeArea: function (values) {
      var that = this;
      console.log("values", values);
      that.province = values[0].name;
      that.city = values[1].name;
      that.county = values[2].name;
      that.provinceCode = values[0].code;
      that.cityCode = values[1].code;
      that.countyCode = values[2].code;
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    onSave(item) {
      let boolDefaultEnum = 1;
      if (item.isDefault == true) {
        boolDefaultEnum = 1;
      } else {
        boolDefaultEnum = 2;
      }
      var that = this;
      let data = {
        province: item.province,
        city: item.city,
        county: item.county,
        provinceCode: that.provinceCode,
        cityCode: that.cityCode,
        countyCode: that.countyCode,
        consignee: item.name,
        phone: item.tel,
        address: item.addressDetail,
        boolDefaultEnum: boolDefaultEnum,
      };
      console.log("save", data);
      var api = GLOBAL.baseURL + "/multiapi/z608c_address";
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
          this.$router.go(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onDelete() {
      Toast("delete");
    },
  },
};
</script>

<style scoped>
.pageview {
  background: #f4f4f4;
  height: 100vh;
}
</style>