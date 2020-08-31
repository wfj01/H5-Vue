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
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, AddressEdit, NavBar, Toast, Icon } from "vant";
export default {
  name: "ShoppCart",
  components: {
    [Button.name]: Button,
    [AddressEdit.name]: AddressEdit,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cutnumber: 1,
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onClickLeft: function () {
      console.log()
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
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
</style>