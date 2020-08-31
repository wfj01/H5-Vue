<template>
  <div id="app">
    <router-view />
    <van-tabbar   v-show="$route.meta.showTabbar"  placeholder  route v-model="active"  active-color="#07c160" inactive-color="#000">
    <van-tabbar-item name="friends"  icon="friends-o" to='/Internaltrain'>内训</van-tabbar-item>
    <van-tabbar-item name="home" icon="wap-home-o" to='/Index'>主页</van-tabbar-item>
    <van-tabbar-item name="shopping" icon="shopping-cart-o" to="/ShoppCart">购物车</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o" to="/Mineview">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data(){
    return{
      active:'home'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
