// src/api/api.js
import axios from 'axios'

// 允许跨域携带cookie
// axios.defaults.withCredentials = true;
let interfaceadd = 'http://yapi.jeemoo.com/mock/33';

//查询个人信息
export const querymine = () => {
  return axios.request({
    method: 'post',
    url: interfaceadd + '/multiapi/z291v_user',
    data: {
      "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
      "multi-type": "H5"
    },
    header: {
      'Content-Type': 'application/json'
    },
  })
}

//保存个人信息
export const savemine = () => {
  return axios.request({
    method: 'post',
    url: interfaceadd + '/multiapi/z292e_user',
    data: {
      "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
      "multi-type": "H5",
      "userName": "1585708648912",
      "nickName": "这是轮播标题",
      "avatarUrl": "https://dummyimage.com/400x200.png",
      "genderEnum": 2, //<comment>性别:[1=保密=PRIVACY, 2=男性=MALE, 3=女性=FEMALE, 4=中性=NEUTRAL]max=4'</comment>
      "birthday": "2020-08-19",
      "country": "中国",
      "province": "河北省",
      "city": "保定市",
      "address": "中国河北省保定市XXX"
    },
    header: {
      'Content-Type': 'application/json'
    },

  })
}

//查询订单信息-列表
export const selectorderlist = () => {
  return axios.request({
    method: 'post',
    url: interfaceadd + '/multiapi/z292e_user',
    data: {
      "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
      "multi-type": "H5",
      "orderStatusEnum": 1,
      "orderNo": "订单编号",
      "consignee": "收货人",
      "phone": "手机号",
      "shipNo": "快递单号",
      "spuName": "商品名称",
      "pageNum": 1,
      "pageSize": 10
    },
    header: {
      'Content-Type': 'application/json'
    },
  })
}


//查询收藏信息-列表
export const selectshoucanglist = () => {
  return axios.request({
    method: 'post',
    url: interfaceadd + '/multiapi/z310p_relUserSku',
    data: {
      "multi-token": "AT-102-uUCkO2NgITHWJSD16g89C9loMwCVSQqh",
      "multi-type": "H5",
      "typeEnum": this.typeEnum, //<comment>[1=内训直播=INSIDE_RADIO, 2=内训图文=INSIDE_TEXT ,3=商品=SKU,4=直播=RADIO,5=店铺=shop]</comment>
      "pageNum": 1,
      "pageSize": 10
    },
    header: {
      'Content-Type': 'application/json'
    },
  })
}
