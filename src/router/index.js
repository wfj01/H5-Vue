import Vue from 'vue'
import VueRouter from 'vue-router'
import PhonePage from '@/components/login/phonePage'
import ShoppCart from '@/components/shoppCart/index'
import Buynow from '@/components/shoppCart/buynow'
import Addresslist from '@/components/shoppCart/address/addresslist'
import Addaddress from '@/components/shoppCart/address/addaddress'
import Editaddress from '@/components/shoppCart/address/editaddress'
import Mineview from '@/components/mine/index'
import Personaldata from '@/components/mine/personaldata/index'
import Myorder from '@/components/mine/myorder/index'
import Orderdetail from '@/components/mine/myorder/detail'
import Mycollection from '@/components/mine/mycollection/index'
import Internaltrain from '@/components/internaltrain/index'
import Entrystaff from '@/components/entrystaff/index'
import EntrystaffDetail from '@/components/entrystaff/detail'
import Goodinformation from '@/components/goodinformation/index'
import Myopenshop from '@/components/mine/Myopenshop/index'
import Setmealdetail from '@/components/mine/Myopenshop/setmeal'
import ShoppSuccess from '@/components/mine/Myopenshop/shopsuccess'
import Index from '@/components/index/index'
import Livebroadcast from '@/components/livebroadcast/index'
import Commoditysharing from '@/components/commoditySharing/index'
import TrainingVideo from '@/components/trainingVideo/index'
import Classifieddisplay from '@/components/classifieddisplay/index'
import PlayStatus from '@/components/playStatus/index'
import LoginPage from '@/components/login/index'
Vue.use(VueRouter)

const routes = [
  //登录页面
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  //直播状态
  {
    path: '/PlayStatus',
    name: 'PlayStatus',
    component: PlayStatus,
  },
  //分类展示-入职员工
  {
    path: '/Classifieddisplay',
    name: 'Classifieddisplay',
    component: Classifieddisplay,
  },
  //个人中心
  {
    path: '/Mineview',
    name: 'Mineview',
    component: Mineview,
    meta: {
      showTabbar: true
    }
  },
  //个人资料
  {
    path: '/Personaldata',
    name: 'Personaldata',
    component: Personaldata
  },
  //商品分享页
  {
    path: '/Commoditysharing',
    name: 'Commoditysharing',
    component: Commoditysharing
  },
  //主页
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    meta: {
      showTabbar: true
    }
  },
  //培训视频详情页
  {
    path: '/TrainingVideo',
    name: 'TrainingVideo',
    component: TrainingVideo
  },

  //直播间详情
  {
    path: '/Livebroadcast',
    name: 'Livebroadcast',
    component: Livebroadcast

  },
  //入职员工
  {
    path: '/Entrystaff',
    name: 'Entrystaff',
    component: Entrystaff
  },
  //入职员工详情
  {
    path: '/EntrystaffDetail',
    name: 'EntrystaffDetail',
    component: EntrystaffDetail
  },
  // 购物车
  {
    path: '/ShoppCart',
    name: 'ShoppCart',
    component: ShoppCart,
    meta: {
      showTabbar: true
    }
  },

  //我要开店
  {
    path: '/Myopenshop',
    name: 'Myopenshop',
    component: Myopenshop
  },
  //套餐详情
  {
    path: '/Setmealdetail',
    name: 'Setmealdetail',
    component: Setmealdetail
  },
  //开通成功
  {
    path: '/ShoppSuccess',
    name: 'ShoppSuccess',
    component: ShoppSuccess
  },
  //购买详情
  {
    path: '/Buynow',
    name: 'Buynow',
    component: Buynow
  },

  //购买信息
  {
    path: '/Goodinformation',
    name: 'Goodinformation',
    component: Goodinformation
  },



  //我的订单
  {
    path: '/Myorder',
    name: 'Myorder',
    component: Myorder
  },
  //订单详情
  {
    path: '/Orderdetail',
    name: 'Orderdetail',
    component: Orderdetail
  },
  //我的收藏
  {
    path: '/Mycollection',
    name: 'Mycollection',
    component: Mycollection
  },
  //商户内训
  {
    path: '/Internaltrain',
    name: 'Internaltrain',
    component: Internaltrain,
    meta: {
      showTabbar: true
    }
  },

  //手机号注册
  {
    path: '/PhonePage',
    name: 'PhonePage',
    component: PhonePage
  },

  //地址列表
  {
    path: '/Addresslist',
    name: 'Addresslist',
    component: Addresslist
  },
  //编辑地址
  {
    path: '/Editaddress',
    name: 'Editaddress',
    component: Editaddress
  },
  //新增地址
  {
    path: '/Addaddress',
    name: 'Addaddress',
    component: Addaddress
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
