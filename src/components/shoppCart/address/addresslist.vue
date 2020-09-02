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
    <div
      style="display: flex;justify-content: flex-start;padding: 5px 13px;"
      v-for="(item,index) in 3"
      :key="index"
    >
      <div class="leftview">
        <img src="../../../assets/weixuanzhong1.png" class="leftview-icon" alt />
      </div>
      <div>
        <div style="display: flex;justify-content: space-between;color: #4D4D4D;font-size: 14px;">
          <div style="font-weight: bold;">收货人：马少杰</div>
          <div style="display: flex;justify-content: space-between;line-height:19px">
            <div style="font-weight: bold;">18618161816</div>
            <van-icon
              name="arrow"
              size="16px"
              color="#000000"
              style="line-height:19px;margin-left:5px;font-weight: bold;"
            />
          </div>
        </div>
        <div
          style="text-align: left;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #999999;/* line-height: 34px; */font-size: 14px;margin-top: 5px; font-size: 12px;"
        >北京-北京市-通州区临河里路，华业东方玫瑰，D区D2，2单元604</div>
      </div>
    </div>
    <div class="middleviewbtn" @click="onAdd()">
      <div class="middleviewbtnbox">新增收获地址</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
  },
  data() {
    return {
      cutnumber: 1,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.go(-1); // 返回
    },
    onClickRight: function () {
      Toast("按钮");
    },
    onAdd() {
      Toast("新增地址");
      this.$router.push({ name: "Addaddress" });
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
      this.$router.push({ name: "Editaddress" });
    },
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
}
.leftview {
  margin-right: 8px;
  line-height: 66px;
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
