<template>
  <div>
    <div>
      <van-nav-bar title="编辑地址" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        :address-info="this.addressinfo"
        show-set-default
        @change-area="onChangeArea"
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
      listinfo: {},
      addressinfo: {
        name: "",
        tel: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        areaCode: "",
        isDefault: "",
      },
      provinceCode: "",
      cityCode: "",
      countyCode: "",
      idtext: "",
    };
  },
  activated() {
    this.onloaddata();
  },
  methods: {
    onChangeArea: function (values) {
      var that = this;
      console.log("values", values);
      that.provinceCode = values[0].code;
      that.cityCode = values[1].code;
      that.countyCode = values[2].code;
    },
    onloaddata() {
      this.listinfo = JSON.parse(this.$route.params.addresslist);
      this.addressinfo.name = this.listinfo.consignee;
      this.addressinfo.tel = this.listinfo.phone;
      this.addressinfo.province = this.listinfo.province;
      this.addressinfo.city = this.listinfo.city;
      this.addressinfo.county = this.listinfo.county;
      this.addressinfo.addressDetail = this.listinfo.address;
      this.addressinfo.areaCode = this.listinfo.countyCode;
      this.idtext = this.listinfo.id;
      if (this.listinfo.boolDefaultEnum == 1) {
        this.addressinfo.isDefault = true;
      } else {
        this.addressinfo.isDefault = false;
      }
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
      this.addressinfo = {
        name: "",
        tel: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        areaCode: "",
        isDefault: "",
      };
    },
    onClickRight: function () {
      Toast("按钮");
    },
    onSave(item) {
      var  that = this;
      let boolDefaultEnum = 1;
      if (item.isDefault == true) {
        boolDefaultEnum = 1;
      } else {
        boolDefaultEnum = 2;
      }
      let data = {
        id: this.idtext,
        consignee: item.name,
        phone: item.tel,
        country: "中国",
        province: item.province,
        city: item.city,
        provinceCode: that.provinceCode,
        cityCode: that.cityCode,
        countyCode: that.countyCode,
        county: item.county,
        address: item.addressDetail,
        boolDefaultEnum: boolDefaultEnum,
      };
      console.log("save", data);
      var api = GLOBAL.baseURL + "/multiapi/z609e_address";
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
  mounted() {
    this.onloaddata();
  },
};
</script>

<style scoped>
</style>