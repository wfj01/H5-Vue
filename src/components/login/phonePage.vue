<template>
  <div class="loginPage">
    <div style="text-align: center;">
      <img
        src="../../assets/image/组 458.png"
        alt="1"
        style="width: 90px;height: 100px;margin-top: 200px;"
      />
    </div>
    <div class="middleview">
      <div class="mddleview2">
        <div class="inputstyle">
          <input
            type="text"
            class="inputcolor"
            style="width: 100%;"
            placeholder="请输入您的手机号"
            v-model="tel"
          />
        </div>
        <div class="mybox">
          <input type="text" placeholder="请输入验证码"  v-model="timestamp"/>
          <p class="span1">|</p>
          <span v-show="show" @click="getCode()">获取验证码</span>
          <span v-show="!show" style="background: #DDDDDD;color: #FFFFFF;">重新发送{{count}}s</span>
        </div>
      </div>
      <div class="vxbuttonview">
        <van-button v-if="isShow == false" class="vxbutton">登录</van-button>
        <van-button
          v-if="isShow == true"
          style="background: #FEE333;"
          class="vxbutton"
          @click="goindexPage()"
        >登录</van-button>
      </div>
      <div class="bottomtext">
        温馨提示：未注册珍珪谷账号的手机号，登录时将自动注册，且代表您已同意
        <a href="##">《用户注册协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios'
import GLOBAL from '@/api/global_variable.js'
import axios from 'axios'
import qs from 'qs'
import request from '../../utils/fetch'

import {
  SwipeCell,
  Button,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  NavBar,
  Toast,
  Icon
} from 'vant'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['multi-type'] = 'H5'
export default {
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  name: 'PhonePage',
  data () {
    return {
      msg: '',
      isShow: true,
      time: 60,
      show: true,
      count: '',
      timer: null,
      tel: '',
      timestamp: ''
    }
  },
  methods: {
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.huoquyanzhengma()
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    // 获取验证码
    huoquyanzhengma: function () {
      var that = this
      let data = { phone: this.tel }
      var api = '/multiapi/open/sendMessage'
      function httpPost (url, data = {}) {
        return new Promise((resolve, reject) => {
          request.post(url, data).then(
            (res) => {
              resolve(res.data)
            },
            (err) => {
              reject(err)
            }
          )
        })
      }
      httpPost(api, data)
        .then((res) => {
          console.log(res)
          Toast(res.msg)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 跳转到首页
    goindexPage: function () {
      var that = this
      let data = {
        phone: that.tel,
        code: that.timestamp,
        shopId: '2121'
      }
      var api = '/multiapi/open/phoneLogin'
      function httpPost (url, data = {}) {
        return new Promise((resolve, reject) => {
          request.post(url, data).then(
            (res) => {
              resolve(res.data)
            },
            (err) => {
              reject(err)
            }
          )
        })
      }
      httpPost(api, data)
        .then((res) => {
          console.log(res)
          Toast(res.msg)
          if (res.code == 200) {
            // 获取后台返回的用户令牌 并且存储起来
            localStorage.setItem('token', JSON.stringify(res.data.token))
            this.$router.push({ name: 'Index' })
            // this.$router.replace('/personnel')
          } else {
            this.$message.warning(res.data.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.inputcolor {
  padding: 0px 6px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
.titlename {
  text-align: center;
  letter-spacing: 10px;
  font-size: 26px;
}

.middleview {
  padding: 20px 40px;
  box-sizing: border-box;
}
.mddleview2 {
  width: 100%;
  height: 100%;
}
.textname {
  text-align: left;
  padding: 10px 0px;
}
.inputstyle {
  display: flex;
  height: 38px;
}
.mybox {
  height: 38px;
  position: relative;
  margin-top: 10px;
}

.mybox input {
  width: 100%;
  padding: 3px 5px;
  padding-right: 80px;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  outline: none;
  padding: 0px 6px;
}
.span1 {
  position: absolute;
  display: block;
  height: 40px;
  right: 120px;
  top: 2px;
  line-height: 38px;
  color: #ffe231;
  margin: 0px 5px 0px 10px;
}

.mybox span {
  position: absolute;
  display: block;
  height: 30px;
  right: 2px;
  top: 2px;
  line-height: 32px;
  color: #000;
  margin: 0px 5px 0px 10px;
  background: #ffe231;
  padding: 0px 10px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 14px;
}
.vxbuttonview {
  padding: 15px 0px;
  box-sizing: border-box;
}
.vxbutton {
  letter-spacing: 10px;
  width: 100%;
  background: #dddddd;
  border-radius: 50px;
  font-size: 15px;
  font-weight: bolder;
}

.bottomtext {
  font-size: 13px;
  color: #606060;
  text-align: left;
}
</style>
