import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from 'store/lazyLoading.js'
import commponentList from '../store/module/menu'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: lazyLoading('Home', 'Home'),
      children: [
        {
          path: "404",
          component: lazyLoading('404')
        },
        ...commponentList
      ]
    },
    {
      path: "/login",
      name: "login",
      component: lazyLoading('login', 'login')
    },
    {
      path: "/register",
      name: "register",
      component: lazyLoading('login', 'register')
    }
  ]
})
