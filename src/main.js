// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
import './assets/fonts/iconfont.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VueResourse from 'vue-resource'

Vue.use(VueResourse)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
require('./utils/adapter')(document, window);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
