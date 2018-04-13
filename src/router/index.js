import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from 'store/lazyLoading.js'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: lazyLoading('welcome','welcome')
    }
  ]
})
