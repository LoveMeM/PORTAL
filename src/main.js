// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import store from './store/index'
import axios from 'axios'
import * as filters from './filters'
import 'common/common.css'
Vue.use(VueI18n)
Vue.use(Vuex)

const i18n = new VueI18n({
  locale: "en-us",
  messages: {
    'zh-cn': require('./i18n/zh-cn'),
    'zh-tw': require('./i18n/zh-tw'),
    'en-us': require('./i18n/en-us')
  }
})
Object.keys(filters).forEach(i => Vue.filter(i, filters[i]))
Vue.config.productionTip = false
axios.defaults.baseURL = "http://106.14.186.71:8081"
axios.defaults.headers.post["Content-Type"] = "application/json"
/* eslint-disable no-new */
const app = new Vue({
  router,
  i18n,
  store,
  ...App
}).$mount("#app")
