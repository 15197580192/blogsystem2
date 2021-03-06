import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from "../views/FirstPage";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/admin',
      name: 'FirstPageAdmin',
      component: ()=>import('@/views/FirstPageAdmin')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: ()=>import('@/views/LoginPage')
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: ()=>import('@/views/RegisterPage')
    },
    {
      path: '/forget',
      name: 'ForgetPWD',
      component: ()=>import('@/views/ForgetPWD')
    }
  ]
})
