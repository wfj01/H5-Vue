<template>
  <div>
    <div>
      <van-nav-bar title="地址列表" fixed>
        <template #left>
          <van-icon name="arrow-left" size="18" color="#000" @click="onClickLeft()" />
        </template>
        <template #right>
          <van-icon name="weapp-nav" size="18" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div style="height:46px"></div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loaddata">
        <div
          style="display: flex;justify-content: flex-start;padding: 12px;box-sizing:border-box"
          v-for="(item,index) in mydata.list"
          :key="index"
          @click="selectClick(index,item)"
        >
          <div class="leftview" @click.stop="xuanzeAddress(index,item)">
            <img :src="item.boolDefaultEnum == 1 ? image2 : image1" class="leftview-icon" alt />
          </div>
          <div style="width:100%">
            <div
              style="display: flex;justify-content: space-between;color: #4D4D4D;font-size: 14px;"
            >
              <div style="font-weight: bold;">收货人：{{item.consignee}}</div>
              <div style="display: flex;justify-content: space-between;line-height:19px">
                <div style="font-weight: bold;">{{item.phone}}</div>
                <van-icon
                  name="arrow"
                  size="16px"
                  color="#000000"
                  style="line-height:19px;margin-left:5px;font-weight: bold;"
                  @click.stop="onEdit(item)"
                />
              </div>
            </div>
            <div
              style="text-align: left;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #999999;/* line-height: 34px; */font-size: 14px;margin-top: 5px; font-size: 12px;"
            >{{item.country}}{{item.province}}{{item.city}}{{item.county}}{{item.address}}</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="middleviewbtn" @click="onAdd()">
      <div class="middleviewbtnbox">新增收货地址</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"; 
import GLOBAL from "@/api/global_variable.js";
import axios from "axios";
import qs from "qs";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["multi-type"] = "H5";
import {
  SwipeCell,
  Button,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  NavBar,
  Toast,
  Icon,
  AddressList,
  List,
  PullRefresh,
} from "vant";
export default {
  name: "Addresslist",
  components: {
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [AddressList.name]: AddressList,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      cutnumber: 1,
      chosenAddressId: "1",
      mydata: {},
      image1: require("../../../assets/weixuanzhong1.png"),
      image2: require("../../../assets/xuanzhong1.png"),
    };
  },
  methods: {
    //选择地址
    selectClick: function (index, item) {
      this.mydata.list.forEach((element) => {
        element.boolDefaultEnum = false;
      });
      this.mydata.list[index].boolDefaultEnum = true;
      localStorage.setItem("addressSelect", JSON.stringify(item));
      this.$router.go(-1);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.loaddata();
    },
    // 选择地址
    xuanzeAddress: function (index, item) {
      this.mydata.list.forEach((element) => {
        element.boolDefaultEnum = false;
      });
      this.mydata.list[index].boolDefaultEnum = true;
      localStorage.setItem("addressSelect", JSON.stringify(item));
      this.$router.go(-1);
    },
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    onAdd() {
      this.$router.push({ name: "Addaddress" });
    },
    onEdit(item) {
      console.log("item",item);
      // localStorage.setItem("addresslist", JSON.stringify(item));
      this.$router.push({
        name: "Editaddress",
        params: { addresslist: JSON.stringify(item) },
      });
    },
   
    //加载数据
    loaddata: function () {
      var that = this;
      let data = {
        pageNum: 1,
        pageSize: 10,
      };
      var api = GLOBAL.baseURL + "/multiapi/z607p_adress";
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
          that.refreshing = false;
          setTimeout(() => {
            if (that.refreshing) {
              that.mydata.list = [];
              that.refreshing = false;
            }
            if (that.mydata.list.length >= that.mydata.size) {
              that.finished = true;
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.loaddata();
  },
  activated() {
    this.loaddata();
  },
};
</script>

<style scoped>
.middleviewbtnbox {
  background: #ffe231;
  width: 100%;
  border-radius: 50px;
  line-height: 35px;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
}
.middleviewbtn {
  justify-content: end;
  padding: 10px 15px;
  box-sizing: border-box;
  display: -webkit-box;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: #ffffff;
  text-align: center;
}
.leftview {
  margin-right: 8px;
}
.leftview-icon {
  width: 20px;
  font-size: 20px;
  /* line-height: 90px; */
  color: #4a90e2;
}
.ceshi {
  font-size: 16px;
}
</style>
