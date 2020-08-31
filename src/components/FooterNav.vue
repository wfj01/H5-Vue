<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item name="category" icon="search">标签</van-tabbar-item>
    <van-tabbar-item name="shop-cart" icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "Ceshi",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    HelloWorld: function () {
      console.log("走了吗");
      this.$router.push({ name: "IndexPage" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
