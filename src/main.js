import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import ajax from './assets/js/https';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/fontStyle.css'
import customMenu from '@/assets/js/menu'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(ajax);
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.prototype.$menu=customMenu;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
