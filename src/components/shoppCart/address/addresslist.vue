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
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        add-button-text="新增收货地址"
        class="ceshi"
      />
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
      Toast("返回");
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
.ceshi {
  font-size: 16px;
}
</style>
